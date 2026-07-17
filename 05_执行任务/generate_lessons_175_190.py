#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Lesson 175-190 resources."""

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
    return [
        (SCENES[idx].format(focus=focus), line, line.strip(".?!"), FEEDBACK[idx], f"{title} panel {idx + 1}: {line}")
        for idx, line in enumerate(lines)
    ]


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
    make_lesson(175, 44, "Pick This One", "175 Pick", "I pick this.", ["pick", "this", "card"], "两张无字选择卡", "两张无字大卡片放在低矮桌上", ["I pick this.", "I see cards.", "This card.", "Pick this one.", "Yes.", "Thank you.", "Your turn.", "I pick this."], ["选择主题只用无字大卡，不做对错判断。", "孩子可以指一张卡说 `this`。", "不表现文字题、评分、抢答或强迫选择。"], "选择这张卡"),
    make_lesson(176, 44, "Choice Review", "176 Choice", "I choose.", ["choose", "yes", "no", "pick"], "无字选择卡", "两张无字选择卡和温和点头/摇头手势", ["I choose.", "Choose a card.", "Yes or no?", "I pick this.", "It is okay.", "Choose, yes, no.", "Pick one.", "I choose."], ["复习课只做低压力选择表达。", "孩子可以用点头、摇头或指卡回应。", "不表现纠错压力、输赢、复杂规则或强迫回答。"], "选择表达复习"),
    make_lesson(177, 45, "Cloudy Window", "177 Cloud", "It is cloudy.", ["cloudy", "cloud", "window"], "窗边白云", "窗边有柔和白云和温暖室内光线", ["It is cloudy.", "I see a cloud.", "Cloudy window.", "Look outside.", "Soft cloud.", "Cloud here.", "Your turn.", "It is cloudy."], ["天气主题只在室内窗边观察，不渲染阴暗恐惧。", "可以指窗外云朵说 `cloud`。", "不表现暴风、黑暗、闪电或独自外出。"], "点击窗边云朵"),
    make_lesson(178, 45, "Windy Ribbon", "178 Wind", "It is windy.", ["windy", "wind", "ribbon"], "柔软丝带", "一条宽软丝带在室内轻轻飘动", ["It is windy.", "I see a ribbon.", "Ribbon moves.", "Windy, windy.", "Soft wind.", "Ribbon here.", "Your turn.", "It is windy."], ["风主题只用宽软丝带表示轻风。", "可以轻轻挥丝带说 `windy`。", "不表现强风、飞散物、细绳缠绕或户外危险。"], "点击飘动丝带"),
    make_lesson(179, 45, "Rain Sound", "179 Rain", "I hear rain.", ["rain", "hear", "sound"], "雨滴窗边图", "窗边有柔和雨滴图标和轻柔雨声情境", ["I hear rain.", "I see rain.", "Soft sound.", "Listen, please.", "Rain, rain.", "Quiet rain.", "Your turn.", "I hear rain."], ["雨声主题只表现轻柔听辨，不表现雷暴。", "可以轻轻敲桌面模拟雨声。", "不表现打雷、洪水、深水、湿滑奔跑或恐惧场景。"], "听轻柔雨声"),
    make_lesson(180, 45, "Weather Window Review", "180 Weather", "Look outside.", ["cloud", "wind", "rain", "look"], "窗边天气图标", "窗边并排出现白云、丝带和雨滴图标", ["Look outside.", "Cloudy window.", "Windy ribbon.", "I hear rain.", "Cloud, wind, rain.", "Look and listen.", "Pick one.", "Look outside."], ["复习课只在室内窗边做天气观察。", "孩子可以任选 cloud、wind 或 rain 跟读。", "不表现雷暴、强风、独自外出、深水或恐怖天气。"], "天气窗边复习"),
    make_lesson(181, 46, "I Feel Okay", "181 Okay", "I feel okay.", ["feel", "okay", "smile"], "微笑卡片", "温和微笑卡片和安静地毯场景", ["I feel okay.", "I see a smile.", "Okay.", "Smile softly.", "It is okay.", "Feel okay.", "Your turn.", "I feel okay."], ["情绪主题只表现温和状态，不要求孩子必须开心。", "孩子可以说 `okay` 或指微笑卡。", "不表现强烈哭闹、责备、恐惧或诊断化表达。"], "指认 okay 表情"),
    make_lesson(182, 46, "I Feel Tired", "182 Tired", "I feel tired.", ["tired", "rest", "bed"], "低矮小床", "低矮小床、软枕和柔和灯光", ["I feel tired.", "Time to rest.", "Soft bed.", "Rest, please.", "It is okay.", "Tired body.", "Your turn.", "I feel tired."], ["疲倦主题只表现需要休息，不强迫入睡。", "可以说 `tired` 后坐下休息一下。", "不表现责备、催促、黑暗恐惧或高床跌落。"], "表达有点累"),
    make_lesson(183, 46, "Need a Rest", "183 Rest", "I need rest.", ["need", "rest", "quiet"], "安静休息角", "地毯旁有软枕和柔和夜灯", ["I need rest.", "Quiet, please.", "Rest here.", "Soft light.", "Take a breath.", "Rest, rest.", "Your turn.", "I need rest."], ["休息主题给孩子表达需要的语言，不当作命令。", "可以抱软枕说 `rest`。", "不表现强制睡觉、惩罚安静、遮住口鼻或黑暗恐惧。"], "表达需要休息"),
    make_lesson(184, 46, "Rest Review", "184 Rest Review", "Rest is okay.", ["okay", "tired", "rest", "quiet"], "休息角和表情卡", "安静休息角、微笑卡和软枕并排", ["Rest is okay.", "I feel okay.", "I feel tired.", "I need rest.", "Quiet, please.", "Okay, tired, rest.", "Pick one.", "Rest is okay."], ["复习课只做温和情绪和休息表达。", "孩子可以任选 okay、tired 或 rest 跟读。", "不表现强烈情绪、医疗困扰、责备或强迫入睡。"], "感受与休息复习"),
    make_lesson(185, 47, "Beside the Box", "185 Beside", "Beside the box.", ["beside", "box", "toy"], "盒子和软玩具", "大号软玩具放在安全收纳盒旁边", ["Beside the box.", "I see a box.", "Toy beside box.", "Where is it?", "Here it is.", "Beside, beside.", "Your turn.", "Beside the box."], ["位置主题只用开放收纳盒和大号软玩具。", "可以把玩具放盒子旁说 `beside`。", "不表现密闭躲藏、攀爬、尖角盒或小零件。"], "玩具在盒子旁"),
    make_lesson(186, 47, "Between Blocks", "186 Between", "Between blocks.", ["between", "blocks", "middle"], "两块软积木和玩具", "大号软玩具放在两块软积木中间", ["Between blocks.", "Two blocks.", "Toy in middle.", "Between blocks.", "Where is it?", "Here it is.", "Your turn.", "Between blocks."], ["between 只用两块大号软积木示范。", "可以把玩具放两块积木中间说 `between`。", "不表现挤压身体、高塔、小零件或危险缝隙。"], "玩具在两块积木中间"),
    make_lesson(187, 47, "Near the Door", "187 Near", "Near the door.", ["near", "door", "mat"], "门和门垫", "软玩具放在室内门垫附近", ["Near the door.", "I see the door.", "Toy near door.", "Door mat.", "Where is it?", "Here it is.", "Your turn.", "Near the door."], ["near 只在室内门垫附近表达，不开门外出。", "可以指门垫旁的玩具说 `near`。", "不表现陌生人门外、跑出门、夹手或真实道路。"], "玩具在门附近"),
    make_lesson(188, 47, "Where Review", "188 Where", "Where is it?", ["beside", "between", "near", "where"], "盒子、积木和门垫", "盒子、两块软积木和门垫作为位置复习物", ["Where is it?", "Beside the box.", "Between blocks.", "Near the door.", "Here it is.", "Beside, between, near.", "Pick one.", "Where is it?"], ["复习课只做开放空间里的位置指认。", "孩子可以任选 beside、between 或 near 跟读。", "不表现密闭躲藏、户外道路、攀爬或危险缝隙。"], "位置关系复习"),
    make_lesson(189, 48, "Puzzle Piece", "189 Piece", "Fit the piece.", ["fit", "piece", "puzzle"], "大号拼图片", "两块大号软拼图片放在地毯上", ["Fit the piece.", "I see a piece.", "Puzzle piece.", "Try, try.", "It fits.", "Good job.", "Your turn.", "Fit the piece."], ["拼图主题只使用大号软拼图片。", "可以把两块大拼图轻轻合上说 `fit`。", "不表现小零件、吞咽风险、挫败责备或复杂拼图。"], "放好大号拼图片"),
    make_lesson(190, 48, "Puzzle Together", "190 Puzzle", "Puzzle together.", ["puzzle", "together", "help"], "大号软拼图", "三位角色围着大号软拼图合作", ["Puzzle together.", "I can help.", "Fit the piece.", "Good job.", "Together.", "Puzzle done.", "Your turn.", "Puzzle together."], ["合作拼图只表现温和帮助和完成状态。", "孩子可以说 `together` 或 `help`。", "不表现比赛输赢、小零件、抢夺或复杂规则。"], "一起完成拼图"),
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
    if 'id: "Lesson 175"' in text:
        return
    marker = "\n];\n\nlet lessonIndex"
    text = text.replace(marker, ",\n" + ",\n".join(render_app_block(lesson) for lesson in LESSONS) + marker)
    base.APP_JS.write_text(text, encoding="utf-8")


