#!/usr/bin/env python3
"""Create a 30-second V2-style motion sample for Lessons 05-08."""

from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw

import generate_video_sample_01_04_v2_motion as engine
from generate_video_sample_01_04 import (
    EN_FONT,
    EN_REGULAR_FONT,
    HEIGHT,
    ROOT,
    WIDTH,
    ZH_FONT,
    audio_path,
    image_path,
)


FPS = 30
TRANSITION_SECONDS = 0.28
OUTPUT_DIR = ROOT / "exports" / "videos"
OUTPUT_VIDEO = OUTPUT_DIR / "Lessons05-08_Colors_Shapes_30s_motion_v2.mp4"
OUTPUT_COVER = OUTPUT_DIR / "Lessons05-08_Colors_Shapes_motion_v2_cover.jpg"
FFMPEG = Path("/opt/homebrew/bin/ffmpeg")
FFPROBE = Path("/opt/homebrew/bin/ffprobe")

SHOTS = [
    {
        "lesson": 5,
        "panel": 1,
        "lesson_label": "LESSON 05 · RED",
        "english": "Hello, star!",
        "chinese": "你好，星星！",
    },
    {
        "lesson": 5,
        "panel": 6,
        "lesson_label": "LESSON 05 · RED",
        "english": "Red apple!",
        "chinese": "红苹果！",
    },
    {
        "lesson": 6,
        "panel": 1,
        "lesson_label": "LESSON 06 · BLUE",
        "english": "Hello, boat!",
        "chinese": "你好，小船！",
    },
    {
        "lesson": 6,
        "panel": 5,
        "lesson_label": "LESSON 06 · BLUE",
        "english": "It is blue.",
        "chinese": "它是蓝色的。",
    },
    {
        "lesson": 7,
        "panel": 1,
        "lesson_label": "LESSON 07 · YELLOW",
        "english": "I see yellow.",
        "chinese": "我看见黄色。",
    },
    {
        "lesson": 7,
        "panel": 4,
        "lesson_label": "LESSON 07 · YELLOW",
        "english": "I see yellow.",
        "chinese": "我看见黄色。",
    },
    {
        "lesson": 8,
        "panel": 7,
        "lesson_label": "LESSON 08 · SHAPES",
        "english": "I see a circle.",
        "chinese": "我看见一个圆形。",
    },
    {
        "lesson": 8,
        "panel": 8,
        "lesson_label": "LESSON 08 · SHAPES",
        "english": "Bye bye!",
        "chinese": "拜拜！",
    },
]

# The camera moves slowly and continuously, matching the accepted V2 sample.
# Lesson 07-08 assets are smaller, so their crop values stay close to 1.0.
MOTION = [
    {"x0": 0.36, "x1": 0.64, "y0": 0.53, "y1": 0.52, "crop0": 0.98, "crop1": 0.94, "subject": "group", "accent": "glow"},
    {"x0": 0.44, "x1": 0.56, "y0": 0.53, "y1": 0.50, "crop0": 0.97, "crop1": 0.92, "subject": "group", "accent": "trail"},
    {"x0": 0.35, "x1": 0.61, "y0": 0.53, "y1": 0.52, "crop0": 0.98, "crop1": 0.94, "subject": "group", "accent": "wave"},
    {"x0": 0.48, "x1": 0.52, "y0": 0.53, "y1": 0.50, "crop0": 0.96, "crop1": 0.92, "subject": "group", "accent": "mirror"},
    {"x0": 0.34, "x1": 0.66, "y0": 0.52, "y1": 0.50, "crop0": 1.00, "crop1": 0.97, "subject": "group", "accent": "glow"},
    {"x0": 0.38, "x1": 0.60, "y0": 0.52, "y1": 0.50, "crop0": 1.00, "crop1": 0.97, "subject": "group", "accent": "trail"},
    {"x0": 0.38, "x1": 0.62, "y0": 0.54, "y1": 0.51, "crop0": 1.00, "crop1": 0.98, "subject": "group", "accent": "hearts"},
    {"x0": 0.37, "x1": 0.63, "y0": 0.52, "y1": 0.50, "crop0": 1.00, "crop1": 0.98, "subject": "group", "accent": "glow"},
]

