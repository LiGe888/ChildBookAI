#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Lesson 167-174 resources."""

from __future__ import annotations

import argparse
import importlib.util
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BASE_SCRIPT = ROOT / "05_执行任务" / "generate_lessons_105_120.py"

spec = importlib.util.spec_from_file_location("lesson_generator_base", BASE_SCRIPT)
base = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(base)


SCENES = [
    "{focus}在星星地毯中央",
    "Nia 指向{focus}",
    "Lumo 和{focus}一起做动作",
    "Bobo 观察{focus}",
    "三位角色一起复现核心句",
    "{focus}放回低矮桌或地毯中央",
    "孩子视角看到{focus}",
    "三位角色挥手收束",
]

FEEDBACK = ["物品亮", "Nia 柔光", "Lumo 发光", "Bobo 屏幕亮", "全员柔光", "物品柔光", "物品亮", "全场暖光亮"]


def title_answer(value: str) -> str:
    return " ".join(part.capitalize() for part in value.split())


def make_panels(focus: str, title: str, lines: list[str]) -> list[tuple[str, str, str, str, str]]:
    panels = []
    for idx, line in enumerate(lines):
        scene = SCENES[idx].format(focus=focus)
        point = line.strip(".?!")
        panels.append((scene, line, point, FEEDBACK[idx], f"{title} panel {idx + 1}: {line}"))
    return panels


def make_quizzes(targets: list[str]) -> list[tuple[str, str, list[str]]]:
    distractors = ["Run", "Hot", "Sleep", "Throw", "Sharp", "Moon"]
    return [
        (f"Tap {target}.", title_answer(target), [title_answer(target), distractors[idx * 2], distractors[idx * 2 + 1]])
        for idx, target in enumerate(targets[:3])
    ]


def make_lesson(number, week, title, tab, core, targets, focus, scene, lines, notes, chapter_task):
    return {
        "number": number,
        "week": week,
        "title": title,
        "tab": tab,
        "core": core,
        "targets": targets,
        "listening": f"能听懂 {base.target_text(targets)} 的安全日常场景",
        "speaking": f"能跟读 `{core}` 或其中 1 个目标词",
        "flow": [
            f"Warm-up：{scene}",
            f"Learn：认识 {base.target_text(targets)}。",
            f"Story：Nia、Lumo 和 Bobo 在安全情境中练习 `{core}`。",
            "Tap：点击核心物品或动作。",
            f"Say：孩子跟读 `{core}` 或其中 1 个目标词。",
            "Wrap-up：三位角色用本课核心句温和收束。",
        ],
        "panels": make_panels(focus, title, lines),
        "quizzes": make_quizzes(targets),
        "notes": notes,
        "chapter_task": chapter_task,
        "image_prompt": (
            f"Original 2D children picture book comic panel, preschool English lesson, {scene}, "
            "cute snow princess Nia, golden star-hat light mascot Lumo, round friendly robot Bobo, "
            "large clear objects, warm safe room, simple background, no written words, no copyrighted characters."
        ),
    }


