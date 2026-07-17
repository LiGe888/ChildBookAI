#!/usr/bin/env python3
"""Add focused puppet-style head, mouth, hand, and walking motion to V2."""

from __future__ import annotations

import math
import shutil
import subprocess
import tempfile
from functools import lru_cache
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

from generate_video_sample_01_04 import HEIGHT, ROOT, WIDTH
from generate_video_sample_01_04_v2_motion import (
    FFMPEG,
    FFPROBE,
    FPS,
    OUTPUT_DIR,
    frame_at_time,
    prepare_assets,
)


V2_VIDEO = OUTPUT_DIR / "Lessons01-04_Hello_Friends_30s_motion_v2.mp4"
OUTPUT_VIDEO = OUTPUT_DIR / "Lessons01-04_Hello_Friends_30s_actions_v3.mp4"
OUTPUT_COVER = OUTPUT_DIR / "Lessons01-04_Hello_Friends_actions_v3_cover.jpg"


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def ease(value: float) -> float:
    value = clamp(value, 0.0, 1.0)
    return 0.5 - 0.5 * math.cos(math.pi * value)


@lru_cache(maxsize=16)
def rounded_mask(width: int, height: int, feather: int = 18) -> Image.Image:
    mask = Image.new("L", (width, height), 0)
    ImageDraw.Draw(mask).rounded_rectangle((18, 18, width - 19, height - 19), radius=58, fill=255)
    return mask.filter(ImageFilter.GaussianBlur(feather))


