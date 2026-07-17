#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Lesson 105-120 resources and fill prototype panels for 97-120."""

from __future__ import annotations

import argparse
import glob
import json
import re
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
LESSON_DIR = ROOT / "02_章节细化"
ASSET_DIR = ROOT / "04_素材规范"
IMAGE_DIR = ROOT / "assets" / "images"
AUDIO_DIR = ROOT / "assets" / "audio"
APP_JS = ROOT / "app" / "static" / "app.js"
CHAPTER_LIST = LESSON_DIR / "章节清单.md"
TASK_LIST = ROOT / "05_执行任务" / "下一步行动清单.md"
README = ROOT / "README.md"


LESSONS = [
    {
        "number": 105,
        "week": 27,
        "title": "Thank You",
        "core": "Thank you.",
        "targets": ["thank you", "kind", "smile"],
        "listening": "能在递物和微笑场景中听懂 thank you、kind、smile",
        "speaking": "能跟读 `Thank you.` 或 `thank you`",
        "flow": [
            "Warm-up：软球放在星星地毯上，朋友围坐。",
            "Learn：认识 thank you、kind、smile。",
            "Story：Nia 接过玩具后说谢谢，朋友微笑回应。",
            "Tap：点击递物、微笑和感谢场景。",
            "Say：孩子跟读 `Thank you.`",
            "Wrap-up：朋友用温和礼貌语收束。",
        ],
        "panels": [
            ("软球在地毯中央", "I see a toy.", "toy 复现", "软球亮", "A large soft ball sits on the star rug."),
            ("Bobo 把软球递给 Nia", "Here you are.", "递物复现", "软球亮", "Bobo offers the soft ball to Nia."),
            ("Nia 接过软球微笑", "Thank you.", "核心句", "Nia 柔光", "Nia receives the ball and smiles."),
            ("Lumo 微笑点头", "A kind friend.", "kind", "Lumo 发光", "Lumo smiles kindly beside Nia."),
            ("Bobo 屏幕笑脸", "I see a smile.", "smile", "Bobo 屏幕亮", "Bobo shows a happy smile on its screen face."),
            ("三位角色轮流递软球", "Thank you, friend.", "friend 复现", "全员柔光", "The friends pass the soft ball gently."),
            ("孩子视角软球在前方", "Your turn.", "输出邀请", "软球亮", "The soft ball waits in front for the child's turn."),
            ("三位角色挥手微笑", "Thank you.", "收束", "全场暖光亮", "Nia, Lumo, and Bobo wave with warm smiles."),
        ],
        "quizzes": [("Tap thank you.", "Thank you", ["Thank you", "Run", "Hot"]), ("Tap smile.", "Smile", ["Smile", "Door", "Moon"]), ("Tap kind.", "Kind", ["Kind", "Loud", "Sharp"])],
        "notes": [
            "礼貌表达只放在温和递物场景中，不要求孩子机械重复。",
            "可以把一个大软球递给孩子，听到后一起说 `Thank you.`",
            "不表现抢夺、责备、输赢或强迫道谢。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English kind words lesson, cute snow princess Nia, golden star-hat light mascot Lumo, round friendly robot Bobo, cozy play room, star rug, large soft ball, gentle giving, thank you, kind smile, no conflict, no written words, no copyrighted characters.",
        "chapter_task": "递物说谢谢",
    },
    {
        "number": 106,
        "week": 27,
        "title": "Help Me Please",
        "core": "Help me, please.",
        "targets": ["help", "please", "bag"],
        "listening": "能听懂 help、please 和 bag 的日常请求场景",
        "speaking": "能跟读 `Help me, please.` 或 `please`",
        "flow": [
            "Warm-up：一个轻软小包放在地毯边。",
            "Learn：认识 help、please、bag。",
            "Story：Nia 礼貌请求朋友帮忙拿轻软小包。",
            "Tap：点击小包、帮忙动作和 please 场景。",
            "Say：孩子跟读 `Help me, please.`",
            "Wrap-up：朋友一起完成小帮助。",
        ],
        "panels": [
            ("轻软小包在地毯边", "I see a bag.", "bag", "小包亮", "A small soft bag sits beside the star rug."),
            ("Nia 看向小包伸手", "Help me, please.", "核心句", "Nia 柔光", "Nia asks for help with an open hand."),
            ("Lumo 轻轻拿起小包", "I can help.", "help 复现", "Lumo 发光", "Lumo gently picks up the soft bag."),
            ("Lumo 把小包递给 Nia", "Here you are.", "递物复现", "小包亮", "Lumo gives the soft bag to Nia."),
            ("Nia 微笑道谢", "Thank you.", "thank you 复现", "Nia 柔光", "Nia smiles and says thanks."),
            ("Bobo 指向另一个轻软小包", "Help Bobo, please.", "please", "Bobo 屏幕亮", "Bobo asks politely for help with a soft bag."),
            ("三位角色一起把小包放进篮子", "We can help.", "we 复现", "篮子亮", "The friends put the soft bag into a low basket together."),
            ("三位角色挥手", "Help me, please.", "收束", "全场暖光亮", "The friends wave in the cozy room."),
        ],
        "quizzes": [("Tap bag.", "Bag", ["Bag", "Pillow", "Book"]), ("Tap help.", "Help", ["Help", "Hide", "Jump"]), ("Tap please.", "Please", ["Please", "Fast", "Dark"])],
        "notes": [
            "帮忙主题只表现轻软小包，不表现重物、高处或危险工具。",
            "可以让孩子递一个软布袋或玩偶，说 `please`。",
            "不表现命令、催促、摔倒或过重负担。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English help me please lesson, Nia, Lumo, Bobo, cozy play room, low basket, small soft bag, polite asking, gentle helping, no heavy object, no climbing, no written words, no copyrighted characters.",
        "chapter_task": "礼貌请求帮忙",
    },
    {
        "number": 107,
        "week": 27,
        "title": "Good Job",
        "core": "Good job!",
        "targets": ["good job", "try", "again"],
        "listening": "能在完成小任务后听懂 good job、try、again",
        "speaking": "能跟读 `Good job!` 或 `try again`",
        "flow": [
            "Warm-up：地毯上有大号星星积木。",
            "Learn：认识 good job、try、again。",
            "Story：朋友尝试摆好星星积木，互相鼓励。",
            "Tap：点击尝试、成功和鼓励场景。",
            "Say：孩子跟读 `Good job!`",
            "Wrap-up：用鼓励语温和收束。",
        ],
        "panels": [
            ("大号星星积木在地毯上", "I see a star.", "star 复现", "星星积木亮", "A large soft star block sits on the rug."),
            ("Bobo 尝试扶正星星积木", "Try, Bobo.", "try", "Bobo 柔光", "Bobo tries to stand the soft star block upright."),
            ("星星积木轻轻歪了一点", "Try again.", "again", "星星积木亮", "The soft star block leans gently."),
            ("Lumo 帮忙扶稳星星积木", "I can help.", "help 复现", "Lumo 发光", "Lumo helps steady the soft star block."),
            ("星星积木立好", "Good job!", "核心句", "星星积木亮", "The soft star block stands upright."),
            ("Nia 对 Bobo 微笑", "Good job, Bobo!", "鼓励", "Nia 柔光", "Nia smiles kindly at Bobo."),
            ("三位角色一起鼓掌", "Good job, friends!", "friends 复现", "全员亮", "The friends clap gently together."),
            ("三位角色挥手", "Good job!", "收束", "全场暖光亮", "Nia, Lumo, and Bobo wave beside the star block."),
        ],
        "quizzes": [("Tap star.", "Star", ["Star", "Cup", "Door"]), ("Tap try.", "Try", ["Try", "Sleep", "Hot"]), ("Tap good job.", "Good job", ["Good job", "No", "Fast"])],
        "notes": [
            "鼓励语只用于温和尝试和小成功，不制造输赢压力。",
            "可以让孩子搭一个大积木，完成后说 `Good job!`",
            "不表现失败责备、哭闹、比赛排名或小零件。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English encouragement lesson, Nia, Lumo, Bobo, cozy play room, large soft star block, trying again, gentle help, good job, warm encouragement, no competition, no crying, no written words, no copyrighted characters.",
        "chapter_task": "完成小任务后鼓励",
    },
    {
        "number": 108,
        "week": 27,
        "title": "Kind Words Review",
        "core": "Kind words.",
        "targets": ["thank you", "please", "good job", "kind"],
        "listening": "能在复习场景中听懂 thank you、please、good job 和 kind",
        "speaking": "能任选一个礼貌词或短句跟读",
        "flow": [
            "Warm-up：地毯上放着软球、小包和星星积木。",
            "Review：复习 thank you、please、good job、kind。",
            "Story：三位角色递物、请求帮忙并互相鼓励。",
            "Tap：点击礼貌表达对应场景。",
            "Say：孩子任选一个短句输出。",
            "Wrap-up：用 `Kind words.` 收束。",
        ],
        "panels": [
            ("软球、小包和星星积木在地毯上", "Kind words.", "开场", "物品亮", "A soft ball, soft bag, and star block sit on the rug."),
            ("Bobo 递给 Nia 软球", "Thank you.", "thank you", "Nia 柔光", "Nia receives the soft ball."),
            ("Nia 请求 Lumo 帮忙拿小包", "Help me, please.", "please", "小包亮", "Nia asks Lumo for help with the soft bag."),
            ("星星积木立好", "Good job!", "good job", "星星积木亮", "The star block stands upright."),
            ("三位角色相互微笑", "A kind friend.", "kind", "全员柔光", "The three friends smile kindly."),
            ("三个无字图标：递物、请求、鼓励", "Thank you, please, good job.", "综合复习", "图标依次亮", "Three wordless icons show giving, asking, and cheering."),
            ("孩子视角三个物品在前方", "Pick one.", "输出邀请", "物品亮", "The three kind-word objects wait for the child."),
            ("三位角色挥手", "Kind words.", "收束", "全场暖光亮", "The friends wave in the warm play room."),
        ],
        "quizzes": [("Tap thank you.", "Thank you", ["Thank you", "Run", "Hot"]), ("Tap please.", "Please", ["Please", "Throw", "Dark"]), ("Tap good job.", "Good job", ["Good job", "Push", "Sharp"])],
        "notes": [
            "复习课只强化温和礼貌表达，不要求孩子一次说完整句。",
            "可以任选一个词：`please`、`thank you` 或 `good job`。",
            "不表现争抢、责备、比赛、输赢或强迫表达。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English kind words review, Nia, Lumo, Bobo, cozy play room, soft ball, soft bag, large star block, thank you, please, good job, kind friends, no conflict, no written words, no copyrighted characters.",
        "chapter_task": "礼貌语复习",
    },
    {
        "number": 109,
        "week": 28,
        "title": "Walk Slowly",
        "core": "Walk slowly.",
        "targets": ["walk", "slowly", "feet"],
        "listening": "能听懂 walk、slowly 和 feet 的安全走动场景",
        "speaking": "能跟读 `Walk slowly.` 或 `slowly`",
        "flow": [
            "Warm-up：室内星星路线垫铺在地面。",
            "Learn：认识 walk、slowly、feet。",
            "Story：Nia 在路线垫上慢慢走。",
            "Tap：点击脚、路线和慢走动作。",
            "Say：孩子跟读 `Walk slowly.`",
            "Wrap-up：安全走到朋友身边。",
        ],
        "panels": [
            ("地面有宽宽的星星路线垫", "I see a path.", "path", "路线垫亮", "A wide soft star path lies on the floor."),
            ("Nia 站在线路起点", "My feet.", "feet", "脚边柔光", "Nia looks at her feet on the path."),
            ("Nia 慢慢向前走", "Walk slowly.", "核心句", "Nia 柔光", "Nia walks slowly on the soft path."),
            ("Lumo 做慢动作手势", "Slowly, slowly.", "slowly", "Lumo 发光", "Lumo makes a slow gentle gesture."),
            ("Bobo 在终点微笑等待", "Walk to Bobo.", "walk", "Bobo 屏幕亮", "Bobo waits at the end of the path."),
            ("Nia 到达 Bobo 身边", "Good job!", "鼓励复现", "全员柔光", "Nia reaches Bobo safely."),
            ("孩子视角路线垫在前方", "Your turn.", "输出邀请", "路线垫亮", "The path waits for the child's turn."),
            ("三位角色站在路线垫旁挥手", "Walk slowly.", "收束", "全场暖光亮", "The friends wave beside the soft path."),
        ],
        "quizzes": [("Tap feet.", "Feet", ["Feet", "Hair", "Cup"]), ("Tap walk.", "Walk", ["Walk", "Jump", "Sleep"]), ("Tap slowly.", "Slowly", ["Slowly", "Fast", "Loud"])],
        "notes": [
            "安全走动只表现室内软路线垫，不表现真实道路或拥挤场景。",
            "孩子可以在原地慢慢走两步，跟读 `slowly`。",
            "不表现奔跑、摔倒、车辆、楼梯或危险边缘。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English safe walking lesson, Nia, Lumo, Bobo, indoor soft star path mat, slow walking, feet, warm play room, no road, no stairs, no falling, no running, no written words, no copyrighted characters.",
        "chapter_task": "沿路线垫慢走",
    },
    {
        "number": 110,
        "week": 28,
        "title": "Hold My Hand",
        "core": "Hold my hand.",
        "targets": ["hold", "hand", "together"],
        "listening": "能听懂 hold、hand 和 together 的牵手场景",
        "speaking": "能跟读 `Hold my hand.` 或 `hand`",
        "flow": [
            "Warm-up：朋友准备一起走过室内路线垫。",
            "Learn：认识 hold、hand、together。",
            "Story：Nia 和 Lumo 轻轻牵手慢走。",
            "Tap：点击手、一起走和朋友。",
            "Say：孩子跟读 `Hold my hand.`",
            "Wrap-up：牵手后温和挥手。",
        ],
        "panels": [
            ("Nia 伸出手", "My hand.", "hand", "手边柔光", "Nia shows one open hand."),
            ("Lumo 伸出小手", "Your hand.", "your 复现", "Lumo 发光", "Lumo shows one small hand."),
            ("Nia 和 Lumo 轻轻牵手", "Hold my hand.", "核心句", "牵手处亮", "Nia and Lumo hold hands gently."),
            ("两位角色在线路垫上慢走", "Walk together.", "together", "路线垫亮", "Nia and Lumo walk together on the soft path."),
            ("Bobo 在旁边微笑", "Together.", "together", "Bobo 屏幕亮", "Bobo smiles as the friends walk together."),
            ("三位角色围成小圈", "Friends together.", "friends 复现", "全员柔光", "The friends make a small gentle circle."),
            ("孩子视角伸出的友好手势", "Your turn.", "输出邀请", "手边柔光", "A friendly open hand invites the child."),
            ("三位角色挥手", "Hold my hand.", "收束", "全场暖光亮", "The friends wave beside the soft path."),
        ],
        "quizzes": [("Tap hand.", "Hand", ["Hand", "Foot", "Book"]), ("Tap hold.", "Hold", ["Hold", "Throw", "Hide"]), ("Tap together.", "Together", ["Together", "Alone", "Fast"])],
        "notes": [
            "牵手只表现轻轻牵和一起走，尊重孩子是否愿意模仿。",
            "可以用玩偶之间牵手示范，不强迫孩子和成人牵手。",
            "不表现拉扯、拖拽、人群、道路或陌生人场景。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English hold my hand lesson, Nia, Lumo, Bobo, indoor soft path mat, gentle hand holding, walk together, warm safe room, no pulling, no crowd, no road, no written words, no copyrighted characters.",
        "chapter_task": "轻轻牵手一起走",
    },
    {
        "number": 111,
        "week": 28,
        "title": "Stop and Look",
        "core": "Stop and look.",
        "targets": ["stop", "look", "path"],
        "listening": "能在室内路径游戏中听懂 stop、look、path",
        "speaking": "能跟读 `Stop and look.` 或 `stop`",
        "flow": [
            "Warm-up：星星路线垫上有一个大号停一停图标。",
            "Learn：认识 stop、look、path。",
            "Story：Nia 走到图标前停下并看一看。",
            "Tap：点击停一停图标、眼睛和路线。",
            "Say：孩子跟读 `Stop and look.`",
            "Wrap-up：看清楚后继续慢走。",
        ],
        "panels": [
            ("星星路线垫上有大号停一停图标", "I see a path.", "path", "路线垫亮", "A soft star path has a big hand icon."),
            ("Nia 走到图标前", "Walk slowly.", "复现", "Nia 柔光", "Nia walks slowly toward the hand icon."),
            ("Nia 在图标前停下", "Stop.", "stop", "手形图标亮", "Nia stops at the big hand icon."),
            ("Nia 抬头看向前方", "Look.", "look", "眼睛柔光", "Nia looks ahead calmly."),
            ("Lumo 也停下并看一看", "Stop and look.", "核心句", "Lumo 发光", "Lumo stops and looks on the path."),
            ("Bobo 点头微笑", "Good job!", "鼓励复现", "Bobo 屏幕亮", "Bobo smiles and nods."),
            ("孩子视角路线垫和停一停图标", "Your turn.", "输出邀请", "图标亮", "The soft path and hand icon wait for the child."),
            ("三位角色安全走完路线", "Stop and look.", "收束", "全场暖光亮", "The friends finish the path safely."),
        ],
        "quizzes": [("Tap stop.", "Stop", ["Stop", "Run", "Sleep"]), ("Tap look.", "Look", ["Look", "Throw", "Hot"]), ("Tap path.", "Path", ["Path", "Water", "Book"])],
        "notes": [
            "停和看只做室内路径游戏，不模拟真实交通训练。",
            "可以在地上放一个大手掌图标，让孩子停一停再走。",
            "不表现马路、车辆、危险警示、摔倒或惊吓。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English stop and look lesson, Nia, Lumo, Bobo, indoor soft star path, large wordless hand icon, calm stopping and looking, no road, no cars, no danger, no written words, no copyrighted characters.",
        "chapter_task": "听口令停下看一看",
    },
    {
        "number": 112,
        "week": 28,
        "title": "Walk Review",
        "core": "Walk safely.",
        "targets": ["walk", "hold", "stop", "look"],
        "listening": "能复习 walk、hold、stop 和 look",
        "speaking": "能任选一个安全走动词跟读",
        "flow": [
            "Warm-up：室内路线垫、牵手和停一停图标同时出现。",
            "Review：复习 walk、hold、stop、look。",
            "Story：朋友慢走、牵手、停下并看一看。",
            "Tap：点击对应动作。",
            "Say：孩子任选一个词输出。",
            "Wrap-up：用 `Walk safely.` 收束。",
        ],
        "panels": [
            ("路线垫和大号手形图标在地面", "Walk safely.", "开场", "路线垫亮", "A soft path and big hand icon sit on the floor."),
            ("Nia 在线路垫上慢走", "Walk slowly.", "walk", "Nia 柔光", "Nia walks slowly on the path."),
            ("Nia 和 Lumo 轻轻牵手", "Hold my hand.", "hold", "牵手处亮", "Nia and Lumo hold hands gently."),
            ("Nia 在手形图标前停下", "Stop.", "stop", "图标亮", "Nia stops at the hand icon."),
            ("Nia 看向前方", "Look.", "look", "眼睛柔光", "Nia looks calmly ahead."),
            ("四个无字图标：走、牵手、停、看", "Walk, hold, stop, look.", "综合复习", "图标依次亮", "Four wordless icons show walking, holding, stopping, and looking."),
            ("孩子视角路线垫在前方", "Pick one.", "输出邀请", "路线垫亮", "The path waits for the child to choose."),
            ("三位角色挥手", "Walk safely.", "收束", "全场暖光亮", "The friends wave beside the safe path."),
        ],
        "quizzes": [("Tap walk.", "Walk", ["Walk", "Sleep", "Hot"]), ("Tap hold.", "Hold", ["Hold", "Push", "Dark"]), ("Tap stop.", "Stop", ["Stop", "Run", "Sharp"])],
        "notes": [
            "复习课只使用室内软路线垫，不扩展到真实交通场景。",
            "可以任选一个动作：慢走、牵手、停下或看一看。",
            "不表现车辆、道路、摔倒、拉扯或强刺激警示。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English safe walk review, Nia, Lumo, Bobo, indoor soft star path, hand icon, walking slowly, holding hands, stop and look, no road, no cars, no written words, no copyrighted characters.",
        "chapter_task": "安全走动复习",
    },
    {
        "number": 113,
        "week": 29,
        "title": "Big Blocks",
        "core": "Big blocks.",
        "targets": ["big", "blocks", "build"],
        "listening": "能听懂 big、blocks、build 的合作搭建场景",
        "speaking": "能跟读 `Big blocks.` 或 `blocks`",
        "flow": [
            "Warm-up：地毯上放着大号软积木。",
            "Learn：认识 big、blocks、build。",
            "Story：朋友观察并准备搭建大号软积木。",
            "Tap：点击积木、搭建动作和大物品。",
            "Say：孩子跟读 `Big blocks.`",
            "Wrap-up：一起准备搭建。",
        ],
        "panels": [
            ("三块大号软积木在地毯上", "I see blocks.", "blocks", "积木亮", "Three large soft blocks sit on the rug."),
            ("Nia 指向最大一块积木", "Big blocks.", "核心句", "大积木亮", "Nia points to the large soft blocks."),
            ("Lumo 双手抱起一块软积木", "I can build.", "build", "Lumo 发光", "Lumo carries one soft block with two hands."),
            ("Bobo 推近一块软积木", "Build with blocks.", "build", "Bobo 屏幕亮", "Bobo moves a soft block closer."),
            ("Nia 把一块积木放在地毯上", "Put it here.", "here 复现", "积木亮", "Nia places one block on the rug."),
            ("两块积木并排", "Big, big blocks.", "big", "积木柔光", "Two soft blocks sit side by side."),
            ("孩子视角大积木在前方", "Your turn.", "输出邀请", "积木亮", "The big soft blocks wait for the child."),
            ("三位角色围着积木挥手", "Big blocks.", "收束", "全场暖光亮", "The friends wave around the big blocks."),
        ],
        "quizzes": [("Tap blocks.", "Blocks", ["Blocks", "Cup", "Book"]), ("Tap big.", "Big", ["Big", "Small", "Quiet"]), ("Tap build.", "Build", ["Build", "Throw", "Sleep"])],
        "notes": [
            "搭建主题只使用大号软积木，不表现小零件或高塔。",
            "可以让孩子摸一摸大积木，说 `big` 或 `blocks`。",
            "不表现砸人、扔积木、尖锐边角或危险高度。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English building lesson, Nia, Lumo, Bobo, cozy play room, star rug, large soft blocks, build together, big blocks, no small parts, no throwing, no tall dangerous tower, no written words, no copyrighted characters.",
        "chapter_task": "点击大号软积木",
    },
    {
        "number": 114,
        "week": 29,
        "title": "Stack Up",
        "core": "Stack up.",
        "targets": ["stack", "up", "careful"],
        "listening": "能听懂 stack、up 和 careful 的低矮搭建动作",
        "speaking": "能跟读 `Stack up.` 或 `up`",
        "flow": [
            "Warm-up：两块大号软积木并排。",
            "Learn：认识 stack、up、careful。",
            "Story：朋友把软积木低低叠起来。",
            "Tap：点击向上叠、稳稳放和小塔。",
            "Say：孩子跟读 `Stack up.`",
            "Wrap-up：小塔完成后一起鼓励。",
        ],
        "panels": [
            ("两块大号软积木并排", "I see blocks.", "blocks 复现", "积木亮", "Two large soft blocks sit side by side."),
            ("Nia 拿起一块软积木", "One block.", "one 复现", "积木亮", "Nia holds one soft block."),
            ("Lumo 指向上方", "Up.", "up", "Lumo 发光", "Lumo points upward gently."),
            ("Nia 把一块积木叠到另一块上", "Stack up.", "核心句", "小塔亮", "Nia stacks one soft block on another."),
            ("Bobo 轻轻扶着小塔", "Careful.", "careful", "Bobo 屏幕亮", "Bobo steadies the small block stack."),
            ("低矮小塔立好", "Good job!", "鼓励复现", "小塔亮", "The low block stack stands safely."),
            ("孩子视角两块软积木", "Your turn.", "输出邀请", "积木亮", "Two soft blocks wait for the child."),
            ("三位角色围着小塔挥手", "Stack up.", "收束", "全场暖光亮", "The friends wave beside the low block stack."),
        ],
        "quizzes": [("Tap up.", "Up", ["Up", "Down", "Cup"]), ("Tap stack.", "Stack", ["Stack", "Run", "Hide"]), ("Tap careful.", "Careful", ["Careful", "Fast", "Loud"])],
        "notes": [
            "只表现低矮软积木，不搭高塔。",
            "可以叠两块大软积木，动作放慢说 `careful`。",
            "不表现砸落、危险高度、硬积木尖角或小零件入口。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English stack up lesson, Nia, Lumo, Bobo, large soft blocks, low safe stack, careful movement, cozy play room, no tall tower, no falling blocks, no small parts, no written words, no copyrighted characters.",
        "chapter_task": "低矮叠软积木",
    },
    {
        "number": 115,
        "week": 29,
        "title": "Fix It",
        "core": "Fix it.",
        "targets": ["fix", "fall", "again"],
        "listening": "能听懂 fix、fall、again 的温和修复场景",
        "speaking": "能跟读 `Fix it.` 或 `again`",
        "flow": [
            "Warm-up：低矮软积木小塔轻轻歪倒。",
            "Learn：认识 fix、fall、again。",
            "Story：小塔轻轻倒下后朋友一起修好。",
            "Tap：点击倒下、修好和再试一次。",
            "Say：孩子跟读 `Fix it.`",
            "Wrap-up：修好后一起微笑。",
        ],
        "panels": [
            ("低矮软积木小塔在地毯上", "I see a tower.", "tower", "小塔亮", "A low soft block tower stands on the rug."),
            ("小塔轻轻歪倒在地毯上", "It falls.", "fall", "积木柔光", "The soft blocks gently tip onto the rug."),
            ("Nia 看着积木不慌张", "It is okay.", "okay 复现", "Nia 柔光", "Nia looks calm beside the blocks."),
            ("Lumo 指向积木", "Fix it.", "核心句", "Lumo 发光", "Lumo points to the soft blocks."),
            ("Nia 和 Bobo 把积木扶回去", "Try again.", "again", "全员柔光", "Nia and Bobo rebuild the low tower."),
            ("小塔重新立好", "Good job!", "鼓励复现", "小塔亮", "The low tower stands again."),
            ("孩子视角倒下的两块软积木", "Your turn.", "输出邀请", "积木亮", "Two soft blocks wait to be fixed."),
            ("三位角色围着小塔挥手", "Fix it.", "收束", "全场暖光亮", "The friends wave beside the fixed tower."),
        ],
        "quizzes": [("Tap fall.", "Fall", ["Fall", "Fly", "Sleep"]), ("Tap fix.", "Fix", ["Fix", "Throw", "Hot"]), ("Tap again.", "Again", ["Again", "No", "Dark"])],
        "notes": [
            "修复主题只表现软积木轻轻倒下，不制造失败压力。",
            "可以让孩子把两块积木重新摆好，说 `fix it`。",
            "不表现砸伤、哭闹、责备、破损物或危险工具。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English fix it lesson, Nia, Lumo, Bobo, large soft blocks, low tower gently falls, try again, fix together, calm repair, no injury, no crying, no broken sharp object, no written words, no copyrighted characters.",
        "chapter_task": "一起修好软积木",
    },
    {
        "number": 116,
        "week": 29,
        "title": "Build Review",
        "core": "Build together.",
        "targets": ["blocks", "stack", "fix", "together"],
        "listening": "能复习 blocks、stack、fix 和 together",
        "speaking": "能任选一个搭建词跟读",
        "flow": [
            "Warm-up：大号软积木和低矮小塔出现在地毯上。",
            "Review：复习 blocks、stack、fix、together。",
            "Story：朋友一起搭、叠、修复。",
            "Tap：点击积木、叠高、修复和一起。",
            "Say：孩子任选一个词输出。",
            "Wrap-up：用 `Build together.` 收束。",
        ],
        "panels": [
            ("大号软积木在地毯上", "Build together.", "开场", "积木亮", "Large soft blocks sit on the rug."),
            ("Nia 指向大积木", "Big blocks.", "blocks", "积木亮", "Nia points to the big soft blocks."),
            ("Lumo 把一块积木放到另一块上", "Stack up.", "stack", "小塔亮", "Lumo stacks two soft blocks low."),
            ("小塔轻轻倒下", "It falls.", "fall 复现", "积木柔光", "The soft blocks gently tip over."),
            ("Nia 和 Bobo 把小塔修好", "Fix it.", "fix", "全员柔光", "Nia and Bobo fix the low tower."),
            ("四个无字图标：积木、上叠、修复、一起", "Blocks, stack, fix.", "综合复习", "图标依次亮", "Wordless icons show blocks, stacking, and fixing."),
            ("孩子视角大积木在前方", "Pick one.", "输出邀请", "积木亮", "The soft blocks wait for the child to choose."),
            ("三位角色围着小塔挥手", "Build together.", "收束", "全场暖光亮", "The friends wave beside the blocks."),
        ],
        "quizzes": [("Tap blocks.", "Blocks", ["Blocks", "Book", "Cup"]), ("Tap stack.", "Stack", ["Stack", "Run", "Hot"]), ("Tap fix.", "Fix", ["Fix", "Throw", "Dark"])],
        "notes": [
            "复习课只使用大号软积木和低矮小塔。",
            "可以任选一个动作：指积木、叠一块、扶正小塔。",
            "不表现高塔、砸落、受伤、责备或小零件。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English build review, Nia, Lumo, Bobo, cozy play room, large soft blocks, low block tower, stack up, fix it, build together, no high tower, no injury, no written words, no copyrighted characters.",
        "chapter_task": "搭建复习",
    },
    {
        "number": 117,
        "week": 30,
        "title": "Good Night",
        "core": "Good night.",
        "targets": ["night", "moon", "sleep"],
        "listening": "能听懂 night、moon 和 sleep 的晚安场景",
        "speaking": "能跟读 `Good night.` 或 `night`",
        "flow": [
            "Warm-up：温暖房间里窗外有月亮。",
            "Learn：认识 night、moon、sleep。",
            "Story：Nia 和朋友互道晚安。",
            "Tap：点击月亮、床边和晚安场景。",
            "Say：孩子跟读 `Good night.`",
            "Wrap-up：房间柔光收束。",
        ],
        "panels": [
            ("温暖房间窗外有月亮", "I see the moon.", "moon", "月亮亮", "A moon glows outside the warm bedroom window."),
            ("Nia 坐在地毯上看月亮", "It is night.", "night", "窗边柔光", "Nia sits calmly and looks at the moon."),
            ("Bobo 轻轻挥手", "Good night, Bobo.", "晚安问候", "Bobo 屏幕亮", "Bobo waves gently in the warm room."),
            ("Lumo 柔光变暗一点", "Good night, Lumo.", "复现", "Lumo 柔光", "Lumo glows softly beside Nia."),
            ("Nia 靠近低矮小床", "Time to sleep.", "sleep", "小床柔光", "Nia stands beside a low cozy bed."),
            ("三位角色坐在柔光里", "Good night, friends.", "friends 复现", "全员柔光", "The friends sit together in soft light."),
            ("孩子视角窗边月亮", "Say good night.", "输出邀请", "月亮亮", "The moon glows outside the window."),
            ("房间柔光，角色轻轻挥手", "Good night.", "核心句收束", "全场柔光", "The friends wave gently in the cozy room."),
        ],
        "quizzes": [("Tap moon.", "Moon", ["Moon", "Sun", "Cup"]), ("Tap night.", "Night", ["Night", "Morning", "Fast"]), ("Tap sleep.", "Sleep", ["Sleep", "Run", "Hot"])],
        "notes": [
            "晚安主题保持明亮温暖，不强迫入睡。",
            "可以对窗外或玩偶说 `Good night.`",
            "不表现黑暗恐惧、惊吓、责备、遮住口鼻或高床跌落。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English good night lesson, Nia, Lumo, Bobo, warm cozy bedroom, moon outside window, low bed, soft night light, calm bedtime, no dark scary room, no forced sleep, no written words, no copyrighted characters.",
        "chapter_task": "对月亮和朋友说晚安",
    },
    {
        "number": 118,
        "week": 30,
        "title": "Pajamas On",
        "core": "Pajamas on.",
        "targets": ["pajamas", "on", "soft"],
        "listening": "能听懂 pajamas、on 和 soft 的睡衣场景",
        "speaking": "能跟读 `Pajamas on.` 或 `soft`",
        "flow": [
            "Warm-up：柔软睡衣整齐放在低矮椅子上。",
            "Learn：认识 pajamas、on、soft。",
            "Story：Nia 指认睡衣并完成穿好状态。",
            "Tap：点击睡衣、柔软布料和完成状态。",
            "Say：孩子跟读 `Pajamas on.`",
            "Wrap-up：穿好睡衣准备晚安。",
        ],
        "panels": [
            ("柔软睡衣放在低矮椅子上", "I see pajamas.", "pajamas", "睡衣亮", "Soft pajamas lie folded on a low chair."),
            ("Nia 指向睡衣", "Soft pajamas.", "soft", "睡衣柔光", "Nia points to the soft pajamas."),
            ("Bobo 把睡衣递给 Nia", "Here you are.", "递物复现", "Bobo 屏幕亮", "Bobo offers the folded pajamas."),
            ("画面展示 Nia 已穿好睡衣的完成状态", "Pajamas on.", "核心句", "Nia 柔光", "Nia is already wearing soft pajamas."),
            ("Lumo 指向袖口和裤脚", "Soft and warm.", "soft 复现", "Lumo 发光", "Lumo points to the soft sleeves and pant legs."),
            ("Nia 坐在地毯上微笑", "I am ready.", "ready 复现", "Nia 柔光", "Nia sits calmly in pajamas."),
            ("孩子视角折好的睡衣", "Your turn.", "输出邀请", "睡衣亮", "Folded pajamas wait on the low chair."),
            ("三位角色挥手", "Pajamas on.", "收束", "全场柔光", "The friends wave in the cozy bedroom."),
        ],
        "quizzes": [("Tap pajamas.", "Pajamas", ["Pajamas", "Shoes", "Book"]), ("Tap soft.", "Soft", ["Soft", "Hard", "Fast"]), ("Tap on.", "On", ["On", "Under", "Away"])],
        "notes": [
            "睡衣主题只表现折好的睡衣和穿好后的完成状态，避免隐私换衣画面。",
            "可以摸一摸柔软布料，说 `soft`。",
            "不表现裸露、换衣过程、绳带缠绕、尖锐扣件或商标文字。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English pajamas lesson, Nia, Lumo, Bobo, warm bedroom, folded soft pajamas on low chair, finished dressed state, soft and warm, no changing privacy, no strings, no brand text, no written words, no copyrighted characters.",
        "chapter_task": "点击柔软睡衣",
    },
    {
        "number": 119,
        "week": 30,
        "title": "Night Light",
        "core": "Light on.",
        "targets": ["light", "on", "quiet"],
        "listening": "能听懂 light、on 和 quiet 的夜灯场景",
        "speaking": "能跟读 `Light on.` 或 `light`",
        "flow": [
            "Warm-up：低矮床边有圆圆小夜灯。",
            "Learn：认识 light、on、quiet。",
            "Story：朋友点亮小夜灯，房间保持安静。",
            "Tap：点击夜灯、亮起和安静动作。",
            "Say：孩子跟读 `Light on.`",
            "Wrap-up：柔光陪伴晚安。",
        ],
        "panels": [
            ("低矮床边有圆圆小夜灯", "I see a light.", "light", "夜灯亮", "A round night light sits on a low bedside table."),
            ("Bobo 指向夜灯", "Light on.", "核心句", "夜灯发光", "The small night light turns on softly."),
            ("房间被柔和暖光照亮", "Soft light.", "soft 复现", "全场柔光", "Soft warm light fills the room."),
            ("Lumo 把自己的光调得更柔", "Quiet light.", "quiet", "Lumo 柔光", "Lumo glows softly and quietly."),
            ("Nia 轻轻把手指放在嘴边", "Quiet, please.", "quiet 复现", "Nia 柔光", "Nia makes a gentle quiet gesture."),
            ("月亮和夜灯一起发光", "Moon and light.", "moon 复现", "窗边亮", "The moon and night light glow together."),
            ("孩子视角小夜灯", "Tap light.", "互动提示", "夜灯亮", "The round night light waits to be tapped."),
            ("三位角色在柔光中挥手", "Light on.", "收束", "全场柔光", "The friends wave in soft light."),
        ],
        "quizzes": [("Tap light.", "Light", ["Light", "Ball", "Paper"]), ("Tap on.", "On", ["On", "Under", "Away"]), ("Tap quiet.", "Quiet", ["Quiet", "Loud", "Fast"])],
        "notes": [
            "夜灯主题保持柔光和安全低矮家具。",
            "可以点一下房间灯或玩具灯，说 `light`。",
            "不表现电线、插座、强光刺眼、黑暗恐惧或高处攀爬。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English night light lesson, Nia, Lumo, Bobo, warm cozy bedroom, round night light on low table, soft light, quiet mood, moon outside window, no visible wires, no outlet, no scary darkness, no written words, no copyrighted characters.",
        "chapter_task": "点击小夜灯",
    },
    {
        "number": 120,
        "week": 30,
        "title": "Bedtime Review",
        "core": "Sleep well.",
        "targets": ["night", "pajamas", "light", "sleep"],
        "listening": "能复习 night、pajamas、light 和 sleep",
        "speaking": "能任选一个晚间流程词跟读",
        "flow": [
            "Warm-up：温暖房间里有月亮、睡衣、夜灯和低矮小床。",
            "Review：复习 night、pajamas、light、sleep。",
            "Story：朋友完成晚安流程。",
            "Tap：点击月亮、睡衣、夜灯和睡觉场景。",
            "Say：孩子任选一个词输出。",
            "Wrap-up：用 `Sleep well.` 收束。",
        ],
        "panels": [
            ("月亮、睡衣、夜灯和低矮小床同时出现", "Sleep well.", "开场", "全场柔光", "Moon, pajamas, night light, and low bed are visible."),
            ("窗外月亮发光", "Good night.", "night", "月亮亮", "The moon glows outside the window."),
            ("柔软睡衣放在低矮椅子上", "Pajamas on.", "pajamas", "睡衣亮", "Soft pajamas rest on a low chair."),
            ("小夜灯亮起", "Light on.", "light", "夜灯亮", "The round night light glows softly."),
            ("Nia 靠近低矮小床", "Time to sleep.", "sleep", "小床柔光", "Nia stands beside the low cozy bed."),
            ("四个无字图标：月亮、睡衣、夜灯、床", "Night, pajamas, light, sleep.", "综合复习", "图标依次亮", "Wordless icons show moon, pajamas, night light, and bed."),
            ("孩子视角四个物品在前方", "Pick one.", "输出邀请", "物品亮", "The bedtime objects wait for the child."),
            ("三位角色在柔光中挥手", "Sleep well.", "收束", "全场柔光", "The friends wave in the warm bedtime room."),
        ],
        "quizzes": [("Tap night.", "Night", ["Night", "Morning", "Hot"]), ("Tap pajamas.", "Pajamas", ["Pajamas", "Shoes", "Cup"]), ("Tap light.", "Light", ["Light", "Ball", "Paper"])],
        "notes": [
            "晚间复习只做流程认知，不要求孩子立即睡觉。",
            "可以任选一个物品：月亮、睡衣、夜灯或小床。",
            "不表现黑暗恐惧、遮住口鼻、强迫入睡、电线插座或高床跌落。",
        ],
        "image_prompt": "Original 2D children picture book comic panel, preschool English bedtime review, Nia, Lumo, Bobo, warm cozy bedroom, moon, folded pajamas, round night light, low bed, sleep well, calm routine, no scary darkness, no wires, no forced sleep, no written words, no copyrighted characters.",
        "chapter_task": "晚安流程复习",
    },
]


def lesson_folder(number: int) -> str:
    return f"lesson{number:02d}" if number < 100 else f"lesson{number}"


def title_slug(title: str) -> str:
    return title.replace(" ", "_").replace(",", "")


def md_path(lesson: dict) -> Path:
    return LESSON_DIR / f"Lesson{lesson['number']}_{title_slug(lesson['title'])}_完整课时.md"


def asset_path(number: int) -> Path:
    return ASSET_DIR / f"Lesson{number}_资产记录.md"


def target_text(targets: list[str]) -> str:
    return ", ".join(targets)


def render_lesson_markdown(lesson: dict) -> str:
    rows = "\n".join(
        f"| {idx} | {scene} | `{line}` | {point} | {feedback} |"
        for idx, (scene, line, point, feedback, _alt) in enumerate(lesson["panels"], 1)
    )
    flow = "\n".join(f"{idx}. {item}" for idx, item in enumerate(lesson["flow"], 1))
    quiz = "\n".join(f"{idx}. `{prompt}` 正确答案：{answer}" for idx, (prompt, answer, _options) in enumerate(lesson["quizzes"], 1))
    notes = "\n".join(f"- {note}" for note in lesson["notes"])
    audio_lines = "\n".join([panel[1] for panel in lesson["panels"]] + [item[0] for item in lesson["quizzes"]])
    return f"""# Lesson {lesson['number']}：{lesson['title']}

## 课程信息

- 级别：L0 复现扩展
- 年龄：4 周岁
- 时长：8 到 10 分钟
- 画面数：8
- 核心句：`{lesson['core']}`
- 目标词：{target_text(lesson['targets'])}
- 听力目标：{lesson['listening']}
- 口语目标：{lesson['speaking']}

## 课时流程

{flow}

## 分镜内容

| 画面 | 场景 | 英文台词 | 学习点 | 点击反馈 |
| --- | --- | --- | --- | --- |
{rows}

## 互动题

{quiz}

## 家长陪伴提示

{notes}

## 音频脚本

```text
{audio_lines}
```

## 图片风格提示

```text
{lesson['image_prompt']}
```
"""


def render_asset_record(lesson: dict) -> str:
    number = lesson["number"]
    folder = lesson_folder(number)
    summary = lesson["notes"][0].replace("`", "")
    return f"""# Lesson {number} 资产记录

## 图片

生成方式：本地 prototype 分镜生成脚本生成，可作为可点击原型；后续可按课时图片风格提示替换为 imagegen 终稿。

项目内路径：`assets/images/{folder}/panel01.png` 到 `panel08.png`

说明：{summary}

## 音频

生成方式：macOS `say`，声线优先 `Shelley (英语（美国）)`，语速约 124 到 130。

项目内路径：`assets/audio/{folder}/panel01.m4a` 到 `panel08.m4a`
"""


def patch_existing_asset_records() -> None:
    for number in range(97, 105):
        path = asset_path(number)
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        text = text.replace(
            "生成方式：内置 imagegen 工具生成。",
            "生成方式：本地 prototype 分镜生成脚本补齐，可作为可点击原型；后续可按课时图片风格提示替换为 imagegen 终稿。",
        )
        path.write_text(text, encoding="utf-8")


def js_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def render_app_block(lesson: dict) -> str:
    number = lesson["number"]
    tab_word = {
        105: "Thanks",
        106: "Help",
        107: "Good Job",
        108: "Kind",
        109: "Walk",
        110: "Hold",
        111: "Stop",
        112: "Safe Walk",
        113: "Blocks",
        114: "Stack",
        115: "Fix",
        116: "Build",
        117: "Night",
        118: "Pajamas",
        119: "Light",
        120: "Bedtime",
    }[number]
    folder = lesson_folder(number)
    panels = ",\n".join(
        f"      [{js_string(line)}, {js_string(alt)}]"
        for _scene, line, _point, _feedback, alt in lesson["panels"]
    )
    quizzes = ",\n".join(
        f"      {{ prompt: {js_string(prompt)}, answer: {js_string(answer)}, options: {json.dumps(options, ensure_ascii=False)} }}"
        for prompt, answer, options in lesson["quizzes"]
    )
    return f"""  {{
    id: "Lesson {number}",
    tab: "{number} {tab_word}",
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
    text = APP_JS.read_text(encoding="utf-8")
    if 'id: "Lesson 105"' in text:
        return
    marker = "\n];\n\nlet lessonIndex"
    blocks = ",\n".join(render_app_block(lesson) for lesson in LESSONS)
    text = text.replace(marker, ",\n" + blocks + marker)
    APP_JS.write_text(text, encoding="utf-8")


def update_chapter_list() -> None:
    text = CHAPTER_LIST.read_text(encoding="utf-8")
    if "| 27 | 105 | Thank You |" in text:
        return
    rows = "\n".join(
        f"| {lesson['week']} | {lesson['number']} | {lesson['title']} | `{lesson['core']}` | {target_text(lesson['targets'])} | {lesson['chapter_task']} |"
        for lesson in LESSONS
    )
    text = text.rstrip() + "\n" + rows + "\n"
    CHAPTER_LIST.write_text(text, encoding="utf-8")


def update_task_list() -> None:
    text = TASK_LIST.read_text(encoding="utf-8")
    if "## V2.27 第二十七周扩展 4 课内容" not in text:
        insert = """## V2.27 第二十七周扩展 4 课内容

- [x] 细化 Lesson 105：Thank You
- [x] 细化 Lesson 106：Help Me Please
- [x] 细化 Lesson 107：Good Job
- [x] 细化 Lesson 108：Kind Words Review
- [x] 生成 Lesson 105-108 图片提示词
- [x] 生成 Lesson 105-108 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 礼貌表达只表现温和递物、请求帮忙和鼓励。
- 不表现争抢、责备、比赛输赢或强迫表达。

## V2.28 第二十八周扩展 4 课内容

- [x] 细化 Lesson 109：Walk Slowly
- [x] 细化 Lesson 110：Hold My Hand
- [x] 细化 Lesson 111：Stop and Look
- [x] 细化 Lesson 112：Walk Review
- [x] 生成 Lesson 109-112 图片提示词
- [x] 生成 Lesson 109-112 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 安全走动只使用室内软路线垫、慢走、轻牵手、停下看一看。
- 不表现真实道路、车辆、楼梯、摔倒、拉扯或陌生人场景。

## V2.29 第二十九周扩展 4 课内容

- [x] 细化 Lesson 113：Big Blocks
- [x] 细化 Lesson 114：Stack Up
- [x] 细化 Lesson 115：Fix It
- [x] 细化 Lesson 116：Build Review
- [x] 生成 Lesson 113-116 图片提示词
- [x] 生成 Lesson 113-116 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 合作搭建只使用大号软积木和低矮小塔。
- 不表现小零件、高塔砸落、受伤、责备或危险工具。

## V2.30 第三十周扩展 4 课内容

- [x] 细化 Lesson 117：Good Night
- [x] 细化 Lesson 118：Pajamas On
- [x] 细化 Lesson 119：Night Light
- [x] 细化 Lesson 120：Bedtime Review
- [x] 生成 Lesson 117-120 图片提示词
- [x] 生成 Lesson 117-120 音频脚本

验收标准：

- 每课都不超过 8 幅画。
- 晚间流程只表现温暖柔光、睡衣完成状态、小夜灯和低矮小床。
- 不表现黑暗恐惧、强迫入睡、隐私换衣、电线插座或高床跌落。

"""
        text = text.replace("## V3 图片与音频资产", insert + "## V3 图片与音频资产")
    text = text.replace(
        "- [x] 为 Lesson 1-104 生成每课 8 张漫画分镜",
        "- [x] 为 Lesson 1-120 生成每课 8 张分镜图（Lesson 97-120 为本地原型图，可继续替换为 imagegen 终稿）",
    )
    if "Lesson 105-120 本地 `.m4a` 音频" not in text:
        text = text.replace(
            "- [x] 用 macOS `say` 生成 Lesson 97-104 本地 `.m4a` 音频",
            "- [x] 用 macOS `say` 生成 Lesson 97-104 本地 `.m4a` 音频\n- [x] 用 macOS `say` 生成 Lesson 105-120 本地 `.m4a` 音频",
        )
    text = text.replace(
        "- [x] 将页面改为支持 Lesson 1-104 切换",
        "- [x] 将页面改为支持 Lesson 1-120 切换",
    )
    TASK_LIST.write_text(text, encoding="utf-8")


def update_readme() -> None:
    text = README.read_text(encoding="utf-8")
    text = text.replace("`02_章节细化/`：48 个章节清单和样章", "`02_章节细化/`：120 个课时清单、完整课时和样章")
    if "当前可预览样章" in text:
        text = re.sub(
            r"## 当前可预览样章\n[\s\S]*$",
            """## 当前可预览范围

- 课时文档：`02_章节细化/Lesson01_Hello_Star_完整课时.md` 到 `Lesson120_Bedtime_Review_完整课时.md`
- 可点击页面：`app/static/index.html`
- 图片：`assets/images/lesson01/panel01.png` 到 `assets/images/lesson120/panel08.png`
- 音频：`assets/audio/lesson01/panel01.m4a` 到 `assets/audio/lesson120/panel08.m4a`

打开页面后可以在 Lesson 01 到 Lesson 120 间切换。每课都可以翻 8 幅画，点击播放英文，做简单问答。当前版本优先播放本地 `.m4a` 英文音频；如果浏览器限制音频播放，会自动退回浏览器英文朗读。Lesson 97-120 的图片为本地原型分镜，可后续用各课图片风格提示替换为 imagegen 终稿。
""",
            text,
        )
    README.write_text(text, encoding="utf-8")


def parse_existing_lesson(number: int) -> dict:
    pattern = str(LESSON_DIR / f"Lesson{number}_*_完整课时.md")
    matches = glob.glob(pattern)
    if not matches:
        raise FileNotFoundError(pattern)
    path = Path(matches[0])
    text = path.read_text(encoding="utf-8")
    title_match = re.search(rf"# Lesson {number}：(.+)", text)
    target_match = re.search(r"- 目标词：(.+)", text)
    panels = []
    for line in text.splitlines():
        if not line.startswith("| "):
            continue
        if "`" not in line or line.startswith("| 画面") or line.startswith("| ---"):
            continue
        cols = [col.strip() for col in line.strip().strip("|").split("|")]
        if len(cols) < 5 or not cols[0].isdigit():
            continue
        line_text = cols[2].strip("`")
        panels.append((cols[1], line_text, cols[3], cols[4], f"{title_match.group(1)} panel {cols[0]}"))
    return {
        "number": number,
        "title": title_match.group(1) if title_match else f"Lesson {number}",
        "targets": [item.strip() for item in target_match.group(1).split(",")] if target_match else [],
        "panels": panels,
    }


def draw_nia(draw: ImageDraw.ImageDraw, x: int, y: int) -> None:
    draw.ellipse((x - 55, y - 150, x + 55, y - 40), fill=(255, 225, 176), outline=(93, 92, 120), width=3)
    draw.pieslice((x - 68, y - 175, x + 68, y - 55), 180, 360, fill=(245, 248, 255), outline=(150, 170, 200), width=2)
    draw.polygon([(x - 95, y - 35), (x + 95, y - 35), (x + 65, y + 135), (x - 65, y + 135)], fill=(87, 142, 211), outline=(44, 82, 156))
    draw.ellipse((x - 40, y - 95, x - 22, y - 75), fill=(42, 77, 120))
    draw.ellipse((x + 22, y - 95, x + 40, y - 75), fill=(42, 77, 120))
    draw.arc((x - 25, y - 82, x + 25, y - 50), 20, 160, fill=(130, 65, 55), width=3)
    star(draw, x - 45, y - 140, 18, (255, 199, 58))


def draw_lumo(draw: ImageDraw.ImageDraw, x: int, y: int) -> None:
    draw.ellipse((x - 58, y - 120, x + 58, y - 5), fill=(255, 203, 55), outline=(174, 116, 18), width=3)
    draw.polygon([(x - 42, y - 112), (x, y - 180), (x + 42, y - 112)], fill=(255, 218, 95), outline=(174, 116, 18))
    draw.ellipse((x - 28, y - 78, x - 12, y - 62), fill=(70, 72, 90))
    draw.ellipse((x + 12, y - 78, x + 28, y - 62), fill=(70, 72, 90))
    draw.arc((x - 24, y - 64, x + 24, y - 36), 20, 160, fill=(120, 70, 30), width=3)
    draw.ellipse((x - 28, y - 5, x + 28, y + 18), fill=(238, 173, 41), outline=(174, 116, 18))


def draw_bobo(draw: ImageDraw.ImageDraw, x: int, y: int) -> None:
    draw.rounded_rectangle((x - 62, y - 145, x + 62, y - 10), radius=42, fill=(232, 236, 235), outline=(93, 120, 120), width=3)
    draw.rounded_rectangle((x - 42, y - 115, x + 42, y - 65), radius=18, fill=(32, 47, 62))
    draw.arc((x - 24, y - 103, x - 4, y - 82), 0, 180, fill=(87, 225, 242), width=3)
    draw.arc((x + 4, y - 103, x + 24, y - 82), 0, 180, fill=(87, 225, 242), width=3)
    draw.ellipse((x - 48, y - 15, x - 10, y + 26), fill=(143, 165, 158), outline=(83, 108, 108))
    draw.ellipse((x + 10, y - 15, x + 48, y + 26), fill=(143, 165, 158), outline=(83, 108, 108))


def star(draw: ImageDraw.ImageDraw, x: int, y: int, r: int, fill: tuple[int, int, int]) -> None:
    pts = []
    import math

    for i in range(10):
        angle = -math.pi / 2 + i * math.pi / 5
        rr = r if i % 2 == 0 else r * 0.45
        pts.append((x + rr * math.cos(angle), y + rr * math.sin(angle)))
    draw.polygon(pts, fill=fill, outline=(174, 116, 18))


def draw_object(draw: ImageDraw.ImageDraw, key: str, x: int, y: int) -> None:
    if key == "sun":
        draw.ellipse((x - 50, y - 50, x + 50, y + 50), fill=(255, 207, 67), outline=(219, 151, 32), width=3)
        for dx, dy in [(0, -80), (0, 80), (-80, 0), (80, 0), (-55, -55), (55, -55), (-55, 55), (55, 55)]:
            draw.line((x, y, x + dx, y + dy), fill=(255, 207, 67), width=5)
    elif key == "moon":
        draw.ellipse((x - 55, y - 55, x + 55, y + 55), fill=(255, 237, 170), outline=(180, 150, 82), width=3)
        draw.ellipse((x - 20, y - 70, x + 75, y + 35), fill=(59, 81, 117))
    elif key == "light":
        draw.rounded_rectangle((x - 45, y - 70, x + 45, y + 45), radius=28, fill=(255, 232, 143), outline=(183, 123, 40), width=3)
        draw.ellipse((x - 85, y - 105, x + 85, y + 85), outline=(255, 226, 130), width=6)
    elif key == "pajamas":
        draw.rounded_rectangle((x - 70, y - 70, x + 70, y + 40), radius=20, fill=(126, 172, 222), outline=(50, 93, 158), width=3)
        star(draw, x, y - 15, 18, (255, 228, 112))
    elif key == "cloth":
        draw.rounded_rectangle((x - 80, y - 45, x + 80, y + 45), radius=24, fill=(178, 218, 246), outline=(73, 130, 176), width=3)
    elif key == "comb":
        draw.rounded_rectangle((x - 90, y - 25, x + 90, y + 25), radius=18, fill=(248, 191, 104), outline=(151, 93, 36), width=3)
        for i in range(-70, 80, 20):
            draw.line((x + i, y + 24, x + i - 8, y + 70), fill=(151, 93, 36), width=3)
    elif key == "ball":
        draw.ellipse((x - 62, y - 62, x + 62, y + 62), fill=(244, 119, 112), outline=(156, 56, 54), width=3)
        draw.arc((x - 55, y - 55, x + 55, y + 55), 70, 250, fill=(255, 232, 185), width=5)
    elif key == "bag":
        draw.rounded_rectangle((x - 70, y - 35, x + 70, y + 70), radius=28, fill=(134, 191, 151), outline=(53, 116, 78), width=3)
        draw.arc((x - 45, y - 85, x + 45, y + 20), 200, 340, fill=(53, 116, 78), width=8)
    elif key == "door":
        draw.rounded_rectangle((x - 75, y - 115, x + 75, y + 90), radius=10, fill=(166, 111, 67), outline=(88, 61, 42), width=4)
        draw.ellipse((x + 40, y - 10, x + 55, y + 5), fill=(255, 213, 96), outline=(138, 91, 32))
        draw.rounded_rectangle((x - 95, y + 95, x + 95, y + 125), radius=14, fill=(114, 166, 194), outline=(48, 103, 132), width=3)
    elif key == "map":
        draw.polygon([(x - 85, y - 55), (x - 25, y - 80), (x + 30, y - 55), (x + 85, y - 78), (x + 80, y + 62), (x + 25, y + 82), (x - 35, y + 55), (x - 90, y + 75)], fill=(236, 221, 160), outline=(132, 113, 70))
        draw.line((x - 25, y - 78, x - 35, y + 55), fill=(180, 157, 96), width=3)
        draw.line((x + 30, y - 55, x + 25, y + 82), fill=(180, 157, 96), width=3)
        star(draw, x + 30, y + 10, 18, (255, 203, 55))
    elif key == "card":
        draw.rounded_rectangle((x - 85, y - 65, x + 85, y + 65), radius=18, fill=(255, 245, 218), outline=(168, 128, 72), width=3)
        star(draw, x, y, 32, (255, 203, 83))
    elif key == "basket":
        draw.rounded_rectangle((x - 90, y - 35, x + 90, y + 65), radius=28, fill=(186, 135, 82), outline=(101, 72, 47), width=3)
        draw.arc((x - 72, y - 95, x + 72, y + 20), 200, 340, fill=(101, 72, 47), width=8)
        for xx in range(x - 55, x + 70, 32):
            draw.line((xx, y - 30, xx, y + 62), fill=(142, 98, 58), width=3)
    elif key == "shelf":
        draw.rounded_rectangle((x - 105, y - 70, x + 105, y + 85), radius=12, fill=(178, 121, 72), outline=(96, 64, 40), width=4)
        draw.line((x - 92, y - 18, x + 92, y - 18), fill=(96, 64, 40), width=5)
        draw.line((x - 92, y + 35, x + 92, y + 35), fill=(96, 64, 40), width=5)
        star(draw, x - 45, y - 45, 16, (255, 203, 83))
        draw.ellipse((x + 18, y - 62, x + 70, y - 12), fill=(244, 119, 112), outline=(156, 56, 54), width=3)
    elif key == "spot":
        draw.ellipse((x - 70, y - 35, x + 70, y + 35), fill=(160, 210, 234), outline=(73, 130, 176), width=3)
        draw.ellipse((x - 35, y - 20, x + 10, y + 15), fill=(190, 228, 245))
    elif key == "shirt":
        draw.polygon([(x - 70, y - 60), (x - 115, y - 15), (x - 82, y + 20), (x - 58, y + 88), (x + 58, y + 88), (x + 82, y + 20), (x + 115, y - 15), (x + 70, y - 60), (x + 35, y - 32), (x - 35, y - 32)], fill=(111, 160, 222), outline=(45, 88, 153))
    elif key == "socks":
        draw.rounded_rectangle((x - 75, y - 70, x - 10, y + 42), radius=20, fill=(242, 244, 250), outline=(96, 123, 160), width=3)
        draw.rounded_rectangle((x + 10, y - 65, x + 75, y + 47), radius=20, fill=(242, 244, 250), outline=(96, 123, 160), width=3)
        draw.line((x - 72, y - 35, x - 10, y - 35), fill=(111, 160, 222), width=6)
        draw.line((x + 13, y - 30, x + 75, y - 30), fill=(111, 160, 222), width=6)
    elif key == "box":
        draw.rounded_rectangle((x - 85, y - 60, x + 85, y + 75), radius=16, fill=(211, 158, 87), outline=(111, 75, 42), width=4)
        draw.line((x - 82, y - 15, x + 82, y - 15), fill=(111, 75, 42), width=4)
        draw.line((x, y - 60, x, y + 75), fill=(111, 75, 42), width=4)
    elif key == "puzzle":
        draw.rounded_rectangle((x - 80, y - 70, x + 80, y + 70), radius=18, fill=(134, 190, 232), outline=(50, 105, 165), width=4)
        draw.ellipse((x - 18, y - 94, x + 18, y - 58), fill=(134, 190, 232), outline=(50, 105, 165), width=3)
        draw.ellipse((x + 58, y - 18, x + 94, y + 18), fill=(249, 226, 190), outline=(50, 105, 165), width=3)
    elif key == "blocks":
        colors = [(244, 119, 112), (255, 203, 55), (94, 152, 220)]
        for i, color in enumerate(colors):
            draw.rounded_rectangle((x - 95 + i * 65, y - 45 - i * 20, x - 35 + i * 65, y + 15 - i * 20), radius=10, fill=color, outline=(80, 80, 100), width=3)
    elif key == "path":
        draw.rounded_rectangle((80, 520, 640, 650), radius=60, fill=(159, 203, 185), outline=(70, 129, 111), width=4)
        for px in range(150, 590, 90):
            star(draw, px, 585, 16, (255, 236, 150))
    elif key == "stop":
        draw.ellipse((x - 58, y - 58, x + 58, y + 58), fill=(239, 106, 94), outline=(150, 46, 42), width=4)
        draw.rounded_rectangle((x - 20, y - 38, x + 20, y + 28), radius=10, fill=(255, 238, 220))
        for i in range(5):
            draw.ellipse((x - 38 + i * 16, y - 50, x - 20 + i * 16, y - 18), fill=(255, 238, 220))
    elif key == "cloud":
        draw.ellipse((x - 75, y - 20, x - 10, y + 45), fill=(235, 244, 250), outline=(121, 154, 184), width=3)
        draw.ellipse((x - 35, y - 55, x + 45, y + 35), fill=(235, 244, 250), outline=(121, 154, 184), width=3)
        draw.ellipse((x + 10, y - 25, x + 85, y + 45), fill=(235, 244, 250), outline=(121, 154, 184), width=3)
        draw.rounded_rectangle((x - 75, y + 5, x + 85, y + 50), radius=22, fill=(235, 244, 250))
    elif key == "rain":
        for i, dx in enumerate([-60, -25, 10, 45]):
            draw.ellipse((x + dx - 12, y - 60 + i * 8, x + dx + 12, y - 20 + i * 8), fill=(86, 169, 224), outline=(42, 105, 164), width=2)
        draw.rounded_rectangle((x - 80, y + 25, x + 80, y + 70), radius=24, fill=(154, 207, 236), outline=(73, 130, 176), width=3)
    elif key == "ribbon":
        draw.arc((x - 90, y - 30, x + 90, y + 90), 190, 350, fill=(244, 119, 147), width=14)
        draw.arc((x - 85, y - 80, x + 85, y + 40), 15, 170, fill=(255, 188, 80), width=14)
        draw.ellipse((x - 16, y - 16, x + 16, y + 16), fill=(255, 238, 170), outline=(174, 116, 18), width=3)
    elif key == "bed":
        draw.rounded_rectangle((x - 120, y - 40, x + 120, y + 60), radius=22, fill=(138, 172, 220), outline=(70, 90, 145), width=3)
        draw.rounded_rectangle((x - 110, y - 85, x - 20, y - 25), radius=18, fill=(220, 235, 250), outline=(92, 120, 160), width=3)
    elif key == "leaf":
        draw.ellipse((x - 80, y - 55, x + 35, y + 60), fill=(88, 177, 103), outline=(42, 111, 62), width=3)
        draw.line((x - 45, y + 40, x + 70, y - 70), fill=(42, 111, 62), width=5)
    elif key == "pumpkin":
        draw.ellipse((x - 82, y - 58, x + 82, y + 62), fill=(242, 139, 45), outline=(150, 77, 24), width=3)
        draw.ellipse((x - 45, y - 58, x + 45, y + 62), outline=(185, 91, 28), width=4)
        draw.rectangle((x - 12, y - 88, x + 12, y - 55), fill=(92, 127, 54), outline=(54, 85, 35))
    elif key == "flower":
        for dx, dy in [(0, -55), (48, -20), (30, 42), (-30, 42), (-48, -20)]:
            draw.ellipse((x + dx - 30, y + dy - 30, x + dx + 30, y + dy + 30), fill=(174, 111, 209), outline=(100, 60, 139), width=3)
        draw.ellipse((x - 30, y - 30, x + 30, y + 30), fill=(255, 213, 80), outline=(168, 123, 24), width=3)
        draw.line((x, y + 32, x, y + 105), fill=(62, 132, 72), width=6)
    elif key == "round":
        draw.ellipse((x - 70, y - 70, x + 70, y + 70), fill=(113, 185, 236), outline=(45, 104, 160), width=4)
    elif key == "square":
        draw.rounded_rectangle((x - 70, y - 70, x + 70, y + 70), radius=8, fill=(255, 203, 83), outline=(171, 116, 21), width=4)
    elif key == "triangle":
        draw.polygon([(x, y - 85), (x - 86, y + 65), (x + 86, y + 65)], fill=(244, 118, 112), outline=(149, 53, 51))
    else:
        star(draw, x, y, 55, (255, 203, 55))


def choose_objects(lesson: dict, panel: tuple, index: int) -> list[str]:
    combined = " ".join(str(item).lower() for item in [lesson.get("title", ""), *lesson.get("targets", []), *panel[:4]])
    objects = []
    checks = [
        ("sun", ["sun", "morning", "太阳", "晨光"]),
        ("moon", ["moon", "night", "月亮", "晚安"]),
        ("light", ["light", "夜灯", "柔光"]),
        ("pajamas", ["pajamas", "睡衣"]),
        ("cloth", ["cloth", "wash", "face", "毛巾", "洗"]),
        ("comb", ["comb", "hair", "梳"]),
        ("ball", ["ball", "toy", "soft ball", "软球", "玩具"]),
        ("bag", ["bag", "小包"]),
        ("door", ["door", "mat", "home", "门", "门垫", "家"]),
        ("map", ["map", "地图"]),
        ("card", ["card", "first", "next", "last", "story", "卡片", "故事"]),
        ("basket", ["basket", "篮"]),
        ("shelf", ["shelf", "架"]),
        ("spot", ["spot", "floor", "wipe", "dry", "湿", "干", "擦", "地面"]),
        ("shirt", ["shirt", "fold", "衣", "衬衫", "折"]),
        ("socks", ["socks", "sock", "match", "袜"]),
        ("box", ["box", "between", "near", "beside", "盒", "旁边", "中间", "附近"]),
        ("puzzle", ["puzzle", "piece", "fit", "拼图"]),
        ("blocks", ["blocks", "block", "stack", "build", "fix", "积木", "搭", "修"]),
        ("path", ["walk", "path", "feet", "路线", "慢走", "走"]),
        ("stop", ["stop", "look", "停"]),
        ("cloud", ["cloud", "cloudy", "云"]),
        ("rain", ["rain", "rainy", "雨"]),
        ("ribbon", ["wind", "windy", "ribbon", "风", "丝带"]),
        ("bed", ["sleep", "bed", "床", "睡"]),
        ("leaf", ["green", "leaf", "leaves", "绿色", "叶"]),
        ("pumpkin", ["orange", "pumpkin", "橙色", "南瓜"]),
        ("flower", ["purple", "flower", "花"]),
        ("round", ["round", "circle", "圆"]),
        ("square", ["square", "方"]),
        ("triangle", ["triangle", "roof", "三角"]),
    ]
    for key, words in checks:
        if any(word in combined for word in words):
            objects.append(key)
    if not objects:
        objects.append("star")
    if index in (6, 7) and len(objects) == 1:
        if lesson["number"] in range(105, 109):
            objects.extend(["ball", "bag"])
        elif lesson["number"] in range(109, 113):
            objects.extend(["path", "stop"])
        elif lesson["number"] in range(113, 117):
            objects.extend(["blocks"])
        elif 117 <= lesson["number"] <= 120:
            objects.extend(["moon", "light"])
    return list(dict.fromkeys(objects))[:3]


def draw_panel(lesson: dict, panel: tuple, index: int, out_path: Path) -> None:
    number = lesson["number"]
    is_bedtime = 117 <= number <= 120
    bg = (248, 231, 194) if not is_bedtime else (59, 81, 117)
    img = Image.new("RGB", (768, 768), bg)
    draw = ImageDraw.Draw(img)

    if is_bedtime:
        draw.rectangle((0, 0, 768, 380), fill=(68, 91, 130))
        draw.rectangle((60, 65, 265, 255), fill=(35, 57, 96), outline=(222, 194, 118), width=5)
        draw_object(draw, "moon", 170, 150)
        draw.rectangle((0, 380, 768, 768), fill=(143, 105, 72))
        draw.ellipse((85, 505, 685, 735), fill=(75, 122, 176), outline=(45, 82, 130), width=4)
    else:
        draw.rectangle((0, 0, 768, 390), fill=(249, 226, 190))
        draw.rectangle((520, 60, 715, 245), fill=(167, 215, 238), outline=(180, 125, 60), width=5)
        draw_object(draw, "sun", 620, 145)
        draw.rectangle((0, 390, 768, 768), fill=(179, 132, 82))
        draw.ellipse((80, 500, 688, 735), fill=(94, 139, 196), outline=(50, 88, 150), width=4)

    objects = choose_objects(lesson, panel, index)
    positions = [(380, 430), (535, 430), (245, 430)]
    for key, (x, y) in zip(objects, positions):
        if key in {"path"}:
            draw_object(draw, key, x, y)
        else:
            draw_object(draw, key, x, y)

    if index in (0, 1, 2, 3, 4, 7):
        draw_nia(draw, 170, 430)
    if index in (2, 3, 5, 7) or number in range(105, 117):
        draw_lumo(draw, 385, 455)
    if index in (1, 4, 5, 7) or number in range(101, 117):
        draw_bobo(draw, 595, 445)

    for sx, sy in [(95, 105), (690, 315), (90, 455), (650, 95)]:
        star(draw, sx, sy, 14, (255, 219, 96))

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path)


def generate_images() -> None:
    lessons = [parse_existing_lesson(number) for number in range(97, 105)] + LESSONS
    for lesson in lessons:
        folder = IMAGE_DIR / lesson_folder(lesson["number"])
        folder.mkdir(parents=True, exist_ok=True)
        for idx, panel in enumerate(lesson["panels"], 1):
            draw_panel(lesson, panel, idx - 1, folder / f"panel{idx:02d}.png")


def generate_audio(overwrite: bool = False) -> None:
    for lesson in LESSONS:
        folder = AUDIO_DIR / lesson_folder(lesson["number"])
        folder.mkdir(parents=True, exist_ok=True)
        for idx, (_scene, line, _point, _feedback, _alt) in enumerate(lesson["panels"], 1):
            out_path = folder / f"panel{idx:02d}.m4a"
            if out_path.exists() and not overwrite:
                continue
            cmd = ["say", "-v", "Shelley", "-r", "126", "-o", str(out_path), line]
            result = subprocess.run(cmd, capture_output=True, text=True)
            if result.returncode != 0:
                fallback = ["say", "-r", "126", "-o", str(out_path), line]
                subprocess.run(fallback, check=True)


def write_new_documents() -> None:
    for lesson in LESSONS:
        md_path(lesson).write_text(render_lesson_markdown(lesson), encoding="utf-8")
        asset_path(lesson["number"]).write_text(render_asset_record(lesson), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skip-audio", action="store_true")
    parser.add_argument("--overwrite-audio", action="store_true")
    args = parser.parse_args()

    write_new_documents()
    patch_existing_asset_records()
    update_chapter_list()
    update_task_list()
    update_readme()
    update_app_js()
    generate_images()
    if not args.skip_audio:
        generate_audio(overwrite=args.overwrite_audio)

    print("generated Lesson 105-120 docs/assets/app data")
    print("generated prototype images for Lesson 97-120")
    print("generated audio for Lesson 105-120" if not args.skip_audio else "skipped audio")


if __name__ == "__main__":
    main()