LESSONS = [
    make_lesson(
        167, 42, "Wipe It Dry", "167 Wipe", "Wipe it dry.", ["wipe", "dry", "cloth"],
        "干软布和小水印", "干净干软布和一点小水印放在低矮桌面上",
        ["Wipe it dry.", "I see a cloth.", "Dry cloth.", "Wipe, wipe.", "It is dry.", "Clean cloth.", "Your turn.", "Wipe it dry."],
        ["擦干主题只使用少量常温水和干软布。", "可以做一个轻轻擦的动作说 `wipe`。", "不表现热水、电器进水、清洁剂、打翻滑倒或用力摩擦。"],
        "轻轻擦干",
    ),
    make_lesson(
        168, 42, "Wet and Dry Review", "168 Cloth", "Wet or dry?", ["wet", "dry", "cloth", "clean"],
        "湿软布和干软布", "湿软布、干软布和低矮桌面并排展示",
        ["Wet or dry?", "Wet cloth.", "Dry cloth.", "Clean cloth.", "Wipe it dry.", "Wet, dry, cloth.", "Pick one.", "Wet or dry?"],
        ["复习课只做湿/干指认，不要求孩子触摸湿布。", "孩子可以任选 wet、dry 或 cloth 跟读。", "不表现脏布、清洁剂、热水、电器或卫生风险。"],
        "湿/干软布复习",
    ),
    make_lesson(
        169, 43, "Toy Basket", "169 Basket", "Toy in basket.", ["toy", "basket", "in"],
        "软玩具和低矮篮子", "大号软玩具和低矮篮子放在地毯上",
        ["Toy in basket.", "I see a toy.", "I see a basket.", "Put toy in.", "Good job.", "Toy is in.", "Your turn.", "Toy in basket."],
        ["收纳主题只用大号软玩具和低矮篮子。", "可以把一个大玩具放进篮子说 `in`。", "不表现高处投掷、小零件、责备或速度比赛。"],
        "把玩具放进篮子",
    ),
    make_lesson(
        170, 43, "On the Shelf", "170 Shelf", "Put it on.", ["shelf", "on", "toy"],
        "低矮架子和软玩具", "低矮开放架子旁放着大号软玩具",
        ["Put it on.", "I see a shelf.", "A toy.", "Toy on shelf.", "Put it on.", "Good job.", "Your turn.", "Put it on."],
        ["架子主题只使用低矮开放架，不爬高。", "可以把大玩具放到低处说 `on`。", "不表现攀爬、高处取物、重物或架子倒落。"],
        "把玩具放到低架上",
    ),
    make_lesson(
        171, 43, "Clean Floor", "171 Floor", "Clean the floor.", ["clean", "floor", "spot"],
        "地面小水印和软布", "星星地毯旁有一点小水印和干净软布",
        ["Clean the floor.", "I see a spot.", "Use a cloth.", "Wipe, wipe.", "Clean floor.", "Good job.", "Your turn.", "Clean the floor."],
        ["地面清洁只表现一点常温小水印和软布。", "可以指地面说 `clean`，不要求孩子真正清洁。", "不表现清洁剂、玻璃碎片、电器进水、滑倒或脏污。"],
        "指认并擦小水印",
    ),
    make_lesson(
        172, 43, "Tidy Review", "172 Tidy", "Tidy up.", ["basket", "shelf", "clean", "away"],
        "篮子、低架和软布", "篮子、低矮架子、软玩具和干净软布在活动室里",
        ["Tidy up.", "Toy in basket.", "Toy on shelf.", "Clean the floor.", "Put away.", "Basket, shelf, clean.", "Pick one.", "Tidy up."],
        ["复习课只做温和整理，不把家务做成惩罚。", "孩子可以任选放篮子、放架子或指软布。", "不表现责备、速度比赛、高处收纳、清洁剂或危险垃圾。"],
        "整理物品复习",
    ),
    make_lesson(
        173, 44, "Choose a Card", "173 Choose", "Choose a card.", ["choose", "card", "quiet"],
        "两张无字选择卡", "两张大号无字选择卡放在低矮桌上",
        ["Choose a card.", "I see cards.", "Quiet card.", "Choose one.", "This card.", "Thank you.", "Your turn.", "Choose a card."],
        ["选择主题只用无字大卡，给孩子低压力选择。", "可以让孩子指一张卡说 `choose`。", "不表现文字题、评分、抢答、复杂规则或强迫选择。"],
        "选择一张无字卡",
    ),
    make_lesson(
        174, 44, "Yes or No", "174 Yes No", "Yes or no?", ["yes", "no", "choose"],
        "两张无字选择卡", "两张无字卡片和温和选择手势",
        ["Yes or no?", "Yes.", "No.", "Choose one.", "It is okay.", "Yes or no?", "Your turn.", "Yes or no?"],
        ["Yes/No 主题只做温和表达，不要求固定答案。", "可以用点头或摇头配合 `yes`、`no`。", "不表现纠错压力、输赢、强迫回答或复杂问题。"],
        "练习 yes/no 选择",
    ),
]


def js_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def render_app_block(lesson: dict) -> str:
    folder = base.lesson_folder(lesson["number"])
    panels = ",\n".join(
        f"      [{js_string(line)}, {js_string(alt)}]"
        for _scene, line, _point, _feedback, alt in lesson["panels"]
    )
    quizzes = ",\n".join(
        f"      {{ prompt: {js_string(prompt)}, answer: {js_string(answer)}, options: {json.dumps(options, ensure_ascii=False)} }}"
        for prompt, answer, options in lesson["quizzes"]
    )
    return f"""  {{
    id: "Lesson {lesson['number']}",
    tab: {js_string(lesson["tab"])},
    title: {js_string(lesson["title"])},
    coreSentence: {js_string(lesson["core"])},
    targetWords: {json.dumps(lesson["targets"], ensure_ascii=False)},
    parentNotes: {json.dumps(lesson["notes"], ensure_ascii=False)},
    panels: buildPanels("{folder}", [
{panels}
    ]),
    quizzes: [
{quizzes}
    ]
  }}"""


def update_app_js() -> None:
    text = base.APP_JS.read_text(encoding="utf-8")
    if 'id: "Lesson 167"' in text:
        return
    marker = "\n];\n\nlet lessonIndex"
    blocks = ",\n".join(render_app_block(lesson) for lesson in LESSONS)
    text = text.replace(marker, ",\n" + blocks + marker)
    base.APP_JS.write_text(text, encoding="utf-8")


def update_chapter_list() -> None:
    text = base.CHAPTER_LIST.read_text(encoding="utf-8")
    if "| 42 | 167 | Wipe It Dry |" in text:
        return
    rows = "\n".join(
        f"| {lesson['week']} | {lesson['number']} | {lesson['title']} | `{lesson['core']}` | {base.target_text(lesson['targets'])} | {lesson['chapter_task']} |"
        for lesson in LESSONS
    )
    text = text.rstrip() + "\n" + rows + "\n"
    base.CHAPTER_LIST.write_text(text, encoding="utf-8")