def transformed_patch(
    frame: Image.Image,
    box: tuple[int, int, int, int],
    *,
    scale: float = 1.0,
    rotation: float = 0.0,
    dx: int = 0,
    dy: int = 0,
    squash_x: float = 1.0,
    pivot: tuple[int, int] | None = None,
) -> Image.Image:
    base = frame.convert("RGBA")
    patch = base.crop(box)
    patch.putalpha(rounded_mask(patch.width, patch.height))

    width = max(1, int(patch.width * scale * squash_x))
    height = max(1, int(patch.height * scale))
    patch = patch.resize((width, height), Image.Resampling.BICUBIC)
    if pivot is None:
        patch = patch.rotate(rotation, resample=Image.Resampling.BICUBIC, expand=True)
    else:
        pivot_scaled = (int(pivot[0] * scale * squash_x), int(pivot[1] * scale))
        patch = patch.rotate(rotation, resample=Image.Resampling.BICUBIC, expand=False, center=pivot_scaled)

    center_x = (box[0] + box[2]) // 2 + dx
    center_y = (box[1] + box[3]) // 2 + dy
    base.alpha_composite(patch, (center_x - patch.width // 2, center_y - patch.height // 2))
    return base.convert("RGB")


def animate_mouth(frame: Image.Image, openness: float, center: tuple[int, int]) -> Image.Image:
    """Open the existing illustrated mouth without synthesizing replacement pixels."""
    openness = clamp(openness, 1.0, 1.14)
    if openness <= 1.002:
        return frame

    cx, cy = center
    patch_width, patch_height = 116, 84
    source = frame.crop(
        (
            cx - patch_width // 2,
            cy - patch_height // 2,
            cx + patch_width // 2,
            cy + patch_height // 2,
        )
    )
    stretched_height = round(patch_height * openness)
    source = source.resize((patch_width, stretched_height), Image.Resampling.BICUBIC).convert("RGBA")

    mask = Image.new("L", source.size, 0)
    ImageDraw.Draw(mask).ellipse((5, 3, patch_width - 6, stretched_height - 4), fill=246)
    source.putalpha(mask.filter(ImageFilter.GaussianBlur(7)))

    result = frame.convert("RGBA")
    result.alpha_composite(source, (cx - patch_width // 2, cy - stretched_height // 2))
    return result.convert("RGB")


def animate_step_forward(frame: Image.Image, local_seconds: float) -> Image.Image:
    progress = ease(local_seconds / 3.0)
    step_wave = math.sin(local_seconds * math.pi * 2.15)
    scale = 1.008 + progress * 0.052
    return transformed_patch(
        frame,
        (150, 118, 570, 760),
        scale=scale,
        rotation=0.48 * step_wave,
        dx=int(progress * 8),
        dy=int(-progress * 10 + abs(step_wave) * 7),
    )


def animate_head_and_mouth(frame: Image.Image, local_seconds: float) -> Image.Image:
    turn = math.sin(clamp(local_seconds / 3.0, 0.0, 1.0) * math.pi * 2 - math.pi / 2)
    result = transformed_patch(
        frame,
        (105, 96, 620, 682),
        scale=1.016,
        rotation=turn * 1.05,
        dx=int(turn * 13),
        dy=int(2 * math.sin(local_seconds * math.pi * 2)),
        squash_x=1.0 - abs(turn) * 0.032,
    )

    speech_start = 0.34
    speech_end = 1.40
    if speech_start <= local_seconds <= speech_end:
        openness = 1.0 + 0.14 * (0.5 + 0.5 * math.sin((local_seconds - speech_start) * math.pi * 7.2))
    else:
        openness = 1.0
    return animate_mouth(result, openness, (395 + int(turn * 9), 432))


def animate_wave_and_speech(frame: Image.Image, local_seconds: float) -> Image.Image:
    wave = math.sin(local_seconds * math.pi * 3.0)
    result = transformed_patch(
        frame,
        (94, 314, 306, 602),
        scale=1.018,
        rotation=wave * 4.2,
        dx=int(wave * 3),
        dy=int(-abs(wave) * 3),
        pivot=(145, 230),
    )

    speech_start = 0.34
    speech_end = 1.55
    if speech_start <= local_seconds <= speech_end:
        openness = 1.0 + 0.14 * (0.5 + 0.5 * math.sin((local_seconds - speech_start) * math.pi * 7.6))
    else:
        openness = 1.0
    result = animate_mouth(result, openness, (385, 465))
    return result


def animate_group_wave(frame: Image.Image, local_seconds: float) -> Image.Image:
    wave = math.sin(local_seconds * math.pi * 2.2)
    result = transformed_patch(
        frame,
        (36, 310, 688, 772),
        scale=1.008 + 0.006 * (0.5 + 0.5 * wave),
        rotation=wave * 0.26,
        dy=int(wave * 4),
    )
    return result


def action_frame(prepared: list[dict[str, Image.Image]], seconds: float) -> Image.Image:
    frame = frame_at_time(prepared, seconds)
    if 2.0 <= seconds < 5.0:
        return animate_step_forward(frame, seconds - 2.0)
    if 5.0 <= seconds < 8.0:
        return animate_head_and_mouth(frame, seconds - 5.0)
    if 20.0 <= seconds < 23.0:
        return animate_wave_and_speech(frame, seconds - 20.0)
    if 23.0 <= seconds < 26.0:
        return animate_group_wave(frame, seconds - 23.0)
    return frame


def encode(prepared: list[dict[str, Image.Image]], silent_output: Path) -> None:
    command = [
        str(FFMPEG),
        "-hide_banner",
        "-loglevel",
        "error",
        "-y",
        "-f",
        "rawvideo",
        "-pix_fmt",
        "rgb24",
        "-s:v",
        f"{WIDTH}x{HEIGHT}",
        "-r",
        str(FPS),
        "-i",
        "-",
        "-an",
        "-c:v",
        "libx264",
        "-preset",
        "fast",
        "-crf",
        "18",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        str(silent_output),
    ]
    process = subprocess.Popen(command, stdin=subprocess.PIPE)
    assert process.stdin is not None
    try:
        for frame_index in range(30 * FPS):
            seconds = frame_index / FPS
            frame = action_frame(prepared, seconds)
            if frame_index == 105:
                frame.save(OUTPUT_COVER, quality=94)
            process.stdin.write(frame.tobytes())
            if frame_index % 90 == 0:
                print(f"rendered={seconds:.1f}s", flush=True)
    finally:
        process.stdin.close()
    return_code = process.wait()
    if return_code != 0:
        raise subprocess.CalledProcessError(return_code, command)


def mux_audio(silent_video: Path) -> None:
    subprocess.run(
        [
            str(FFMPEG),
            "-hide_banner",
            "-loglevel",
            "error",
            "-y",
            "-i",
            str(silent_video),
            "-i",
            str(V2_VIDEO),
            "-map",
            "0:v:0",
            "-map",
            "1:a:0",
            "-c:v",
            "copy",
            "-c:a",
            "copy",
            "-t",
            "30",
            "-movflags",
            "+faststart",
            "-metadata",
            "title=Hello, Friends! Puppet Action Test",
            str(OUTPUT_VIDEO),
        ],
        check=True,
    )


def validate() -> None:
    subprocess.run(
        [
            str(FFPROBE),
            "-v",
            "error",
            "-show_entries",
            "format=duration,size:stream=codec_name,codec_type,width,height,r_frame_rate,sample_rate,channels",
            "-of",
            "json",
            str(OUTPUT_VIDEO),
        ],
        check=True,
    )


def main() -> None:
    if not V2_VIDEO.exists():
        raise FileNotFoundError(f"Generate V2 first: {V2_VIDEO}")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    build_dir = Path(tempfile.gettempdir()) / "childbook-video-lessons01-04-v3"
    if build_dir.exists():
        shutil.rmtree(build_dir)
    build_dir.mkdir(parents=True)
    silent_video = build_dir / "actions-silent.mp4"

    prepared = prepare_assets()
    encode(prepared, silent_video)
    mux_audio(silent_video)
    validate()
    print(f"video={OUTPUT_VIDEO}")
    print(f"cover={OUTPUT_COVER}")


if __name__ == "__main__":
    main()
