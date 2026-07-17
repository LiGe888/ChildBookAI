#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Lesson 137-146 resources."""

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


def make_lesson(number, week, title, tab, core, targets, listening, speaking, scene, panels, quizzes, notes, chapter_task):
    return {
        "number": number,
        "week": week,
        "title": title,
        "tab": tab,
        "core": core,
        "targets": targets,
        "listening": listening,
        "speaking": speaking,
        "flow": [
            f"Warm-up：{scene}",
            f"Learn：认识 {base.target_text(targets)}。",
            f"Story：Nia、Lumo 和 Bobo 在安全情境中练习 `{core}`。",
            "Tap：点击核心物品或动作。",
            f"Say：孩子跟读 `{core}` 或其中 1 个目标词。",
            "Wrap-up：三位角色用本课核心句温和收束。",
        ],
        "panels": panels,
        "quizzes": quizzes,
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
        137, 35, "Green Leaf", "137 Green", "I see green.", ["green", "leaf", "tree"],
        "能指出 green、leaf 和 tree 的自然颜色场景", "能跟读 `I see green.` 或 `green`",
        "大号绿色叶子和小树盆栽放在低矮桌边",
        [
            ("一片大号绿色叶子在地毯上", "I see green.", "green", "叶子亮", "A large green leaf sits on the rug."),
            ("Nia 指向叶子", "Green leaf.", "leaf", "叶子亮", "Nia points to the green leaf."),
            ("Lumo 指向小树盆栽", "I see a tree.", "tree", "小树亮", "Lumo points to a small potted tree."),
            ("Bobo 看绿色叶子", "It is green.", "green 复现", "Bobo 屏幕亮", "Bobo looks at the green leaf."),
            ("叶子放进低篮子", "Leaf in.", "in 复现", "篮子亮", "The leaf goes into a low basket."),
            ("叶子回到地毯上", "Green, green.", "复现", "叶子柔光", "The leaf rests on the rug again."),
            ("孩子视角绿色叶子", "Your turn.", "输出邀请", "叶子亮", "The green leaf waits for the child."),
            ("三位角色挥手", "I see green.", "收束", "全场暖光亮", "The friends wave beside the green leaf."),
        ],
        [("Tap green.", "Green", ["Green", "Red", "Blue"]), ("Tap leaf.", "Leaf", ["Leaf", "Cup", "Ball"]), ("Tap tree.", "Tree", ["Tree", "Moon", "Shoe"])],
        ["自然颜色只表现观察和指认，不摘真实植物。", "可以指绿色物品说 `green`。", "不表现误食植物、尖刺、泥土入口或过敏刺激。"],
        "点击绿色叶子",
    ),
    make_lesson(
        138, 35, "Orange Pumpkin", "138 Orange", "It is orange.", ["orange", "pumpkin", "round"],
        "能指出 orange、pumpkin 和 round 的颜色形状场景", "能跟读 `It is orange.` 或 `orange`",
        "一个大号橙色软南瓜玩具放在星星地毯上",
        [
            ("大号软南瓜玩具在地毯上", "It is orange.", "orange", "南瓜亮", "A large soft orange pumpkin toy sits on the rug."),
            ("Nia 指向南瓜", "Orange pumpkin.", "pumpkin", "南瓜亮", "Nia points to the orange pumpkin."),
            ("Lumo 用手比圆形", "It is round.", "round", "Lumo 发光", "Lumo shows a round shape."),
            ("Bobo 轻轻碰南瓜", "Soft pumpkin.", "soft 复现", "Bobo 屏幕亮", "Bobo gently touches the soft pumpkin."),
            ("南瓜滚到地毯中央", "Roll, roll.", "roll", "南瓜柔光", "The pumpkin rolls gently on the rug."),
            ("南瓜停在 Nia 前面", "Stop.", "stop 复现", "南瓜亮", "The pumpkin stops in front of Nia."),
            ("孩子视角橙色南瓜", "Your turn.", "输出邀请", "南瓜亮", "The orange pumpkin waits for the child."),
            ("三位角色挥手", "It is orange.", "收束", "全场暖光亮", "The friends wave beside the pumpkin."),
        ],
        [("Tap orange.", "Orange", ["Orange", "Green", "Purple"]), ("Tap pumpkin.", "Pumpkin", ["Pumpkin", "Book", "Cup"]), ("Tap round.", "Round", ["Round", "Square", "Long"])],
        ["南瓜使用大号软玩具，不表现真实切开的食物。", "可以指橙色物品说 `orange`。", "不表现刀具、硬小块食物、误食或节日恐怖元素。"],
        "点击橙色南瓜",
    ),
    make_lesson(
        139, 35, "Purple Flower", "139 Purple", "I see purple.", ["purple", "flower", "petal"],
        "能指出 purple、flower 和 petal 的颜色观察场景", "能跟读 `I see purple.` 或 `purple`",
        "一朵大号紫色纸花放在低矮花盆旁",
        [
            ("紫色大纸花在花盆旁", "I see purple.", "purple", "紫花亮", "A large purple paper flower sits beside a pot."),
            ("Nia 指花", "Purple flower.", "flower", "花朵亮", "Nia points to the purple flower."),
            ("Lumo 指花瓣", "A petal.", "petal", "花瓣亮", "Lumo points to one large petal."),
            ("Bobo 看花", "It is purple.", "purple 复现", "Bobo 屏幕亮", "Bobo looks at the purple flower."),
            ("Nia 轻轻挥手不摘花", "Hello, flower.", "hello 复现", "Nia 柔光", "Nia waves gently to the flower."),
            ("花放在地毯中央", "Flower here.", "here 复现", "花朵柔光", "The flower sits on the rug."),
            ("孩子视角紫色纸花", "Your turn.", "输出邀请", "花朵亮", "The purple flower waits for the child."),
            ("三位角色挥手", "I see purple.", "收束", "全场暖光亮", "The friends wave beside the flower."),
        ],
        [("Tap purple.", "Purple", ["Purple", "Orange", "Green"]), ("Tap flower.", "Flower", ["Flower", "Chair", "Ball"]), ("Tap petal.", "Petal", ["Petal", "Cup", "Shoe"])],
        ["花朵主题使用大号纸花或盆栽观察，不摘花。", "可以指紫色物品说 `purple`。", "不表现蜜蜂、尖刺、误食植物或花粉刺激。"],
        "点击紫色花",
    ),
    make_lesson(
        140, 35, "Color Review", "140 Colors", "Find colors.", ["green", "orange", "purple", "color"],
        "能复习 green、orange、purple 和 color", "能任选一个颜色词跟读",
        "绿色叶子、橙色软南瓜、紫色纸花并排放在地毯上",
        [
            ("三种颜色物品并排", "Find colors.", "开场", "物品亮", "A green leaf, orange pumpkin, and purple flower sit together."),
            ("Nia 指绿色叶子", "Green leaf.", "green", "叶子亮", "Nia points to the green leaf."),
            ("Lumo 指橙色南瓜", "Orange pumpkin.", "orange", "南瓜亮", "Lumo points to the orange pumpkin."),
            ("Bobo 指紫色花", "Purple flower.", "purple", "花朵亮", "Bobo points to the purple flower."),
            ("三件物品依次发光", "Green, orange, purple.", "综合复习", "物品依次亮", "The three color objects glow one by one."),
            ("三个无字色块图标", "I see colors.", "color", "图标亮", "Three wordless color icons glow."),
            ("孩子视角三种颜色物品", "Pick one.", "输出邀请", "物品亮", "The color objects wait for the child."),
            ("三位角色挥手", "Find colors.", "收束", "全场暖光亮", "The friends wave beside the color objects."),
        ],
        [("Tap green.", "Green", ["Green", "Red", "Blue"]), ("Tap orange.", "Orange", ["Orange", "Purple", "Yellow"]), ("Tap purple.", "Purple", ["Purple", "Green", "White"])],
        ["复习课只做颜色指认，不加入读写。", "孩子可以任选一个颜色词说。", "不表现误食、尖刺、蜜蜂、刀具或画内文字。"],
        "颜色扩展复习",
    ),
    make_lesson(
        141, 36, "Round Ball", "141 Round", "It is round.", ["round", "ball", "roll"],
        "能指出 round、ball 和 roll 的形状动作场景", "能跟读 `It is round.` 或 `round`",
        "大号圆形软球放在星星地毯中央",
        [
            ("圆形软球在地毯上", "It is round.", "round", "软球亮", "A round soft ball sits on the rug."),
            ("Nia 指向软球", "Round ball.", "ball", "软球亮", "Nia points to the round ball."),
            ("Lumo 用手比圆", "Round, round.", "round 复现", "Lumo 发光", "Lumo makes a round shape with hands."),
            ("Bobo 轻轻滚动软球", "Roll the ball.", "roll", "Bobo 屏幕亮", "Bobo rolls the ball gently."),
            ("软球滚到 Nia 前面", "Stop.", "stop 复现", "软球亮", "The ball stops in front of Nia."),
            ("Nia 把球放回中央", "Ball here.", "here 复现", "软球柔光", "Nia places the ball in the middle."),
            ("孩子视角圆球", "Your turn.", "输出邀请", "软球亮", "The round ball waits for the child."),
            ("三位角色挥手", "It is round.", "收束", "全场暖光亮", "The friends wave beside the round ball."),
        ],
        [("Tap round.", "Round", ["Round", "Square", "Triangle"]), ("Tap ball.", "Ball", ["Ball", "Block", "Leaf"]), ("Tap roll.", "Roll", ["Roll", "Throw", "Sleep"])],
        ["形状动作只表现轻轻滚软球，不投掷。", "可以轻轻滚球说 `round`。", "不表现砸到人、快速滚动、硬球或竞争游戏。"],
        "点击圆形软球",
    ),
    make_lesson(
        142, 36, "Square Block", "142 Square", "It is square.", ["square", "block", "side"],
        "能指出 square、block 和 side 的形状场景", "能跟读 `It is square.` 或 `square`",
        "大号方形软积木放在星星地毯上",
        [
            ("方形软积木在地毯上", "It is square.", "square", "方块亮", "A large square soft block sits on the rug."),
            ("Nia 指方块", "Square block.", "block", "方块亮", "Nia points to the square block."),
            ("Lumo 指方块边", "A side.", "side", "边缘亮", "Lumo points to one side of the block."),
            ("Bobo 把方块放正", "Turn the block.", "turn 复现", "Bobo 屏幕亮", "Bobo turns the soft block gently."),
            ("方块平稳放在地毯上", "Square here.", "square 复现", "方块柔光", "The square block rests on the rug."),
            ("Nia 指圆球做对比", "Not round.", "round 复现", "圆球小亮", "Nia compares it with a round ball."),
            ("孩子视角方块", "Your turn.", "输出邀请", "方块亮", "The square block waits for the child."),
            ("三位角色挥手", "It is square.", "收束", "全场暖光亮", "The friends wave beside the square block."),
        ],
        [("Tap square.", "Square", ["Square", "Round", "Triangle"]), ("Tap block.", "Block", ["Block", "Ball", "Flower"]), ("Tap side.", "Side", ["Side", "Moon", "Cup"])],
        ["方形主题使用大号软积木，不强调抽象几何术语。", "可以摸摸方块边缘说 `square`。", "不表现尖角硬物、砸落或小积木入口。"],
        "点击方形软积木",
    ),
    make_lesson(
        143, 36, "Triangle Roof", "143 Triangle", "A triangle roof.", ["triangle", "roof", "top"],
        "能指出 triangle、roof 和 top 的形状场景", "能跟读 `A triangle roof.` 或 `triangle`",
        "一个玩具小房子的三角形屋顶放在地毯上",
        [
            ("玩具小房子有三角形屋顶", "A triangle roof.", "triangle", "屋顶亮", "A toy house has a triangle roof."),
            ("Nia 指屋顶", "Triangle.", "triangle 复现", "屋顶亮", "Nia points to the triangle roof."),
            ("Lumo 指屋顶顶端", "Top.", "top", "顶端亮", "Lumo points to the top of the roof."),
            ("Bobo 指房子下方", "House.", "house", "Bobo 屏幕亮", "Bobo points to the toy house."),
            ("屋顶和方块并排", "Triangle and square.", "对比", "形状亮", "The triangle roof and square block sit together."),
            ("屋顶和圆球并排", "Triangle and round.", "复现", "形状柔光", "The triangle roof sits beside a round ball."),
            ("孩子视角三角屋顶", "Your turn.", "输出邀请", "屋顶亮", "The triangle roof waits for the child."),
            ("三位角色挥手", "A triangle roof.", "收束", "全场暖光亮", "The friends wave beside the toy house."),
        ],
        [("Tap triangle.", "Triangle", ["Triangle", "Square", "Round"]), ("Tap roof.", "Roof", ["Roof", "Cup", "Leaf"]), ("Tap top.", "Top", ["Top", "Down", "Sleep"])],
        ["三角形使用大号玩具屋顶，不使用尖锐硬片。", "可以指屋顶说 `triangle`。", "不表现爬屋顶、高处、尖锐边角或画内文字。"],
        "点击三角屋顶",
    ),
    make_lesson(
        144, 36, "Shape Review", "144 Shapes", "Find shapes.", ["round", "square", "triangle", "shape"],
        "能复习 round、square、triangle 和 shape", "能任选一个形状词跟读",
        "圆球、方形软积木和三角屋顶玩具并排放在地毯上",
        [
            ("三个形状物品并排", "Find shapes.", "开场", "物品亮", "A round ball, square block, and triangle roof sit together."),
            ("Nia 指圆球", "Round ball.", "round", "圆球亮", "Nia points to the round ball."),
            ("Lumo 指方块", "Square block.", "square", "方块亮", "Lumo points to the square block."),
            ("Bobo 指屋顶", "Triangle roof.", "triangle", "屋顶亮", "Bobo points to the triangle roof."),
            ("三件物品依次发光", "Round, square, triangle.", "综合复习", "物品依次亮", "The three shapes glow one by one."),
            ("三个无字形状图标", "I see shapes.", "shape", "图标亮", "Three wordless shape icons glow."),
            ("孩子视角三个形状", "Pick one.", "输出邀请", "形状亮", "The shape objects wait for the child."),
            ("三位角色挥手", "Find shapes.", "收束", "全场暖光亮", "The friends wave beside the shape objects."),
        ],
        [("Tap round.", "Round", ["Round", "Square", "Triangle"]), ("Tap square.", "Square", ["Square", "Round", "Triangle"]), ("Tap triangle.", "Triangle", ["Triangle", "Round", "Square"])],
        ["复习课只用大号安全形状物，不做书面识别。", "孩子可以任选一个形状词说。", "不表现尖锐硬片、小零件或复杂拼图。"],
        "形状扩展复习",
    ),
    make_lesson(
        145, 37, "My Little Bag", "145 Bag", "I have a bag.", ["bag", "have", "carry"],
        "能指出 bag、have 和 carry 的外出收纳场景", "能跟读 `I have a bag.` 或 `bag`",
        "一个轻软小包放在低矮椅子旁",
        [
            ("轻软小包在椅子旁", "I see a bag.", "bag", "小包亮", "A small soft bag sits beside a low chair."),
            ("Nia 指小包", "I have a bag.", "核心句", "Nia 柔光", "Nia points to the soft bag."),
            ("Lumo 轻轻拿起小包", "Carry the bag.", "carry", "Lumo 发光", "Lumo carries the soft bag gently."),
            ("Bobo 看小包", "Soft bag.", "soft 复现", "Bobo 屏幕亮", "Bobo looks at the soft bag."),
            ("小包放在地毯中央", "Bag here.", "here 复现", "小包柔光", "The bag rests on the rug."),
            ("Nia 把小包递给 Lumo", "Here you are.", "递物复现", "小包亮", "Nia offers the bag to Lumo."),
            ("孩子视角小包", "Your turn.", "输出邀请", "小包亮", "The soft bag waits for the child."),
            ("三位角色挥手", "I have a bag.", "收束", "全场暖光亮", "The friends wave beside the bag."),
        ],
        [("Tap bag.", "Bag", ["Bag", "Ball", "Flower"]), ("Tap have.", "Have", ["Have", "Throw", "Sleep"]), ("Tap carry.", "Carry", ["Carry", "Run", "Hot"])],
        ["外出收纳只表现轻软小包和室内准备，不真的出门。", "可以指自己的小包说 `bag`。", "不表现重包、勒绳、陌生环境或真实道路。"],
        "点击轻软小包",
    ),
    make_lesson(
        146, 37, "Pack a Toy", "146 Pack", "Pack a toy.", ["pack", "toy", "bag"],
        "能听懂 pack、toy 和 bag 的收纳动作", "能跟读 `Pack a toy.` 或 `pack`",
        "一个大号软玩具和轻软小包放在星星地毯上",
        [
            ("软玩具和小包在地毯上", "I see a toy.", "toy", "玩具亮", "A large soft toy and soft bag sit on the rug."),
            ("Nia 打开小包", "Open the bag.", "open 复现", "小包亮", "Nia opens the soft bag."),
            ("Lumo 拿起软玩具", "A toy.", "toy", "Lumo 发光", "Lumo holds the large soft toy."),
            ("Nia 把软玩具放进小包", "Pack a toy.", "核心句", "小包亮", "Nia packs the toy into the bag."),
            ("Bobo 指小包", "Toy in.", "in 复现", "Bobo 屏幕亮", "Bobo points to the toy in the bag."),
            ("小包轻轻合上", "Close the bag.", "close 复现", "小包柔光", "The soft bag closes gently."),
            ("孩子视角玩具和小包", "Your turn.", "输出邀请", "物品亮", "The toy and bag wait for the child."),
            ("三位角色挥手", "Pack a toy.", "收束", "全场暖光亮", "The friends wave beside the packed bag."),
        ],
        [("Tap pack.", "Pack", ["Pack", "Throw", "Sleep"]), ("Tap toy.", "Toy", ["Toy", "Cup", "Moon"]), ("Tap bag.", "Bag", ["Bag", "Leaf", "Block"])],
        ["收纳主题只用大号软玩具和轻软小包。", "可以把一个大玩具放进袋子说 `pack`。", "不表现小零件、塑料袋套头、重物或拉链夹手。"],
        "把软玩具放进小包",
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
    if 'id: "Lesson 137"' in text:
        return
    marker = "\n];\n\nlet lessonIndex"
    blocks = ",\n".join(render_app_block(lesson) for lesson in LESSONS)
    text = text.replace(marker, ",\n" + blocks + marker)
    base.APP_JS.write_text(text, encoding="utf-8")


def update_chapter_list() -> None:
    text = base.CHAPTER_LIST.read_text(encoding="utf-8")
    if "| 35 | 137 | Green Leaf |" in text:
        return
    rows = "\n".join(
        f"| {lesson['week']} | {lesson['number']} | {lesson['title']} | `{lesson['core']}` | {base.target_text(lesson['targets'])} | {lesson['chapter_task']} |"
        for lesson in LESSONS
    )
    text = text.rstrip() + "\n" + rows + "\n"
    base.CHAPTER_LIST.write_text(text, encoding="utf-8")


def update_task_list() -> None:
    text = base.TASK_LIST.read_text(encoding="utf-8")
    if "## V2.35 第三十五周扩展 4 课内容" not in text:
        insert = """## V2.35 第三十五周扩展 4 课内容

- [x] 细化 Lesson 137：Green Leaf
- [x] 细化 Lesson 138：Orange Pumpkin
- [x] 细化 Lesson 139：Purple Flower
- [x] 细化 Lesson 140：Color Review
- [x] 生成 Lesson 137-140 图片提示词
- [x] 生成 Lesson 137-140 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 颜色扩展只表现观察绿色叶子、橙色软南瓜和紫色纸花。
- 不表现摘花、误食植物、刀具、蜜蜂、尖刺或画内文字。

## V2.36 第三十六周扩展 4 课内容

- [x] 细化 Lesson 141：Round Ball
- [x] 细化 Lesson 142：Square Block
- [x] 细化 Lesson 143：Triangle Roof
- [x] 细化 Lesson 144：Shape Review
- [x] 生成 Lesson 141-144 图片提示词
- [x] 生成 Lesson 141-144 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 形状扩展只使用圆形软球、方形软积木和大号三角屋顶玩具。
- 不表现尖锐硬片、小零件、投掷、爬高或复杂拼图。

## V2.37 第三十七周扩展前 2 课内容

- [x] 细化 Lesson 145：My Little Bag
- [x] 细化 Lesson 146：Pack a Toy
- [x] 生成 Lesson 145-146 图片提示词
- [x] 生成 Lesson 145-146 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 外出收纳只表现室内轻软小包和大号软玩具。
- 不表现重包、勒绳、塑料袋套头、真实道路、小零件或夹手。

"""
        text = text.replace("## V3 图片与音频资产", insert + "## V3 图片与音频资产")
    text = text.replace(
        "- [x] 为 Lesson 1-136 生成每课 8 张分镜图（Lesson 97-136 为本地原型图，可继续替换为 imagegen 终稿）",
        "- [x] 为 Lesson 1-146 生成每课 8 张分镜图（Lesson 97-146 为本地原型图，可继续替换为 imagegen 终稿）",
    )
    if "Lesson 137-146 本地 `.m4a` 音频" not in text:
        text = text.replace(
            "- [x] 用 macOS `say` 生成 Lesson 121-136 本地 `.m4a` 音频",
            "- [x] 用 macOS `say` 生成 Lesson 121-136 本地 `.m4a` 音频\n- [x] 用 macOS `say` 生成 Lesson 137-146 本地 `.m4a` 音频",
        )
    text = text.replace(
        "- [x] 将页面改为支持 Lesson 1-136 切换",
        "- [x] 将页面改为支持 Lesson 1-146 切换",
    )
    base.TASK_LIST.write_text(text, encoding="utf-8")


def update_readme() -> None:
    text = base.README.read_text(encoding="utf-8")
    text = text.replace("136 个课时清单", "146 个课时清单")
    text = text.replace("Lesson136_Circle_Review_完整课时.md", "Lesson146_Pack_a_Toy_完整课时.md")
    text = text.replace("assets/images/lesson136/panel08.png", "assets/images/lesson146/panel08.png")
    text = text.replace("assets/audio/lesson136/panel08.m4a", "assets/audio/lesson146/panel08.m4a")
    text = text.replace("Lesson 01 到 Lesson 136", "Lesson 01 到 Lesson 146")
    text = text.replace("Lesson 97-136 的图片为本地原型分镜", "Lesson 97-146 的图片为本地原型分镜")
    base.README.write_text(text, encoding="utf-8")


def update_index_cache() -> None:
    path = ROOT / "app" / "static" / "index.html"
    text = path.read_text(encoding="utf-8")
    text = re.sub(r"lesson\d+", "lesson146", text)
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

    print("generated Lesson 137-146 docs/assets/app data")
    print("generated prototype images for Lesson 137-146")
    print("generated audio for Lesson 137-146" if not args.skip_audio else "skipped audio")


if __name__ == "__main__":
    main()