# Reuse the tested V2 renderer with the Lesson 05-08 shot configuration.
engine.SHOTS = SHOTS
engine.MOTION = MOTION


def prepare_assets() -> list[dict[str, Image.Image]]:
    prepared: list[dict[str, Image.Image]] = []
    for shot in SHOTS:
        source = Image.open(image_path(int(shot["lesson"]), int(shot["panel"]))).convert("RGB")
        prepared.append({"source": source, "background": engine.prepare_background(source)})

    intro_source = Image.open(image_path(5, 1)).convert("RGB")
    prepared[0]["intro_source"] = intro_source
    prepared[0]["intro_background"] = engine.prepare_background(intro_source)
    return prepared


def render_intro(prepared: list[dict[str, Image.Image]], seconds: float) -> Image.Image:
    progress = engine.clamp(seconds / 2.0, 0.0, 1.0)
    source = prepared[0]["intro_source"]
    background = prepared[0]["intro_background"]
    canvas = engine.moving_background(background, progress)
    intro_spec = {"x0": 0.46, "x1": 0.54, "y0": 0.53, "y1": 0.51, "crop0": 0.99, "crop1": 0.93}
    scene = engine.camera_scene(source, intro_spec, progress)
    canvas.paste(scene, (0, 190), engine.SCENE_MASK)
    engine.add_environment_effects(canvas, "glow", progress, 0)

    overlay = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    opacity = engine.ease(engine.clamp(seconds / 0.55, 0.0, 1.0))
    engine.centered_text(draw, "STAR TOWN ENGLISH", 66, engine.font(EN_FONT, 24), (255, 220, 105, int(255 * opacity)))
    engine.centered_text(draw, "Colors & Shapes!", 106, engine.font(EN_FONT, 58), (255, 255, 255, int(255 * opacity)), 2, (8, 17, 34, 180))
    engine.centered_text(draw, "星星镇英语 · Lesson 5–8", 995, engine.font(ZH_FONT, 32), (255, 237, 174, int(255 * opacity)))
    engine.centered_text(draw, "RED · BLUE · YELLOW · SHAPES", 1060, engine.font(EN_REGULAR_FONT, 23), (255, 255, 255, int(215 * opacity)))
    canvas.alpha_composite(overlay)
    return canvas.convert("RGB")


def render_outro(prepared: list[dict[str, Image.Image]], seconds: float) -> Image.Image:
    progress = engine.clamp(seconds / 4.0, 0.0, 1.0)
    source = prepared[7]["source"]
    background = prepared[7]["background"]
    canvas = engine.moving_background(background, progress, 0.2)
    outro_spec = {"x0": 0.38, "x1": 0.62, "y0": 0.52, "y1": 0.49, "crop0": 1.00, "crop1": 0.96}
    scene = engine.camera_scene(source, outro_spec, progress)
    canvas.paste(scene, (0, 118), engine.SCENE_MASK)
    engine.add_environment_effects(canvas, "glow", progress, 7)

    overlay = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    overlay.alpha_composite(engine.BOTTOM_GRADIENT, (0, HEIGHT - 440))

    phrases = [
        (0.12, "I see red.", "我看见红色"),
        (1.10, "It is blue.", "它是蓝色的"),
        (2.20, "I see a circle.", "我看见一个圆形"),
    ]
    visible = [phrase for phrase in phrases if seconds >= phrase[0]]
    if visible:
        english = "  ·  ".join(item[1] for item in visible)
        chinese = "  ·  ".join(item[2] for item in visible)
        engine.centered_text(draw, english, 858, engine.font(EN_FONT, 34), (255, 255, 255, 255), 2, (6, 14, 30, 190))
        engine.centered_text(draw, chinese, 927, engine.font(ZH_FONT, 27), (255, 222, 120, 255), 1, (6, 14, 30, 180))
    if seconds >= 3.15:
        fade = engine.ease(engine.clamp((seconds - 3.15) / 0.45, 0.0, 1.0))
        engine.centered_text(draw, "See you next time!", 1060, engine.font(EN_FONT, 28), (255, 255, 255, int(235 * fade)))
        engine.centered_text(draw, "星星镇英语 · LESSONS 5–8", 1116, engine.font(ZH_FONT, 24), (255, 255, 255, int(205 * fade)))
    canvas.alpha_composite(overlay)
    return canvas.convert("RGB")


