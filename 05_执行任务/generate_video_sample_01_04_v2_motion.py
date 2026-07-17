#!/usr/bin/env python3
"""Create a motion-focused 2.5D version of the Lessons 01-04 sample."""

from __future__ import annotations

import math
import shutil
import subprocess
import tempfile
import wave
from array import array
from functools import lru_cache
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps

from generate_video_sample_01_04 import (
    EN_FONT,
    EN_REGULAR_FONT,
    HEIGHT,
    ROOT,
    SHOTS,
    WIDTH,
    ZH_FONT,
    font as load_font,
    image_path,
)


FPS = 30
SCENE_Y = 104
SCENE_HEIGHT = 742
TRANSITION_SECONDS = 0.28
OUTPUT_DIR = ROOT / "exports" / "videos"
OUTPUT_VIDEO = OUTPUT_DIR / "Lessons01-04_Hello_Friends_30s_motion_v2.mp4"
OUTPUT_COVER = OUTPUT_DIR / "Lessons01-04_Hello_Friends_motion_v2_cover.jpg"
V1_VIDEO = OUTPUT_DIR / "Lessons01-04_Hello_Friends_30s_vertical.mp4"

FFMPEG = Path("/opt/homebrew/bin/ffmpeg")
FFPROBE = Path("/opt/homebrew/bin/ffprobe")

MOTION = [
    {"x0": 0.38, "x1": 0.34, "y0": 0.52, "y1": 0.52, "crop0": 0.95, "crop1": 0.86, "subject": "single", "accent": "wave"},
    {"x0": 0.50, "x1": 0.50, "y0": 0.52, "y1": 0.50, "crop0": 0.91, "crop1": 0.82, "subject": "single", "accent": "glow"},
    {"x0": 0.32, "x1": 0.64, "y0": 0.52, "y1": 0.52, "crop0": 0.96, "crop1": 0.91, "subject": "group", "accent": "mirror"},
    {"x0": 0.50, "x1": 0.50, "y0": 0.53, "y1": 0.48, "crop0": 0.84, "crop1": 0.90, "subject": "single", "accent": "hearts"},
    {"x0": 0.50, "x1": 0.50, "y0": 0.42, "y1": 0.53, "crop0": 0.84, "crop1": 0.98, "subject": "group", "accent": "cloud"},
    {"x0": 0.42, "x1": 0.58, "y0": 0.52, "y1": 0.46, "crop0": 0.96, "crop1": 0.90, "subject": "group", "accent": "trail"},
    {"x0": 0.35, "x1": 0.31, "y0": 0.52, "y1": 0.49, "crop0": 0.92, "crop1": 0.83, "subject": "single", "accent": "wave"},
    {"x0": 0.50, "x1": 0.50, "y0": 0.56, "y1": 0.43, "crop0": 0.89, "crop1": 0.99, "subject": "group", "accent": "night"},
]

STAR_POSITIONS = [
    (72, 162, 0.05),
    (642, 210, 0.22),
    (110, 710, 0.40),
    (610, 680, 0.61),
    (186, 860, 0.78),
    (568, 922, 0.92),
]


@lru_cache(maxsize=32)
def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return load_font(path, size)


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def ease(value: float) -> float:
    value = clamp(value, 0.0, 1.0)
    return 0.5 - 0.5 * math.cos(math.pi * value)


def lerp(start: float, end: float, amount: float) -> float:
    return start + (end - start) * amount


def centered_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    y: float,
    text_font: ImageFont.ImageFont,
    fill: tuple[int, int, int, int],
    stroke_width: int = 0,
    stroke_fill: tuple[int, int, int, int] = (0, 0, 0, 0),
) -> None:
    bounds = draw.textbbox((0, 0), text, font=text_font, stroke_width=stroke_width)
    width = bounds[2] - bounds[0]
    draw.text(
        ((WIDTH - width) / 2, y),
        text,
        font=text_font,
        fill=fill,
        stroke_width=stroke_width,
        stroke_fill=stroke_fill,
    )


def prepare_background(source: Image.Image) -> Image.Image:
    background = ImageOps.fit(source.convert("RGB"), (780, 1380), method=Image.Resampling.LANCZOS)
    background = background.filter(ImageFilter.GaussianBlur(42))
    background = ImageEnhance.Color(background).enhance(1.18)
    background = ImageEnhance.Brightness(background).enhance(0.48).convert("RGBA")
    return Image.alpha_composite(background, Image.new("RGBA", background.size, (13, 25, 48, 58)))