def update_task_list() -> None:
    text = base.TASK_LIST.read_text(encoding="utf-8")
    text = text.replace("## V2.42 第四十二周扩展前 2 课内容", "## V2.42 第四十二周扩展 4 课内容")
    if "- [x] 细化 Lesson 167：Wipe It Dry" not in text:
        text = text.replace(
            "- [x] 细化 Lesson 166：Dry Cloth",
            "- [x] 细化 Lesson 166：Dry Cloth\n- [x] 细化 Lesson 167：Wipe It Dry\n- [x] 细化 Lesson 168：Wet and Dry Review",
        )
        text = text.replace("生成 Lesson 165-166 图片提示词", "生成 Lesson 165-168 图片提示词")
        text = text.replace("生成 Lesson 165-166 音频脚本", "生成 Lesson 165-168 音频脚本")
    if "## V2.43 第四十三周扩展 4 课内容" not in text:
        insert = """## V2.43 第四十三周扩展 4 课内容

- [x] 细化 Lesson 169：Toy Basket
- [x] 细化 Lesson 170：On the Shelf
- [x] 细化 Lesson 171：Clean Floor
- [x] 细化 Lesson 172：Tidy Review
- [x] 生成 Lesson 169-172 图片提示词
- [x] 生成 Lesson 169-172 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 整理物品只使用大号软玩具、低矮篮子、低矮架子和干净软布。
- 不表现责备、速度比赛、高处收纳、清洁剂、危险垃圾或架子倒落。

## V2.44 第四十四周扩展前 2 课内容

- [x] 细化 Lesson 173：Choose a Card
- [x] 细化 Lesson 174：Yes or No
- [x] 生成 Lesson 173-174 图片提示词
- [x] 生成 Lesson 173-174 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 选择表达只使用无字大卡、点头/摇头和低压力选择。
- 不表现文字题、评分、抢答、强迫回答或复杂规则。

"""
        text = text.replace("## V3 图片与音频资产", insert + "## V3 图片与音频资产")
    text = text.replace(
        "- [x] 为 Lesson 1-166 生成每课 8 张分镜图（Lesson 97-166 为本地原型图，可继续替换为 imagegen 终稿）",
        "- [x] 为 Lesson 1-174 生成每课 8 张分镜图（Lesson 97-174 为本地原型图，可继续替换为 imagegen 终稿）",
    )
    if "Lesson 167-174 本地 `.m4a` 音频" not in text:
        text = text.replace(
            "- [x] 用 macOS `say` 生成 Lesson 147-166 本地 `.m4a` 音频",
            "- [x] 用 macOS `say` 生成 Lesson 147-166 本地 `.m4a` 音频\n- [x] 用 macOS `say` 生成 Lesson 167-174 本地 `.m4a` 音频",
        )
    text = text.replace("- [x] 将页面改为支持 Lesson 1-166 切换", "- [x] 将页面改为支持 Lesson 1-174 切换")
    base.TASK_LIST.write_text(text, encoding="utf-8")


def update_readme() -> None:
    text = base.README.read_text(encoding="utf-8")
    text = text.replace("166 个课时清单", "174 个课时清单")
    text = text.replace("Lesson166_Dry_Cloth_完整课时.md", "Lesson174_Yes_or_No_完整课时.md")
    text = text.replace("assets/images/lesson166/panel08.png", "assets/images/lesson174/panel08.png")
    text = text.replace("assets/audio/lesson166/panel08.m4a", "assets/audio/lesson174/panel08.m4a")
    text = text.replace("Lesson 01 到 Lesson 166", "Lesson 01 到 Lesson 174")
    text = text.replace("Lesson 97-166 的图片为本地原型分镜", "Lesson 97-174 的图片为本地原型分镜")
    base.README.write_text(text, encoding="utf-8")


def update_index_cache() -> None:
    path = ROOT / "app" / "static" / "index.html"
    text = path.read_text(encoding="utf-8")
    text = re.sub(r"lesson\d+", "lesson174", text)
    path.write_text(text, encoding="utf-8")


def write_new_documents() -> None:
    for lesson in LESSONS:
        base.md_path(lesson).write_text(base.render_lesson_markdown(lesson), encoding="utf-8")
        base.asset_path(lesson["number"]).write_text(base.render_asset_record(lesson), encoding="utf-8")


def generate_images() -> None:
    for lesson in LESSONS:
        folder = base.IMAGE_DIR / base.lesson_folder(lesson["number"])
        folder.mkdir(parents=True, exist_ok=True)
        for idx, panel in enumerate(lesson["panels"], 1):
            base.draw_panel(lesson, panel, idx - 1, folder / f"panel{idx:02d}.png")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skip-audio", action="store_true")
    parser.add_argument("--overwrite-audio", action="store_true")
    args = parser.parse_args()

    base.LESSONS = LESSONS
    write_new_documents()
    update_chapter_list()
    update_task_list()
    update_readme()
    update_index_cache()
    update_app_js()
    generate_images()
    if not args.skip_audio:
        base.generate_audio(overwrite=args.overwrite_audio)

    print("generated Lesson 167-174 docs/assets/app data")
    print("generated prototype images for Lesson 167-174")
    print("generated audio for Lesson 167-174" if not args.skip_audio else "skipped audio")


if __name__ == "__main__":
    main()
