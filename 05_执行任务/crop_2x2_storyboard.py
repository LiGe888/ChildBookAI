#!/usr/bin/env python3
"""Crop the latest generated 2x2 storyboard sheet into four lesson panels."""

from __future__ import annotations

import argparse
from pathlib import Path
from typing import Iterable

from PIL import Image


DEFAULT_GENERATED_ROOT = Path("/Users/hik/.codex/generated_images")


def latest_png(root: Path) -> Path:
    files = [p for p in root.rglob("*.png") if p.is_file()]
    if not files:
        raise FileNotFoundError(f"No generated PNG found under {root}")
    return max(files, key=lambda p: p.stat().st_mtime)


def whiteness_by_col(img: Image.Image) -> list[float]:
    width, height = img.size
    pix = img.load()
    step = max(1, height // 300)
    scores: list[float] = []
    for x in range(width):
        total = 0
        white = 0
        for y in range(0, height, step):
            r, g, b = pix[x, y]
            total += 1
            if r > 245 and g > 245 and b > 245:
                white += 1
        scores.append(white / total)
    return scores


def whiteness_by_row(img: Image.Image) -> list[float]:
    width, height = img.size
    pix = img.load()
    step = max(1, width // 300)
    scores: list[float] = []
    for y in range(height):
        total = 0
        white = 0
        for x in range(0, width, step):
            r, g, b = pix[x, y]
            total += 1
            if r > 245 and g > 245 and b > 245:
                white += 1
        scores.append(white / total)
    return scores


def center_band(scores: list[float], threshold: float = 0.92) -> tuple[int, int]:
    center = len(scores) // 2
    lo = max(0, center - 140)
    hi = min(len(scores), center + 141)
    candidates = [i for i in range(lo, hi) if scores[i] >= threshold]
    if not candidates:
        return center, center

    groups: list[tuple[int, int]] = []
    start = prev = candidates[0]
    for idx in candidates[1:]:
        if idx == prev + 1:
            prev = idx
        else:
            groups.append((start, prev))
            start = prev = idx
    groups.append((start, prev))

    return min(groups, key=lambda g: abs(((g[0] + g[1]) // 2) - center))


def crop_boxes(width: int, height: int, x_band: tuple[int, int], y_band: tuple[int, int]) -> Iterable[tuple[int, int, int, int]]:
    x0, x1 = x_band
    y0, y1 = y_band
    return (
        (0, 0, x0, y0),
        (x1 + 1, 0, width, y0),
        (0, y1 + 1, x0, height),
        (x1 + 1, y1 + 1, width, height),
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--lesson", required=True, help="Output lesson directory name, for example lesson07")
    parser.add_argument("--start", required=True, type=int, help="First panel number to write, usually 1 or 5")
    parser.add_argument("--source", type=Path, help="Storyboard source image. Defaults to latest generated PNG.")
    parser.add_argument("--generated-root", type=Path, default=DEFAULT_GENERATED_ROOT)
    args = parser.parse_args()

    source = args.source or latest_png(args.generated_root)
    img = Image.open(source).convert("RGB")
    width, height = img.size
    x_band = center_band(whiteness_by_col(img))
    y_band = center_band(whiteness_by_row(img))

    out_dir = Path("assets/images") / args.lesson
    out_dir.mkdir(parents=True, exist_ok=True)

    written: list[Path] = []
    for offset, box in enumerate(crop_boxes(width, height, x_band, y_band)):
        panel_num = args.start + offset
        out_path = out_dir / f"panel{panel_num:02d}.png"
        img.crop(box).save(out_path)
        written.append(out_path)

    print(f"source={source}")
    print(f"size={width}x{height} sep_x={x_band[0]}-{x_band[1]} sep_y={y_band[0]}-{y_band[1]}")
    for path in written:
        print(path)


if __name__ == "__main__":
    main()