def update_chapter_list() -> None:
    text = base.CHAPTER_LIST.read_text(encoding="utf-8")
    if "| 44 | 175 | Pick This One |" in text:
        return
    rows = "\n".join(
        f"| {lesson['week']} | {lesson['number']} | {lesson['title']} | `{lesson['core']}` | {base.target_text(lesson['targets'])} | {lesson['chapter_task']} |"
        for lesson in LESSONS
    )
    base.CHAPTER_LIST.write_text(text.rstrip() + "\n" + rows + "\n", encoding="utf-8")


def update_task_list() -> None:
    text = base.TASK_LIST.read_text(encoding="utf-8")
    text = text.replace("## V2.44 第四十四周扩展前 2 课内容", "## V2.44 第四十四周扩展 4 课内容")
    if "- [x] 细化 Lesson 175：Pick This One" not in text:
        text = text.replace(
            "- [x] 细化 Lesson 174：Yes or No",
            "- [x] 细化 Lesson 174：Yes or No\n- [x] 细化 Lesson 175：Pick This One\n- [x] 细化 Lesson 176：Choice Review",
        )
        text = text.replace("生成 Lesson 173-174 图片提示词", "生成 Lesson 173-176 图片提示词")
        text = text.replace("生成 Lesson 173-174 音频脚本", "生成 Lesson 173-176 音频脚本")
    if "## V2.45 第四十五周扩展 4 课内容" not in text:
        insert = """## V2.45 第四十五周扩展 4 课内容

- [x] 细化 Lesson 177：Cloudy Window
- [x] 细化 Lesson 178：Windy Ribbon
- [x] 细化 Lesson 179：Rain Sound
- [x] 细化 Lesson 180：Weather Window Review
- [x] 生成 Lesson 177-180 图片提示词
- [x] 生成 Lesson 177-180 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 天气窗边只在室内观察云、轻风丝带和柔和雨声。
- 不表现雷暴、强风、洪水、深水、独自外出或恐惧天气。

## V2.46 第四十六周扩展 4 课内容

- [x] 细化 Lesson 181：I Feel Okay
- [x] 细化 Lesson 182：I Feel Tired
- [x] 细化 Lesson 183：Need a Rest
- [x] 细化 Lesson 184：Rest Review
- [x] 生成 Lesson 181-184 图片提示词
- [x] 生成 Lesson 181-184 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 感受与休息只表现温和状态、休息需求和安静角。
- 不表现强烈哭闹、责备、强迫入睡、医疗困扰或黑暗恐惧。

## V2.47 第四十七周扩展 4 课内容

- [x] 细化 Lesson 185：Beside the Box
- [x] 细化 Lesson 186：Between Blocks
- [x] 细化 Lesson 187：Near the Door
- [x] 细化 Lesson 188：Where Review
- [x] 生成 Lesson 185-188 图片提示词
- [x] 生成 Lesson 185-188 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 位置关系只用开放空间、软积木、收纳盒和室内门垫。
- 不表现密闭躲藏、攀爬、户外道路、陌生人门外或危险缝隙。

## V2.48 第四十八周扩展前 2 课内容

- [x] 细化 Lesson 189：Puzzle Piece
- [x] 细化 Lesson 190：Puzzle Together
- [x] 生成 Lesson 189-190 图片提示词
- [x] 生成 Lesson 189-190 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 拼图合作只使用大号软拼图片和温和帮助。
- 不表现小零件、吞咽风险、比赛输赢、抢夺或复杂规则。

"""
        text = text.replace("## V3 图片与音频资产", insert + "## V3 图片与音频资产")
    text = text.replace(
        "- [x] 为 Lesson 1-174 生成每课 8 张分镜图（Lesson 97-174 为本地原型图，可继续替换为 imagegen 终稿）",
        "- [x] 为 Lesson 1-190 生成每课 8 张分镜图（Lesson 97-190 为本地原型图，可继续替换为 imagegen 终稿）",
    )
    if "Lesson 175-190 本地 `.m4a` 音频" not in text:
        text = text.replace(
            "- [x] 用 macOS `say` 生成 Lesson 167-174 本地 `.m4a` 音频",
            "- [x] 用 macOS `say` 生成 Lesson 167-174 本地 `.m4a` 音频\n- [x] 用 macOS `say` 生成 Lesson 175-190 本地 `.m4a` 音频",
        )
    text = text.replace("- [x] 将页面改为支持 Lesson 1-174 切换", "- [x] 将页面改为支持 Lesson 1-190 切换")
    base.TASK_LIST.write_text(text, encoding="utf-8")


def update_readme() -> None:
    text = base.README.read_text(encoding="utf-8")
    text = text.replace("174 个课时清单", "190 个课时清单")
    text = text.replace("Lesson174_Yes_or_No_完整课时.md", "Lesson190_Puzzle_Together_完整课时.md")
    text = text.replace("assets/images/lesson174/panel08.png", "assets/images/lesson190/panel08.png")
    text = text.replace("assets/audio/lesson174/panel08.m4a", "assets/audio/lesson190/panel08.m4a")
    text = text.replace("Lesson 01 到 Lesson 174", "Lesson 01 到 Lesson 190")
    text = text.replace("Lesson 97-174 的图片为本地原型分镜", "Lesson 97-190 的图片为本地原型分镜")
    base.README.write_text(text, encoding="utf-8")


def update_index_cache() -> None:
    path = ROOT / "app" / "static" / "index.html"
    text = path.read_text(encoding="utf-8")
    path.write_text(re.sub(r"lesson\d+", "lesson190", text), encoding="utf-8")


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

    print("generated Lesson 175-190 docs/assets/app data")
    print("generated prototype images for Lesson 175-190")
    print("generated audio for Lesson 175-190" if not args.skip_audio else "skipped audio")


if __name__ == "__main__":
    main()
