#!/usr/bin/env python3
"""Build a 30-second vertical sample video for Lessons 01-04."""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
WIDTH = 720
HEIGHT = 1280
FPS = 30

OUTPUT_DIR = ROOT / "exports" / "videos"
OUTPUT_VIDEO = OUTPUT_DIR / "Lessons01-04_Hello_Friends_30s_vertical.mp4"
OUTPUT_COVER = OUTPUT_DIR / "Lessons01-04_Hello_Friends_cover.jpg"

EN_FONT = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")
EN_REGULAR_FONT = Path("/System/Library/Fonts/Supplemental/Arial.ttf")
ZH_FONT = Path("/System/Library/Fonts/STHeiti Medium.ttc")

SHOTS = [
    {
        "lesson": 1,
        "panel": 1,
        "lesson_label": "LESSON 01 · HELLO",
        "english": "Hello!",
        "chinese": "你好！",
    },
    {
        "lesson": 1,
        "panel": 2,
        "lesson_label": "LESSON 01 · HELLO",
        "english": "I am Nia.",
        "chinese": "我是妮娅。",
    },
    {
        "lesson": 2,
        "panel": 5,
        "lesson_label": "LESSON 02 · I AM ME",
        "english": "I am me.",
        "chinese": "我就是我。",
    },
    {
        "lesson": 2,
        "panel": 6,
        "lesson_label": "LESSON 02 · I AM ME",
        "english": "I am happy.",
        "chinese": "我很开心。",
    },
    {
        "lesson": 3,
        "panel": 1,
        "lesson_label": "LESSON 03 · CLOUD",
        "english": "Hello, cloud!",
        "chinese": "你好，云朵！",
    },
    {
        "lesson": 3,
        "panel": 6,
        "lesson_label": "LESSON 03 · CLOUD",
        "english": "Bye, cloud.",
        "chinese": "再见，云朵。",
    },
    {
        "lesson": 4,
        "panel": 1,
        "lesson_label": "LESSON 04 · REVIEW",
        "english": "Hello, you!",
        "chinese": "你好呀！",
    },
    {
        "lesson": 4,
        "panel": 8,
        "lesson_label": "LESSON 04 · REVIEW",
        "english": "Bye bye!",
        "chinese": "拜拜！",
    },
]


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size=size)


def image_path(lesson: int, panel: int) -> Path:
    return ROOT / "assets" / "images" / f"lesson{lesson:02d}" / f"panel{panel:02d}.png"


def audio_path(lesson: int, panel: int) -> Path:
    return ROOT / "assets" / "audio" / f"lesson{lesson:02d}" / f"panel{panel:02d}.m4a"


def blurred_background(source: Image.Image) -> Image.Image:
    background = ImageOps.fit(source.convert("RGB"), (WIDTH, HEIGHT), method=Image.Resampling.LANCZOS)
    background = background.filter(ImageFilter.GaussianBlur(34))
    background = ImageEnhance.Color(background).enhance(1.08)
    background = ImageEnhance.Brightness(background).enhance(0.52).convert("RGBA")

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (20, 32, 59, 42))
    background = Image.alpha_composite(background, overlay)

    gradient = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    gradient_draw = ImageDraw.Draw(gradient)
    for y in range(HEIGHT):
        top_alpha = max(0, int(95 * (1 - y / 340))) if y < 340 else 0
        bottom_alpha = max(0, int(155 * ((y - 720) / 560))) if y > 720 else 0
        alpha = max(top_alpha, bottom_alpha)
        if alpha:
            gradient_draw.line((0, y, WIDTH, y), fill=(9, 18, 37, alpha))
    return Image.alpha_composite(background, gradient)


def rounded_card(base: Image.Image, source: Image.Image, box: tuple[int, int, int, int]) -> None:
    x, y, w, h = box

    shadow_mask = Image.new("L", (WIDTH, HEIGHT), 0)
    shadow_draw = ImageDraw.Draw(shadow_mask)
    shadow_draw.rounded_rectangle((x + 4, y + 14, x + w + 4, y + h + 14), radius=28, fill=175)
    shadow_mask = shadow_mask.filter(ImageFilter.GaussianBlur(18))
    shadow_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shadow_layer.putalpha(shadow_mask)
    base.alpha_composite(shadow_layer)

    card = Image.new("RGBA", (w, h), (255, 250, 240, 255))
    fitted = ImageOps.contain(source.convert("RGB"), (w - 18, h - 18), method=Image.Resampling.LANCZOS)
    fx = (w - fitted.width) // 2
    fy = (h - fitted.height) // 2
    card.paste(fitted, (fx, fy))

    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), radius=26, fill=255)
    base.paste(card, (x, y), mask)
    ImageDraw.Draw(base).rounded_rectangle(
        (x, y, x + w - 1, y + h - 1),
        radius=26,
        outline=(255, 244, 216, 235),
        width=4,
    )


