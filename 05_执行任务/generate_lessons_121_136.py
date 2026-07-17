#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Lesson 121-136 resources."""

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


def make_lesson(number, week, title, core, targets, listening, speaking, panels, quizzes, notes, chapter_task, scene, tab):
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
            "clear large objects, warm safe room, simple background, no written words, no copyrighted characters."
        ),
    }


LESSONS = [
    make_lesson(
        121, 31, "One Star", "One star.", ["one", "star", "count"],
        "能指出 one、star 和 count 的数量场景", "能跟读 `One star.` 或 `one`",
        [
            ("一颗大星星在地毯上", "One star.", "one", "星星亮", "One large star block sits on the rug."),
            ("Nia 指向星星", "I see one.", "count", "Nia 柔光", "Nia points to one star."),
            ("Lumo 举起一根手指", "One.", "one", "Lumo 发光", "Lumo shows one finger."),
            ("Bobo 屏幕上一个无字圆点", "Count one.", "count", "Bobo 屏幕亮", "Bobo shows one dot without text."),
            ("Nia 把星星放进篮子", "One star in.", "in 复现", "篮子亮", "Nia puts one star block into a basket."),
            ("星星从篮子里取出", "One star out.", "out", "星星亮", "The one star comes out of the basket."),
            ("孩子视角一颗星星", "Your turn.", "输出邀请", "星星亮", "One star waits for the child."),
            ("三位角色挥手", "One star.", "收束", "全场暖光亮", "The friends wave beside one star."),
        ],
        [("Tap one.", "One", ["One", "Two", "Three"]), ("Tap star.", "Star", ["Star", "Cup", "Shoe"]), ("Tap count.", "Count", ["Count", "Sleep", "Run"])],
        ["数字只做点数感知，不要求识别书面数字。", "可以拿一颗积木说 `one`。", "不在画面里放数字或文字，避免做成书面练习。"],
        "点击一颗星星", "一颗大星星和低矮篮子在星星地毯上", "121 One"
    ),
    make_lesson(
        122, 31, "Two Cups", "Two cups.", ["two", "cups", "count"],
        "能指出 two、cups 和 count 的数量场景", "能跟读 `Two cups.` 或 `two`",
        [
            ("两个塑料杯在低桌上", "Two cups.", "two", "杯子亮", "Two plastic cups sit on a low table."),
            ("Nia 指向第一个杯子", "One cup.", "one 复现", "第一个杯亮", "Nia points to the first cup."),
            ("Nia 指向第二个杯子", "Two cups.", "核心句", "第二个杯亮", "Nia points to the second cup."),
            ("Bobo 把两个杯子排好", "Count two.", "count", "Bobo 屏幕亮", "Bobo lines up two cups."),
            ("Lumo 轻轻点两个杯子", "One, two.", "点数", "杯子依次亮", "Lumo taps the two cups gently."),
            ("两个杯子放回低桌中央", "Two cups here.", "here 复现", "低桌亮", "The two cups sit in the middle of the low table."),
            ("孩子视角两个杯子", "Your turn.", "输出邀请", "杯子亮", "Two cups wait for the child."),
            ("三位角色挥手", "Two cups.", "收束", "全场暖光亮", "The friends wave beside the cups."),
        ],
        [("Tap two.", "Two", ["Two", "One", "Three"]), ("Tap cups.", "Cups", ["Cups", "Blocks", "Moon"]), ("Tap count.", "Count", ["Count", "Throw", "Hot"])],
        ["餐桌数量只用空塑料杯，不放热水或玻璃。", "可以用两个安全杯子练习 `one, two`。", "不表现倒水、热饮、玻璃碎裂或品牌文字。"],
        "点击两个杯子", "两个空塑料杯放在低矮桌面上", "122 Two"
    ),
    make_lesson(
        123, 31, "Three Blocks", "Three blocks.", ["three", "blocks", "count"],
        "能指出 three、blocks 和 count 的数量场景", "能跟读 `Three blocks.` 或 `three`",
        [
            ("三块大号软积木在地毯上", "Three blocks.", "three", "积木亮", "Three large soft blocks sit on the rug."),
            ("Nia 指第一块积木", "One block.", "one 复现", "第一块亮", "Nia points to one block."),
            ("Lumo 指第二块积木", "Two blocks.", "two 复现", "第二块亮", "Lumo points to two blocks."),
            ("Bobo 指第三块积木", "Three blocks.", "核心句", "第三块亮", "Bobo points to the third block."),
            ("三块积木排成一排", "Count three.", "count", "积木依次亮", "The three soft blocks line up."),
            ("Nia 轻轻把积木靠在一起", "Blocks together.", "together 复现", "积木柔光", "Nia places the blocks together."),
            ("孩子视角三块软积木", "Your turn.", "输出邀请", "积木亮", "Three blocks wait for the child."),
            ("三位角色挥手", "Three blocks.", "收束", "全场暖光亮", "The friends wave beside the three blocks."),
        ],
        [("Tap three.", "Three", ["Three", "One", "Two"]), ("Tap blocks.", "Blocks", ["Blocks", "Pajamas", "Light"]), ("Tap count.", "Count", ["Count", "Sleep", "Push"])],
        ["数量主题只使用大号软积木，避免小块入口风险。", "可以点三块大积木说 `one, two, three`。", "不表现小零件、高塔、扔积木或竞争速度。"],
        "点击三块软积木", "三块大号软积木放在星星地毯上", "123 Three"
    ),
    make_lesson(
        124, 31, "Count Review", "Count with me.", ["one", "two", "three", "count"],
        "能复习 one、two、three 和 count", "能任选一个数字词跟读",
        [
            ("星星、两个杯子、三块积木同时出现", "Count with me.", "开场", "物品亮", "A star, two cups, and three blocks sit in the room."),
            ("Nia 指一颗星星", "One star.", "one", "星星亮", "Nia points to one star."),
            ("Lumo 指两个杯子", "Two cups.", "two", "杯子亮", "Lumo points to two cups."),
            ("Bobo 指三块积木", "Three blocks.", "three", "积木亮", "Bobo points to three blocks."),
            ("三组物品整齐排列", "Count one, two, three.", "count", "物品依次亮", "The three object groups line up clearly."),
            ("三个无字圆点图标", "One, two, three.", "综合复习", "圆点依次亮", "Three wordless dots glow one by one."),
            ("孩子视角三组物品", "Pick one.", "输出邀请", "物品亮", "The count objects wait for the child."),
            ("三位角色挥手", "Count with me.", "收束", "全场暖光亮", "The friends wave beside the count objects."),
        ],
        [("Tap one.", "One", ["One", "Four", "Run"]), ("Tap two.", "Two", ["Two", "Hot", "Sleep"]), ("Tap three.", "Three", ["Three", "Sharp", "Throw"])],
        ["复习课只做 1 到 3 的口头点数，不使用书面数字。", "孩子可以任选一组物品点一点。", "不要求孩子完成计数题或速度比赛。"],
        "数量 1-3 复习", "一颗星星、两个杯子、三块大软积木在地毯上", "124 Count"
    ),
    make_lesson(
        125, 32, "Big and Small", "Big and small.", ["big", "small", "block"],
        "能区分 big、small 和 block 的大小场景", "能跟读 `Big and small.` 或 `big`",
        [
            ("一大一小两块软积木", "Big and small.", "核心句", "积木亮", "One big soft block and one small soft block sit on the rug."),
            ("Nia 指大积木", "Big block.", "big", "大积木亮", "Nia points to the big block."),
            ("Lumo 指小积木", "Small block.", "small", "小积木亮", "Lumo points to the small block."),
            ("Bobo 把两块积木并排", "Big, small.", "对比", "两块积木亮", "Bobo places the blocks side by side."),
            ("Nia 双手比大", "Big.", "big", "Nia 柔光", "Nia shows a big shape with her arms."),
            ("Nia 两手靠近比小", "Small.", "small", "Nia 柔光", "Nia shows a small shape with her hands."),
            ("孩子视角两块积木", "Pick one.", "输出邀请", "积木亮", "The two blocks wait for the child."),
            ("三位角色挥手", "Big and small.", "收束", "全场暖光亮", "The friends wave beside the blocks."),
        ],
        [("Tap big.", "Big", ["Big", "Small", "Quiet"]), ("Tap small.", "Small", ["Small", "Big", "Loud"]), ("Tap block.", "Block", ["Block", "Cup", "Moon"])],
        ["大小对比只用大号安全物和中号物，不使用可入口小物件。", "可以用两块不同大小积木说 `big`、`small`。", "不表现硬物砸落、尖角或小零件。"],
        "点击大/小积木", "一大一小两块软积木并排", "125 Size"
    ),
    make_lesson(
        126, 32, "Up and Down", "Up and down.", ["up", "down", "hand"],
        "能听懂 up、down 和 hand 的动作对比", "能跟读 `Up and down.` 或 `up`",
        [
            ("Nia 举起手", "Hands up.", "up", "手边亮", "Nia raises her hands."),
            ("Nia 放下手", "Hands down.", "down", "手边柔光", "Nia lowers her hands."),
            ("Lumo 举起小盾", "Up.", "up", "Lumo 发光", "Lumo lifts a small shield."),
            ("Lumo 放低小盾", "Down.", "down", "Lumo 柔光", "Lumo lowers the shield."),
            ("Bobo 屏幕笑脸上下跳动", "Up and down.", "核心句", "Bobo 屏幕亮", "Bobo shows a gentle up and down motion."),
            ("三位角色一起做慢动作", "Slowly.", "slowly 复现", "全员柔光", "The friends move slowly."),
            ("孩子视角两只手图标", "Your turn.", "输出邀请", "图标亮", "Two wordless hand icons invite movement."),
            ("三位角色挥手", "Up and down.", "收束", "全场暖光亮", "The friends wave after the action."),
        ],
        [("Tap up.", "Up", ["Up", "Down", "Sleep"]), ("Tap down.", "Down", ["Down", "Up", "Hot"]), ("Tap hand.", "Hand", ["Hand", "Foot", "Cup"])],
        ["动作对比只做慢速手部动作，不要求跳跃。", "可以举手和放手练习 `up`、`down`。", "不表现爬高、抛物、摔倒或快速动作。"],
        "举手/放手动作", "三位角色在地毯上做慢速手部动作", "126 UpDown"
    ),
    make_lesson(
        127, 32, "Long and Short", "Long and short.", ["long", "short", "line"],
        "能指出 long、short 和 line 的线条对比", "能跟读 `Long and short.` 或 `long`",
        [
            ("地毯上两条软布线", "I see lines.", "line", "线条亮", "Two soft cloth lines lie on the rug."),
            ("Nia 指长软布线", "Long line.", "long", "长线亮", "Nia points to the long soft line."),
            ("Lumo 指短软布线", "Short line.", "short", "短线亮", "Lumo points to the short soft line."),
            ("Bobo 把两条线并排", "Long and short.", "核心句", "两条线亮", "Bobo places the lines side by side."),
            ("Nia 沿长线慢慢指", "Long.", "long", "长线柔光", "Nia traces the long line slowly."),
            ("Nia 点短线", "Short.", "short", "短线柔光", "Nia taps the short line."),
            ("孩子视角两条软线", "Pick one.", "输出邀请", "线条亮", "The long and short lines wait for the child."),
            ("三位角色挥手", "Long and short.", "收束", "全场暖光亮", "The friends wave beside the lines."),
        ],
        [("Tap long.", "Long", ["Long", "Short", "Up"]), ("Tap short.", "Short", ["Short", "Long", "Down"]), ("Tap line.", "Line", ["Line", "Cup", "Moon"])],
        ["长短对比使用宽软布线，不使用绳子缠绕。", "可以用两条纸条或布条指一指。", "不表现细绳、缠绕脖子、剪刀或小纸片入口。"],
        "点击长线和短线", "两条宽软布线放在地毯上", "127 Lines"
    ),
    make_lesson(
        128, 32, "Opposites Review", "Find opposites.", ["big", "small", "up", "down"],
        "能复习 big、small、up 和 down", "能任选一个反义词跟读",
        [
            ("大小积木和上下手势图标同时出现", "Find opposites.", "开场", "物品亮", "Big and small blocks sit beside up and down hand icons."),
            ("Nia 指大积木", "Big.", "big", "大积木亮", "Nia points to the big block."),
            ("Lumo 指小积木", "Small.", "small", "小积木亮", "Lumo points to the small block."),
            ("Nia 举手", "Up.", "up", "手边亮", "Nia raises her hands."),
            ("Nia 放下手", "Down.", "down", "手边柔光", "Nia lowers her hands."),
            ("四个无字图标：大、小、上、下", "Big, small, up, down.", "综合复习", "图标依次亮", "Wordless icons show big, small, up, and down."),
            ("孩子视角四个选项", "Pick one.", "输出邀请", "图标亮", "The opposite icons wait for the child."),
            ("三位角色挥手", "Find opposites.", "收束", "全场暖光亮", "The friends wave beside the icons."),
        ],
        [("Tap big.", "Big", ["Big", "Small", "Hot"]), ("Tap small.", "Small", ["Small", "Big", "Run"]), ("Tap up.", "Up", ["Up", "Down", "Sleep"])],
        ["复习课只做安全物品和手势对比。", "孩子可以任选一个词模仿动作。", "不表现跳跃、爬高、细绳或速度竞赛。"],
        "反义词复习", "大小软积木和上下手势图标在地毯上", "128 Opposite"
    ),
    make_lesson(
        129, 33, "I Can See", "I can see.", ["see", "eyes", "picture"],
        "能听懂 see、eyes 和 picture 的视觉观察场景", "能跟读 `I can see.` 或 `see`",
        [
            ("无字图画卡放在低桌上", "I see a picture.", "picture", "图画卡亮", "A wordless picture card sits on a low table."),
            ("Nia 指自己的眼睛", "My eyes.", "eyes", "眼睛柔光", "Nia points gently to her eyes."),
            ("Nia 看图画卡", "I can see.", "核心句", "Nia 柔光", "Nia looks at the picture card."),
            ("Lumo 指星星图画", "I see a star.", "see 复现", "星星亮", "Lumo points to a star picture."),
            ("Bobo 看图画卡", "Bobo can see.", "can 复现", "Bobo 屏幕亮", "Bobo looks at the card."),
            ("三位角色一起看卡片", "Look and see.", "look 复现", "全员柔光", "The friends look at the card together."),
            ("孩子视角无字图画卡", "Your turn.", "输出邀请", "图画卡亮", "The picture card waits for the child."),
            ("三位角色挥手", "I can see.", "收束", "全场暖光亮", "The friends wave beside the picture card."),
        ],
        [("Tap eyes.", "Eyes", ["Eyes", "Hands", "Feet"]), ("Tap picture.", "Picture", ["Picture", "Cup", "Bag"]), ("Tap see.", "See", ["See", "Hear", "Sleep"])],
        ["观察主题只用无字图画卡，不做视力测试。", "可以让孩子指一指看到的星星或颜色。", "不表现强光直射眼睛、复杂文字或屏幕长时间观看。"],
        "看无字图画卡", "无字图画卡和低矮桌面", "129 See"
    ),
    make_lesson(
        130, 33, "I Can Hear", "I can hear.", ["hear", "ears", "sound"],
        "能听懂 hear、ears 和 sound 的听辨场景", "能跟读 `I can hear.` 或 `hear`",
        [
            ("小铃放在软垫上", "I hear a sound.", "sound", "小铃亮", "A small bell sits on a soft mat."),
            ("Nia 指耳朵", "My ears.", "ears", "耳边柔光", "Nia points gently to her ears."),
            ("Lumo 轻轻摇铃", "I can hear.", "核心句", "Lumo 发光", "Lumo shakes the bell softly."),
            ("Bobo 屏幕上无字声波图标", "Soft sound.", "soft 复现", "Bobo 屏幕亮", "Bobo shows a wordless sound wave icon."),
            ("Nia 微笑听声音", "I hear the bell.", "hear", "Nia 柔光", "Nia listens to the bell."),
            ("小铃安静放回软垫", "Quiet, please.", "quiet 复现", "小铃柔光", "The bell rests quietly on the mat."),
            ("孩子视角小铃", "Your turn.", "输出邀请", "小铃亮", "The bell waits for a gentle sound."),
            ("三位角色挥手", "I can hear.", "收束", "全场暖光亮", "The friends wave beside the bell."),
        ],
        [("Tap ears.", "Ears", ["Ears", "Eyes", "Hands"]), ("Tap sound.", "Sound", ["Sound", "Picture", "Moon"]), ("Tap hear.", "Hear", ["Hear", "See", "Run"])],
        ["听觉主题只表现轻柔声音，不靠近耳朵。", "可以轻轻摇铃或拍手一次。", "不表现高分贝、尖叫、贴耳播放或持续噪音。"],
        "听轻柔小铃声", "小铃和软垫在温暖房间里", "130 Hear"
    ),
    make_lesson(
        131, 33, "Soft Touch", "It is soft.", ["touch", "soft", "pillow"],
        "能听懂 touch、soft 和 pillow 的触觉场景", "能跟读 `It is soft.` 或 `soft`",
        [
            ("软枕头在地毯上", "I see a pillow.", "pillow", "枕头亮", "A soft pillow sits on the rug."),
            ("Nia 伸出手", "Touch gently.", "touch", "手边柔光", "Nia reaches out gently."),
            ("Nia 轻触枕头", "It is soft.", "核心句", "枕头柔光", "Nia touches the pillow softly."),
            ("Lumo 也轻触枕头", "Soft pillow.", "soft", "Lumo 发光", "Lumo touches the soft pillow."),
            ("Bobo 点头微笑", "Soft, soft.", "soft 复现", "Bobo 屏幕亮", "Bobo smiles beside the pillow."),
            ("枕头放回地毯中央", "Touch gently.", "gently", "枕头亮", "The pillow rests in the middle of the rug."),
            ("孩子视角软枕头", "Your turn.", "输出邀请", "枕头亮", "The pillow waits for the child."),
            ("三位角色挥手", "It is soft.", "收束", "全场暖光亮", "The friends wave beside the pillow."),
        ],
        [("Tap pillow.", "Pillow", ["Pillow", "Block", "Cup"]), ("Tap soft.", "Soft", ["Soft", "Hard", "Fast"]), ("Tap touch.", "Touch", ["Touch", "Throw", "Run"])],
        ["触摸主题只使用柔软大物件，动作轻轻做。", "可以摸摸枕头或软布说 `soft`。", "不表现尖锐、热、脏、未知材质或强迫触摸。"],
        "轻触软枕头", "软枕头放在星星地毯上", "131 Touch"
    ),
    make_lesson(
        132, 33, "Senses Review", "I can sense.", ["see", "hear", "touch", "soft"],
        "能复习 see、hear、touch 和 soft", "能任选一个感官词跟读",
        [
            ("图画卡、小铃和软枕头同时出现", "I can sense.", "开场", "物品亮", "A picture card, bell, and pillow sit together."),
            ("Nia 看图画卡", "I can see.", "see", "图画卡亮", "Nia looks at the picture card."),
            ("Lumo 轻轻摇铃", "I can hear.", "hear", "小铃亮", "Lumo shakes the bell softly."),
            ("Bobo 轻触枕头", "I can touch.", "touch", "枕头亮", "Bobo touches the pillow gently."),
            ("Nia 指枕头", "It is soft.", "soft", "枕头柔光", "Nia points to the soft pillow."),
            ("三个无字图标：眼睛、耳朵、手", "See, hear, touch.", "综合复习", "图标依次亮", "Wordless icons show eyes, ears, and hand."),
            ("孩子视角三个物品", "Pick one.", "输出邀请", "物品亮", "The sense objects wait for the child."),
            ("三位角色挥手", "I can sense.", "收束", "全场暖光亮", "The friends wave beside the objects."),
        ],
        [("Tap see.", "See", ["See", "Sleep", "Hot"]), ("Tap hear.", "Hear", ["Hear", "Run", "Sharp"]), ("Tap touch.", "Touch", ["Touch", "Throw", "Dark"])],
        ["复习课只做看、听、轻触三类低刺激体验。", "孩子可以任选一个物品指一指或摸一摸。", "不表现强光、高分贝、尖锐材质或卫生风险。"],
        "感官体验复习", "无字图画卡、小铃和软枕头在地毯上", "132 Sense"
    ),
    make_lesson(
        133, 34, "Sit Down", "Sit down.", ["sit", "down", "rug"],
        "能听懂 sit、down 和 rug 的围坐场景", "能跟读 `Sit down.` 或 `sit`",
        [
            ("圆形星星地毯在房间中央", "I see a rug.", "rug", "地毯亮", "A round star rug sits in the room."),
            ("Nia 站在地毯边", "Stand here.", "stand 复现", "Nia 柔光", "Nia stands beside the rug."),
            ("Nia 坐到地毯上", "Sit down.", "核心句", "地毯柔光", "Nia sits down on the rug."),
            ("Lumo 坐在 Nia 身边", "Lumo sits down.", "sit", "Lumo 发光", "Lumo sits beside Nia."),
            ("Bobo 坐成小圆圈", "Sit together.", "together 复现", "Bobo 屏幕亮", "Bobo sits with the friends."),
            ("三位角色安静坐好", "Ready.", "ready 复现", "全员柔光", "The friends sit calmly on the rug."),
            ("孩子视角空位在地毯上", "Your turn.", "输出邀请", "空位亮", "A space on the rug waits for the child."),
            ("三位角色挥手", "Sit down.", "收束", "全场暖光亮", "The friends wave while sitting."),
        ],
        [("Tap rug.", "Rug", ["Rug", "Cup", "Moon"]), ("Tap sit.", "Sit", ["Sit", "Run", "Jump"]), ("Tap down.", "Down", ["Down", "Up", "Hot"])],
        ["围坐主题只表现自愿坐在软地毯上，不强迫久坐。", "可以坐一下再站起来，保持轻松。", "不表现惩罚坐、约束身体、拥挤或高椅跌落。"],
        "坐到星星地毯上", "圆形星星地毯和温暖活动室", "133 Sit"
    ),
    make_lesson(
        134, 34, "Listen Please", "Listen, please.", ["listen", "please", "quiet"],
        "能听懂 listen、please 和 quiet 的集体活动场景", "能跟读 `Listen, please.` 或 `please`",
        [
            ("三位角色坐在地毯上", "Sit down.", "sit 复现", "地毯柔光", "The friends sit on the rug."),
            ("Nia 轻轻把手放在耳边", "Listen, please.", "核心句", "Nia 柔光", "Nia makes a gentle listening gesture."),
            ("Lumo 柔光变安静", "Quiet, please.", "quiet", "Lumo 柔光", "Lumo glows softly."),
            ("Bobo 小声播放铃声图标", "I hear a sound.", "hear 复现", "Bobo 屏幕亮", "Bobo shows a soft sound icon."),
            ("朋友一起看向 Nia", "We listen.", "listen", "全员柔光", "The friends look and listen."),
            ("Nia 微笑点头", "Thank you.", "thank you 复现", "Nia 柔光", "Nia smiles gently."),
            ("孩子视角安静图标", "Your turn.", "输出邀请", "图标亮", "A quiet listening icon waits for the child."),
            ("三位角色挥手", "Listen, please.", "收束", "全场暖光亮", "The friends wave from the rug."),
        ],
        [("Tap listen.", "Listen", ["Listen", "Run", "Throw"]), ("Tap please.", "Please", ["Please", "Fast", "Hot"]), ("Tap quiet.", "Quiet", ["Quiet", "Loud", "Sharp"])],
        ["倾听主题保持温和请求，不做强制安静。", "可以听一声轻铃后说 `listen`。", "不表现斥责、罚坐、高分贝或长时间安静要求。"],
        "安静听一听", "三位角色围坐在星星地毯上", "134 Listen"
    ),
    make_lesson(
        135, 34, "Raise Your Hand", "Raise your hand.", ["raise", "hand", "turn"],
        "能听懂 raise、hand 和 turn 的轮流表达场景", "能跟读 `Raise your hand.` 或 `hand`",
        [
            ("Nia 坐在地毯上看向朋友", "My turn?", "turn 复现", "Nia 柔光", "Nia sits on the rug and looks at the friends."),
            ("Nia 举起一只手", "Raise your hand.", "核心句", "手边亮", "Nia raises one hand."),
            ("Lumo 也举起小手", "Hand up.", "hand/up 复现", "Lumo 发光", "Lumo raises one small hand."),
            ("Bobo 等待轮到自己", "Wait, please.", "wait 复现", "Bobo 屏幕亮", "Bobo waits calmly."),
            ("Nia 指向 Bobo", "Your turn.", "turn", "Bobo 柔光", "Nia gives Bobo a turn."),
            ("Bobo 举起小手", "Raise hand.", "raise", "手边亮", "Bobo raises one hand."),
            ("孩子视角一只手图标", "Your turn.", "输出邀请", "手形图标亮", "A wordless raised hand icon waits for the child."),
            ("三位角色挥手", "Raise your hand.", "收束", "全场暖光亮", "The friends wave after taking turns."),
        ],
        [("Tap hand.", "Hand", ["Hand", "Foot", "Cup"]), ("Tap raise.", "Raise", ["Raise", "Throw", "Sleep"]), ("Tap turn.", "Turn", ["Turn", "Push", "Hot"])],
        ["举手主题只表现轮流表达，不做课堂压力。", "孩子可以举一下手说 `my turn`。", "不表现抢答竞争、责备、长时间举手或拥挤队列。"],
        "举手轮流表达", "三位角色坐在地毯上轮流举手", "135 Hand"
    ),
    make_lesson(
        136, 34, "Circle Review", "Circle time.", ["sit", "listen", "hand", "turn"],
        "能复习 sit、listen、hand 和 turn", "能任选一个围坐活动词跟读",
        [
            ("三位角色围坐在星星地毯上", "Circle time.", "开场", "地毯亮", "The friends sit in a small circle on the rug."),
            ("Nia 坐下", "Sit down.", "sit", "Nia 柔光", "Nia sits down on the rug."),
            ("Lumo 做倾听手势", "Listen, please.", "listen", "Lumo 柔光", "Lumo makes a listening gesture."),
            ("Bobo 举起手", "Raise your hand.", "hand", "Bobo 屏幕亮", "Bobo raises one hand."),
            ("Nia 轮到 Bobo", "Your turn.", "turn", "Bobo 柔光", "Nia gives Bobo a turn."),
            ("四个无字图标：坐、听、举手、轮流", "Sit, listen, hand, turn.", "综合复习", "图标依次亮", "Wordless icons show sitting, listening, hand, and turn."),
            ("孩子视角圆形地毯空位", "Pick one.", "输出邀请", "地毯亮", "A space on the rug waits for the child."),
            ("三位角色挥手", "Circle time.", "收束", "全场暖光亮", "The friends wave from the circle."),
        ],
        [("Tap sit.", "Sit", ["Sit", "Run", "Hot"]), ("Tap listen.", "Listen", ["Listen", "Throw", "Sleep"]), ("Tap hand.", "Hand", ["Hand", "Foot", "Sharp"])],
        ["复习课只做温和围坐活动，不训练正式课堂纪律。", "可以任选一个动作：坐下、听、举手或轮流。", "不表现惩罚、责备、排队拥挤或强制安静。"],
        "围坐活动复习", "圆形星星地毯和温暖活动室", "136 Circle"
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
    if 'id: "Lesson 121"' in text:
        return
    marker = "\n];\n\nlet lessonIndex"
    blocks = ",\n".join(render_app_block(lesson) for lesson in LESSONS)
    text = text.replace(marker, ",\n" + blocks + marker)
    base.APP_JS.write_text(text, encoding="utf-8")


def update_chapter_list() -> None:
    text = base.CHAPTER_LIST.read_text(encoding="utf-8")
    if "| 31 | 121 | One Star |" in text:
        return
    rows = "\n".join(
        f"| {lesson['week']} | {lesson['number']} | {lesson['title']} | `{lesson['core']}` | {base.target_text(lesson['targets'])} | {lesson['chapter_task']} |"
        for lesson in LESSONS
    )
    text = text.rstrip() + "\n" + rows + "\n"
    base.CHAPTER_LIST.write_text(text, encoding="utf-8")


def update_task_list() -> None:
    text = base.TASK_LIST.read_text(encoding="utf-8")
    if "## V2.31 第三十一周扩展 4 课内容" not in text:
        insert = """## V2.31 第三十一周扩展 4 课内容

- [x] 细化 Lesson 121：One Star
- [x] 细化 Lesson 122：Two Cups
- [x] 细化 Lesson 123：Three Blocks
- [x] 细化 Lesson 124：Count Review
- [x] 生成 Lesson 121-124 图片提示词
- [x] 生成 Lesson 121-124 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 数量主题只做 1 到 3 的口头点数和物品指认。
- 不表现书面数字、计时比赛、热水玻璃杯或小零件。

## V2.32 第三十二周扩展 4 课内容

- [x] 细化 Lesson 125：Big and Small
- [x] 细化 Lesson 126：Up and Down
- [x] 细化 Lesson 127：Long and Short
- [x] 细化 Lesson 128：Opposites Review
- [x] 生成 Lesson 125-128 图片提示词
- [x] 生成 Lesson 125-128 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 反义词主题只使用安全物品、慢速手势和宽软材料。
- 不表现爬高、跳跃、细绳缠绕、剪刀或速度竞赛。

## V2.33 第三十三周扩展 4 课内容

- [x] 细化 Lesson 129：I Can See
- [x] 细化 Lesson 130：I Can Hear
- [x] 细化 Lesson 131：Soft Touch
- [x] 细化 Lesson 132：Senses Review
- [x] 生成 Lesson 129-132 图片提示词
- [x] 生成 Lesson 129-132 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 感官主题只表现看无字卡、听轻柔声音和轻触柔软大物件。
- 不表现强光、高分贝、尖锐材质、未知物触摸或卫生风险。

## V2.34 第三十四周扩展 4 课内容

- [x] 细化 Lesson 133：Sit Down
- [x] 细化 Lesson 134：Listen Please
- [x] 细化 Lesson 135：Raise Your Hand
- [x] 细化 Lesson 136：Circle Review
- [x] 生成 Lesson 133-136 图片提示词
- [x] 生成 Lesson 133-136 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 围坐活动只表现自愿坐下、温和倾听、举手和轮流。
- 不表现惩罚、责备、排队拥挤、强制安静或正式课堂压力。

"""
        text = text.replace("## V3 图片与音频资产", insert + "## V3 图片与音频资产")
    text = text.replace(
        "- [x] 为 Lesson 1-120 生成每课 8 张分镜图（Lesson 97-120 为本地原型图，可继续替换为 imagegen 终稿）",
        "- [x] 为 Lesson 1-136 生成每课 8 张分镜图（Lesson 97-136 为本地原型图，可继续替换为 imagegen 终稿）",
    )
    if "Lesson 121-136 本地 `.m4a` 音频" not in text:
        text = text.replace(
            "- [x] 用 macOS `say` 生成 Lesson 105-120 本地 `.m4a` 音频",
            "- [x] 用 macOS `say` 生成 Lesson 105-120 本地 `.m4a` 音频\n- [x] 用 macOS `say` 生成 Lesson 121-136 本地 `.m4a` 音频",
        )
    text = text.replace(
        "- [x] 将页面改为支持 Lesson 1-120 切换",
        "- [x] 将页面改为支持 Lesson 1-136 切换",
    )
    base.TASK_LIST.write_text(text, encoding="utf-8")


def update_readme() -> None:
    text = base.README.read_text(encoding="utf-8")
    text = text.replace("120 个课时清单", "136 个课时清单")
    text = text.replace("Lesson120_Bedtime_Review_完整课时.md", "Lesson136_Circle_Review_完整课时.md")
    text = text.replace("assets/images/lesson120/panel08.png", "assets/images/lesson136/panel08.png")
    text = text.replace("assets/audio/lesson120/panel08.m4a", "assets/audio/lesson136/panel08.m4a")
    text = text.replace("Lesson 01 到 Lesson 120", "Lesson 01 到 Lesson 136")
    text = text.replace("Lesson 97-120 的图片为本地原型分镜", "Lesson 97-136 的图片为本地原型分镜")
    base.README.write_text(text, encoding="utf-8")


def update_index_cache() -> None:
    path = ROOT / "app" / "static" / "index.html"
    text = path.read_text(encoding="utf-8")
    text = re.sub(r"lesson\d+", "lesson136", text)
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

    print("generated Lesson 121-136 docs/assets/app data")
    print("generated prototype images for Lesson 121-136")
    print("generated audio for Lesson 121-136" if not args.skip_audio else "skipped audio")


if __name__ == "__main__":
    main()