def moving_background(background: Image.Image, local_progress: float, phase: float = 0.0) -> Image.Image:
    x = int(30 + 9 * math.sin(math.pi * (local_progress + phase)))
    y = int(50 + 10 * math.cos(math.pi * (local_progress * 0.7 + phase)))
    return background.crop((x, y, x + WIDTH, y + HEIGHT)).copy()


def camera_scene(source: Image.Image, spec: dict[str, object], local_progress: float) -> Image.Image:
    amount = ease(local_progress)
    source_width, source_height = source.size
    crop_fraction = lerp(float(spec["crop0"]), float(spec["crop1"]), amount)
    crop_height = source_height * crop_fraction
    crop_width = crop_height * (WIDTH / SCENE_HEIGHT)
    crop_width = min(crop_width, source_width)
    crop_height = crop_width * (SCENE_HEIGHT / WIDTH)

    center_x = source_width * lerp(float(spec["x0"]), float(spec["x1"]), amount)
    center_y = source_height * lerp(float(spec["y0"]), float(spec["y1"]), amount)
    left = clamp(center_x - crop_width / 2, 0, source_width - crop_width)
    top = clamp(center_y - crop_height / 2, 0, source_height - crop_height)

    scene = source.crop((int(left), int(top), int(left + crop_width), int(top + crop_height)))
    scene = scene.resize((WIDTH, SCENE_HEIGHT), Image.Resampling.LANCZOS)
    return ImageEnhance.Color(scene).enhance(1.04).convert("RGBA")


@lru_cache(maxsize=8)
def feather_mask(width: int, height: int, radius: int = 34) -> Image.Image:
    mask = Image.new("L", (width, height), 0)
    ImageDraw.Draw(mask).rounded_rectangle((20, 20, width - 21, height - 21), radius=radius, fill=255)
    return mask.filter(ImageFilter.GaussianBlur(18))