def centered_text(draw: ImageDraw.ImageDraw, text: str, y: int, text_font: ImageFont.ImageFont, fill: tuple[int, ...]) -> None:
    bounds = draw.textbbox((0, 0), text, font=text_font)
    width = bounds[2] - bounds[0]
    draw.text(((WIDTH - width) / 2, y), text, font=text_font, fill=fill)


def draw_progress(draw: ImageDraw.ImageDraw, active: int) -> None:
    diameter = 12
    gap = 14
    total = len(SHOTS) * diameter + (len(SHOTS) - 1) * gap
    start_x = (WIDTH - total) // 2
    for index in range(len(SHOTS)):
        x = start_x + index * (diameter + gap)
        color = (255, 211, 92, 255) if index <= active else (255, 255, 255, 92)
        draw.ellipse((x, 1016, x + diameter, 1028), fill=color)


def make_story_slide(shot: dict[str, object], index: int, output: Path) -> None:
    source = Image.open(image_path(int(shot["lesson"]), int(shot["panel"]))).convert("RGB")
    canvas = blurred_background(source)
    draw = ImageDraw.Draw(canvas)

    tag_font = font(EN_FONT, 27)
    tag = str(shot["lesson_label"])
    tag_bounds = draw.textbbox((0, 0), tag, font=tag_font)
    tag_width = tag_bounds[2] - tag_bounds[0]
    draw.rounded_rectangle((42, 72, 42 + tag_width + 36, 124), radius=26, fill=(255, 255, 255, 228))
    draw.text((60, 83), tag, font=tag_font, fill=(37, 53, 82, 255))

    draw.rounded_rectangle((626, 72, 680, 126), radius=27, fill=(255, 210, 78, 242))
    number_font = font(EN_FONT, 25)
    number = str(index + 1)
    number_bounds = draw.textbbox((0, 0), number, font=number_font)
    draw.text((653 - (number_bounds[2] - number_bounds[0]) / 2, 83), number, font=number_font, fill=(47, 58, 83, 255))

    rounded_card(canvas, source, (24, 202, 672, 448))

    subtitle_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    subtitle_draw = ImageDraw.Draw(subtitle_layer)
    subtitle_draw.rounded_rectangle((54, 722, 666, 918), radius=30, fill=(12, 24, 48, 218), outline=(255, 255, 255, 55), width=2)
    centered_text(subtitle_draw, str(shot["english"]), 754, font(EN_FONT, 54), (255, 255, 255, 255))
    centered_text(subtitle_draw, str(shot["chinese"]), 835, font(ZH_FONT, 34), (255, 222, 123, 255))
    canvas = Image.alpha_composite(canvas, subtitle_layer)

    draw = ImageDraw.Draw(canvas)
    draw_progress(draw, index)
    centered_text(draw, "LESSONS 1–4  ·  30-SECOND STORY", 1090, font(EN_REGULAR_FONT, 22), (255, 255, 255, 190))
    centered_text(draw, "听一听  ·  看一看  ·  说一说", 1140, font(ZH_FONT, 25), (255, 255, 255, 215))
    canvas.convert("RGB").save(output, quality=96)


def make_title_slide(output: Path) -> None:
    source = Image.open(image_path(1, 5)).convert("RGB")
    canvas = blurred_background(source)
    draw = ImageDraw.Draw(canvas)

    centered_text(draw, "STAR TOWN ENGLISH", 82, font(EN_FONT, 26), (255, 220, 112, 255))
    centered_text(draw, "Hello, Friends!", 136, font(EN_FONT, 66), (255, 255, 255, 255))
    centered_text(draw, "星星镇英语 · Lesson 1–4", 230, font(ZH_FONT, 33), (255, 233, 160, 255))
    rounded_card(canvas, source, (24, 340, 672, 448))

    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((140, 870, 580, 944), radius=37, fill=(255, 255, 255, 225))
    centered_text(draw, "HELLO  ·  ME  ·  CLOUD  ·  BYE", 892, font(EN_FONT, 25), (38, 53, 80, 255))
    centered_text(draw, "30 秒竖屏绘本样片", 1044, font(ZH_FONT, 30), (255, 255, 255, 232))
    centered_text(draw, "Listen · Look · Say", 1104, font(EN_REGULAR_FONT, 24), (255, 255, 255, 190))
    canvas.convert("RGB").save(output, quality=96)


