#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Lesson 147-166 resources."""

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
        alt = f"{title} panel {idx + 1}: {line}"
        panels.append((scene, line, point, FEEDBACK[idx], alt))
    return panels


def make_quizzes(targets: list[str]) -> list[tuple[str, str, list[str]]]:
    distractors = ["Run", "Hot", "Sleep", "Throw", "Sharp", "Moon"]
    quizzes = []
    for idx, target in enumerate(targets[:3]):
        answer = title_answer(target)
        options = [answer, distractors[idx * 2], distractors[idx * 2 + 1]]
        quizzes.append((f"Tap {target}.", answer, options))
    return quizzes


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
    make_lesson(147, 37, "Close the Bag", "147 Close", "Close the bag.", ["close", "bag", "ready"], "轻软小包", "轻软小包和大号软玩具放在星星地毯上", ["Close the bag.", "Open the bag.", "Pack a toy.", "Close the bag.", "Ready.", "Bag is ready.", "Your turn.", "Close the bag."], ["收纳动作只表现轻轻打开和合上软包。", "可以把大玩具放进包里再轻轻合上。", "不表现拉链夹手、勒绳、塑料袋套头或重物。"], "轻轻合上小包"),
    make_lesson(148, 37, "Bag Review", "148 Bag Review", "Ready to go.", ["bag", "toy", "ready", "go"], "小包和软玩具", "小包、软玩具和门口地垫在室内准备区", ["Ready to go.", "I have a bag.", "Pack a toy.", "Close the bag.", "Carry the bag.", "Bag, toy, ready.", "Pick one.", "Ready to go."], ["复习课只表现室内准备，不进入真实道路。", "孩子可以任选 bag、toy 或 ready 跟读。", "不表现陌生环境、交通、重包或奔跑出门。"], "外出收纳复习"),
    make_lesson(149, 38, "At the Door", "149 Door", "At the door.", ["door", "mat", "wait"], "门和门垫", "室内门口有宽门垫和温暖灯光", ["At the door.", "I see the door.", "Stand here.", "Door mat.", "Wait, please.", "Open the door.", "Your turn.", "At the door."], ["门口主题只表现室内门和门垫，不表现独自外出。", "可以指门或门垫说 `door`、`mat`。", "不表现夹手、跑出门、陌生人门外或真实道路。"], "点击门垫"),
    make_lesson(150, 38, "Take the Map", "150 Map", "Take the map.", ["take", "map", "look"], "无字地图卡", "一张大号无字地图卡放在低矮桌上", ["Take the map.", "I see a map.", "Look at the map.", "Take the map.", "Map here.", "Thank you.", "Your turn.", "Take the map."], ["地图主题使用无字图形卡，不表现真实定位信息。", "可以拿一张无字卡片说 `map`。", "不表现隐私地址、复杂文字、真实街道或迷路焦虑。"], "拿无字地图卡"),
    make_lesson(151, 38, "Wave Goodbye", "151 Wave", "Bye, home.", ["bye", "wave", "home"], "门口和小家图标", "门口准备区有温暖小家图标和门垫", ["Bye, home.", "I wave goodbye.", "Bye, Nia.", "Bye, Bobo.", "Wave, wave.", "Goodbye.", "Your turn.", "Bye, home."], ["告别主题只做温和挥手，不表现分离焦虑。", "可以对房间或玩偶挥手说 `bye`。", "不表现哭闹、独自离家、陌生环境或赶时间。"], "挥手说再见"),
    make_lesson(152, 38, "Going Out Review", "152 Go Review", "Ready to go.", ["door", "map", "wave", "ready"], "门、地图和小包", "门口准备区放着小包、无字地图卡和门垫", ["Ready to go.", "At the door.", "Take the map.", "Wave goodbye.", "Carry the bag.", "Door, map, wave.", "Pick one.", "Ready to go."], ["复习课只表现室内准备流程。", "孩子可以任选 door、map 或 wave 做动作。", "不表现真实交通、独自出门、拥挤或陌生人。"], "门口准备复习"),
    make_lesson(153, 39, "Make a Card", "153 Card", "Make a card.", ["make", "card", "star"], "无字星星卡片", "大号无字星星卡片放在地毯上", ["Make a card.", "I see a card.", "A star card.", "Make a card.", "Good job.", "Card here.", "Your turn.", "Make a card."], ["卡片主题使用预制无字大卡，不表现剪刀或胶水。", "可以拿一张无字卡说 `card`。", "不表现可读文字、剪刀、胶水、订书钉或小纸片入口。"], "做无字星星卡"),
    make_lesson(154, 39, "Give a Card", "154 Give Card", "Give a card.", ["give", "card", "friend"], "无字星星卡片", "Nia 拿着无字星星卡片递给朋友", ["Give a card.", "A card for you.", "Here you are.", "Thank you.", "A kind friend.", "Give a card.", "Your turn.", "Give a card."], ["递卡片只表现温和分享，不表现礼物攀比。", "可以把无字卡递给玩偶说 `Here you are.`", "不表现商业礼物、可读文字、强迫分享或争抢。"], "递给朋友卡片"),
    make_lesson(155, 39, "Smile Together", "155 Smile", "Smile together.", ["smile", "friend", "together"], "朋友和星星卡片", "三位角色围着星星卡片微笑", ["Smile together.", "I see a smile.", "A friend smiles.", "Smile, Bobo.", "Together.", "Good job.", "Your turn.", "Smile together."], ["微笑主题只表现温和表情，不要求孩子必须开心。", "可以对玩偶微笑或说 `smile`。", "不表现强迫表情、嘲笑、输赢或强烈情绪。"], "朋友一起微笑"),
    make_lesson(156, 39, "Friend Day Review", "156 Friend", "Friend day.", ["make", "give", "smile", "friend"], "卡片和朋友", "星星卡片、朋友和温暖地毯场景", ["Friend day.", "Make a card.", "Give a card.", "Smile together.", "Thank you, friend.", "Make, give, smile.", "Pick one.", "Friend day."], ["复习课只表现做卡、递卡和微笑。", "孩子可以任选 make、give 或 smile 跟读。", "不表现文字卡片、竞争礼物、争抢或强迫社交。"], "朋友日复习"),
    make_lesson(157, 40, "Fold a Shirt", "157 Fold", "Fold a shirt.", ["fold", "shirt", "neat"], "柔软小衬衫", "柔软小衬衫放在低矮桌上", ["Fold a shirt.", "I see a shirt.", "Fold, fold.", "Neat shirt.", "Good job.", "Shirt here.", "Your turn.", "Fold a shirt."], ["衣物整理只表现柔软衣物和简单对折。", "可以折一件小衣服说 `fold`。", "不表现熨斗、尖锐衣架、隐私换衣或责备。"], "折柔软小衬衫"),
    make_lesson(158, 40, "Put in Basket", "158 Basket", "Put it in.", ["put in", "basket", "clothes"], "衣物篮", "低矮衣物篮和柔软衣物放在地毯上", ["Put it in.", "I see a basket.", "Clothes in.", "Put it in.", "Thank you.", "Basket here.", "Your turn.", "Put it in."], ["衣物篮主题只用低矮篮子和柔软衣物。", "可以把衣服放进篮子说 `in`。", "不表现高处投掷、重篮子、夹手或清洁剂。"], "把衣物放进篮子"),
    make_lesson(159, 40, "Match Socks", "159 Socks", "Match socks.", ["match", "socks", "pair"], "一双袜子", "两只大号袜子放在星星地毯上", ["Match socks.", "I see socks.", "One sock.", "Two socks.", "A pair.", "Match socks.", "Your turn.", "Match socks."], ["袜子配对只用大号干净袜子，不做速度比赛。", "可以把两只袜子放一起说 `pair`。", "不表现脏衣物、责备、细小夹子或奔跑。"], "配对袜子"),
    make_lesson(160, 40, "Laundry Review", "160 Laundry", "Clothes away.", ["fold", "basket", "socks", "away"], "衣物、篮子和袜子", "柔软衣物、低矮篮子和一双袜子在地毯上", ["Clothes away.", "Fold a shirt.", "Put it in.", "Match socks.", "Good job.", "Fold, basket, socks.", "Pick one.", "Clothes away."], ["复习课只表现轻量衣物整理。", "孩子可以任选折衣、放篮子或配袜子。", "不表现清洁剂、电器、高处收纳或责备。"], "衣物整理复习"),
    make_lesson(161, 41, "First Card", "161 First", "First card.", ["first", "card", "start"], "第一张故事卡", "三张无字故事卡放在低矮桌上", ["First card.", "I see a card.", "Start here.", "First card.", "Look at it.", "Card here.", "Your turn.", "First card."], ["顺序主题只用无字故事卡，不做阅读测试。", "可以指第一张卡说 `first`。", "不表现文字、复杂规则、输赢或压力测验。"], "点击第一张卡"),
    make_lesson(162, 41, "Next Card", "162 Next", "Next card.", ["next", "card", "turn"], "下一张故事卡", "无字故事卡从左到右摆放", ["Next card.", "First card.", "Next card.", "Turn the card.", "Look again.", "Card here.", "Your turn.", "Next card."], ["下一张卡只做顺序感知，不要求讲完整故事。", "可以指第二张卡说 `next`。", "不表现可读文字、复杂剧情、计时或抢答。"], "点击下一张卡"),
    make_lesson(163, 41, "Last Card", "163 Last", "Last card.", ["last", "card", "end"], "最后一张故事卡", "三张无字故事卡整齐摆放在桌上", ["Last card.", "First card.", "Next card.", "Last card.", "The end.", "Good job.", "Your turn.", "Last card."], ["最后一张卡用于温和收束，不讲复杂剧情。", "可以指最后一张卡说 `last`。", "不表现文字、输赢、恐怖结尾或压力测验。"], "点击最后一张卡"),
    make_lesson(164, 41, "Story Cards Review", "164 Story", "Tell a story.", ["first", "next", "last", "story"], "三张无字故事卡", "第一张、下一张、最后一张无字故事卡并排", ["Tell a story.", "First card.", "Next card.", "Last card.", "The end.", "First, next, last.", "Pick one.", "Tell a story."], ["复习课只做无字图片排序，不要求孩子长句表达。", "孩子可以任选 first、next 或 last 跟读。", "不表现文字阅读、复杂情节、竞赛或评分。"], "故事卡复习"),
    make_lesson(165, 42, "Wet Cloth", "165 Wet", "It is wet.", ["wet", "cloth", "water"], "湿软布", "一点常温水和软布放在低矮桌上", ["It is wet.", "I see a cloth.", "Water here.", "Wet cloth.", "Touch gently.", "It is wet.", "Your turn.", "It is wet."], ["湿布主题只用少量常温水和软布。", "可以指湿布说 `wet`，不要求真的触摸。", "不表现热水、电器进水、打翻滑倒或卫生风险。"], "指认湿软布"),
    make_lesson(166, 42, "Dry Cloth", "166 Dry", "It is dry.", ["dry", "cloth", "clean"], "干软布", "干净干软布放在低矮桌上", ["It is dry.", "I see a cloth.", "Dry cloth.", "Clean cloth.", "Touch gently.", "It is dry.", "Your turn.", "It is dry."], ["干布主题只用干净柔软布料。", "可以摸摸干布说 `dry`。", "不表现脏布、清洁剂、粉尘、擦电器或强迫触摸。"], "指认干软布"),
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
    if 'id: "Lesson 147"' in text:
        return
    marker = "\n];\n\nlet lessonIndex"
    blocks = ",\n".join(render_app_block(lesson) for lesson in LESSONS)
    text = text.replace(marker, ",\n" + blocks + marker)
    base.APP_JS.write_text(text, encoding="utf-8")