def animate_subject(scene: Image.Image, kind: str, local_progress: float, accent: str) -> Image.Image:
    if kind == "single":
        box = (205, 76, 515, 676)
    else:
        box = (58, 142, 662, 692)

    patch = scene.crop(box)
    mask = feather_mask(patch.width, patch.height)
    patch.putalpha(mask)

    wave = math.sin(local_progress * math.pi * 4)
    breath = 1.0 + 0.009 * (0.5 + 0.5 * math.sin(local_progress * math.pi * 2 - math.pi / 2))
    rotation = wave * (0.34 if accent in {"wave", "hearts"} else 0.18)
    new_size = (max(1, int(patch.width * breath)), max(1, int(patch.height * breath)))
    patch = patch.resize(new_size, Image.Resampling.BICUBIC)
    patch = patch.rotate(rotation, resample=Image.Resampling.BICUBIC, expand=True)

    destination = scene.copy()
    center_x = (box[0] + box[2]) // 2
    center_y = (box[1] + box[3]) // 2 + int(3.5 * wave)
    destination.alpha_composite(patch, (center_x - patch.width // 2, center_y - patch.height // 2))
    return destination


def scene_edge_mask() -> Image.Image:
    mask = Image.new("L", (WIDTH, SCENE_HEIGHT), 255)
    pixels = mask.load()
    for y in range(SCENE_HEIGHT):
        alpha = 255
        if y < 62:
            alpha = int(255 * y / 62)
        elif y > SCENE_HEIGHT - 142:
            alpha = int(255 * (SCENE_HEIGHT - y) / 142)
        for x in range(WIDTH):
            pixels[x, y] = max(0, min(255, alpha))
    return mask


SCENE_MASK = scene_edge_mask()


def bottom_gradient() -> Image.Image:
    gradient = Image.new("RGBA", (WIDTH, 440), (0, 0, 0, 0))
    draw = ImageDraw.Draw(gradient)
    for y in range(440):
        draw.line((0, y, WIDTH, y), fill=(7, 15, 31, int(220 * (y / 439) ** 1.7)))
    return gradient


BOTTOM_GRADIENT = bottom_gradient()


def draw_star(draw: ImageDraw.ImageDraw, x: float, y: float, radius: float, fill: tuple[int, int, int, int]) -> None:
    points = []
    for index in range(10):
        angle = -math.pi / 2 + index * math.pi / 5
        size = radius if index % 2 == 0 else radius * 0.42
        points.append((x + size * math.cos(angle), y + size * math.sin(angle)))
    draw.polygon(points, fill=fill)


def draw_heart(draw: ImageDraw.ImageDraw, x: float, y: float, size: float, fill: tuple[int, int, int, int]) -> None:
    draw.ellipse((x - size, y - size * 0.55, x, y + size * 0.45), fill=fill)
    draw.ellipse((x, y - size * 0.55, x + size, y + size * 0.45), fill=fill)
    draw.polygon([(x - size, y), (x + size, y), (x, y + size * 1.35)], fill=fill)


def add_environment_effects(canvas: Image.Image, accent: str, local_progress: float, shot_index: int) -> None:
    effects = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(effects)

    for x, y, phase in STAR_POSITIONS:
        pulse = 0.5 + 0.5 * math.sin((local_progress * 3.2 + phase + shot_index * 0.13) * math.pi * 2)
        alpha = int(45 + pulse * 135)
        radius = 4 + pulse * 3
        draw_star(draw, x, y, radius, (255, 222, 112, alpha))

    if accent == "hearts":
        for index, (x, delay) in enumerate([(222, 0.0), (486, 0.28), (365, 0.58)]):
            progress = (local_progress + delay) % 1.0
            draw_heart(draw, x, 760 - progress * 120, 10 + 3 * math.sin(progress * math.pi), (255, 128, 170, int(175 * (1 - progress))))

    if accent in {"mirror", "glow"}:
        glow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
        glow_draw = ImageDraw.Draw(glow)
        pulse = 0.5 + 0.5 * math.sin(local_progress * math.pi * 4)
        radius = int(72 + pulse * 20)
        glow_draw.ellipse((360 - radius, 410 - radius, 360 + radius, 410 + radius), fill=(255, 213, 83, int(45 + 45 * pulse)))
        glow = glow.filter(ImageFilter.GaussianBlur(28))
        effects = Image.alpha_composite(effects, glow)

    if accent == "cloud":
        cloud_x = int(500 + local_progress * 55)
        cloud_y = int(162 + math.sin(local_progress * math.pi * 2) * 7)
        draw.ellipse((cloud_x - 50, cloud_y - 18, cloud_x + 15, cloud_y + 34), fill=(255, 255, 255, 34))
        draw.ellipse((cloud_x - 18, cloud_y - 46, cloud_x + 54, cloud_y + 30), fill=(255, 255, 255, 34))
        draw.ellipse((cloud_x + 20, cloud_y - 16, cloud_x + 80, cloud_y + 36), fill=(255, 255, 255, 34))

    if accent == "trail":
        for index in range(7):
            x = 540 + index * 25 - local_progress * 70
            y = 240 + index * 17
            draw_star(draw, x, y, 5 + index % 2, (255, 240, 175, max(20, 145 - index * 14)))

    if accent == "night":
        glow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
        glow_draw = ImageDraw.Draw(glow)
        pulse = 0.5 + 0.5 * math.sin(local_progress * math.pi * 2)
        radius = int(95 + pulse * 10)
        glow_draw.ellipse((560 - radius, 190 - radius, 560 + radius, 190 + radius), fill=(255, 238, 172, int(34 + pulse * 28)))
        effects = Image.alpha_composite(effects, glow.filter(ImageFilter.GaussianBlur(34)))

    canvas.alpha_composite(effects)


def subtitle_opacity(local_seconds: float) -> float:
    fade_in = clamp((local_seconds - 0.10) / 0.28, 0.0, 1.0)
    fade_out = clamp((2.84 - local_seconds) / 0.30, 0.0, 1.0)
    return min(fade_in, fade_out)


def draw_story_ui(canvas: Image.Image, shot: dict[str, object], local_seconds: float) -> None:
    overlay = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    label_progress = ease(clamp(local_seconds / 0.36, 0.0, 1.0))
    label_font = font(EN_FONT, 25)
    label = str(shot["lesson_label"])
    bounds = draw.textbbox((0, 0), label, font=label_font)
    label_width = bounds[2] - bounds[0]
    label_x = lerp(-label_width - 80, 30, label_progress)
    draw.rounded_rectangle((label_x, 40, label_x + label_width + 34, 91), radius=25, fill=(255, 255, 255, 222))
    draw.text((label_x + 17, 51), label, font=label_font, fill=(35, 50, 77, 255))
    draw.text((526, 55), "STAR TOWN", font=font(EN_REGULAR_FONT, 18), fill=(255, 255, 255, 180))

    overlay.alpha_composite(BOTTOM_GRADIENT.crop((0, 20, WIDTH, 440)), (0, HEIGHT - 420))

    opacity = subtitle_opacity(local_seconds)
    subtitle_y = 864 + (1 - ease(clamp(local_seconds / 0.35, 0.0, 1.0))) * 18
    centered_text(
        draw,
        str(shot["english"]),
        subtitle_y,
        font(EN_FONT, 55),
        (255, 255, 255, int(255 * opacity)),
        stroke_width=2,
        stroke_fill=(6, 13, 28, int(190 * opacity)),
    )
    centered_text(
        draw,
        str(shot["chinese"]),
        subtitle_y + 79,
        font(ZH_FONT, 34),
        (255, 220, 111, int(255 * opacity)),
        stroke_width=1,
        stroke_fill=(6, 13, 28, int(170 * opacity)),
    )

    canvas.alpha_composite(overlay)


def render_story_frame(prepared: list[dict[str, Image.Image]], shot_index: int, local_seconds: float) -> Image.Image:
    local_progress = clamp(local_seconds / 3.0, 0.0, 1.0)
    spec = MOTION[shot_index]
    source = prepared[shot_index]["source"]
    background = prepared[shot_index]["background"]
    canvas = moving_background(background, local_progress, shot_index * 0.07)

    scene = camera_scene(source, spec, local_progress)
    scene = animate_subject(scene, str(spec["subject"]), local_progress, str(spec["accent"]))
    bob = int(3 * math.sin(local_progress * math.pi * 4))
    canvas.paste(scene, (0, SCENE_Y + bob), SCENE_MASK)
    add_environment_effects(canvas, str(spec["accent"]), local_progress, shot_index)
    draw_story_ui(canvas, SHOTS[shot_index], local_seconds)
    return canvas.convert("RGB")


def render_intro(prepared: list[dict[str, Image.Image]], seconds: float) -> Image.Image:
    progress = clamp(seconds / 2.0, 0.0, 1.0)
    source = prepared[0]["intro_source"]
    background = prepared[0]["intro_background"]
    canvas = moving_background(background, progress)
    intro_spec = {"x0": 0.48, "x1": 0.52, "y0": 0.52, "y1": 0.50, "crop0": 0.98, "crop1": 0.88}
    scene = camera_scene(source, intro_spec, progress)
    canvas.paste(scene, (0, 190), SCENE_MASK)
    add_environment_effects(canvas, "glow", progress, 0)

    overlay = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    opacity = ease(clamp(seconds / 0.55, 0.0, 1.0))
    centered_text(draw, "STAR TOWN ENGLISH", 66, font(EN_FONT, 24), (255, 220, 105, int(255 * opacity)))
    centered_text(draw, "Hello, Friends!", 106, font(EN_FONT, 60), (255, 255, 255, int(255 * opacity)), 2, (8, 17, 34, 180))
    centered_text(draw, "星星镇英语 · Lesson 1–4", 995, font(ZH_FONT, 32), (255, 237, 174, int(255 * opacity)))
    centered_text(draw, "Listen · Look · Say", 1060, font(EN_REGULAR_FONT, 24), (255, 255, 255, int(215 * opacity)))
    canvas.alpha_composite(overlay)
    return canvas.convert("RGB")


def render_outro(prepared: list[dict[str, Image.Image]], seconds: float) -> Image.Image:
    progress = clamp(seconds / 4.0, 0.0, 1.0)
    source = prepared[7]["source"]
    background = prepared[7]["background"]
    canvas = moving_background(background, progress, 0.2)
    outro_spec = {"x0": 0.50, "x1": 0.50, "y0": 0.50, "y1": 0.42, "crop0": 0.98, "crop1": 0.88}
    scene = camera_scene(source, outro_spec, progress)
    canvas.paste(scene, (0, 118), SCENE_MASK)
    add_environment_effects(canvas, "night", progress, 7)

    overlay = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    overlay.alpha_composite(BOTTOM_GRADIENT, (0, HEIGHT - 440))

    phrases = [
        (0.12, "Hello!", "你好"),
        (1.10, "I am me.", "我就是我"),
        (2.28, "Bye bye!", "拜拜"),
    ]
    visible = [phrase for phrase in phrases if seconds >= phrase[0]]
    if visible:
        english = "  ·  ".join(item[1] for item in visible)
        chinese = "  ·  ".join(item[2] for item in visible)
        centered_text(draw, english, 858, font(EN_FONT, 43), (255, 255, 255, 255), 2, (6, 14, 30, 190))
        centered_text(draw, chinese, 931, font(ZH_FONT, 31), (255, 222, 120, 255), 1, (6, 14, 30, 180))
    if seconds >= 3.15:
        fade = ease(clamp((seconds - 3.15) / 0.45, 0.0, 1.0))
        centered_text(draw, "See you next time!", 1060, font(EN_FONT, 28), (255, 255, 255, int(235 * fade)))
        centered_text(draw, "星星镇英语 · LESSONS 1–4", 1116, font(ZH_FONT, 24), (255, 255, 255, int(205 * fade)))
    canvas.alpha_composite(overlay)
    return canvas.convert("RGB")


def prepare_assets() -> list[dict[str, Image.Image]]:
    prepared = []
    for shot in SHOTS:
        source = Image.open(image_path(int(shot["lesson"]), int(shot["panel"]))).convert("RGB")
        prepared.append({"source": source, "background": prepare_background(source)})
    intro_source = Image.open(image_path(1, 5)).convert("RGB")
    prepared[0]["intro_source"] = intro_source
    prepared[0]["intro_background"] = prepare_background(intro_source)
    return prepared


def frame_at_time(prepared: list[dict[str, Image.Image]], seconds: float) -> Image.Image:
    if seconds < 2.0:
        frame = render_intro(prepared, seconds)
        if seconds > 2.0 - TRANSITION_SECONDS:
            mix = ease((seconds - 2.0 + TRANSITION_SECONDS) / TRANSITION_SECONDS)
            frame = Image.blend(frame, render_story_frame(prepared, 0, 0.0), mix)
        return frame

    if seconds < 26.0:
        story_time = seconds - 2.0
        shot_index = min(7, int(story_time // 3.0))
        local_seconds = story_time - shot_index * 3.0
        frame = render_story_frame(prepared, shot_index, local_seconds)
        if local_seconds > 3.0 - TRANSITION_SECONDS:
            mix = ease((local_seconds - 3.0 + TRANSITION_SECONDS) / TRANSITION_SECONDS)
            if shot_index < 7:
                next_frame = render_story_frame(prepared, shot_index + 1, 0.0)
            else:
                next_frame = render_outro(prepared, 0.0)
            frame = Image.blend(frame, next_frame, mix)
        return frame

    return render_outro(prepared, seconds - 26.0)


def write_music_bed(output: Path, duration: float = 30.0, sample_rate: int = 44100) -> None:
    notes = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63, 293.66, 392.00]
    samples = array("h")
    total = int(duration * sample_rate)
    for index in range(total):
        time = index / sample_rate
        pad = 0.026 * math.sin(2 * math.pi * 130.81 * time) + 0.016 * math.sin(2 * math.pi * 196.00 * time)
        beat = int(time // 2.0)
        local = time - beat * 2.0
        envelope = math.exp(-2.8 * local) if local < 1.8 else 0.0
        bell = 0.055 * envelope * math.sin(2 * math.pi * notes[beat % len(notes)] * time)
        bell += 0.022 * envelope * math.sin(2 * math.pi * notes[beat % len(notes)] * 2.01 * time)
        fade = min(1.0, time / 1.2, (duration - time) / 1.3)
        value = int(clamp((pad + bell) * fade, -1.0, 1.0) * 32767)
        samples.append(value)

    with wave.open(str(output), "wb") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        wav.writeframes(samples.tobytes())


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
    command = [
        str(FFMPEG),
        "-hide_banner",
        "-loglevel",
        "error",
        "-y",
        "-i",
        str(silent_video),
        "-i",
        str(V1_VIDEO),
        "-i",
        str(music),
        "-filter_complex",
        "[1:a]volume=1.0[speech];[2:a]volume=0.24[music];[speech][music]amix=inputs=2:duration=longest:normalize=0[audio]",
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
        "title=Hello, Friends! Lessons 1-4 Motion Sample",
        str(OUTPUT_VIDEO),
    ]
    subprocess.run(command, check=True)


def validate() -> None:
    command = [
        str(FFPROBE),
        "-v",
        "error",
        "-show_entries",
        "format=duration,size:stream=codec_name,codec_type,width,height,r_frame_rate,sample_rate,channels",
        "-of",
        "json",
        str(OUTPUT_VIDEO),
    ]
    subprocess.run(command, check=True)


def main() -> None:
    if not FFMPEG.exists() or not FFPROBE.exists():
        raise FileNotFoundError("FFmpeg 8.1.2 is required at /opt/homebrew/bin")
    if not V1_VIDEO.exists():
        raise FileNotFoundError(f"Generate the V1 sample first: {V1_VIDEO}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    build_dir = Path(tempfile.gettempdir()) / "childbook-video-lessons01-04-v2"
    if build_dir.exists():
        shutil.rmtree(build_dir)
    build_dir.mkdir(parents=True)
    silent_video = build_dir / "motion-silent.mp4"
    music = build_dir / "original-music-bed.wav"

    prepared = prepare_assets()
    write_music_bed(music)
    encode_video(prepared, silent_video)
    mix_audio(silent_video, music)
    validate()
    print(f"video={OUTPUT_VIDEO}")
    print(f"cover={OUTPUT_COVER}")


if __name__ == "__main__":
    main()