def make_outro_slide(output: Path) -> None:
    source = Image.open(image_path(4, 8)).convert("RGB")
    canvas = blurred_background(source)
    rounded_card(canvas, source, (24, 140, 672, 448))
    draw = ImageDraw.Draw(canvas)

    centered_text(draw, "Hello!  ·  I am me.  ·  Bye bye!", 690, font(EN_FONT, 43), (255, 255, 255, 255))
    centered_text(draw, "你好  ·  我就是我  ·  拜拜", 768, font(ZH_FONT, 32), (255, 222, 123, 255))
    draw.rounded_rectangle((128, 900, 592, 986), radius=43, fill=(255, 255, 255, 224))
    centered_text(draw, "See you next time!", 923, font(EN_FONT, 31), (38, 53, 80, 255))
    centered_text(draw, "星星镇英语 · LESSONS 1–4", 1085, font(ZH_FONT, 27), (255, 255, 255, 218))
    canvas.convert("RGB").save(output, quality=96)


def build_manifest(build_dir: Path, slide_paths: list[Path]) -> Path:
    segments: list[dict[str, object]] = [{"image": str(slide_paths[0]), "duration": 2.0, "transition": "dissolve"}]
    for index, path in enumerate(slide_paths[1:9]):
        transition = "page" if index in {1, 3, 5} else "dissolve"
        segments.append({"image": str(path), "duration": 3.0, "transition": transition})
    segments.append({"image": str(slide_paths[9]), "duration": 4.0, "transition": "dissolve"})

    audio_cues = []
    for index, shot in enumerate(SHOTS):
        audio_cues.append({
            "path": str(audio_path(int(shot["lesson"]), int(shot["panel"]))),
            "start": 2.38 + index * 3.0,
        })

    audio_cues.extend([
        {"path": str(audio_path(1, 1)), "start": 26.20},
        {"path": str(audio_path(2, 5)), "start": 27.20},
        {"path": str(audio_path(4, 8)), "start": 28.40},
    ])

    manifest = {
        "width": WIDTH,
        "height": HEIGHT,
        "fps": FPS,
        "transitionDuration": 0.38,
        "segments": segments,
        "audioCues": audio_cues,
    }
    manifest_path = build_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    return manifest_path


def main() -> None:
    for path in [EN_FONT, EN_REGULAR_FONT, ZH_FONT]:
        if not path.exists():
            raise FileNotFoundError(f"Required font not found: {path}")

    build_dir = Path(tempfile.gettempdir()) / "childbook-video-lessons01-04"
    if build_dir.exists():
        shutil.rmtree(build_dir)
    slides_dir = build_dir / "slides"
    slides_dir.mkdir(parents=True)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    slide_paths = [slides_dir / "00-title.jpg"]
    make_title_slide(slide_paths[0])
    for index, shot in enumerate(SHOTS, start=1):
        path = slides_dir / f"{index:02d}-lesson{int(shot['lesson']):02d}-panel{int(shot['panel']):02d}.jpg"
        make_story_slide(shot, index - 1, path)
        slide_paths.append(path)
    outro = slides_dir / "09-outro.jpg"
    make_outro_slide(outro)
    slide_paths.append(outro)

    Image.open(slide_paths[0]).convert("RGB").save(OUTPUT_COVER, quality=94)
    manifest_path = build_manifest(build_dir, slide_paths)

    swift_source = ROOT / "05_执行任务" / "render_short_video_avfoundation.swift"
    binary = build_dir / "render-short-video"
    silent_video = build_dir / "silent-video.mp4"
    module_cache = build_dir / "swift-module-cache"
    module_cache.mkdir()

    compile_command = [
        "swiftc",
        "-O",
        "-parse-as-library",
        "-module-cache-path",
        str(module_cache),
        str(swift_source),
        "-o",
        str(binary),
    ]
    env = os.environ.copy()
    env["SWIFT_MODULECACHE_PATH"] = str(module_cache)
    env["CLANG_MODULE_CACHE_PATH"] = str(module_cache)
    subprocess.run(compile_command, check=True, cwd=ROOT, env=env)
    subprocess.run(
        [str(binary), str(manifest_path), str(silent_video), str(OUTPUT_VIDEO)],
        check=True,
        cwd=ROOT,
        env=env,
    )

    print(f"video={OUTPUT_VIDEO}")
    print(f"cover={OUTPUT_COVER}")


if __name__ == "__main__":
    main()