def update_chapter_list() -> None:
    text = base.CHAPTER_LIST.read_text(encoding="utf-8")
    if "| 37 | 147 | Close the Bag |" in text:
        return
    rows = "\n".join(
        f"| {lesson['week']} | {lesson['number']} | {lesson['title']} | `{lesson['core']}` | {base.target_text(lesson['targets'])} | {lesson['chapter_task']} |"
        for lesson in LESSONS
    )
    text = text.rstrip() + "\n" + rows + "\n"
    base.CHAPTER_LIST.write_text(text, encoding="utf-8")


def update_task_list() -> None:
    text = base.TASK_LIST.read_text(encoding="utf-8")
    text = text.replace("## V2.37 第三十七周扩展前 2 课内容", "## V2.37 第三十七周扩展 4 课内容")
    if "- [x] 细化 Lesson 147：Close the Bag" not in text:
        text = text.replace(
            "- [x] 细化 Lesson 146：Pack a Toy",
            "- [x] 细化 Lesson 146：Pack a Toy\n- [x] 细化 Lesson 147：Close the Bag\n- [x] 细化 Lesson 148：Bag Review",
        )
        text = text.replace("生成 Lesson 145-146 图片提示词", "生成 Lesson 145-148 图片提示词")
        text = text.replace("生成 Lesson 145-146 音频脚本", "生成 Lesson 145-148 音频脚本")
    if "## V2.38 第三十八周扩展 4 课内容" not in text:
        insert = """## V2.38 第三十八周扩展 4 课内容

- [x] 细化 Lesson 149：At the Door
- [x] 细化 Lesson 150：Take the Map
- [x] 细化 Lesson 151：Wave Goodbye
- [x] 细化 Lesson 152：Going Out Review
- [x] 生成 Lesson 149-152 图片提示词
- [x] 生成 Lesson 149-152 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 门口准备只表现室内门、门垫、无字地图卡和温和挥手。
- 不表现真实交通、独自出门、陌生人门外、夹手或分离焦虑。

## V2.39 第三十九周扩展 4 课内容

- [x] 细化 Lesson 153：Make a Card
- [x] 细化 Lesson 154：Give a Card
- [x] 细化 Lesson 155：Smile Together
- [x] 细化 Lesson 156：Friend Day Review
- [x] 生成 Lesson 153-156 图片提示词
- [x] 生成 Lesson 153-156 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 朋友卡片只使用无字大卡、递物和温和微笑。
- 不表现剪刀、胶水、可读文字、礼物攀比、强迫分享或争抢。

## V2.40 第四十周扩展 4 课内容

- [x] 细化 Lesson 157：Fold a Shirt
- [x] 细化 Lesson 158：Put in Basket
- [x] 细化 Lesson 159：Match Socks
- [x] 细化 Lesson 160：Laundry Review
- [x] 生成 Lesson 157-160 图片提示词
- [x] 生成 Lesson 157-160 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 衣物整理只表现柔软衣物、低矮衣物篮和干净袜子。
- 不表现熨斗、清洁剂、电器、高处收纳、责备或隐私换衣。

## V2.41 第四十一周扩展 4 课内容

- [x] 细化 Lesson 161：First Card
- [x] 细化 Lesson 162：Next Card
- [x] 细化 Lesson 163：Last Card
- [x] 细化 Lesson 164：Story Cards Review
- [x] 生成 Lesson 161-164 图片提示词
- [x] 生成 Lesson 161-164 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 故事卡片只做 first / next / last 的无字图片顺序感知。
- 不表现文字阅读、复杂剧情、计时抢答、评分或恐怖结尾。

## V2.42 第四十二周扩展前 2 课内容

- [x] 细化 Lesson 165：Wet Cloth
- [x] 细化 Lesson 166：Dry Cloth
- [x] 生成 Lesson 165-166 图片提示词
- [x] 生成 Lesson 165-166 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 湿/干主题只使用少量常温水和干净柔软布料。
- 不表现热水、电器进水、清洁剂、打翻滑倒、脏布或强迫触摸。

"""
        text = text.replace("## V3 图片与音频资产", insert + "## V3 图片与音频资产")
    text = text.replace(
        "- [x] 为 Lesson 1-146 生成每课 8 张分镜图（Lesson 97-146 为本地原型图，可继续替换为 imagegen 终稿）",
        "- [x] 为 Lesson 1-166 生成每课 8 张分镜图（Lesson 97-166 为本地原型图，可继续替换为 imagegen 终稿）",
    )
    if "Lesson 147-166 本地 `.m4a` 音频" not in text:
        text = text.replace(
            "- [x] 用 macOS `say` 生成 Lesson 137-146 本地 `.m4a` 音频",
            "- [x] 用 macOS `say` 生成 Lesson 137-146 本地 `.m4a` 音频\n- [x] 用 macOS `say` 生成 Lesson 147-166 本地 `.m4a` 音频",
        )
    text = text.replace("- [x] 将页面改为支持 Lesson 1-146 切换", "- [x] 将页面改为支持 Lesson 1-166 切换")
    base.TASK_LIST.write_text(text, encoding="utf-8")


def update_readme() -> None:
    text = base.README.read_text(encoding="utf-8")
    text = text.replace("146 个课时清单", "166 个课时清单")
    text = text.replace("Lesson146_Pack_a_Toy_完整课时.md", "Lesson166_Dry_Cloth_完整课时.md")
    text = text.replace("assets/images/lesson146/panel08.png", "assets/images/lesson166/panel08.png")
    text = text.replace("assets/audio/lesson146/panel08.m4a", "assets/audio/lesson166/panel08.m4a")
    text = text.replace("Lesson 01 到 Lesson 146", "Lesson 01 到 Lesson 166")
    text = text.replace("Lesson 97-146 的图片为本地原型分镜", "Lesson 97-166 的图片为本地原型分镜")
    base.README.write_text(text, encoding="utf-8")


def update_index_cache() -> None:
    path = ROOT / "app" / "static" / "index.html"
    text = path.read_text(encoding="utf-8")
    text = re.sub(r"lesson\d+", "lesson166", text)
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

    print("generated Lesson 147-166 docs/assets/app data")
    print("generated prototype images for Lesson 147-166")
    print("generated audio for Lesson 147-166" if not args.skip_audio else "skipped audio")


if __name__ == "__main__":
    main()