def frame_at_time(prepared: list[dict[str, Image.Image]], seconds: float) -> Image.Image:
    if seconds < 2.0:
        frame = render_intro(prepared, seconds)
        if seconds > 2.0 - TRANSITION_SECONDS:
            mix = engine.ease((seconds - 2.0 + TRANSITION_SECONDS) / TRANSITION_SECONDS)
            frame = Image.blend(frame, engine.render_story_frame(prepared, 0, 0.0), mix)
        return frame

    if seconds < 26.0:
        story_time = seconds - 2.0
        shot_index = min(7, int(story_time // 3.0))
        local_seconds = story_time - shot_index * 3.0
        frame = engine.render_story_frame(prepared, shot_index, local_seconds)
        if local_seconds > 3.0 - TRANSITION_SECONDS:
            mix = engine.ease((local_seconds - 3.0 + TRANSITION_SECONDS) / TRANSITION_SECONDS)
            next_frame = (
                engine.render_story_frame(prepared, shot_index + 1, 0.0)
                if shot_index < 7
                else render_outro(prepared, 0.0)
            )
            frame = Image.blend(frame, next_frame, mix)
        return frame

    return render_outro(prepared, seconds - 26.0)


def encode_video(prepared: list[dict[str, Image.Image]], silent_output: Path) -> None:
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
            frame = frame_at_time(prepared, seconds)
            if frame_index == 24:
                frame.save(OUTPUT_COVER, quality=94)
            process.stdin.write(frame.tobytes())
            if frame_index % 90 == 0:
                print(f"rendered={seconds:.1f}s", flush=True)
    finally:
        process.stdin.close()
    return_code = process.wait()
    if return_code != 0:
        raise subprocess.CalledProcessError(return_code, command)


def mix_audio(silent_video: Path, music: Path) -> None:
    cues = [
        *[(audio_path(int(shot["lesson"]), int(shot["panel"])), 2.38 + index * 3.0) for index, shot in enumerate(SHOTS)],
        (audio_path(5, 2), 26.16),
        (audio_path(6, 5), 27.18),
        (audio_path(8, 7), 28.28),
    ]

    command = [str(FFMPEG), "-hide_banner", "-loglevel", "error", "-y", "-i", str(silent_video)]
    for path, _ in cues:
        command.extend(["-i", str(path)])
    music_input = len(cues) + 1
    command.extend(["-i", str(music)])

    filters: list[str] = []
    narration_labels: list[str] = []
    for input_index, (_, start) in enumerate(cues, start=1):
        label = f"voice{input_index}"
        delay = round(start * 1000)
        filters.append(f"[{input_index}:a]aresample=44100,adelay={delay}:all=1,volume=1.0[{label}]")
        narration_labels.append(f"[{label}]")
    filters.append(f"[{music_input}:a]volume=0.24[music]")
    filters.append(
        "".join(narration_labels)
        + f"[music]amix=inputs={len(narration_labels) + 1}:duration=longest:normalize=0[audio]"
    )

    command.extend(
        [
            "-filter_complex",
            ";".join(filters),
            "-map",
            "0:v:0",
            "-map",
            "[audio]",
            "-c:v",
            "copy",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-ar",
            "44100",
            "-t",
            "30",
            "-movflags",
            "+faststart",
            "-metadata",
            "title=Colors & Shapes! Lessons 5-8 Motion Sample",
            str(OUTPUT_VIDEO),
        ]
    )
    subprocess.run(command, check=True)


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
    if not FFMPEG.exists() or not FFPROBE.exists():
        raise FileNotFoundError("FFmpeg 8.1.2 is required at /opt/homebrew/bin")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    build_dir = Path(tempfile.gettempdir()) / "childbook-video-lessons05-08-v2"
    if build_dir.exists():
        shutil.rmtree(build_dir)
    build_dir.mkdir(parents=True)
    silent_video = build_dir / "motion-silent.mp4"
    music = build_dir / "original-music-bed.wav"

    prepared = prepare_assets()
    engine.write_music_bed(music)
    encode_video(prepared, silent_video)
    mix_audio(silent_video, music)
    validate()
    print(f"video={OUTPUT_VIDEO}")
    print(f"cover={OUTPUT_COVER}")


if __name__ == "__main__":
    main()
