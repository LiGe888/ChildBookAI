const commonAudio = {
  good: "../../assets/audio/common/good.m4a",
  tryAgain: "../../assets/audio/common/try-again.m4a",
  yourTurn: "../../assets/audio/common/your-turn.m4a"
};

const lessons = [
  {
    id: "Lesson 01",
    tab: "01 Hello",
    title: "Hello, Star!",
    coreSentence: "I am Nia.",
    targetWords: ["hello", "Nia", "Lumo", "Bobo", "bye"],
    parentNotes: ["第一次只听和点。", "第二次跟读 Hello。", "第三次换成孩子名字。"],
    panels: buildPanels("lesson01", [
      ["Hello!", "Nia peeks from a moon-shaped door in Star Town."],
      ["I am Nia.", "Nia points to herself in the star town courtyard."],
      ["Hello, Lumo!", "Lumo jumps into Star Town while Nia smiles."],
      ["Hello, Bobo!", "Bobo rolls into the courtyard and glows."],
      ["Hello, friends!", "Nia, Lumo, and Bobo wave together."],
      ["I am Nia.", "Nia points to herself for a repeat-after-me moment."],
      ["I am me.", "A friendly glowing star invites the child to say their own name."],
      ["Bye!", "Nia, Lumo, and Bobo wave goodbye in the evening."]
    ]),
    quizzes: [
      { prompt: "Tap Nia.", answer: "Nia", options: ["Nia", "Lumo", "Bobo"] },
      { prompt: "Tap Bobo.", answer: "Bobo", options: ["Nia", "Lumo", "Bobo"] },
      { prompt: "Say hello!", answer: "Hello", options: ["Hello", "Bye", "Lumo"] }
    ]
  },
  {
    id: "Lesson 02",
    tab: "02 Me",
    title: "I Am Me",
    coreSentence: "I am me.",
    targetWords: ["I", "am", "me", "Nia", "Lumo", "Bobo", "happy"],
    parentNotes: ["先复习 Hello。", "跟读 I am me。", "做开心表情说 happy。"],
    panels: buildPanels("lesson02", [
      ["Hello, me!", "Bobo brings a glowing star mirror to Nia."],
      ["I am Nia.", "Nia points to herself and smiles."],
      ["I am Lumo.", "Lumo points to himself with a bright shield."],
      ["I am Bobo.", "Bobo points to himself with a glowing screen face."],
      ["I am me.", "A star mirror invites the child to say their own name."],
      ["I am happy.", "Nia smiles happily with warm happy symbols."],
      ["I am happy, too.", "Nia, Lumo, and Bobo clap happily together."],
      ["Bye, me!", "The friends and the star mirror wave goodbye."]
    ]),
    quizzes: [
      { prompt: "Tap Lumo.", answer: "Lumo", options: ["Nia", "Lumo", "Bobo"] },
      { prompt: "Tap Bobo.", answer: "Bobo", options: ["Nia", "Bobo", "Happy"] },
      { prompt: "Tap happy.", answer: "Happy", options: ["Bye", "Happy", "Lumo"] }
    ]
  },
  {
    id: "Lesson 03",
    tab: "03 Cloud",
    title: "Bye Bye Cloud",
    coreSentence: "Bye, cloud.",
    targetWords: ["bye", "cloud", "sky", "star", "moon", "hello"],
    parentNotes: ["先指出云朵和天空。", "听到 bye 时一起挥手。", "第三遍跟读 Bye, cloud。"],
    panels: buildPanels("lesson03", [
      ["Hello, cloud!", "A friendly cloud floats into Star Town while the friends wave."],
      ["I see a cloud.", "Nia points to one fluffy cloud in the sky."],
      ["I see the sky.", "Lumo points to the wide blue sky."],
      ["I see a star.", "Bobo points to a bright star above Star Town."],
      ["I see the moon.", "The moon peeks from behind a friendly cloud."],
      ["Bye, cloud.", "The cloud floats away while the friends wave goodbye."],
      ["Bye bye!", "The cloud is far away and smiles back."],
      ["Bye, moon.", "The moon and stars glow over Star Town at night."]
    ]),
    quizzes: [
      { prompt: "Tap cloud.", answer: "Cloud", options: ["Cloud", "Star", "Moon"] },
      { prompt: "Tap star.", answer: "Star", options: ["Sky", "Star", "Cloud"] },
      { prompt: "Tap moon.", answer: "Moon", options: ["Moon", "Bobo", "Nia"] }
    ]
  },
  {
    id: "Lesson 04",
    tab: "04 Review",
    title: "Hello Review",
    coreSentence: "Hello! Bye!",
    targetWords: ["hello", "bye", "you", "me", "Nia", "Lumo", "Bobo", "cloud"],
    parentNotes: ["先用动作区分 Hello 和 Bye。", "听到角色名字就指一指。", "最后让孩子选择说 Hello 或 Bye。"],
    panels: buildPanels("lesson04", [
      ["Hello, you!", "Nia waves toward the child in sunny Star Town."],
      ["Hello, me!", "A glowing star mirror shows a friendly child-shaped sparkle."],
      ["Hello, Lumo!", "Lumo jumps out beside a star door and waves."],
      ["Hello, Bobo!", "Bobo rolls across a little bridge and waves."],
      ["Hello, cloud!", "A friendly cloud floats above the three friends."],
      ["Bye, cloud.", "The cloud floats away while the friends wave goodbye."],
      ["Bye, you!", "Nia, Lumo, and Bobo wave toward the child."],
      ["Bye bye!", "The moon and stars glow over Star Town as everyone waves."]
    ]),
    quizzes: [
      { prompt: "Tap Nia.", answer: "Nia", options: ["Nia", "Lumo", "Bobo"] },
      { prompt: "Tap Lumo.", answer: "Lumo", options: ["Cloud", "Lumo", "Bobo"] },
      { prompt: "Tap bye.", answer: "Bye", options: ["Hello", "Me", "Bye"] }
    ]
  },
  {
    id: "Lesson 05",
    tab: "05 Red",
    title: "Red Star",
    coreSentence: "I see red.",
    targetWords: ["red", "star", "apple"],
    parentNotes: ["先指出红色物品。", "跟读 I see red。", "点所有红色物品。"],
    panels: buildPanels("lesson05", [
      ["Hello, star!", "Nia waves beside a large red star lantern in cozy Star Town."],
      ["I see red.", "Nia points to a big red star in the center of the scene."],
      ["I see red.", "Lumo stands beside a large red star balloon and lifts his small shield."],
      ["Red star!", "Bobo pushes a big red star block along the star path."],
      ["I see red.", "A large red apple rolls onto the path in front of the friends."],
      ["Red apple!", "Nia holds a big red apple while Lumo points to it."],
      ["I see red.", "A red star and a red apple sit beside a cloud and the moon for a tap game."],
      ["Bye, red star!", "Nia, Lumo, and Bobo wave under a glowing red star with an apple basket nearby."]
    ]),
    quizzes: [
      { prompt: "Tap red.", answer: "Red", options: ["Red", "Cloud", "Moon"] },
      { prompt: "Tap red star.", answer: "Red star", options: ["Red star", "Cloud", "Bobo"] },
      { prompt: "Tap red apple.", answer: "Red apple", options: ["Red apple", "Moon", "Lumo"] }
    ]
  },
  {
    id: "Lesson 06",
    tab: "06 Boat",
    title: "Blue Boat",
    coreSentence: "It is blue.",
    targetWords: ["blue", "boat", "sky"],
    parentNotes: ["先复现 red star 和 red apple。", "听到 blue 就找蓝色。", "不解释语法，直接指物说 It is blue。"],
    panels: buildPanels("lesson06", [
      ["Hello, boat!", "Nia finds a small blue boat by the Star Town river."],
      ["It is blue.", "Lumo points to the blue boat while a red star lantern hangs on the dock."],
      ["It is blue.", "Bobo looks happily at the blue boat with a red apple nearby as a review item."],
      ["It is blue.", "The blue boat floats beside a little bridge decorated with red stars."],
      ["It is blue.", "Nia sits in the blue boat while Lumo waves from the riverbank."],
      ["It is blue.", "The friends look up at the bright blue sky while the blue boat rests below."],
      ["It is blue.", "A blue boat, red apple, and red star appear together for a find-blue moment."],
      ["Bye, boat.", "Nia, Lumo, and Bobo wave goodbye as the blue boat rests at sunset."]
    ]),
    quizzes: [
      { prompt: "Tap blue.", answer: "Blue boat", options: ["Blue boat", "Red apple", "Red star"] },
      { prompt: "Tap boat.", answer: "Boat", options: ["Boat", "Apple", "Star"] },
      { prompt: "Tap sky.", answer: "Sky", options: ["Sky", "Apple", "Boat"] }
    ]
  },
  {
    id: "Lesson 07",
    tab: "07 Yellow",
    title: "Yellow Sun",
    coreSentence: "I see yellow.",
    targetWords: ["yellow", "sun", "duck"],
    parentNotes: ["先点太阳，让孩子感受 yellow。", "只跟读 I see yellow。", "red apple 和 blue boat 只做旧词对比。"],
    panels: buildPanels("lesson07", [
      ["I see yellow.", "Nia points to a big yellow sun rising over cozy Star Town."],
      ["I see yellow.", "Lumo catches a soft yellow sunbeam on his small shield."],
      ["I see yellow.", "Bobo smiles with a warm yellow glow on his screen face."],
      ["I see yellow.", "A small yellow duck wiggles beside a sunny little pond."],
      ["I see yellow.", "Yellow sunlight shines softly on the edge of Nia's blue cape."],
      ["I see yellow.", "A friendly cloud moves aside and the yellow sun glows brighter."],
      ["I see yellow.", "A red apple and a blue boat sit small in the corner while the yellow sun stays big."],
      ["I see yellow.", "Nia, Lumo, Bobo, and the yellow duck look at the glowing sun together."]
    ]),
    quizzes: [
      { prompt: "Tap sun.", answer: "Sun", options: ["Sun", "Moon", "Cloud"] },
      { prompt: "Tap yellow.", answer: "Yellow", options: ["Red", "Blue", "Yellow"] },
      { prompt: "Tap duck.", answer: "Duck", options: ["Duck", "Apple", "Boat"] }
    ]
  },
  {
    id: "Lesson 08",
    tab: "08 Shapes",
    title: "Shape Party",
    coreSentence: "I see a circle.",
    targetWords: ["circle", "star", "heart", "red", "blue", "yellow"],
    parentNotes: ["先用手比 circle。", "red、blue、yellow 只做复习。", "每次只问一个形状。"],
    panels: buildPanels("lesson08", [
      ["I see a circle.", "A large circle rug glows in the Star Town shape party."],
      ["I see red.", "Nia points to a red circle balloon at the party."],
      ["It is blue.", "Bobo points to a blue circle button on his chest."],
      ["I see yellow.", "A yellow sun looks like a big circle above Star Town."],
      ["I see a star.", "Lumo holds a large star cookie at the shape party."],
      ["I see a heart.", "Nia holds a glowing pink heart lantern."],
      ["I see a circle.", "A circle, star, and heart sit together for a shape tap game."],
      ["Bye bye!", "Nia, Lumo, and Bobo wave goodbye as the shapes sparkle together."]
    ]),
    quizzes: [
      { prompt: "Tap circle.", answer: "Circle", options: ["Circle", "Star", "Heart"] },
      { prompt: "Tap star.", answer: "Star", options: ["Heart", "Star", "Circle"] },
      { prompt: "Tap heart.", answer: "Heart", options: ["Circle", "Heart", "Star"] }
    ]
  },
  {
    id: "Lesson 09",
    tab: "09 Head",
    title: "My Head",
    coreSentence: "Touch your head.",
    targetWords: ["head", "hair", "eyes"],
    parentNotes: ["先示范摸头。", "听到 Touch your head 就一起摸头。", "hair 和 eyes 只做指认。"],
    panels: buildPanels("lesson09", [
      ["Hello, Nia!", "Nia smiles and waves in the morning light of Star Town while Lumo and Bobo stand nearby."],
      ["Touch your head.", "Nia gently puts both hands on her head in a clear action pose."],
      ["Touch your head.", "Lumo copies the action and touches his head with a bright smile."],
      ["My head.", "Bobo points to his round glowing head with one small robot hand."],
      ["I see hair.", "Nia points to her hair while soft sparkles highlight it."],
      ["I see eyes.", "Lumo opens his eyes wide beside a glowing star mirror."],
      ["Touch your head.", "Nia, Lumo, and Bobo face the child and touch their heads together."],
      ["Bye bye!", "The three friends wave goodbye in cozy Star Town at sunset."]
    ]),
    quizzes: [
      { prompt: "Tap head.", answer: "Head", options: ["Head", "Hair", "Eyes"] },
      { prompt: "Tap hair.", answer: "Hair", options: ["Eyes", "Hair", "Head"] },
      { prompt: "Tap eyes.", answer: "Eyes", options: ["Hair", "Head", "Eyes"] }
    ]
  },
  {
    id: "Lesson 10",
    tab: "10 Hands",
    title: "Happy Hands",
    coreSentence: "Clap your hands.",
    targetWords: ["hand", "clap", "open"],
    parentNotes: ["先复习 Touch your head。", "Open your hands 配合张开手掌。", "Clap your hands 建议拍两下。"],
    panels: buildPanels("lesson10", [
      ["Hello, hands!", "Nia lifts both hands to greet the child in the Star Town plaza."],
      ["Open your hands.", "Nia opens her hands with her palms facing the child."],
      ["Open your hands.", "Lumo opens both hands and gets ready to clap."],
      ["My hands.", "Bobo shows two round robot hands with a happy screen face."],
      ["Clap your hands.", "Nia claps her hands with a clear happy action."],
      ["Clap your hands.", "Lumo and Bobo clap their hands together in a bright rhythm."],
      ["Clap, clap!", "Nia, Lumo, and Bobo clap around a glowing star rug."],
      ["Bye bye!", "The three friends wave goodbye with happy hands."]
    ]),
    quizzes: [
      { prompt: "Tap hand.", answer: "Hand", options: ["Hand", "Head", "Eyes"] },
      { prompt: "Tap open.", answer: "Open", options: ["Clap", "Open", "Bye"] },
      { prompt: "Tap clap.", answer: "Clap", options: ["Open", "Hand", "Clap"] }
    ]
  },
  {
    id: "Lesson 11",
    tab: "11 Jump",
    title: "Jump, Lumo!",
    coreSentence: "I can jump.",
    targetWords: ["jump", "run", "stop"],
    parentNotes: ["先看 Lumo 动作，再跟读。", "jump 做小跳或手指跳。", "听到 stop 就停住。"],
    panels: buildPanels("lesson11", [
      ["Hello, Lumo!", "Nia, Lumo, and Bobo stand on a cozy Star Town action path."],
      ["I can jump.", "Lumo bends his knees and gets ready to jump while Nia points to him."],
      ["Jump, Lumo!", "Lumo jumps up beside a low glowing star."],
      ["I can run.", "Lumo runs slowly along the star path while Bobo watches."],
      ["Stop, Lumo!", "Nia raises one hand and Lumo stops on a glowing circle."],
      ["Run. Stop.", "Lumo runs one small step and stops while Bobo claps."],
      ["I can jump.", "Lumo jumps over a small circle while Nia opens her hands."],
      ["Bye bye!", "Nia, Lumo, and Bobo wave at the end of the star path."]
    ]),
    quizzes: [
      { prompt: "Tap jump.", answer: "Jump", options: ["Jump", "Run", "Stop"] },
      { prompt: "Tap run.", answer: "Run", options: ["Stop", "Run", "Jump"] },
      { prompt: "Tap stop.", answer: "Stop", options: ["Run", "Jump", "Stop"] }
    ]
  },
  {
    id: "Lesson 12",
    tab: "12 Body",
    title: "Body Review",
    coreSentence: "Show me your ...",
    targetWords: ["head", "hand", "foot"],
    parentNotes: ["每次只给一个身体指令。", "孩子能指出就算完成。", "动作词只自然复习，不加新负担。"],
    panels: buildPanels("lesson12", [
      ["Show me your head.", "Nia stands by a Star Town mirror and points to her head."],
      ["I see hair.", "Soft star light shines on Nia's hair while Lumo points gently."],
      ["Show me your eyes.", "Bobo shows bright happy eyes on his glowing screen face."],
      ["Show me your hand.", "Nia shows one hand and Lumo shows his small hand."],
      ["Clap your hands.", "Nia, Lumo, and Bobo clap their hands together."],
      ["Open your hands.", "Nia opens her hands beside a small opening star door."],
      ["Show me your foot.", "Lumo lifts one foot for a clear body-part review."],
      ["Jump. Stop.", "Lumo jumps once and stops while Nia and Bobo wave."]
    ]),
    quizzes: [
      { prompt: "Tap head.", answer: "Head", options: ["Head", "Hand", "Foot"] },
      { prompt: "Tap hand.", answer: "Hand", options: ["Foot", "Hand", "Head"] },
      { prompt: "Tap foot.", answer: "Foot", options: ["Hand", "Head", "Foot"] }
    ]
  },
  {
    id: "Lesson 13",
    tab: "13 Mom",
    title: "This Is Mom",
    coreSentence: "This is Mom.",
    targetWords: ["mom", "dad", "baby"],
    parentNotes: ["先用照片介绍 Mom。", "孩子能指认 mom、dad、baby 就算完成。", "不讲语法，只重复 This is Mom。"],
    panels: buildPanels("lesson13", [
      ["Hello, family!", "Nia opens a warm family photo album in cozy Star Town while Lumo and Bobo look in."],
      ["This is Mom.", "Nia points to Mom in the family album as Mom smiles and waves."],
      ["Hi, Mom.", "Nia holds Mom's hand while Lumo points gently."],
      ["This is Dad.", "The album turns to Dad holding a small glowing star."],
      ["This is Baby.", "Bobo shows a baby smile on his screen beside a baby sitting on a soft cushion."],
      ["Mom, Dad, Baby.", "Mom, Dad, and Baby stand together while Nia points to them."],
      ["This is Mom.", "Lumo holds three picture cards and Nia points to the Mom card."],
      ["Bye, family!", "Nia, Lumo, Bobo, and the family wave together under soft star light."]
    ]),
    quizzes: [
      { prompt: "Tap Mom.", answer: "Mom", options: ["Mom", "Dad", "Baby"] },
      { prompt: "Tap Dad.", answer: "Dad", options: ["Baby", "Dad", "Mom"] },
      { prompt: "Tap Baby.", answer: "Baby", options: ["Dad", "Mom", "Baby"] }
    ]
  },
  {
    id: "Lesson 14",
    tab: "14 Happy",
    title: "Happy Nia",
    coreSentence: "I am happy.",
    targetWords: ["happy", "sad", "okay"],
    parentNotes: ["先做三个表情。", "happy 是重点输出，sad 和 okay 先听懂。", "让孩子选今天的表情。"],
    panels: buildPanels("lesson14", [
      ["I am happy.", "Nia smiles brightly in Star Town plaza when she sees Lumo and Bobo."],
      ["Happy Nia!", "Lumo gives Nia a small glowing star and Nia smiles."],
      ["I am sad.", "Bobo's small ball rolls away and his screen face looks sad."],
      ["It is okay.", "Nia gently pats Bobo while Lumo points to the ball nearby."],
      ["I am okay.", "Bobo sits on a soft cushion with a calm okay face."],
      ["I am happy.", "Nia smiles at warm family photo cards of Mom, Dad, and Baby."],
      ["Happy, sad, okay.", "Three large expression stars show happy, sad, and okay faces while Nia points."],
      ["Bye! I am happy.", "Nia, Lumo, and Bobo wave goodbye with happy faces."]
    ]),
    quizzes: [
      { prompt: "Tap happy.", answer: "Happy", options: ["Happy", "Sad", "Okay"] },
      { prompt: "Tap sad.", answer: "Sad", options: ["Okay", "Sad", "Happy"] },
      { prompt: "Tap okay.", answer: "Okay", options: ["Sad", "Happy", "Okay"] }
    ]
  },
  {
    id: "Lesson 15",
    tab: "15 Hug",
    title: "Big Hug",
    coreSentence: "I love you.",
    targetWords: ["hug", "love", "family"],
    parentNotes: ["先做轻轻抱抱动作。", "重点跟读 I love you。", "孩子不想拥抱时可抱玩具。"],
    panels: buildPanels("lesson15", [
      ["Hello, family!", "Nia smiles beside a soft blanket in a warm Star Town family room."],
      ["Big hug!", "Nia opens her arms for a gentle hug with mom."],
      ["I love you.", "Mom gives Nia a soft hug with small heart lights around them."],
      ["I love you.", "Lumo gives dad a small glowing heart lamp."],
      ["Baby hug.", "Bobo brings a soft family pillow while baby smiles on the blanket."],
      ["Family hug.", "Nia, mom, dad, and baby gather for a gentle family hug while Lumo and Bobo smile nearby."],
      ["I love you.", "Nia hugs Bobo and Bobo shows a heart on his glowing screen face."],
      ["I love you.", "The family, Nia, Lumo, and Bobo wave under warm heart lights."]
    ]),
    quizzes: [
      { prompt: "Tap hug.", answer: "Hug", options: ["Hug", "Run", "Stop"] },
      { prompt: "Tap love.", answer: "Love", options: ["Happy", "Love", "Head"] },
      { prompt: "Tap family.", answer: "Family", options: ["Family", "Boat", "Sun"] }
    ]
  },
  {
    id: "Lesson 16",
    tab: "16 Family",
    title: "Family Review",
    coreSentence: "Who is this?",
    targetWords: ["mom", "dad", "me"],
    parentNotes: ["每次只问一个人。", "孩子能点选就算完成。", "旧词只自然复现，不逐个考。"],
    panels: buildPanels("lesson16", [
      ["Who is this?", "A family album opens in Star Town while Nia, Lumo, and Bobo sit nearby."],
      ["This is mom.", "The album shows mom smiling clearly in a warm family picture."],
      ["This is dad.", "The album shows dad waving clearly in a warm family picture."],
      ["This is me.", "Nia points to herself in a glowing star mirror."],
      ["Baby is happy.", "Baby smiles happily while holding a soft ball on the blanket."],
      ["Bobo is sad.", "Bobo shows a small sad face on his glowing screen while Nia sits beside him."],
      ["I am okay.", "Lumo gives a thumbs-up and Bobo's screen face becomes calm."],
      ["I love my family.", "Mom, dad, baby, Nia, Lumo, and Bobo share a gentle family hug under heart lights."]
    ]),
    quizzes: [
      { prompt: "Tap mom.", answer: "Mom", options: ["Mom", "Dad", "Baby"] },
      { prompt: "Tap dad.", answer: "Dad", options: ["Baby", "Dad", "Mom"] },
      { prompt: "Tap me.", answer: "Me", options: ["Mom", "Dad", "Me"] }
    ]
  },
  {
    id: "Lesson 17",
    tab: "17 Ball",
    title: "The Ball",
    coreSentence: "I see a ball.",
    targetWords: ["ball", "toy", "box"],
    parentNotes: ["先找 ball。", "孩子能说 ball 就算完成。", "互动重点是找玩具。"],
    panels: buildPanels("lesson17", [
      ["Hello, toys!", "Nia opens a cozy Star Town toy corner with a big ball on the floor."],
      ["I see a ball.", "Nia points to one large colorful ball."],
      ["A ball!", "Lumo holds the ball and smiles at the child."],
      ["I see a box.", "Bobo pushes a simple toy box into the toy corner."],
      ["I see a toy.", "A soft toy sits beside the ball and the box."],
      ["I see a ball.", "Nia points again to the ball among three toys."],
      ["My ball.", "Lumo and Bobo roll the ball back to Nia."],
      ["Bye, ball!", "Nia, Lumo, and Bobo wave beside the ball and toy box."]
    ]),
    quizzes: [
      { prompt: "Tap the ball.", answer: "Ball", options: ["Ball", "Box", "Toy"] },
      { prompt: "Tap the box.", answer: "Box", options: ["Toy", "Box", "Ball"] },
      { prompt: "Tap the toy.", answer: "Toy", options: ["Box", "Ball", "Toy"] }
    ]
  },
  {
    id: "Lesson 18",
    tab: "18 In",
    title: "In the Box",
    coreSentence: "The ball is in.",
    targetWords: ["in", "box", "ball"],
    parentNotes: ["先复习 ball 和 box。", "用动作理解 in。", "点盒子打开看球。"],
    panels: buildPanels("lesson18", [
      ["I see a ball.", "A large ball sits beside a toy box in the Star Town toy corner."],
      ["I see a box.", "Nia points to an open toy box."],
      ["Go in.", "Lumo gently rolls the ball toward the box."],
      ["The ball is in.", "The ball sits clearly inside the open box."],
      ["In the box.", "Bobo looks into the box and sees the ball."],
      ["The toy is in.", "Nia places one small toy into the box."],
      ["Open the box.", "The closed toy box waits for the child to tap it open."],
      ["The ball is in.", "The open box glows with the ball inside."]
    ]),
    quizzes: [
      { prompt: "Tap the ball.", answer: "Ball", options: ["Ball", "Box", "Toy"] },
      { prompt: "Tap the box.", answer: "Box", options: ["Ball", "Box", "Nia"] },
      { prompt: "Open the box.", answer: "Box", options: ["Chair", "Box", "Bed"] }
    ]
  },
  {
    id: "Lesson 19",
    tab: "19 On",
    title: "On the Bed",
    coreSentence: "The doll is on the bed.",
    targetWords: ["on", "bed", "doll"],
    parentNotes: ["先用玩偶演示 on。", "in 只做轻复习。", "听音选择床上的娃娃。"],
    panels: buildPanels("lesson19", [
      ["I see a bed.", "Nia enters a cozy Star Town bedroom with a simple soft bed."],
      ["I see a doll.", "A cute original doll sits beside the bed."],
      ["The doll is on the bed.", "Nia gently places the doll on the bed."],
      ["On the bed.", "Lumo points to the doll sitting on the bed."],
      ["The ball is in.", "Bobo places a ball inside a small toy box as a quick review."],
      ["The doll is on the bed.", "Nia points again to the doll on the bed."],
      ["Where is the doll?", "The doll, ball, box, and bed appear for a listening choice."],
      ["Bye, doll.", "The doll rests on the bed while Nia, Lumo, and Bobo wave softly."]
    ]),
    quizzes: [
      { prompt: "Tap the doll.", answer: "Doll", options: ["Doll", "Ball", "Box"] },
      { prompt: "Tap the bed.", answer: "Bed", options: ["Chair", "Bed", "Box"] },
      { prompt: "Where is the doll?", answer: "On the bed", options: ["In the box", "On the bed", "Under the chair"] }
    ]
  },
  {
    id: "Lesson 20",
    tab: "20 Under",
    title: "Under the Chair",
    coreSentence: "It is under the chair.",
    targetWords: ["under", "chair", "car"],
    parentNotes: ["重点是 under。", "in 和 on 只做小复习。", "找椅子下面的小车。"],
    panels: buildPanels("lesson20", [
      ["Where is the car?", "Bobo looks around the Star Town playroom for a missing toy car."],
      ["I see a chair.", "Nia points to one large simple chair."],
      ["It is under the chair.", "A small toy car peeks out from under the chair."],
      ["Under the chair.", "Lumo bends down and looks under the chair."],
      ["I see a car.", "Bobo happily rolls the toy car out."],
      ["The ball is in.", "A ball sits inside a small toy box as a light review."],
      ["The doll is on the bed.", "A doll sits on a bed in the background as a light review."],
      ["It is under the chair.", "The toy car is again under the chair for one final find-it moment."]
    ]),
    quizzes: [
      { prompt: "Tap the car.", answer: "Car", options: ["Car", "Ball", "Doll"] },
      { prompt: "Tap the chair.", answer: "Chair", options: ["Box", "Bed", "Chair"] },
      { prompt: "Where is the car?", answer: "Under the chair", options: ["In the box", "On the bed", "Under the chair"] }
    ]
  },
  {
    id: "Lesson 21",
    tab: "21 Cat",
    title: "I Hear a Cat",
    coreSentence: "I hear a cat.",
    targetWords: ["hear", "cat", "meow"],
    parentNotes: ["先做听的动作。", "听到 meow 就点 cat。", "孩子说 cat 或 meow 都算完成。"],
    panels: buildPanels("lesson21", [
      ["Listen.", "Nia listens carefully in a cozy Star Town garden with Lumo and Bobo."],
      ["I hear meow.", "A small cat tail peeks from behind a flower pot."],
      ["I hear a cat.", "A gentle round kitten peeks out from behind the flower pot."],
      ["Hello, cat.", "Nia smiles and waves softly to the kitten."],
      ["Meow, meow.", "The kitten sits on a soft mat and makes a tiny friendly sound."],
      ["I hear a cat.", "Lumo points to his ear while soft sound waves move toward the cat."],
      ["Where is cat?", "A cat, star, and cloud appear as large tappable choices."],
      ["Bye, cat.", "Nia, Lumo, Bobo, and the kitten wave goodbye."]
    ]),
    quizzes: [
      { prompt: "Meow. Tap cat.", answer: "Cat", options: ["Cat", "Star", "Cloud"] },
      { prompt: "Tap cat.", answer: "Cat", options: ["Bobo", "Cat", "Lumo"] },
      { prompt: "Say meow.", answer: "Meow", options: ["Meow", "Hello", "Bye"] }
    ]
  },
  {
    id: "Lesson 22",
    tab: "22 Dog",
    title: "Dog Says Woof",
    coreSentence: "The dog says woof.",
    targetWords: ["dog", "woof", "run"],
    parentNotes: ["先复习 cat 和 meow。", "woof 用轻快小声音。", "run 可以用手指跑。"],
    panels: buildPanels("lesson22", [
      ["Hello, dog.", "Nia and Lumo see a gentle puppy on the Star Town path."],
      ["The dog says woof.", "The puppy sits on soft grass and gives a friendly little woof."],
      ["Woof, woof.", "Bobo listens with a happy glowing screen face."],
      ["The dog can run.", "The puppy slowly runs toward a soft blue ball."],
      ["Run, dog, run.", "Nia and Lumo make tiny running motions with their hands."],
      ["Dog says woof.", "The dog sits calmly while a cat watches from far away."],
      ["Where is dog?", "A dog, cat, and ball appear as large tappable choices."],
      ["Bye, dog.", "The puppy holds the ball and waves its tail goodbye."]
    ]),
    quizzes: [
      { prompt: "Woof. Tap dog.", answer: "Dog", options: ["Dog", "Cat", "Ball"] },
      { prompt: "Tap dog.", answer: "Dog", options: ["Bird", "Dog", "Bobo"] },
      { prompt: "Say woof.", answer: "Woof", options: ["Woof", "Meow", "Run"] }
    ]
  },
  {
    id: "Lesson 23",
    tab: "23 Bird",
    title: "Bird in the Sky",
    coreSentence: "A bird can fly.",
    targetWords: ["bird", "fly", "sky"],
    parentNotes: ["先指天空。", "点 bird 看飞行动画。", "孩子可用手臂轻轻做 fly。"],
    panels: buildPanels("lesson23", [
      ["I see a bird.", "A gentle round bird sits on a low tree branch while Nia looks up."],
      ["I see the sky.", "Lumo points to the soft blue sky above Star Town."],
      ["A bird can fly.", "The bird opens its wings and gets ready to fly."],
      ["Fly, bird, fly.", "The bird flies slowly in a safe curved path above Nia."],
      ["Bird in the sky.", "Bobo shows a glowing bird flight path on his screen."],
      ["Hello, bird.", "The bird lands gently near Lumo's star hat."],
      ["Tap bird.", "A bird, dog, and cat appear in clear separate places."],
      ["Bye, bird.", "The bird flies toward the soft sky as everyone waves."]
    ]),
    quizzes: [
      { prompt: "Tap bird.", answer: "Bird", options: ["Bird", "Dog", "Cat"] },
      { prompt: "Tap sky.", answer: "Sky", options: ["Sky", "Ball", "Bobo"] },
      { prompt: "Tap fly.", answer: "Fly", options: ["Run", "Fly", "Meow"] }
    ]
  },
  {
    id: "Lesson 24",
    tab: "24 Review",
    title: "Animal Review",
    coreSentence: "What do you hear?",
    targetWords: ["cat", "dog", "bird", "fish"],
    parentNotes: ["这是动物复习课，不加复杂表达。", "每次只听一个声音、点一个动物。", "fish 用 splash 关联水声，不说鱼会叫。"],
    panels: buildPanels("lesson24", [
      ["What do you hear?", "Nia listens in a cozy Star Town animal corner with Lumo and Bobo."],
      ["I hear a cat.", "A gentle kitten sits on a soft mat and says meow."],
      ["I hear a dog.", "A friendly puppy sits by the path and says woof."],
      ["I hear a bird.", "A small round bird sits on a low branch and tweets softly."],
      ["I see a fish.", "A bright fish swims in a small clear pond with a soft splash."],
      ["What do you hear?", "Four animals appear in separate large tappable areas."],
      ["Cat, dog, bird, fish.", "Bobo shows four simple animal icons one by one."],
      ["Bye, animals.", "Nia, Lumo, Bobo, cat, dog, bird, and fish wave goodbye."]
    ]),
    quizzes: [
      { prompt: "Meow. What do you hear?", answer: "Cat", options: ["Cat", "Dog", "Bird"] },
      { prompt: "Woof. What do you hear?", answer: "Dog", options: ["Fish", "Dog", "Cat"] },
      { prompt: "Tweet. What do you hear?", answer: "Bird", options: ["Bird", "Dog", "Fish"] },
      { prompt: "Splash. What do you hear?", answer: "Fish", options: ["Cat", "Bird", "Fish"] }
    ]
  },
  {
    id: "Lesson 25",
    tab: "25 Milk",
    title: "I Want Milk",
    coreSentence: "I want milk.",
    targetWords: ["want", "milk", "water"],
    parentNotes: ["先指 milk 和 water。", "孩子点选或说 milk 都算完成。", "please 只做礼貌复现。"],
    panels: buildPanels("lesson25", [
      ["Hello, drinks!", "Nia, Lumo, and Bobo sit at a cozy Star Town snack table with one milk cup and one water cup."],
      ["I want milk.", "Nia points to a small white cup of milk."],
      ["I want water.", "Lumo looks at a clear cup of water."],
      ["Milk, please.", "Bobo shows a milk icon on his glowing screen and raises one hand."],
      ["Here is milk.", "Nia gently gives the milk cup to Bobo on the table."],
      ["Water, please.", "Lumo places the water cup in front of himself."],
      ["I want milk.", "Milk and water sit side by side for a drink choice moment."],
      ["Thank you!", "Nia, Lumo, and Bobo smile at the snack table with cups placed safely."]
    ]),
    quizzes: [
      { prompt: "Tap milk.", answer: "Milk", options: ["Milk", "Water", "Apple"] },
      { prompt: "Tap water.", answer: "Water", options: ["Bread", "Water", "Milk"] },
      { prompt: "What do you want?", answer: "Milk", options: ["Milk", "Bobo", "Lumo"] }
    ]
  },
  {
    id: "Lesson 26",
    tab: "26 Apple",
    title: "Yummy Apple",
    coreSentence: "I like apples.",
    targetWords: ["like", "apple", "banana"],
    parentNotes: ["先指 apple 和 banana。", "重点跟读 I like apples。", "不要求孩子真实进食。"],
    panels: buildPanels("lesson26", [
      ["Hello, fruit!", "Nia smiles beside a Star Town fruit table with a large red apple and a yellow banana."],
      ["I like apples.", "Nia holds one red apple with both hands."],
      ["I like bananas.", "Lumo points to a yellow banana on a small plate."],
      ["Apple, please.", "Bobo looks at the apple with a happy screen face."],
      ["Here is an apple.", "Nia places the apple on a small plate in front of Bobo."],
      ["Here is a banana.", "Lumo places the banana on another small plate."],
      ["I like apples.", "The apple and banana sit side by side for a fruit choice moment."],
      ["Yummy fruit!", "Nia, Lumo, and Bobo wave happily around the fruit table."]
    ]),
    quizzes: [
      { prompt: "Tap apple.", answer: "Apple", options: ["Apple", "Banana", "Milk"] },
      { prompt: "Tap banana.", answer: "Banana", options: ["Bread", "Apple", "Banana"] },
      { prompt: "What do you like?", answer: "Apple", options: ["Apple", "Water", "Bobo"] }
    ]
  },
  {
    id: "Lesson 27",
    tab: "27 Bread",
    title: "Bread for Bobo",
    coreSentence: "Here is bread.",
    targetWords: ["bread", "give", "please"],
    parentNotes: ["先指 bread。", "点击 bread 给 Bobo。", "please 和 thank you 只做礼貌复现。"],
    panels: buildPanels("lesson27", [
      ["Hello, bread!", "A large bread slice sits on a plate at the Star Town snack table while Bobo looks at it."],
      ["Bread, please.", "Bobo shows a bread icon on his glowing screen and raises one small hand."],
      ["Here is bread.", "Nia holds a plate with bread and smiles at Bobo."],
      ["Give bread.", "Lumo gently moves the bread plate toward Bobo."],
      ["Thank you!", "Bobo receives the bread plate and shows a happy face on his screen."],
      ["Bread, please.", "Nia points to another bread slice and faces the child."],
      ["Give Bobo bread.", "The bread and Bobo appear large for a tap-to-give moment."],
      ["Here is bread.", "Nia, Lumo, and Bobo smile at the snack table with bread resting safely on the plate."]
    ]),
    quizzes: [
      { prompt: "Tap bread.", answer: "Bread", options: ["Bread", "Milk", "Apple"] },
      { prompt: "Give Bobo bread.", answer: "Bread", options: ["Bobo", "Bread", "Water"] },
      { prompt: "Say please.", answer: "Please", options: ["Please", "Run", "Head"] }
    ]
  },
  {
    id: "Lesson 28",
    tab: "28 Food",
    title: "Food Review",
    coreSentence: "Do you want ...?",
    targetWords: ["milk", "apple", "bread"],
    parentNotes: ["复习 milk、apple、bread。", "孩子点 yes/no 即可。", "接受孩子说 No, thank you。"],
    panels: buildPanels("lesson28", [
      ["Hello, food!", "Milk, an apple, and bread sit clearly on a cozy Star Town review table."],
      ["Do you want milk?", "Nia points to the milk cup and looks toward the child."],
      ["Do you want an apple?", "Lumo points to the red apple on a small plate."],
      ["Do you want bread?", "Bobo points to the bread slice on a plate."],
      ["Yes, please.", "Nia smiles and nods beside the milk cup."],
      ["No, thank you.", "Lumo smiles and gently waves one hand beside a water cup."],
      ["Do you want bread?", "Milk, apple, and bread sit side by side while Bobo makes a choice gesture."],
      ["Thank you!", "Nia, Lumo, and Bobo wave around the review table with all food placed safely."]
    ]),
    quizzes: [
      { prompt: "Do you want milk?", answer: "Yes", options: ["Yes", "No", "Apple"] },
      { prompt: "Tap apple.", answer: "Apple", options: ["Milk", "Apple", "Bread"] },
      { prompt: "Do you want bread?", answer: "Yes", options: ["No", "Bread", "Yes"] }
    ]
  },
  {
    id: "Lesson 29",
    tab: "29 Sunny",
    title: "Sunny Hat",
    coreSentence: "It is sunny.",
    targetWords: ["sunny", "hat", "hot"],
    parentNotes: ["指向窗外或图里的太阳说 It is sunny。", "做戴帽子的动作。", "只强调太阳天戴帽子。"],
    panels: buildPanels("lesson29", [
      ["It is sunny.", "Nia stands by the window and sees soft sunlight coming into the room."],
      ["The sun is up.", "Lumo points to a round gentle sun in a clear sky."],
      ["It is hot.", "Bobo gently fans with one hand, with a water cup nearby."],
      ["Nia sees a hat.", "Nia sees a small yellow hat on the table."],
      ["Put on the hat.", "Nia holds the hat with both hands and gets ready to wear it."],
      ["The hat is on.", "Nia wears the hat and smiles at Lumo."],
      ["It is sunny.", "Nia, Lumo, and Bobo stand near the door in soft sunshine."],
      ["Sunny day, hat on!", "Nia walks safely near tree shade with the hat on while Bobo waves."]
    ]),
    quizzes: [
      { prompt: "What does Nia need?", answer: "Hat", options: ["Hat", "Ball", "Spoon"] },
      { prompt: "Tap sunny.", answer: "Sunny", options: ["Sunny", "Rainy", "Windy"] },
      { prompt: "Tap hat.", answer: "Hat", options: ["Hat", "Boots", "Shoes"] }
    ]
  },
  {
    id: "Lesson 30",
    tab: "30 Rain",
    title: "Rainy Boots",
    coreSentence: "It is rainy.",
    targetWords: ["rainy", "boots", "coat"],
    parentNotes: ["找图里的雨靴和雨衣。", "做穿雨靴动作，说 boots。", "雨天慢慢走，不踩深水。"],
    panels: buildPanels("lesson30", [
      ["It is rainy.", "Nia stands by the window and sees small raindrops outside."],
      ["Rain goes tap tap.", "Lumo listens to gentle raindrops on the window."],
      ["Nia sees boots.", "A pair of red rain boots sits neatly by the door."],
      ["Nia sees a coat.", "A blue rain coat hangs on a low hook."],
      ["Put on the coat.", "Nia puts on the rain coat while Lumo helps gently."],
      ["Put on the boots.", "Nia sits safely on a small stool and puts on rain boots."],
      ["It is rainy.", "Nia stands at the door wearing the rain coat and boots."],
      ["Rainy day, boots on!", "Nia, Lumo, and Bobo walk slowly in light rain on a safe flat path."]
    ]),
    quizzes: [
      { prompt: "What should Nia wear?", answer: "Boots and coat", options: ["Boots and coat", "Sun hat", "Pajamas"] },
      { prompt: "Tap boots.", answer: "Boots", options: ["Boots", "Hat", "Cup"] },
      { prompt: "Tap rainy.", answer: "Rainy", options: ["Sunny", "Rainy", "Hot"] }
    ]
  },
  {
    id: "Lesson 31",
    tab: "31 Shoes",
    title: "Put On Shoes",
    coreSentence: "Put on your shoes.",
    targetWords: ["shoes", "put on", "go"],
    parentNotes: ["出门前自然说 Put on your shoes。", "先指自己的 shoes。", "可以只说 shoes 或跟读核心句。"],
    panels: buildPanels("lesson31", [
      ["Nia wants to go.", "Nia stands by the door with a small bag, looking ready to go."],
      ["Where are the shoes?", "Lumo points to the shoe rack near the door."],
      ["Here are the shoes.", "A pair of small green shoes sits neatly on a mat."],
      ["Put on your shoes.", "Nia sits on a small stool and gets ready to put on shoes."],
      ["One shoe is on.", "Nia has one shoe on while Bobo watches."],
      ["Two shoes are on.", "Nia has both shoes on and stands safely on the mat."],
      ["Put on your shoes.", "Lumo gently points to the shoes as a reminder."],
      ["Now we can go.", "Nia, Lumo, and Bobo leave the doorway slowly together."]
    ]),
    quizzes: [
      { prompt: "Tap the shoes.", answer: "Shoes", options: ["Shoes", "Bag", "Cup"] },
      { prompt: "Tap go.", answer: "Go", options: ["Go", "Stop", "Sad"] },
      { prompt: "What should Nia put on?", answer: "Shoes", options: ["Shoes", "Hat", "Bread"] }
    ]
  },
  {
    id: "Lesson 32",
    tab: "32 Weather",
    title: "Weather Review",
    coreSentence: "What is the weather?",
    targetWords: ["sunny", "rainy", "windy"],
    parentNotes: ["只在 sunny、rainy、windy 中选择。", "每天可看窗外问 What is the weather?", "孩子回答单词即可。"],
    panels: buildPanels("lesson32", [
      ["What is the weather?", "Lumo stands by a window with three simple weather cards nearby."],
      ["It is sunny.", "Nia points to a sunny card with soft sunlight in the background."],
      ["What is the weather?", "Bobo looks at another window and waits for the answer."],
      ["It is rainy.", "Small raindrops fall outside the window on a clean safe ground."],
      ["What is the weather?", "Lumo holds up the third weather card."],
      ["It is windy.", "A small flag waves gently and a few leaves move in a light breeze."],
      ["Sunny, rainy, windy.", "Three weather cards are shown side by side as Nia points to each one."],
      ["What is the weather?", "Nia, Lumo, and Bobo look out the window and invite the child to choose."]
    ]),
    quizzes: [
      { prompt: "What is the weather?", answer: "Rainy", options: ["Sunny", "Rainy", "Windy"] },
      { prompt: "Tap windy.", answer: "Windy", options: ["Sunny", "Rainy", "Windy"] },
      { prompt: "Tap sunny.", answer: "Sunny", options: ["Sunny", "Rainy", "Windy"] }
    ]
  },
  {
    id: "Lesson 33",
    tab: "33 Wash",
    title: "Wash Hands",
    coreSentence: "Wash your hands.",
    targetWords: ["wash", "hands", "clean"],
    parentNotes: ["先指出 hands。", "洗手动作要慢，边做边说 Wash your hands。", "最后展示 clean hands。"],
    panels: buildPanels("lesson33", [
      ["Look at my hands.", "Nia stands by a child-safe wash basin with a few tiny dust dots on her hands."],
      ["I see soap.", "Bobo points to a faucet and a small soap near the basin."],
      ["Wash your hands.", "Nia puts both hands under a gentle thin stream of water."],
      ["Soap on hands.", "Lumo lights up the soap while soft bubbles appear on Nia's palms."],
      ["Wash, wash.", "Nia rubs her hands together with round bubbles while Bobo smiles."],
      ["Rinse your hands.", "Clean water rinses the bubbles away beside a dry anti-slip mat."],
      ["Clean hands.", "Nia dries her hands with a soft towel and clean star light appears."],
      ["My hands are clean.", "Nia, Lumo, and Bobo show clean hands by the basin with the faucet turned off."]
    ]),
    quizzes: [
      { prompt: "Tap hands.", answer: "Hands", options: ["Hands", "Book", "Shoes"] },
      { prompt: "Tap soap.", answer: "Soap", options: ["Soap", "Ball", "Hat"] },
      { prompt: "Tap clean hands.", answer: "Clean hands", options: ["Dirty hands", "Clean hands", "Rainy"] }
    ]
  },
  {
    id: "Lesson 34",
    tab: "34 Teeth",
    title: "Brush Teeth",
    coreSentence: "Brush your teeth.",
    targetWords: ["brush", "teeth", "smile"],
    parentNotes: ["只做轻轻刷牙动作。", "牙膏量很少，不表现吞咽。", "结束时说 Nice smile。"],
    panels: buildPanels("lesson34", [
      ["Good morning!", "Nia stands at a bright bathroom mirror with a toothbrush and a small cup on the counter."],
      ["I see a brush.", "Lumo points to a soft child toothbrush."],
      ["Brush, please.", "Bobo gives a tiny dot of toothpaste onto the toothbrush head."],
      ["Brush your teeth.", "Nia gently brushes her front teeth in the mirror."],
      ["Brush, brush.", "Lumo makes a small circle gesture while Nia brushes the side teeth gently."],
      ["Clean teeth.", "Nia holds a small cup by the sink for a quiet rinse."],
      ["Nice smile.", "Bobo shows a happy face while Nia gives a simple clean smile."],
      ["Bye, brush.", "The toothbrush is back in the cup while the three friends wave."]
    ]),
    quizzes: [
      { prompt: "Tap brush.", answer: "Brush", options: ["Brush", "Bed", "Dog"] },
      { prompt: "Tap teeth.", answer: "Teeth", options: ["Hands", "Teeth", "Boots"] },
      { prompt: "Tap smile.", answer: "Smile", options: ["Smile", "Sad", "Rainy"] }
    ]
  },
  {
    id: "Lesson 35",
    tab: "35 Bath",
    title: "Bath Time",
    coreSentence: "Time for a bath.",
    targetWords: ["bath", "towel", "warm"],
    parentNotes: ["用浴袍、泡泡和毛巾表达 bath。", "不展示裸露细节。", "强调 warm 和安全慢动作。"],
    panels: buildPanels("lesson35", [
      ["Time for a bath.", "A warm bathroom has a small tub, towel, bubbles, and Nia in a safe bath robe."],
      ["It is warm.", "Lumo points to a duck water-temperature toy in shallow glowing water."],
      ["I see a towel.", "Bobo places a soft towel on a rack near a dry anti-slip mat."],
      ["Warm bath.", "Nia sits by the small tub with bubbles covering the bath area, showing only shoulders and arms."],
      ["Bubbles!", "Lumo lights up round bubbles while Nia uses a small sponge on her arm."],
      ["I see a duck.", "Bobo gives a duck toy while the tub water stays calm."],
      ["Towel, please.", "Nia stands wrapped in a big towel on the anti-slip mat."],
      ["Good night.", "Nia, Lumo, and Bobo stand by the tidy bathroom door with tub and towel put away."]
    ]),
    quizzes: [
      { prompt: "Tap bath.", answer: "Bath", options: ["Bath", "Brush", "Bird"] },
      { prompt: "Tap towel.", answer: "Towel", options: ["Towel", "Car", "Milk"] },
      { prompt: "Tap warm.", answer: "Warm", options: ["Cold", "Warm", "Windy"] }
    ]
  },
  {
    id: "Lesson 36",
    tab: "36 Bedtime",
    title: "Bedtime Book",
    coreSentence: "Time for bed.",
    targetWords: ["bed", "book", "sleep"],
    parentNotes: ["保持暖光，不制造黑暗恐惧。", "可以用真实绘本复现 Read a book。", "孩子只说 Good night 也算完成。"],
    panels: buildPanels("lesson36", [
      ["Time for bed.", "Nia sits by the bed in a cozy bedtime robe with a wordless picture book nearby."],
      ["I see a book.", "Lumo glows softly and lights the wordless book cover."],
      ["I see a bed.", "Bobo places a small pillow on the tidy warm bed."],
      ["Read a book.", "Nia opens the wordless picture book with simple stars and clouds."],
      ["Quiet, please.", "Nia, Lumo, and Bobo sit quietly around the book."],
      ["Time to sleep.", "Nia closes the book while Bobo's screen becomes gentle sleepy eyes."],
      ["Sleep, Nia.", "Nia lies safely under the blanket below her shoulders while Lumo dims to warm star light."],
      ["Good night.", "A warm night light glows while Nia sleeps and Lumo and Bobo wait quietly by the bed."]
    ]),
    quizzes: [
      { prompt: "Tap book.", answer: "Book", options: ["Book", "Boots", "Milk"] },
      { prompt: "Tap bed.", answer: "Bed", options: ["Chair", "Bed", "Box"] },
      { prompt: "Tap sleep.", answer: "Sleep", options: ["Run", "Sleep", "Wash"] }
    ]
  },
  {
    id: "Lesson 37",
    tab: "37 Park",
    title: "Go to the Park",
    coreSentence: "Let us go.",
    targetWords: ["park", "go", "friend"],
    parentNotes: ["听到 go 时一起做慢慢走的动作。", "能说 go 或 park 即可。", "出门前可以自然说 Let us go。"],
    panels: buildPanels("lesson37", [
      ["Let us go.", "Nia stands by the moon-shaped door with a small bag and a wordless park map nearby."],
      ["I see a map.", "Bobo shows a wordless park map with simple picture icons."],
      ["Go to the park.", "Lumo points to the green park icon on the wordless map."],
      ["Go, go, go.", "Nia, Lumo, and Bobo walk slowly together on a safe park path."],
      ["I see a park.", "A bright safe park with grass, trees, and a bench appears ahead."],
      ["Hello, friend.", "Nia waves to Lumo and Bobo as her two friends."],
      ["We go together.", "The three friends walk into the park together away from any road."],
      ["We are at the park.", "Nia, Lumo, and Bobo stand inside the bright safe park and wave."]
    ]),
    quizzes: [
      { prompt: "Tap park.", answer: "Park", options: ["Park", "Bed", "Bath"] },
      { prompt: "Tap map.", answer: "Map", options: ["Map", "Milk", "Boots"] },
      { prompt: "Tap friend.", answer: "Friend", options: ["Friend", "Rainy", "Brush"] }
    ]
  },
  {
    id: "Lesson 38",
    tab: "38 Run",
    title: "Run and Stop",
    coreSentence: "Run. Stop.",
    targetWords: ["run", "stop", "fast"],
    parentNotes: ["在家只做原地小跑。", "听到 Stop 时双脚站稳。", "兴奋时只保留 Run 和 Stop 两个口令。"],
    panels: buildPanels("lesson38", [
      ["Ready?", "Nia, Lumo, and Bobo stand on a soft round park track and get ready."],
      ["Run.", "Lumo does a small safe run on the soft track while Nia smiles."],
      ["Run fast.", "Nia runs a little faster on the open soft track with gentle motion lines."],
      ["Stop.", "Bobo shows a calm stop gesture while the friends stand still."],
      ["Good stop.", "The three friends stand safely behind a glowing line."],
      ["Run again.", "Lumo runs again with tiny star steps while Bobo watches."],
      ["Stop again.", "Nia stops with both feet steady and a relaxed smile."],
      ["Run and stop.", "The friends rest beside the track after the action game."]
    ]),
    quizzes: [
      { prompt: "Tap run.", answer: "Run", options: ["Run", "Sleep", "Read"] },
      { prompt: "Tap stop.", answer: "Stop", options: ["Go", "Stop", "Jump"] },
      { prompt: "Tap fast.", answer: "Fast", options: ["Fast", "Low", "Clean"] }
    ]
  },
  {
    id: "Lesson 39",
    tab: "39 Slide",
    title: "Slide Down",
    coreSentence: "I can slide.",
    targetWords: ["slide", "down", "fun"],
    parentNotes: ["用手掌在手臂上轻轻滑下。", "强调坐好、扶好、一次一个人。", "不模仿倒滑或跳下。"],
    panels: buildPanels("lesson39", [
      ["I see a slide.", "A low rounded slide stands on soft safety mats in the bright park."],
      ["Up, up.", "Nia holds the handrail and steps carefully up the short stairs."],
      ["Sit down.", "Nia sits at the top of the slide with feet forward."],
      ["I can slide.", "Nia slides down slowly while Lumo watches from the side."],
      ["Slide down.", "Nia reaches the soft mat at the bottom in a safe seated pose."],
      ["It is fun.", "Bobo claps beside the slide while Lumo glows happily."],
      ["Lumo can slide.", "Lumo gently slides down a tiny toy slope beside the big slide."],
      ["Slide is fun.", "Nia, Lumo, and Bobo wave beside the tidy low slide."]
    ]),
    quizzes: [
      { prompt: "Tap slide.", answer: "Slide", options: ["Slide", "Swing", "Shoe"] },
      { prompt: "Tap down.", answer: "Down", options: ["High", "Down", "Sunny"] },
      { prompt: "Tap fun.", answer: "Fun", options: ["Fun", "Sad", "Rainy"] }
    ]
  },
  {
    id: "Lesson 40",
    tab: "40 Swing",
    title: "Swing High",
    coreSentence: "I can swing.",
    targetWords: ["swing", "high", "low"],
    parentNotes: ["用手做 high 和 low 的位置。", "强调 Hold on 和 Stop the swing。", "能说 high 或 low 就算完成。"],
    panels: buildPanels("lesson40", [
      ["I see a swing.", "A low safe swing set stands on soft rubber ground in the park."],
      ["Hold on.", "Nia sits on the swing and holds both ropes."],
      ["I can swing.", "Nia swings gently while Bobo and Lumo wait outside the swing path."],
      ["Swing low.", "The swing moves in a small low arc near the ground."],
      ["Swing high.", "The swing moves a little higher but stays safe and gentle."],
      ["Slow down.", "Nia slows the swing while staying seated and holding on."],
      ["Stop the swing.", "The swing stops and Nia's feet touch the soft ground."],
      ["Swing is fun.", "Nia, Lumo, and Bobo wave beside the still swing."]
    ]),
    quizzes: [
      { prompt: "Tap swing.", answer: "Swing", options: ["Swing", "Slide", "Soap"] },
      { prompt: "Tap high.", answer: "High", options: ["High", "Low", "Stop"] },
      { prompt: "Tap low.", answer: "Low", options: ["Fast", "High", "Low"] }
    ]
  },
  {
    id: "Lesson 41",
    tab: "41 Help",
    title: "I Can Help",
    coreSentence: "I can help.",
    targetWords: ["help", "carry", "bag"],
    parentNotes: ["只用很轻的小包做动作。", "能说 help 或 I can help 都算完成。", "自然加入 Thank you。"],
    panels: buildPanels("lesson41", [
      ["I can help.", "Bobo stands near a park bench with a small soft bag on the ground."],
      ["I see a bag.", "Lumo points to a small light soft bag."],
      ["Carry the bag.", "Nia holds the soft bag handle with both hands."],
      ["Help Bobo.", "Nia helps Bobo put the soft bag on the bench."],
      ["Thank you.", "Bobo smiles gently at Nia."],
      ["You are welcome.", "Nia smiles and waves back."],
      ["We can help.", "Nia, Lumo, and Bobo look at the tidy soft bag together."],
      ["Good helpers.", "The three friends stand beside the tidy bench and bag."]
    ]),
    quizzes: [
      { prompt: "Tap help.", answer: "Help", options: ["Help", "Run", "Sleep"] },
      { prompt: "Tap bag.", answer: "Bag", options: ["Bag", "Tree", "Brush"] },
      { prompt: "Tap carry.", answer: "Carry", options: ["Carry", "Close", "Fly"] }
    ]
  },
  {
    id: "Lesson 42",
    tab: "42 Door",
    title: "Open the Door",
    coreSentence: "Open the door.",
    targetWords: ["open", "close", "door"],
    parentNotes: ["只做手势或慢速示范。", "手远离门缝。", "孩子可用 open / close 单词回答。"],
    panels: buildPanels("lesson42", [
      ["I see a door.", "A rounded Star Town door stands in a warm safe room entrance."],
      ["Open the door.", "Nia stands by the large handle with fingers away from the door gap."],
      ["The door is open.", "The door opens gently into a bright safe room."],
      ["Come in.", "Lumo enters safely through the open door."],
      ["Close the door.", "Bobo gently touches the safe outer door edge."],
      ["The door is closed.", "The door is closed and all hands are away from the gap."],
      ["Open and close.", "Nia shows open and close gestures without touching the hinge."],
      ["Thank you, door.", "Nia, Lumo, and Bobo wave beside the safely closed door."]
    ]),
    quizzes: [
      { prompt: "Tap door.", answer: "Door", options: ["Door", "Ball", "Milk"] },
      { prompt: "Tap open.", answer: "Open", options: ["Open", "Under", "Fast"] },
      { prompt: "Tap close.", answer: "Close", options: ["Close", "High", "Happy"] }
    ]
  },
  {
    id: "Lesson 43",
    tab: "43 Give",
    title: "Here You Are",
    coreSentence: "Here you are.",
    targetWords: ["give", "take", "thank you"],
    parentNotes: ["用柔软玩具练习递和接。", "鼓励双手接过。", "重点练 Here you are 和 Thank you。"],
    panels: buildPanels("lesson43", [
      ["I have a star.", "Nia holds a soft star toy."],
      ["Here you are.", "Nia gives the soft star toy to Lumo."],
      ["Thank you.", "Lumo receives the star toy and glows warmly."],
      ["I have a ball.", "Bobo holds a soft ball."],
      ["Here you are.", "Bobo gives the soft ball to Nia."],
      ["Thank you, Bobo.", "Nia receives the ball with both hands and smiles."],
      ["Give and take.", "The three friends take turns passing soft toys."],
      ["Thank you, friends.", "Nia, Lumo, and Bobo wave together with the toys on a table."]
    ]),
    quizzes: [
      { prompt: "Tap give.", answer: "Give", options: ["Give", "Run", "Rainy"] },
      { prompt: "Tap take.", answer: "Take", options: ["Take", "Tree", "Sleep"] },
      { prompt: "Tap thank you.", answer: "Thank you", options: ["Please", "Thank you", "Stop"] }
    ]
  },
  {
    id: "Lesson 44",
    tab: "44 Polite",
    title: "Help Review",
    coreSentence: "Thank you.",
    targetWords: ["please", "help", "thank you"],
    parentNotes: ["重点是礼貌语复习。", "递物后等待孩子说 Thank you。", "开关门只用慢动作或手势。"],
    panels: buildPanels("lesson44", [
      ["Help, please.", "Bobo points to a small soft bag."],
      ["I can help.", "Nia helps Bobo carry the light soft bag."],
      ["Open, please.", "Lumo points to a rounded safe door."],
      ["Open the door.", "Nia opens the door slowly with fingers away from the gap."],
      ["Here you are.", "Bobo gives a soft star toy to Lumo."],
      ["Thank you.", "Lumo receives the toy and glows warmly."],
      ["Please and thank you.", "The three friends sit together with polite gesture cards that have no text."],
      ["We help together.", "Nia, Lumo, and Bobo tidy the soft bag and toy together."]
    ]),
    quizzes: [
      { prompt: "Tap please.", answer: "Please", options: ["Please", "Fast", "Window"] },
      { prompt: "Tap help.", answer: "Help", options: ["Help", "Swing", "Tree"] },
      { prompt: "Tap thank you.", answer: "Thank you", options: ["Thank you", "Run", "Blue"] }
    ]
  },
  {
    id: "Lesson 45",
    tab: "45 Map",
    title: "Star Map",
    coreSentence: "What do you see?",
    targetWords: ["map", "star", "color"],
    parentNotes: ["允许孩子只说 star、red 或 map。", "地图必须无文字。", "家长可指真实物品问 What do you see?"],
    panels: buildPanels("lesson45", [
      ["What do you see?", "Nia opens a wordless Star Town map."],
      ["I see a star.", "Lumo points to a star icon on the wordless map."],
      ["I see red.", "Nia points to a red circle on the map."],
      ["I see blue.", "Bobo points to a blue bridge icon."],
      ["I see yellow.", "Lumo points to a yellow sun icon."],
      ["I see a circle.", "Nia points to a round icon."],
      ["I see the map.", "Bobo points to the whole map."],
      ["What do you see?", "The three friends look toward the child with the map in front."]
    ]),
    quizzes: [
      { prompt: "Tap star.", answer: "Star", options: ["Star", "Bag", "Door"] },
      { prompt: "Tap map.", answer: "Map", options: ["Map", "Milk", "Ball"] },
      { prompt: "Tap color.", answer: "Color", options: ["Color", "Sleep", "Carry"] }
    ]
  },
  {
    id: "Lesson 46",
    tab: "46 Toy",
    title: "The Missing Toy",
    coreSentence: "Where is the ball?",
    targetWords: ["where", "in", "on", "under"],
    parentNotes: ["用真实球和盒子复现位置。", "先回答 under 即可。", "不让孩子钻到危险家具下。"],
    panels: buildPanels("lesson46", [
      ["Where is the ball?", "Nia looks at an empty toy basket in a tidy playroom."],
      ["Is it in the box?", "Bobo points to an open box."],
      ["No ball.", "The box has soft blocks but no ball."],
      ["Is it on the bed?", "Lumo points to a tidy small bed."],
      ["No ball.", "The bed has a pillow but no ball."],
      ["Is it under the chair?", "Nia looks under a stable rounded chair."],
      ["Here is the ball.", "The ball is under the chair and Bobo points to it."],
      ["The ball is under the chair.", "Nia puts the ball back into the toy basket."]
    ]),
    quizzes: [
      { prompt: "Where is the ball?", answer: "Under", options: ["In", "On", "Under"] },
      { prompt: "Tap box.", answer: "Box", options: ["Box", "Tree", "Milk"] },
      { prompt: "Tap chair.", answer: "Chair", options: ["Chair", "Window", "Flower"] }
    ]
  },
  {
    id: "Lesson 47",
    tab: "47 Picnic",
    title: "Picnic Day",
    coreSentence: "I want ...",
    targetWords: ["food", "want", "like"],
    parentNotes: ["只用常见安全食物。", "能说 milk、bread、apple 即可。", "递物时复现 Here is 和 Thank you。"],
    panels: buildPanels("lesson47", [
      ["Picnic day!", "A safe park picnic blanket has simple food and drinks."],
      ["I want milk.", "Nia points to a small cup of milk."],
      ["I want bread.", "Bobo points to a piece of bread."],
      ["I like apples.", "Lumo points to apple slices."],
      ["Here is water.", "Nia gives Bobo a small water cup."],
      ["Thank you.", "Bobo receives the water cup with a happy screen face."],
      ["I like picnic.", "The three friends sit beside tidy picnic food."],
      ["Yummy picnic.", "Nia, Lumo, and Bobo wave beside the picnic blanket."]
    ]),
    quizzes: [
      { prompt: "Tap milk.", answer: "Milk", options: ["Milk", "Box", "Tree"] },
      { prompt: "Tap bread.", answer: "Bread", options: ["Bread", "Door", "Star"] },
      { prompt: "Tap apple.", answer: "Apple", options: ["Apple", "Brush", "Swing"] }
    ]
  },
  {
    id: "Lesson 48",
    tab: "48 Show",
    title: "Star Town Show",
    coreSentence: "I can say it!",
    targetWords: ["hello", "see", "touch", "want", "help", "thank you"],
    parentNotes: ["这是成果展示，不追求全说对。", "任选 1 到 5 句跟读。", "舞台不放文字，避免画内乱码。"],
    panels: buildPanels("lesson48", [
      ["Star Town Show!", "A warm low Star Town stage glows softly with no written banner."],
      ["Hello, I am Nia.", "Nia waves toward the child."],
      ["I see red.", "Lumo points to a red star prop."],
      ["Touch your head.", "Bobo makes a touch-head gesture."],
      ["I want milk.", "Nia points to milk and apple props."],
      ["I can help.", "Nia helps Bobo carry a small soft bag."],
      ["Thank you.", "Lumo receives a soft star toy."],
      ["I can say it!", "Nia, Lumo, and Bobo wave on the warm stage."]
    ]),
    quizzes: [
      { prompt: "Say hello.", answer: "Hello", options: ["Hello", "Under", "Close"] },
      { prompt: "Tap milk.", answer: "Milk", options: ["Milk", "Door", "Leaf"] },
      { prompt: "Tap thank you.", answer: "Thank you", options: ["Thank you", "Run", "Fast"] }
    ]
  },
  {
    id: "Lesson 49",
    tab: "49 Home",
    title: "Home Star",
    coreSentence: "I am home.",
    targetWords: ["home", "star", "window"],
    parentNotes: ["回家进门时自然说 I am home。", "用真实窗户和星形物品复现。", "孩子能说 home 也可以。"],
    panels: buildPanels("lesson49", [
      ["I am home.", "Nia stands at the cozy Star Town home door with Lumo and Bobo."],
      ["I see a star.", "A star-shaped door light glows softly."],
      ["I see a window.", "Nia points to a rounded warm window."],
      ["Star in the window.", "Bobo looks at a big star decoration near the window."],
      ["Go home.", "Lumo points to the home door as the friends go inside."],
      ["We are home.", "The three friends enter a warm tidy living room."],
      ["Hello, star.", "The friends look at a small star lamp together."],
      ["I am home.", "Nia, Lumo, and Bobo wave by the window."]
    ]),
    quizzes: [
      { prompt: "Tap home.", answer: "Home", options: ["Home", "Park", "Bath"] },
      { prompt: "Tap star.", answer: "Star", options: ["Star", "Bag", "Bread"] },
      { prompt: "Tap window.", answer: "Window", options: ["Window", "Chair", "Flower"] }
    ]
  },
  {
    id: "Lesson 50",
    tab: "50 Clean",
    title: "Clean Up Toys",
    coreSentence: "Clean up, please.",
    targetWords: ["clean up", "toys", "box"],
    parentNotes: ["每次只整理 1 到 3 个大玩具。", "避免小颗粒玩具。", "能说 box 或 clean up 就算完成。"],
    panels: buildPanels("lesson50", [
      ["I see toys.", "A ball, soft doll, and toy car sit on a living room rug."],
      ["I see a box.", "Bobo opens a large safe toy box."],
      ["Clean up, please.", "Nia points to the toys on the rug."],
      ["Ball in the box.", "Nia puts the big ball into the box."],
      ["Toy in the box.", "Bobo puts the soft doll into the box."],
      ["Car in the box.", "Lumo gently pushes the toy car into the box."],
      ["Clean toys.", "The floor is tidy and the toy box stays open safely."],
      ["Clean up, please.", "The three friends point to the tidy toy box."]
    ]),
    quizzes: [
      { prompt: "Tap toys.", answer: "Toys", options: ["Toys", "Tree", "Milk"] },
      { prompt: "Tap box.", answer: "Box", options: ["Box", "Window", "Butterfly"] },
      { prompt: "Tap clean up.", answer: "Clean up", options: ["Clean up", "Run fast", "Swing high"] }
    ]
  },
  {
    id: "Lesson 51",
    tab: "51 Bobo",
    title: "Where Is Bobo",
    coreSentence: "Where is Bobo?",
    targetWords: ["where", "in", "on", "under"],
    parentNotes: ["只用开放空间做位置游戏。", "不躲进密闭箱柜。", "孩子说 in、on、under 即可。"],
    panels: buildPanels("lesson51", [
      ["Where is Bobo?", "Nia looks around a tidy living room."],
      ["Bobo is in the box.", "Bobo peeks from an open large toy box."],
      ["Bobo is on the rug.", "Bobo sits on a soft rug."],
      ["Bobo is under the table.", "Bobo is fully visible under a low rounded table."],
      ["Where is Bobo?", "Three wordless position picture cards are shown side by side."],
      ["I see Bobo.", "Nia points to Bobo under the table."],
      ["Here is Bobo.", "Bobo returns to Nia and Lumo."],
      ["Hello, Bobo.", "The three friends wave on the living room rug."]
    ]),
    quizzes: [
      { prompt: "Where is Bobo?", answer: "Under", options: ["In", "On", "Under"] },
      { prompt: "Tap Bobo.", answer: "Bobo", options: ["Bobo", "Nia", "Lumo"] },
      { prompt: "Tap under.", answer: "Under", options: ["Under", "High", "Open"] }
    ]
  },
  {
    id: "Lesson 52",
    tab: "52 Home Rev",
    title: "Home Review",
    coreSentence: "Where is it?",
    targetWords: ["home", "star", "toy", "box"],
    parentNotes: ["用安全、可见的大物品复习。", "先让孩子指，再说单词。", "不钻入箱柜或桌下玩躲藏。"],
    panels: buildPanels("lesson52", [
      ["Where is it?", "A cozy living room shows a star lamp, toy box, and window."],
      ["Where is the star?", "Nia points to the star lamp by the window."],
      ["Where is the toy?", "Bobo points to a large toy on the rug."],
      ["Where is the box?", "Lumo points to the open toy box."],
      ["Toy in the box.", "The ball is inside the toy box."],
      ["Star on the window.", "The star lamp is near the window."],
      ["Bobo is under the table.", "Bobo is fully visible under a low table."],
      ["Where is it?", "The star, toy, and box are shown clearly together."]
    ]),
    quizzes: [
      { prompt: "Tap star.", answer: "Star", options: ["Star", "Milk", "Slide"] },
      { prompt: "Tap toy.", answer: "Toy", options: ["Toy", "Tree", "Door"] },
      { prompt: "Tap box.", answer: "Box", options: ["Box", "Flower", "Swing"] }
    ]
  },
  {
    id: "Lesson 53",
    tab: "53 Flower",
    title: "Little Flower",
    coreSentence: "I see a little flower.",
    targetWords: ["little", "flower", "water"],
    parentNotes: ["只表现少量浇水。", "不摘花、不吃花、不靠近昆虫。", "孩子能说 flower 就算完成。"],
    panels: buildPanels("lesson53", [
      ["I see a flower.", "A little flower grows in a small pot."],
      ["Little flower.", "Nia points to the little flower with a larger leaf nearby."],
      ["I see water.", "Bobo brings a tiny watering can."],
      ["Water, please.", "Nia pours a few drops of water into the soil."],
      ["Hello, flower.", "Lumo shines soft light on the flower."],
      ["The flower is happy.", "The little flower opens gently."],
      ["Little flower.", "Nia, Lumo, and Bobo smile at the little flower."],
      ["Bye, flower.", "The three friends wave to the little flower."]
    ]),
    quizzes: [
      { prompt: "Tap flower.", answer: "Flower", options: ["Flower", "Box", "Milk"] },
      { prompt: "Tap water.", answer: "Water", options: ["Water", "Bread", "Chair"] },
      { prompt: "Tap little.", answer: "Little", options: ["Big", "Little", "Fast"] }
    ]
  },
  {
    id: "Lesson 54",
    tab: "54 Tree",
    title: "Big Tree",
    coreSentence: "I see a big tree.",
    targetWords: ["big", "tree", "leaf"],
    parentNotes: ["做 big 的大手势。", "只观察低处叶子，不摘叶。", "能说 tree 或 big tree 即可。"],
    panels: buildPanels("lesson54", [
      ["I see a tree.", "A big tree stands in a safe garden."],
      ["Big tree.", "Nia looks up at the tree without climbing."],
      ["Touch the tree.", "Lumo points to the tree trunk."],
      ["I see a leaf.", "Bobo points to a low green leaf."],
      ["Sit under the tree.", "A soft sitting mat is under the tree shade."],
      ["Big tree, little flower.", "The big tree and a little flower appear together."],
      ["Tree and leaf.", "The friends point to the tree and leaf."],
      ["Bye, tree.", "Nia, Lumo, and Bobo wave beside the tree."]
    ]),
    quizzes: [
      { prompt: "Tap tree.", answer: "Tree", options: ["Tree", "Toy", "Door"] },
      { prompt: "Tap leaf.", answer: "Leaf", options: ["Leaf", "Milk", "Box"] },
      { prompt: "Tap big.", answer: "Big", options: ["Big", "Little", "Close"] }
    ]
  },
  {
    id: "Lesson 55",
    tab: "55 Fly",
    title: "Butterfly Fly",
    coreSentence: "A butterfly can fly.",
    targetWords: ["butterfly", "fly", "wing"],
    parentNotes: ["只做手部轻轻扇动。", "不追逐或抓蝴蝶。", "能说 fly 或 butterfly 即可。"],
    panels: buildPanels("lesson55", [
      ["I see a butterfly.", "A large friendly butterfly rests on a flower."],
      ["I see wings.", "The butterfly slowly opens its wings."],
      ["A butterfly can fly.", "The butterfly gently flies up from the flower."],
      ["Fly, butterfly.", "The butterfly flies over little flowers."],
      ["Look, Bobo.", "Bobo watches the butterfly without touching it."],
      ["Little wings.", "Lumo points to the butterfly wings."],
      ["I can fly my hands.", "Nia gently moves her hands like wings."],
      ["Bye, butterfly.", "The butterfly returns to the flower while the friends wave."]
    ]),
    quizzes: [
      { prompt: "Tap butterfly.", answer: "Butterfly", options: ["Butterfly", "Bobo", "Box"] },
      { prompt: "Tap wings.", answer: "Wings", options: ["Wings", "Shoes", "Door"] },
      { prompt: "Tap fly.", answer: "Fly", options: ["Fly", "Stop", "Sleep"] }
    ]
  },
  {
    id: "Lesson 56",
    tab: "56 Garden",
    title: "Garden Review",
    coreSentence: "What do you see?",
    targetWords: ["garden", "flower", "tree", "butterfly"],
    parentNotes: ["重点是观察和指认。", "不要求触碰植物或昆虫。", "孩子能说单词就算完成。"],
    panels: buildPanels("lesson56", [
      ["I see a garden.", "A bright safe Star Town garden entrance has no written sign."],
      ["I see a flower.", "Nia points to a little flower."],
      ["I see a tree.", "Bobo points to a big tree."],
      ["I see a butterfly.", "Lumo points to a butterfly resting on a flower."],
      ["Flower, tree, butterfly.", "The flower, tree, and butterfly are clearly separated."],
      ["What do you see?", "Nia looks toward the child with all three objects visible."],
      ["I see it.", "Bobo points to the selected garden object."],
      ["Bye, garden.", "Nia, Lumo, and Bobo wave at the garden entrance."]
    ]),
    quizzes: [
      { prompt: "Tap flower.", answer: "Flower", options: ["Flower", "Ball", "Milk"] },
      { prompt: "Tap tree.", answer: "Tree", options: ["Tree", "Box", "Door"] },
      { prompt: "Tap butterfly.", answer: "Butterfly", options: ["Butterfly", "Bobo", "Brush"] }
    ]
  },
  {
    id: "Lesson 57",
    tab: "57 Draw",
    title: "Draw a Star",
    coreSentence: "I can draw.",
    targetWords: ["draw", "star", "line"],
    parentNotes: ["使用粗蜡笔，避免尖锐铅笔。", "只画简单线条和星形。", "不让孩子把蜡笔放入口中。"],
    panels: buildPanels("lesson57", [
      ["I can draw.", "A white paper and chunky crayon sit on a low art table."],
      ["Draw a line.", "Nia draws one simple line on the paper."],
      ["I see a line.", "Bobo points to the line with a happy screen face."],
      ["Draw a star.", "Nia starts drawing a star outline."],
      ["I see a star.", "Lumo softly lights the star drawing."],
      ["I draw a circle.", "Nia draws a simple circle beside the star."],
      ["Look at my art.", "The three friends look at the wordless art paper."],
      ["I can draw.", "Nia shows the star drawing while Lumo and Bobo wave."]
    ]),
    quizzes: [
      { prompt: "Tap star.", answer: "Star", options: ["Star", "Bell", "Bus"] },
      { prompt: "Tap line.", answer: "Line", options: ["Line", "Moon", "Boat"] },
      { prompt: "Tap draw.", answer: "Draw", options: ["Draw", "Shake", "Ride"] }
    ]
  },
  {
    id: "Lesson 58",
    tab: "58 Color",
    title: "Color the Sun",
    coreSentence: "Color it yellow.",
    targetWords: ["color", "crayon", "yellow"],
    parentNotes: ["只准备 2 到 3 支粗蜡笔。", "能说 yellow 就可以。", "避免蜡笔入口或墙面涂画。"],
    panels: buildPanels("lesson58", [
      ["I see the sun.", "A wordless sun outline and chunky crayons sit on paper."],
      ["I see yellow.", "Lumo points to the yellow crayon."],
      ["Yellow crayon.", "Bobo gives the yellow crayon to Nia."],
      ["Color it yellow.", "Nia colors the sun outline with yellow."],
      ["Yellow sun.", "The sun drawing becomes bright yellow."],
      ["Good color.", "Nia stops coloring and the paper stays tidy."],
      ["I see yellow.", "The three friends look at the yellow sun drawing."],
      ["Color it yellow.", "Nia shows the yellow sun art."]
    ]),
    quizzes: [
      { prompt: "Tap yellow.", answer: "Yellow", options: ["Yellow", "Blue", "Red"] },
      { prompt: "Tap crayon.", answer: "Crayon", options: ["Crayon", "Train", "Bell"] },
      { prompt: "Tap sun.", answer: "Sun", options: ["Sun", "Moon", "Box"] }
    ]
  },
  {
    id: "Lesson 59",
    tab: "59 Sticker",
    title: "Put On a Sticker",
    coreSentence: "Put on a sticker.",
    targetWords: ["sticker", "paper", "on"],
    parentNotes: ["只用大号贴纸。", "贴纸只贴在纸上。", "孩子能说 sticker 即可。"],
    panels: buildPanels("lesson59", [
      ["I see a sticker.", "A large star sticker and white paper sit on a low table."],
      ["I see paper.", "Bobo points to the white paper."],
      ["Big sticker.", "Nia picks up the large sticker."],
      ["Put on a sticker.", "Nia puts the sticker onto the paper."],
      ["Sticker on paper.", "Lumo points to the sticker on the paper."],
      ["Put it on.", "Nia adds a large circle sticker to the paper."],
      ["Nice art.", "The three friends look at the tidy sticker art."],
      ["Put on a sticker.", "Nia shows the sticker art."]
    ]),
    quizzes: [
      { prompt: "Tap sticker.", answer: "Sticker", options: ["Sticker", "Drum", "Bus"] },
      { prompt: "Tap paper.", answer: "Paper", options: ["Paper", "Water", "Train"] },
      { prompt: "Tap on.", answer: "On", options: ["On", "Under", "Soft"] }
    ]
  },
  {
    id: "Lesson 60",
    tab: "60 Art",
    title: "Art Review",
    coreSentence: "Show me your art.",
    targetWords: ["draw", "color", "sticker", "star"],
    parentNotes: ["复习课只需指出或说单词。", "作品不要写字。", "继续使用大贴纸和粗蜡笔。"],
    panels: buildPanels("lesson60", [
      ["Show me your art.", "Paper, chunky crayon, and large sticker sit on the art table."],
      ["I can draw.", "Nia draws a simple line."],
      ["I see a crayon.", "Bobo points to a yellow crayon."],
      ["Color it yellow.", "Nia colors a sun yellow."],
      ["I see a sticker.", "Lumo points to a large star sticker."],
      ["Sticker on paper.", "The sticker is on the paper."],
      ["Star art.", "The paper shows a star, line, yellow sun, and sticker."],
      ["Show me your art.", "The three friends show the finished art."]
    ]),
    quizzes: [
      { prompt: "Tap star.", answer: "Star", options: ["Star", "Bell", "Moon"] },
      { prompt: "Tap crayon.", answer: "Crayon", options: ["Crayon", "Boat", "Drum"] },
      { prompt: "Tap sticker.", answer: "Sticker", options: ["Sticker", "Train", "Light"] }
    ]
  },
  {
    id: "Lesson 61",
    tab: "61 Drum",
    title: "I Hear a Drum",
    coreSentence: "I hear a drum.",
    targetWords: ["hear", "drum", "soft"],
    parentNotes: ["鼓声要轻。", "可用手轻拍桌面复现。", "听到 stop 时一起停下。"],
    panels: buildPanels("lesson61", [
      ["I see a drum.", "A safe small drum sits on a low table."],
      ["I hear a drum.", "Nia cups one hand near her ear and listens."],
      ["Tap the drum.", "Bobo taps the drum gently with a soft mallet."],
      ["Soft, please.", "Lumo glows softly beside the drum."],
      ["Soft drum.", "Nia taps the drum gently."],
      ["I hear it.", "The friends stop and listen to the soft sound."],
      ["Stop the drum.", "Bobo puts the mallet back on the table."],
      ["I hear a drum.", "The three friends wave beside the drum."]
    ]),
    quizzes: [
      { prompt: "Tap drum.", answer: "Drum", options: ["Drum", "Bus", "Moon"] },
      { prompt: "Tap hear.", answer: "Hear", options: ["Hear", "Draw", "Ride"] },
      { prompt: "Tap soft.", answer: "Soft", options: ["Soft", "Fast", "Yellow"] }
    ]
  },
  {
    id: "Lesson 62",
    tab: "62 Bell",
    title: "Shake the Bell",
    coreSentence: "Shake the bell.",
    targetWords: ["shake", "bell", "sound"],
    parentNotes: ["只轻轻摇铃。", "不要靠近耳朵大声摇。", "听到 stop 要停下。"],
    panels: buildPanels("lesson62", [
      ["I see a bell.", "A large safe hand bell sits on a low table."],
      ["Shake the bell.", "Lumo gently moves near the hand bell."],
      ["I hear a sound.", "Bobo listens with a happy screen face."],
      ["Shake, shake.", "Nia gently shakes the bell."],
      ["Soft sound.", "The sound waves become small and soft."],
      ["Nice bell.", "Bobo smiles at the hand bell."],
      ["Stop the bell.", "Nia puts the bell back on the table."],
      ["Shake the bell.", "The three friends look at the bell together."]
    ]),
    quizzes: [
      { prompt: "Tap bell.", answer: "Bell", options: ["Bell", "Train", "Star"] },
      { prompt: "Tap shake.", answer: "Shake", options: ["Shake", "Color", "Float"] },
      { prompt: "Tap sound.", answer: "Sound", options: ["Sound", "Sticker", "Moon"] }
    ]
  },
  {
    id: "Lesson 63",
    tab: "63 Sing",
    title: "Sing a Song",
    coreSentence: "I can sing.",
    targetWords: ["sing", "song", "voice"],
    parentNotes: ["只轻声唱，不要求音准。", "不使用真实歌词。", "孩子能哼一声或说 sing 即可。"],
    panels: buildPanels("lesson63", [
      ["I can sing.", "The three friends stand in a cozy music corner."],
      ["Sing a song.", "Nia sings softly with small sound symbols."],
      ["I hear your voice.", "Bobo listens quietly."],
      ["Soft voice.", "Lumo glows gently while Nia sings."],
      ["La la la.", "The three friends softly sing together."],
      ["Stop the song.", "Nia stops singing and smiles."],
      ["Nice song.", "Bobo claps silently with a happy screen."],
      ["I can sing.", "The friends wave in the music corner."]
    ]),
    quizzes: [
      { prompt: "Tap sing.", answer: "Sing", options: ["Sing", "Stop", "Float"] },
      { prompt: "Tap song.", answer: "Song", options: ["Song", "Bus", "Paper"] },
      { prompt: "Tap voice.", answer: "Voice", options: ["Voice", "Line", "Train"] }
    ]
  },
  {
    id: "Lesson 64",
    tab: "64 Music",
    title: "Music Review",
    coreSentence: "Listen and play.",
    targetWords: ["listen", "drum", "bell", "song"],
    parentNotes: ["声音保持轻柔。", "先听再做动作。", "不增加新乐器。"],
    panels: buildPanels("lesson64", [
      ["Listen and play.", "A safe music corner has a small drum and hand bell."],
      ["I hear a drum.", "Bobo taps the drum gently."],
      ["I hear a bell.", "Lumo gently shakes the bell."],
      ["I hear a song.", "Nia sings softly."],
      ["Listen, please.", "The three friends stop and listen."],
      ["Drum, bell, song.", "Drum, bell, and a wordless song icon are shown clearly."],
      ["Stop and smile.", "Nia makes a calm stop gesture."],
      ["Listen and play.", "The friends wave in the music corner."]
    ]),
    quizzes: [
      { prompt: "Tap drum.", answer: "Drum", options: ["Drum", "Boat", "Moon"] },
      { prompt: "Tap bell.", answer: "Bell", options: ["Bell", "Bus", "Crayon"] },
      { prompt: "Tap song.", answer: "Song", options: ["Song", "Track", "Water"] }
    ]
  },
  {
    id: "Lesson 65",
    tab: "65 Bus",
    title: "Little Bus",
    coreSentence: "I see a bus.",
    targetWords: ["bus", "stop", "ride"],
    parentNotes: ["使用大号玩具巴士。", "场景是玩具路线，不是真实道路。", "复习 Go 和 Stop。"],
    panels: buildPanels("lesson65", [
      ["I see a bus.", "A large toy bus sits on a wordless route mat."],
      ["Little bus.", "Nia points to the toy bus."],
      ["Bus stop.", "Bobo points to a wordless stop point on the route."],
      ["Go, bus.", "The bus moves slowly while Lumo watches."],
      ["Stop, bus.", "The bus stops at the stop point."],
      ["Ride the bus.", "Nia places a large soft figure beside the bus."],
      ["Bus goes slow.", "The toy bus follows the safe route."],
      ["I see a bus.", "The friends sit beside the toy bus and wave."]
    ]),
    quizzes: [
      { prompt: "Tap bus.", answer: "Bus", options: ["Bus", "Boat", "Train"] },
      { prompt: "Tap stop.", answer: "Stop", options: ["Stop", "Sing", "Draw"] },
      { prompt: "Tap ride.", answer: "Ride", options: ["Ride", "Shake", "Color"] }
    ]
  },
  {
    id: "Lesson 66",
    tab: "66 Boat",
    title: "Boat on Water",
    coreSentence: "The boat floats.",
    targetWords: ["boat", "water", "float"],
    parentNotes: ["只用浅托盘和少量水。", "不靠近浴缸、水池或深水。", "活动后擦干桌面。"],
    panels: buildPanels("lesson66", [
      ["I see a boat.", "A large toy boat sits beside a shallow water tray."],
      ["I see water.", "Bobo points to the shallow water."],
      ["The boat floats.", "Nia gently places the toy boat on the water."],
      ["Float, boat.", "Lumo lights the floating boat softly."],
      ["Go slow.", "The boat moves slowly with no splashing."],
      ["Towel, please.", "Bobo points to a dry towel nearby."],
      ["Boat is dry.", "Nia places the toy boat on the towel."],
      ["The boat floats.", "The three friends look at the boat and tray."]
    ]),
    quizzes: [
      { prompt: "Tap boat.", answer: "Boat", options: ["Boat", "Bus", "Train"] },
      { prompt: "Tap water.", answer: "Water", options: ["Water", "Bell", "Star"] },
      { prompt: "Tap float.", answer: "Float", options: ["Float", "Draw", "Sing"] }
    ]
  },
  {
    id: "Lesson 67",
    tab: "67 Train",
    title: "Toy Train",
    coreSentence: "I see a train.",
    targetWords: ["train", "track", "go"],
    parentNotes: ["只用玩具火车和大号轨道。", "避免细小轨道零件。", "复习 Go 和 Stop。"],
    panels: buildPanels("lesson67", [
      ["I see a train.", "A large toy train sits on a safe rug."],
      ["I see a track.", "Nia points to a wide toy track."],
      ["Go, train.", "Bobo gently pushes the toy train."],
      ["On the track.", "The train moves along the toy track."],
      ["Stop here.", "Lumo points to a toy station stop."],
      ["Train stops.", "The train stops beside the station."],
      ["Little train.", "The friends look at the toy train."],
      ["I see a train.", "Nia, Lumo, and Bobo wave beside the train."]
    ]),
    quizzes: [
      { prompt: "Tap train.", answer: "Train", options: ["Train", "Boat", "Bus"] },
      { prompt: "Tap track.", answer: "Track", options: ["Track", "Water", "Moon"] },
      { prompt: "Tap go.", answer: "Go", options: ["Go", "Stop", "Soft"] }
    ]
  },
  {
    id: "Lesson 68",
    tab: "68 Travel",
    title: "Travel Review",
    coreSentence: "How do we go?",
    targetWords: ["bus", "boat", "train"],
    parentNotes: ["全部使用玩具交通工具。", "先指认，再说单词。", "复习 Let us go。"],
    panels: buildPanels("lesson68", [
      ["How do we go?", "A toy bus, toy boat, and toy train sit on a route mat."],
      ["Go by bus.", "Nia points to the toy bus."],
      ["Go by boat.", "Bobo points to the toy boat beside a shallow tray."],
      ["Go by train.", "Lumo points to the toy train and track."],
      ["Bus, boat, train.", "The three toy vehicles are shown side by side."],
      ["Pick one.", "Nia looks toward the child with the three choices visible."],
      ["Let us go.", "One selected toy moves slowly on the safe route mat."],
      ["Good trip.", "The toys return to the storage box area."]
    ]),
    quizzes: [
      { prompt: "Tap bus.", answer: "Bus", options: ["Bus", "Bell", "Star"] },
      { prompt: "Tap boat.", answer: "Boat", options: ["Boat", "Drum", "Moon"] },
      { prompt: "Tap train.", answer: "Train", options: ["Train", "Crayon", "Paper"] }
    ]
  },
  {
    id: "Lesson 69",
    tab: "69 Rocket",
    title: "Toy Rocket",
    coreSentence: "The rocket goes up.",
    targetWords: ["rocket", "up", "sky"],
    parentNotes: ["只用软玩具火箭。", "不表现真实发射。", "孩子可用手做 up 动作。"],
    panels: buildPanels("lesson69", [
      ["I see a rocket.", "A soft toy rocket sits on a safe rug."],
      ["I see the sky.", "Lumo points to the blue sky outside the window."],
      ["Up, up.", "Nia gently lifts the toy rocket with both hands."],
      ["The rocket goes up.", "The toy rocket is held at a safe height."],
      ["Soft rocket.", "Bobo points to the soft rocket with no fire."],
      ["Down, down.", "Nia slowly lowers the rocket."],
      ["Rocket is down.", "The rocket rests back on the rug."],
      ["The rocket goes up.", "The friends sit beside the toy rocket."]
    ]),
    quizzes: [
      { prompt: "Tap rocket.", answer: "Rocket", options: ["Rocket", "Train", "Boat"] },
      { prompt: "Tap up.", answer: "Up", options: ["Up", "Down", "Soft"] },
      { prompt: "Tap sky.", answer: "Sky", options: ["Sky", "Box", "Bell"] }
    ]
  },
  {
    id: "Lesson 70",
    tab: "70 Moon",
    title: "Moon Light",
    coreSentence: "I see the moon.",
    targetWords: ["moon", "light", "night"],
    parentNotes: ["保持暖光，不制造黑暗恐惧。", "可用真实小夜灯复现 light。", "孩子说 moon 或 night 即可。"],
    panels: buildPanels("lesson70", [
      ["It is night.", "A cozy room shows a calm night sky outside the window."],
      ["I see the moon.", "Nia points to the moon outside the window."],
      ["I see a light.", "Bobo points to a moon-shaped night light."],
      ["Soft light.", "Lumo glows softly beside the bed."],
      ["Hello, moon.", "Nia sits by the low bed and looks at the moon."],
      ["Quiet night.", "Bobo's screen shows a calm smile."],
      ["Moon light.", "The moon night light glows warmly."],
      ["Good night.", "The three friends wave in the safe room."]
    ]),
    quizzes: [
      { prompt: "Tap moon.", answer: "Moon", options: ["Moon", "Sun", "Bus"] },
      { prompt: "Tap light.", answer: "Light", options: ["Light", "Track", "Sticker"] },
      { prompt: "Tap night.", answer: "Night", options: ["Night", "Yellow", "Draw"] }
    ]
  },
  {
    id: "Lesson 71",
    tab: "71 Friends",
    title: "Star Friends",
    coreSentence: "We are friends.",
    targetWords: ["friends", "together", "happy"],
    parentNotes: ["复习角色名和朋友概念。", "可以一起说 friends。", "只用画面理解 together。"],
    panels: buildPanels("lesson71", [
      ["We are friends.", "Nia, Lumo, and Bobo sit on a star rug."],
      ["Nia, Lumo, Bobo.", "Nia points to herself and her two friends."],
      ["Draw together.", "The three friends look at the star art together."],
      ["Listen together.", "The friends listen to a small bell together."],
      ["I am happy.", "Bobo shows a happy screen face."],
      ["Happy friends.", "Lumo glows warmly between the friends."],
      ["Together, please.", "The three friends make a small gentle circle."],
      ["We are friends.", "Nia, Lumo, and Bobo wave toward the child."]
    ]),
    quizzes: [
      { prompt: "Tap friends.", answer: "Friends", options: ["Friends", "Boat", "Crayon"] },
      { prompt: "Tap together.", answer: "Together", options: ["Together", "Under", "Fast"] },
      { prompt: "Tap happy.", answer: "Happy", options: ["Happy", "Sad", "Night"] }
    ]
  },
  {
    id: "Lesson 72",
    tab: "72 Review",
    title: "Big Star Review",
    coreSentence: "I can say more!",
    targetWords: ["draw", "music", "bus", "moon", "friends"],
    parentNotes: ["这是 57-72 的综合复习。", "任选喜欢的词或句子跟读。", "画面不放文字，英语由网页显示。"],
    panels: buildPanels("lesson72", [
      ["I can say more!", "A cozy review room shows art paper, instruments, toys, and moon light."],
      ["I can draw.", "Nia points to star art."],
      ["I hear music.", "Bobo points to the small drum and bell."],
      ["I see a bus.", "Lumo points to the toy bus and train."],
      ["I see the moon.", "Nia points to the moon night light."],
      ["We are friends.", "The three friends sit together on a star rug."],
      ["What do you see?", "Five wordless icons for art, music, bus, moon, and friends are shown."],
      ["I can say more!", "Nia, Lumo, and Bobo wave toward the child."]
    ]),
    quizzes: [
      { prompt: "Tap art.", answer: "Art", options: ["Art", "Boat", "Water"] },
      { prompt: "Tap music.", answer: "Music", options: ["Music", "Rocket", "Track"] },
      { prompt: "Tap friends.", answer: "Friends", options: ["Friends", "Crayon", "Bell"] }
    ]
  },
  {
    id: "Lesson 73",
    tab: "73 Shirt",
    title: "My Shirt",
    coreSentence: "I wear a shirt.",
    targetWords: ["shirt", "wear", "blue"],
    parentNotes: ["使用孩子熟悉的宽松大件上衣。", "不要求真的换衣，能指出或跟读即可。", "画面避免隐私换衣过程。"],
    panels: buildPanels("lesson73", [
      ["I see a shirt.", "A large soft blue shirt sits in a clothes basket."],
      ["A blue shirt.", "Nia points to the blue shirt."],
      ["Soft shirt.", "Bobo places the shirt on a safe low stool."],
      ["Wear the shirt.", "Nia sits on the rug and picks up the shirt."],
      ["I wear a shirt.", "Nia wears the blue shirt while her cape stays on her shoulders."],
      ["Blue shirt.", "Lumo lights the blue shirt softly."],
      ["Look at me.", "Bobo points to the shirt shape in a safe mirror."],
      ["I wear a shirt.", "Nia, Lumo, and Bobo wave together."]
    ]),
    quizzes: [
      { prompt: "Tap shirt.", answer: "Shirt", options: ["Shirt", "Bell", "Moon"] },
      { prompt: "Tap blue.", answer: "Blue", options: ["Blue", "Yellow", "Red"] },
      { prompt: "Tap wear.", answer: "Wear", options: ["Wear", "Float", "Sing"] }
    ]
  },
  {
    id: "Lesson 74",
    tab: "74 Pants",
    title: "Put On Pants",
    coreSentence: "Put on pants.",
    targetWords: ["pants", "on", "legs"],
    parentNotes: ["只表现坐姿穿戴和完成状态。", "可用玩具裤子或折叠裤子指认。", "避免绳带、尖扣或复杂拉链。"],
    panels: buildPanels("lesson74", [
      ["I see pants.", "Large soft pants sit on a safe rug."],
      ["Blue pants.", "Nia points to the blue pants."],
      ["Legs.", "Bobo points to legs and the pants."],
      ["Put on pants.", "Nia sits on the rug with the pants in front of her legs."],
      ["Pants on.", "Nia stands safely with the pants on."],
      ["More clothes.", "Lumo points to the clothes basket."],
      ["Clean up.", "Bobo pushes the empty basket closer."],
      ["Put on pants.", "The three friends wave on the rug."]
    ]),
    quizzes: [
      { prompt: "Tap pants.", answer: "Pants", options: ["Pants", "Shirt", "Boat"] },
      { prompt: "Tap legs.", answer: "Legs", options: ["Legs", "Hands", "Head"] },
      { prompt: "Tap on.", answer: "On", options: ["On", "Under", "Out"] }
    ]
  },
  {
    id: "Lesson 75",
    tab: "75 Socks",
    title: "Socks and Shoes",
    coreSentence: "Put on socks.",
    targetWords: ["socks", "shoes", "feet"],
    parentNotes: ["使用无鞋带、软底、容易穿脱的鞋。", "孩子只需指认或跟读。", "避免鞋带缠绕、尖锐鞋扣和奔跑画面。"],
    panels: buildPanels("lesson75", [
      ["I see socks.", "A pair of large soft socks sits on the rug."],
      ["Feet.", "Nia points to her feet."],
      ["Put on socks.", "Nia sits and places the socks by her feet."],
      ["Socks on.", "The socks are on and Bobo smiles."],
      ["I see shoes.", "A pair of soft slip-on shoes sits nearby."],
      ["Put on shoes.", "Nia puts on the soft shoes while seated."],
      ["Shoes on.", "Lumo points to the neat shoes."],
      ["Put on socks.", "The three friends wave by the door."]
    ]),
    quizzes: [
      { prompt: "Tap socks.", answer: "Socks", options: ["Socks", "Pants", "Drum"] },
      { prompt: "Tap shoes.", answer: "Shoes", options: ["Shoes", "Bell", "Boat"] },
      { prompt: "Tap feet.", answer: "Feet", options: ["Feet", "Hands", "Eyes"] }
    ]
  },
  {
    id: "Lesson 76",
    tab: "76 Clothes",
    title: "Clothes Review",
    coreSentence: "What do you wear?",
    targetWords: ["shirt", "pants", "socks", "shoes"],
    parentNotes: ["复习时以指认为主。", "可拿真实衣物做配对。", "避免商标、文字、细小配饰和复杂扣件。"],
    panels: buildPanels("lesson76", [
      ["What do you wear?", "A clothes basket holds a shirt, pants, socks, and shoes."],
      ["I wear a shirt.", "Nia holds the blue shirt."],
      ["I wear pants.", "Bobo points to the pants."],
      ["I wear socks.", "Lumo points to the socks."],
      ["I wear shoes.", "Nia points to the soft shoes."],
      ["Shirt, pants, socks, shoes.", "The four clothing items sit side by side."],
      ["Pick one.", "Nia looks toward the child with four clothing choices visible."],
      ["What do you wear?", "The friends put the clothes back into the basket."]
    ]),
    quizzes: [
      { prompt: "Tap shirt.", answer: "Shirt", options: ["Shirt", "Rocket", "Moon"] },
      { prompt: "Tap pants.", answer: "Pants", options: ["Pants", "Train", "Bell"] },
      { prompt: "Tap shoes.", answer: "Shoes", options: ["Shoes", "Flower", "Drum"] }
    ]
  },
  {
    id: "Lesson 77",
    tab: "77 Happy",
    title: "I Feel Happy",
    coreSentence: "I feel happy.",
    targetWords: ["feel", "happy", "smile"],
    parentNotes: ["只做温和微笑和轻拍手。", "孩子不想模仿表情时可以只点图。", "避免高刺激庆祝。"],
    panels: buildPanels("lesson77", [
      ["I feel happy.", "Nia, Lumo, and Bobo smile on the star rug."],
      ["Happy.", "Nia points to her smiling face."],
      ["I smile.", "Bobo's teal screen shows a happy smile."],
      ["Happy light.", "Lumo glows with warm happy light."],
      ["Clap, clap.", "Nia claps gently."],
      ["A happy face.", "The friends look at a wordless happy face card."],
      ["Are you happy?", "Nia smiles toward the child."],
      ["I feel happy.", "The three friends wave together."]
    ]),
    quizzes: [
      { prompt: "Tap happy.", answer: "Happy", options: ["Happy", "Sad", "Calm"] },
      { prompt: "Tap smile.", answer: "Smile", options: ["Smile", "Cry", "Run"] },
      { prompt: "Tap face.", answer: "Face", options: ["Face", "Shoe", "Boat"] }
    ]
  },
  {
    id: "Lesson 78",
    tab: "78 Sad",
    title: "I Feel Sad",
    coreSentence: "I feel sad.",
    targetWords: ["sad", "hug", "okay"],
    parentNotes: ["只表现轻微难过和安全陪伴。", "不要求孩子立刻变开心。", "避免强烈哭闹、责备或孤立画面。"],
    panels: buildPanels("lesson78", [
      ["I feel sad.", "Nia sits on the rug and looks a little sad."],
      ["Sad face.", "Nia points to her face."],
      ["A soft hug.", "Bobo offers a soft star pillow."],
      ["It is okay.", "Lumo glows warmly near Nia."],
      ["Hug, please.", "Nia hugs the soft star pillow."],
      ["I am here.", "Bobo sits nearby with a kind screen face."],
      ["I am okay.", "Nia looks calm again."],
      ["It is okay.", "The three friends wave gently."]
    ]),
    quizzes: [
      { prompt: "Tap sad.", answer: "Sad", options: ["Sad", "Happy", "Fast"] },
      { prompt: "Tap hug.", answer: "Hug", options: ["Hug", "Run", "Jump"] },
      { prompt: "Tap okay.", answer: "Okay", options: ["Okay", "No", "Hot"] }
    ]
  },
  {
    id: "Lesson 79",
    tab: "79 Breath",
    title: "Take a Breath",
    coreSentence: "I can breathe.",
    targetWords: ["breathe", "calm", "slow"],
    parentNotes: ["这是情绪平静游戏，不是医疗训练。", "呼吸动作自然、短时间、无憋气。", "孩子不想做动作时只听或点图即可。"],
    panels: buildPanels("lesson79", [
      ["I can breathe.", "Nia sits on the star rug beside a paper flower."],
      ["Breathe in.", "Nia gently smells the paper flower."],
      ["Breathe out.", "Nia gently blows a paper star."],
      ["Go slow.", "Bobo holds a wordless slow circle card."],
      ["Soft and slow.", "Lumo's light becomes soft and slow."],
      ["I am calm.", "Nia relaxes her shoulders."],
      ["Calm, calm.", "The three friends sit quietly together."],
      ["I can breathe.", "Nia smiles and waves."]
    ]),
    quizzes: [
      { prompt: "Tap breathe.", answer: "Breathe", options: ["Breathe", "Shake", "Draw"] },
      { prompt: "Tap slow.", answer: "Slow", options: ["Slow", "Fast", "Big"] },
      { prompt: "Tap calm.", answer: "Calm", options: ["Calm", "Loud", "Cold"] }
    ]
  },
  {
    id: "Lesson 80",
    tab: "80 Feelings",
    title: "Feelings Review",
    coreSentence: "How do you feel?",
    targetWords: ["happy", "sad", "calm", "okay"],
    parentNotes: ["情绪复习不评价对错。", "孩子可以选择一张表情卡表达当下感受。", "避免恐惧、愤怒等强刺激画面。"],
    panels: buildPanels("lesson80", [
      ["How do you feel?", "Three wordless face cards sit on the star rug."],
      ["I feel happy.", "Nia points to the happy face card."],
      ["I feel sad.", "Bobo points to the sad face card."],
      ["I feel calm.", "Lumo points to the calm face card."],
      ["It is okay.", "Nia hugs the soft star pillow."],
      ["Happy, sad, calm.", "The three face cards sit side by side."],
      ["Pick a face.", "Nia looks toward the child with the cards visible."],
      ["How do you feel?", "Nia, Lumo, and Bobo wave together."]
    ]),
    quizzes: [
      { prompt: "Tap happy.", answer: "Happy", options: ["Happy", "Sad", "Calm"] },
      { prompt: "Tap sad.", answer: "Sad", options: ["Sad", "Happy", "Okay"] },
      { prompt: "Tap calm.", answer: "Calm", options: ["Calm", "Loud", "Fast"] }
    ]
  },
  {
    id: "Lesson 81",
    tab: "81 Cup",
    title: "My Cup",
    coreSentence: "I have a cup.",
    targetWords: ["cup", "water", "drink"],
    parentNotes: ["使用不易碎的大号塑料杯和常温水。", "只倒少量水，避免泼洒和烫伤风险。", "不使用玻璃杯、热水或奔跑喝水画面。"],
    panels: buildPanels("lesson81", [
      ["I see a cup.", "A large plastic cup sits on a safe low table."],
      ["A little cup.", "Nia points to the cup."],
      ["I see water.", "Bobo points to a small water pitcher."],
      ["Water in.", "Bobo pours a little room-temperature water into the cup."],
      ["I have a cup.", "Nia holds the cup with two hands."],
      ["Drink water.", "Nia takes a tiny sip of water."],
      ["Cup, please.", "Lumo points to the cup."],
      ["I have a cup.", "The cup rests safely back on the table."]
    ]),
    quizzes: [
      { prompt: "Tap cup.", answer: "Cup", options: ["Cup", "Book", "Pillow"] },
      { prompt: "Tap water.", answer: "Water", options: ["Water", "Blanket", "Paper"] },
      { prompt: "Tap drink.", answer: "Drink", options: ["Drink", "Turn", "Wipe"] }
    ]
  },
  {
    id: "Lesson 82",
    tab: "82 Water",
    title: "Drink Water",
    coreSentence: "Drink water, please.",
    targetWords: ["drink", "water", "please"],
    parentNotes: ["只使用常温水，避免热饮。", "引导孩子用 please 请求，不强迫喝水。", "画面不表现玻璃杯、饮料广告或洒水奔跑。"],
    panels: buildPanels("lesson82", [
      ["I want water.", "A cup and a small water pitcher sit on the safe table."],
      ["Water, please.", "Nia makes a polite request gesture."],
      ["Here you are.", "Bobo moves the cup closer."],
      ["Thank you.", "Nia holds the cup with two hands."],
      ["Drink water, please.", "Nia takes a tiny sip of water."],
      ["Good water.", "Lumo looks at the cup."],
      ["Cup on the table.", "Bobo points to the cup on the table."],
      ["Drink water, please.", "The friends sit around the safe table."]
    ]),
    quizzes: [
      { prompt: "Tap water.", answer: "Water", options: ["Water", "Snack", "Book"] },
      { prompt: "Tap please.", answer: "Please", options: ["Please", "Fast", "Dark"] },
      { prompt: "Tap cup.", answer: "Cup", options: ["Cup", "Shelf", "Page"] }
    ]
  },
  {
    id: "Lesson 83",
    tab: "83 Plate",
    title: "Snack Plate",
    coreSentence: "I see a plate.",
    targetWords: ["plate", "snack", "yummy"],
    parentNotes: ["使用大块、柔软、适龄点心。", "不表现坚果、硬糖或小颗粒。", "不表现刀具、叉子、烤箱、火源或热食。"],
    panels: buildPanels("lesson83", [
      ["I see a plate.", "A round child-safe plate sits on the low table."],
      ["A plate.", "Nia points to the plate."],
      ["I see a snack.", "Bobo brings large soft snack pieces."],
      ["Snack on the plate.", "Nia places the snack on the plate."],
      ["Yummy snack.", "Lumo looks at the snack."],
      ["Yummy.", "Nia tastes a tiny bite."],
      ["Plate, please.", "Bobo points to the plate."],
      ["I see a plate.", "The friends sit safely around the table."]
    ]),
    quizzes: [
      { prompt: "Tap plate.", answer: "Plate", options: ["Plate", "Cup", "Book"] },
      { prompt: "Tap snack.", answer: "Snack", options: ["Snack", "Pillow", "Bin"] },
      { prompt: "Tap yummy.", answer: "Yummy", options: ["Yummy", "Sad", "Quiet"] }
    ]
  },
  {
    id: "Lesson 84",
    tab: "84 Table",
    title: "Table Review",
    coreSentence: "What is on the table?",
    targetWords: ["cup", "water", "plate", "snack"],
    parentNotes: ["只使用常温水和安全大件餐具。", "点心画面避免小颗粒、坚果、硬糖和过热食物。", "不在画面中出现品牌文字或餐具商标。"],
    panels: buildPanels("lesson84", [
      ["What is on the table?", "A safe table holds a cup, water pitcher, plate, and soft snack."],
      ["A cup.", "Nia points to the plastic cup."],
      ["Water.", "Bobo points to the small water pitcher."],
      ["A plate.", "Lumo points to the plate."],
      ["A snack.", "Nia points to the large soft snack."],
      ["Cup, water, plate, snack.", "The four table items sit neatly together."],
      ["Pick one.", "Nia looks toward the child with the four choices visible."],
      ["What is on the table?", "The friends clean up the safe table."]
    ]),
    quizzes: [
      { prompt: "Tap cup.", answer: "Cup", options: ["Cup", "Toy", "Blanket"] },
      { prompt: "Tap plate.", answer: "Plate", options: ["Plate", "Page", "Shelf"] },
      { prompt: "Tap snack.", answer: "Snack", options: ["Snack", "Water", "Paper"] }
    ]
  },
  {
    id: "Lesson 85",
    tab: "85 Wipe",
    title: "Wipe the Table",
    coreSentence: "Wipe the table.",
    targetWords: ["wipe", "table", "clean"],
    parentNotes: ["只表现清水和软布，不使用清洁剂。", "孩子可以模仿轻擦动作，不要求用力。", "不表现玻璃碎片、电器进水或危险污渍。"],
    panels: buildPanels("lesson85", [
      ["I see the table.", "A safe low table has a tiny water spot."],
      ["A soft cloth.", "Bobo brings a soft cloth."],
      ["Oh, water.", "Nia points to the tiny water spot."],
      ["Wipe the table.", "Nia gently wipes the table with the cloth."],
      ["Clean table.", "The table is clean and dry."],
      ["It is clean.", "Lumo lights the clean table."],
      ["Put away.", "Bobo places the cloth in a small basket."],
      ["Wipe the table.", "The friends wave beside the clean table."]
    ]),
    quizzes: [
      { prompt: "Tap wipe.", answer: "Wipe", options: ["Wipe", "Drink", "Read"] },
      { prompt: "Tap table.", answer: "Table", options: ["Table", "Pillow", "Page"] },
      { prompt: "Tap clean.", answer: "Clean", options: ["Clean", "Sad", "Hot"] }
    ]
  },
  {
    id: "Lesson 86",
    tab: "86 Paper",
    title: "Pick Up Paper",
    coreSentence: "Pick up paper.",
    targetWords: ["pick up", "paper", "bin"],
    parentNotes: ["只使用大号干净纸片，避免细小碎屑入口。", "纸篓使用轻便、安全、无盖的小篮子。", "不表现垃圾、尖锐物、脏污或复杂分类。"],
    panels: buildPanels("lesson86", [
      ["I see paper.", "Large clean paper pieces sit on the rug."],
      ["A little bin.", "Bobo points to a small safe paper bin."],
      ["Pick up paper.", "Nia bends safely toward the paper."],
      ["Paper up.", "Nia picks up one large paper piece."],
      ["In the bin.", "Nia puts the paper into the small bin."],
      ["Clean rug.", "Lumo points to the clean rug."],
      ["Thank you.", "Bobo moves the empty bin closer."],
      ["Pick up paper.", "The friends wave on the tidy rug."]
    ]),
    quizzes: [
      { prompt: "Tap paper.", answer: "Paper", options: ["Paper", "Snack", "Blanket"] },
      { prompt: "Tap bin.", answer: "Bin", options: ["Bin", "Cup", "Book"] },
      { prompt: "Tap pick up.", answer: "Pick up", options: ["Pick up", "Drink", "Sleep"] }
    ]
  },
  {
    id: "Lesson 87",
    tab: "87 Toys",
    title: "Put Away Toys",
    coreSentence: "Put away toys.",
    targetWords: ["put away", "toys", "shelf"],
    parentNotes: ["只表现大号玩具和低矮架子。", "不表现攀爬高架、沉重箱盖或细小零件。", "孩子只需放回 1 个玩具即可完成互动。"],
    panels: buildPanels("lesson87", [
      ["I see toys.", "Large blocks and a ball sit on the rug."],
      ["A shelf.", "Lumo points to a low toy shelf."],
      ["Put away toys.", "Nia picks up the large ball."],
      ["On the shelf.", "Nia puts the ball on the low shelf."],
      ["More toys.", "Bobo moves large blocks closer."],
      ["Put away.", "Nia and Bobo place the blocks on the shelf."],
      ["Clean shelf.", "The low shelf looks neat."],
      ["Put away toys.", "The friends wave in the tidy room."]
    ]),
    quizzes: [
      { prompt: "Tap toys.", answer: "Toys", options: ["Toys", "Water", "Page"] },
      { prompt: "Tap shelf.", answer: "Shelf", options: ["Shelf", "Plate", "Pillow"] },
      { prompt: "Tap put away.", answer: "Put away", options: ["Put away", "Drink", "Turn"] }
    ]
  },
  {
    id: "Lesson 88",
    tab: "88 Help",
    title: "Home Help Review",
    coreSentence: "I can help at home.",
    targetWords: ["wipe", "pick up", "put away", "clean"],
    parentNotes: ["只安排轻量、安全、短时的小帮手任务。", "不使用清洁剂、玻璃、尖锐垃圾或高处收纳。", "强调帮忙和完成感，不评价速度和结果。"],
    panels: buildPanels("lesson88", [
      ["I can help at home.", "A soft cloth, paper pieces, and large toys are in the room."],
      ["Wipe the table.", "Nia points to the soft cloth."],
      ["Pick up paper.", "Bobo points to the large paper pieces."],
      ["Put away toys.", "Lumo points to the toy shelf."],
      ["It is clean.", "The table, rug, and shelf are tidy."],
      ["Wipe, pick up, put away.", "Three wordless task icons sit side by side."],
      ["Pick one.", "Nia looks toward the child with task choices visible."],
      ["I can help at home.", "The friends wave in the clean room."]
    ]),
    quizzes: [
      { prompt: "Tap wipe.", answer: "Wipe", options: ["Wipe", "Water", "Book"] },
      { prompt: "Tap paper.", answer: "Paper", options: ["Paper", "Pillow", "Cup"] },
      { prompt: "Tap clean.", answer: "Clean", options: ["Clean", "Loud", "Dark"] }
    ]
  },
  {
    id: "Lesson 89",
    tab: "89 Book",
    title: "Open a Book",
    coreSentence: "Open the book.",
    targetWords: ["book", "open", "read"],
    parentNotes: ["使用大页、圆角、无小零件图画书。", "画面里不出现可读文字，英语由网页显示。", "不要求孩子长时间坐住，能翻看一页即可。"],
    panels: buildPanels("lesson89", [
      ["I see a book.", "A large wordless picture book sits on the star rug."],
      ["A book.", "Nia points to the book."],
      ["Read with me.", "Bobo sits beside the book."],
      ["Open the book.", "Nia opens the book with two hands."],
      ["I see a star.", "A wordless star picture appears on the page."],
      ["Look, look.", "Lumo lights the book page."],
      ["Book open.", "Nia points to the open book."],
      ["Open the book.", "The friends sit around the book."]
    ]),
    quizzes: [
      { prompt: "Tap book.", answer: "Book", options: ["Book", "Cup", "Toy"] },
      { prompt: "Tap open.", answer: "Open", options: ["Open", "Close", "Drink"] },
      { prompt: "Tap read.", answer: "Read", options: ["Read", "Wipe", "Rest"] }
    ]
  },
  {
    id: "Lesson 90",
    tab: "90 Page",
    title: "Turn the Page",
    coreSentence: "Turn the page.",
    targetWords: ["turn", "page", "gently"],
    parentNotes: ["鼓励轻轻翻页，不拉扯书页。", "使用厚页书或布书更适合低龄孩子。", "画面不表现撕书、抢书或书页夹手。"],
    panels: buildPanels("lesson90", [
      ["I see a page.", "The wordless picture book is open on the rug."],
      ["A page.", "Nia points to the page corner."],
      ["Gently.", "Bobo makes a slow gentle gesture."],
      ["Turn the page.", "Nia gently turns the page."],
      ["I see the moon.", "A new moon picture appears on the page."],
      ["New page.", "Lumo lights the new page."],
      ["Turn gently.", "Nia shows a gentle hands gesture."],
      ["Turn the page.", "The friends look at the new page."]
    ]),
    quizzes: [
      { prompt: "Tap page.", answer: "Page", options: ["Page", "Plate", "Shelf"] },
      { prompt: "Tap turn.", answer: "Turn", options: ["Turn", "Run", "Drink"] },
      { prompt: "Tap gently.", answer: "Gently", options: ["Gently", "Fast", "Loud"] }
    ]
  },
  {
    id: "Lesson 91",
    tab: "91 Picture",
    title: "Point to a Picture",
    coreSentence: "Point to the picture.",
    targetWords: ["point", "picture", "look"],
    parentNotes: ["画内图只用无字图形，避免文字干扰。", "孩子可用手指或眼神选择，不强迫发音。", "不表现尖锐指示棒或拥挤抢书。"],
    panels: buildPanels("lesson91", [
      ["I see a picture.", "A book page shows wordless star and moon pictures."],
      ["Point to the picture.", "Nia points to the star picture."],
      ["Look at the moon.", "Bobo points to the moon picture."],
      ["Look, a flower.", "Lumo points to a flower picture."],
      ["Your turn.", "Nia looks toward the child."],
      ["Point, please.", "Three wordless pictures are visible on the page."],
      ["Good looking.", "Bobo's screen shows a happy face."],
      ["Point to the picture.", "The friends sit around the open book."]
    ]),
    quizzes: [
      { prompt: "Tap picture.", answer: "Picture", options: ["Picture", "Cup", "Bin"] },
      { prompt: "Tap point.", answer: "Point", options: ["Point", "Drink", "Sleep"] },
      { prompt: "Tap look.", answer: "Look", options: ["Look", "Wipe", "Throw"] }
    ]
  },
  {
    id: "Lesson 92",
    tab: "92 Read",
    title: "Book Review",
    coreSentence: "Let us read.",
    targetWords: ["book", "page", "picture", "read"],
    parentNotes: ["复习时只看图和翻一页即可。", "使用厚页书或布书，避免书页夹手。", "画面不放文字，所有英语由网页显示。"],
    panels: buildPanels("lesson92", [
      ["Let us read.", "A large wordless picture book sits on the star rug."],
      ["A book.", "Nia points to the book cover."],
      ["A page.", "Bobo points to the open page."],
      ["A picture.", "Lumo points to the wordless picture."],
      ["Turn the page.", "Nia gently turns a page."],
      ["Book, page, picture.", "Three wordless reading icons sit side by side."],
      ["Pick one.", "Nia looks toward the child with the book page visible."],
      ["Let us read.", "The friends sit together around the book."]
    ]),
    quizzes: [
      { prompt: "Tap book.", answer: "Book", options: ["Book", "Cup", "Toy"] },
      { prompt: "Tap page.", answer: "Page", options: ["Page", "Water", "Shelf"] },
      { prompt: "Tap picture.", answer: "Picture", options: ["Picture", "Snack", "Pillow"] }
    ]
  },
  {
    id: "Lesson 93",
    tab: "93 Pillow",
    title: "Soft Pillow",
    coreSentence: "I see a pillow.",
    targetWords: ["pillow", "soft", "rest"],
    parentNotes: ["枕头只用于抱一抱或放在床边，不盖住脸。", "保持明亮温暖，不制造睡眠压力。", "不表现趴睡、遮住口鼻或高床跌落风险。"],
    panels: buildPanels("lesson93", [
      ["I see a pillow.", "A soft pillow sits beside a low bed in a warm room."],
      ["A soft pillow.", "Nia points to the pillow."],
      ["Soft, soft.", "Bobo gently presses the pillow edge."],
      ["Rest with a pillow.", "Nia hugs the pillow while sitting by the bed."],
      ["Pillow, please.", "Lumo lights the pillow softly."],
      ["Pillow on the bed.", "Nia places the pillow back on the low bed."],
      ["Time to rest.", "The three friends sit quietly."],
      ["I see a pillow.", "Nia waves gently."]
    ]),
    quizzes: [
      { prompt: "Tap pillow.", answer: "Pillow", options: ["Pillow", "Cup", "Book"] },
      { prompt: "Tap soft.", answer: "Soft", options: ["Soft", "Hard", "Fast"] },
      { prompt: "Tap rest.", answer: "Rest", options: ["Rest", "Run", "Wipe"] }
    ]
  },
  {
    id: "Lesson 94",
    tab: "94 Blanket",
    title: "Warm Blanket",
    coreSentence: "I have a blanket.",
    targetWords: ["blanket", "warm", "cozy"],
    parentNotes: ["毯子只盖膝盖或搭在肩上，不遮住脸。", "使用轻薄小毯，避免缠绕和过热。", "不表现深夜恐惧、黑暗压迫或强制入睡。"],
    panels: buildPanels("lesson94", [
      ["I see a blanket.", "A small light blanket sits in a warm room."],
      ["A warm blanket.", "Nia points to the blanket."],
      ["Here you are.", "Bobo offers the blanket to Nia."],
      ["I have a blanket.", "Nia places the blanket over her knees."],
      ["Warm and cozy.", "Lumo glows warmly nearby."],
      ["Soft blanket.", "Nia gently touches the blanket."],
      ["Put away.", "Bobo helps fold the blanket."],
      ["I have a blanket.", "The friends wave beside the low bed."]
    ]),
    quizzes: [
      { prompt: "Tap blanket.", answer: "Blanket", options: ["Blanket", "Plate", "Page"] },
      { prompt: "Tap warm.", answer: "Warm", options: ["Warm", "Cold", "Fast"] },
      { prompt: "Tap cozy.", answer: "Cozy", options: ["Cozy", "Loud", "Sharp"] }
    ]
  },
  {
    id: "Lesson 95",
    tab: "95 Quiet",
    title: "Quiet Rest",
    coreSentence: "Quiet, please.",
    targetWords: ["quiet", "rest", "eyes"],
    parentNotes: ["这是安静游戏，不要求孩子真的睡觉。", "闭眼只表现一小会儿，可用看图替代。", "不表现黑暗恐惧、独处、责备或强制安静。"],
    panels: buildPanels("lesson95", [
      ["Quiet, please.", "The warm room has soft light."],
      ["Quiet.", "Nia makes a gentle quiet gesture."],
      ["Eyes.", "Bobo points to its screen eyes."],
      ["Rest your eyes.", "Nia closes her eyes gently for a moment."],
      ["Soft light.", "Lumo's light becomes soft."],
      ["Rest, rest.", "The three friends sit quietly."],
      ["I am okay.", "Nia opens her eyes and smiles."],
      ["Quiet, please.", "The three friends wave gently."]
    ]),
    quizzes: [
      { prompt: "Tap quiet.", answer: "Quiet", options: ["Quiet", "Loud", "Fast"] },
      { prompt: "Tap rest.", answer: "Rest", options: ["Rest", "Run", "Throw"] },
      { prompt: "Tap eyes.", answer: "Eyes", options: ["Eyes", "Feet", "Hands"] }
    ]
  },
  {
    id: "Lesson 96",
    tab: "96 Rest",
    title: "Quiet Review",
    coreSentence: "Time to rest.",
    targetWords: ["pillow", "blanket", "quiet", "rest"],
    parentNotes: ["安静复习只做低刺激收尾，不要求孩子睡觉。", "枕头和毯子都不遮住脸或缠绕身体。", "保持画面温暖明亮，避免黑暗和恐惧感。"],
    panels: buildPanels("lesson96", [
      ["Time to rest.", "A warm rest corner has a pillow and small blanket."],
      ["A pillow.", "Nia points to the pillow."],
      ["A blanket.", "Bobo points to the small blanket."],
      ["Quiet light.", "Lumo's light becomes soft and quiet."],
      ["Rest, please.", "Nia sits quietly on the rug."],
      ["Pillow, blanket, quiet.", "Three wordless icons sit side by side."],
      ["Pick one.", "Nia looks toward the child with the rest items visible."],
      ["Time to rest.", "The three friends wave gently."]
    ]),
    quizzes: [
      { prompt: "Tap pillow.", answer: "Pillow", options: ["Pillow", "Cup", "Paper"] },
      { prompt: "Tap blanket.", answer: "Blanket", options: ["Blanket", "Book", "Water"] },
      { prompt: "Tap quiet.", answer: "Quiet", options: ["Quiet", "Loud", "Fast"] }
    ]
  },
  {
    id: "Lesson 97",
    tab: "97 Morning",
    title: "Good Morning",
    coreSentence: "Good morning.",
    targetWords: ["morning", "sun", "wake"],
    parentNotes: ["早晨主题只做温和唤醒和问候，不催促孩子起床。", "可以让孩子对窗外或玩偶说 Good morning。", "画面保持明亮温暖，不表现黑暗、惊醒或责备。"],
    panels: buildPanels("lesson97", [
      ["Good morning.", "Warm morning light enters the cozy room."],
      ["Wake up, Nia.", "Nia opens her eyes and sits up with a soft smile."],
      ["I see the sun.", "Lumo points to the morning sun outside the window."],
      ["Good morning, Bobo.", "Bobo waves gently with a happy screen face."],
      ["Good morning, Nia.", "Nia sits on the star rug in the morning light."],
      ["Good morning, Lumo.", "Nia and Lumo greet each other."],
      ["Good morning, friends.", "Nia, Lumo, and Bobo sit together in the morning light."],
      ["Good morning.", "The three friends wave to start the day."]
    ]),
    quizzes: [
      { prompt: "Tap sun.", answer: "Sun", options: ["Sun", "Moon", "Blanket"] },
      { prompt: "Tap Nia.", answer: "Nia", options: ["Nia", "Bobo", "Cup"] },
      { prompt: "Tap morning.", answer: "Morning", options: ["Morning", "Quiet", "Snack"] }
    ]
  },
  {
    id: "Lesson 98",
    tab: "98 Face",
    title: "Wash Face",
    coreSentence: "Wash your face.",
    targetWords: ["wash", "face", "clean"],
    parentNotes: ["只表现常温清水和软毛巾，不使用热水或清洁产品。", "孩子可以用手做轻轻擦脸动作，不要求真的洗脸。", "避免水进眼睛、用力揉脸、奔跑或滑倒画面。"],
    panels: buildPanels("lesson98", [
      ["I see a cloth.", "A small wash bowl and soft cloth sit on a safe low table."],
      ["This is a face.", "Bobo points to its screen face."],
      ["My face.", "Nia points gently to her face."],
      ["Wash, wash.", "Bobo wets the soft cloth with a little room-temperature water."],
      ["Wash your face.", "Nia gently wipes her cheek with the soft cloth."],
      ["Clean face.", "Nia smiles with a clean face."],
      ["Put away.", "Lumo points to a small open basket."],
      ["Wash your face.", "The cloth rests safely in the basket while the friends wave."]
    ]),
    quizzes: [
      { prompt: "Tap face.", answer: "Face", options: ["Face", "Book", "Toy"] },
      { prompt: "Tap wash.", answer: "Wash", options: ["Wash", "Read", "Turn"] },
      { prompt: "Tap clean.", answer: "Clean", options: ["Clean", "Sad", "Hot"] }
    ]
  },
  {
    id: "Lesson 99",
    tab: "99 Hair",
    title: "Comb Hair",
    coreSentence: "Comb your hair.",
    targetWords: ["comb", "hair", "gentle"],
    parentNotes: ["使用圆头宽齿梳，动作只表现轻轻梳。", "不表现拉扯头发、尖锐发饰、剪刀或吹风机。", "孩子可以摸摸头发或假装梳一下即可。"],
    panels: buildPanels("lesson99", [
      ["I see a comb.", "A large round-tip comb sits on the safe low table."],
      ["My hair.", "Nia points to her soft white hair."],
      ["A comb, please.", "Bobo offers the comb to Nia."],
      ["Comb your hair.", "Nia gently combs her hair."],
      ["Gentle, gentle.", "Lumo makes a slow gentle gesture."],
      ["Pretty star.", "Nia's yellow star hair clip shines softly."],
      ["Comb away.", "The comb rests safely back on the low table."],
      ["Comb your hair.", "Nia, Lumo, and Bobo wave together."]
    ]),
    quizzes: [
      { prompt: "Tap comb.", answer: "Comb", options: ["Comb", "Cup", "Page"] },
      { prompt: "Tap hair.", answer: "Hair", options: ["Hair", "Water", "Shelf"] },
      { prompt: "Tap gentle.", answer: "Gentle", options: ["Gentle", "Fast", "Loud"] }
    ]
  },
  {
    id: "Lesson 100",
    tab: "100 Ready",
    title: "Morning Review",
    coreSentence: "I am ready.",
    targetWords: ["morning", "face", "hair", "ready"],
    parentNotes: ["早晨复习只做简单认知，不催促孩子加快流程。", "可以让孩子任选一个动作：挥手、摸脸、摸头发。", "不表现赶时间、责备、摔倒、尖锐梳具或热水。"],
    panels: buildPanels("lesson100", [
      ["Good morning.", "A morning room shows sun, soft cloth, and round-tip comb."],
      ["Morning sun.", "Nia points to the warm morning light."],
      ["Clean face.", "Nia gently touches her cheek."],
      ["Comb hair.", "Nia points to her hair and star clip."],
      ["I am ready.", "Nia stands smiling on the star rug."],
      ["Morning, face, hair.", "Three wordless icons sit side by side: sun, face, and comb."],
      ["Pick one.", "Nia looks toward the child with the three icons visible."],
      ["I am ready.", "Nia, Lumo, and Bobo wave together."]
    ]),
    quizzes: [
      { prompt: "Tap morning.", answer: "Morning", options: ["Morning", "Night", "Snack"] },
      { prompt: "Tap face.", answer: "Face", options: ["Face", "Toy", "Blanket"] },
      { prompt: "Tap hair.", answer: "Hair", options: ["Hair", "Cup", "Paper"] }
    ]
  },
  {
    id: "Lesson 101",
    tab: "101 Share",
    title: "Share a Toy",
    coreSentence: "Share a toy.",
    targetWords: ["share", "toy", "friend"],
    parentNotes: ["分享主题只表现主动递给朋友，不表现抢夺或争吵。", "使用大号软玩具，避免小零件和硬物。", "孩子可以把一个玩具递给家长或玩偶，说 share。"],
    panels: buildPanels("lesson101", [
      ["I see a toy.", "A large soft toy ball sits on the star rug."],
      ["My toy.", "Nia holds the soft toy ball with two hands."],
      ["A friend.", "Bobo looks at the toy with a friendly face."],
      ["Share a toy.", "Nia hands the soft toy ball to Bobo."],
      ["Share with Lumo.", "Bobo hands the soft toy ball to Lumo."],
      ["Friends share.", "The three friends sit around the toy."],
      ["Your turn.", "Nia looks toward the child with the toy in the middle."],
      ["Share a toy.", "Nia, Lumo, and Bobo play with the soft toy together."]
    ]),
    quizzes: [
      { prompt: "Tap toy.", answer: "Toy", options: ["Toy", "Water", "Pillow"] },
      { prompt: "Tap friend.", answer: "Friend", options: ["Friend", "Plate", "Page"] },
      { prompt: "Tap share.", answer: "Share", options: ["Share", "Grab", "Sleep"] }
    ]
  },
  {
    id: "Lesson 102",
    tab: "102 Turn",
    title: "My Turn",
    coreSentence: "My turn, please.",
    targetWords: ["turn", "wait", "please"],
    parentNotes: ["轮流主题只表现轻轻滚球，不表现投掷或砸到人。", "可以让孩子和家长滚一次球，说 my turn 或 please。", "不表现抢球、推人、强烈哭闹或输赢竞争。"],
    panels: buildPanels("lesson102", [
      ["I see a ball.", "A large soft ball sits in the middle of the star rug."],
      ["Nia's turn.", "Nia gently rolls the soft ball."],
      ["Wait, Bobo.", "Bobo waits calmly beside the rug."],
      ["My turn, please.", "Bobo asks politely with an open hand."],
      ["Your turn.", "Nia rolls the soft ball to Bobo."],
      ["Wait, Lumo.", "Lumo waits and smiles."],
      ["Lumo's turn.", "Lumo receives the soft ball."],
      ["My turn, please.", "The three friends sit in a gentle turn-taking game."]
    ]),
    quizzes: [
      { prompt: "Tap turn.", answer: "Turn", options: ["Turn", "Push", "Throw"] },
      { prompt: "Tap wait.", answer: "Wait", options: ["Wait", "Run", "Hot"] },
      { prompt: "Tap please.", answer: "Please", options: ["Please", "Fast", "Dark"] }
    ]
  },
  {
    id: "Lesson 103",
    tab: "103 Sorry",
    title: "Sorry Friend",
    coreSentence: "Sorry, friend.",
    targetWords: ["sorry", "friend", "okay"],
    parentNotes: ["道歉主题只表现轻微小意外，不表现受伤或责备。", "用 sorry 和 okay 建立温和修复关系的语境。", "避免摔倒、哭闹、破损物品、尖锐积木或强烈冲突。"],
    panels: buildPanels("lesson103", [
      ["I see blocks.", "Large soft blocks sit on the star rug."],
      ["Oops.", "Nia gently bumps one soft block."],
      ["Oh no.", "One soft block tips over while Bobo looks at it."],
      ["Sorry, friend.", "Nia reaches toward Bobo with a kind face."],
      ["It is okay.", "Bobo smiles and nods."],
      ["Help, please.", "Nia and Bobo set the soft block upright together."],
      ["Friends help.", "Lumo points to the rebuilt soft blocks."],
      ["Sorry, friend.", "The three friends wave beside the blocks."]
    ]),
    quizzes: [
      { prompt: "Tap sorry.", answer: "Sorry", options: ["Sorry", "Loud", "Run"] },
      { prompt: "Tap friend.", answer: "Friend", options: ["Friend", "Cup", "Bin"] },
      { prompt: "Tap okay.", answer: "Okay", options: ["Okay", "Hot", "Sharp"] }
    ]
  },
  {
    id: "Lesson 104",
    tab: "104 Play",
    title: "Play Review",
    coreSentence: "Play together.",
    targetWords: ["share", "turn", "sorry", "together"],
    parentNotes: ["共同游戏只表现温和互动，不表现竞争输赢。", "可以用一个大软球练习 share 和 my turn。", "不表现抢夺、推搡、哭闹、受伤或复杂规则。"],
    panels: buildPanels("lesson104", [
      ["Play together.", "A soft ball and large soft blocks sit on the star rug."],
      ["Share a toy.", "Nia hands the soft ball to Bobo."],
      ["Wait, please.", "Bobo waits calmly with the ball nearby."],
      ["Your turn.", "Lumo receives the soft ball."],
      ["Sorry, friend.", "A soft block tips over and Nia speaks kindly."],
      ["It is okay.", "Bobo smiles beside the soft block."],
      ["Share, turn, sorry.", "Three wordless icons sit side by side: sharing, turn-taking, and apology."],
      ["Play together.", "Nia, Lumo, and Bobo play together calmly."]
    ]),
    quizzes: [
      { prompt: "Tap share.", answer: "Share", options: ["Share", "Grab", "Sleep"] },
      { prompt: "Tap turn.", answer: "Turn", options: ["Turn", "Throw", "Hot"] },
      { prompt: "Tap sorry.", answer: "Sorry", options: ["Sorry", "Loud", "Sharp"] }
    ]
  },
  {
    id: "Lesson 105",
    tab: "105 Thanks",
    title: "Thank You",
    coreSentence: "Thank you.",
    targetWords: ["thank you", "kind", "smile"],
    parentNotes: ["礼貌表达只放在温和递物场景中，不要求孩子机械重复。", "可以把一个大软球递给孩子，听到后一起说 `Thank you.`", "不表现抢夺、责备、输赢或强迫道谢。"],
    panels: buildPanels("lesson105", [
      ["I see a toy.", "A large soft ball sits on the star rug."],
      ["Here you are.", "Bobo offers the soft ball to Nia."],
      ["Thank you.", "Nia receives the ball and smiles."],
      ["A kind friend.", "Lumo smiles kindly beside Nia."],
      ["I see a smile.", "Bobo shows a happy smile on its screen face."],
      ["Thank you, friend.", "The friends pass the soft ball gently."],
      ["Your turn.", "The soft ball waits in front for the child's turn."],
      ["Thank you.", "Nia, Lumo, and Bobo wave with warm smiles."]
    ]),
    quizzes: [
      { prompt: "Tap thank you.", answer: "Thank you", options: ["Thank you", "Run", "Hot"] },
      { prompt: "Tap smile.", answer: "Smile", options: ["Smile", "Door", "Moon"] },
      { prompt: "Tap kind.", answer: "Kind", options: ["Kind", "Loud", "Sharp"] }
    ]
  },
  {
    id: "Lesson 106",
    tab: "106 Help",
    title: "Help Me Please",
    coreSentence: "Help me, please.",
    targetWords: ["help", "please", "bag"],
    parentNotes: ["帮忙主题只表现轻软小包，不表现重物、高处或危险工具。", "可以让孩子递一个软布袋或玩偶，说 `please`。", "不表现命令、催促、摔倒或过重负担。"],
    panels: buildPanels("lesson106", [
      ["I see a bag.", "A small soft bag sits beside the star rug."],
      ["Help me, please.", "Nia asks for help with an open hand."],
      ["I can help.", "Lumo gently picks up the soft bag."],
      ["Here you are.", "Lumo gives the soft bag to Nia."],
      ["Thank you.", "Nia smiles and says thanks."],
      ["Help Bobo, please.", "Bobo asks politely for help with a soft bag."],
      ["We can help.", "The friends put the soft bag into a low basket together."],
      ["Help me, please.", "The friends wave in the cozy room."]
    ]),
    quizzes: [
      { prompt: "Tap bag.", answer: "Bag", options: ["Bag", "Pillow", "Book"] },
      { prompt: "Tap help.", answer: "Help", options: ["Help", "Hide", "Jump"] },
      { prompt: "Tap please.", answer: "Please", options: ["Please", "Fast", "Dark"] }
    ]
  },
  {
    id: "Lesson 107",
    tab: "107 Good Job",
    title: "Good Job",
    coreSentence: "Good job!",
    targetWords: ["good job", "try", "again"],
    parentNotes: ["鼓励语只用于温和尝试和小成功，不制造输赢压力。", "可以让孩子搭一个大积木，完成后说 `Good job!`", "不表现失败责备、哭闹、比赛排名或小零件。"],
    panels: buildPanels("lesson107", [
      ["I see a star.", "A large soft star block sits on the rug."],
      ["Try, Bobo.", "Bobo tries to stand the soft star block upright."],
      ["Try again.", "The soft star block leans gently."],
      ["I can help.", "Lumo helps steady the soft star block."],
      ["Good job!", "The soft star block stands upright."],
      ["Good job, Bobo!", "Nia smiles kindly at Bobo."],
      ["Good job, friends!", "The friends clap gently together."],
      ["Good job!", "Nia, Lumo, and Bobo wave beside the star block."]
    ]),
    quizzes: [
      { prompt: "Tap star.", answer: "Star", options: ["Star", "Cup", "Door"] },
      { prompt: "Tap try.", answer: "Try", options: ["Try", "Sleep", "Hot"] },
      { prompt: "Tap good job.", answer: "Good job", options: ["Good job", "No", "Fast"] }
    ]
  },
  {
    id: "Lesson 108",
    tab: "108 Kind",
    title: "Kind Words Review",
    coreSentence: "Kind words.",
    targetWords: ["thank you", "please", "good job", "kind"],
    parentNotes: ["复习课只强化温和礼貌表达，不要求孩子一次说完整句。", "可以任选一个词：`please`、`thank you` 或 `good job`。", "不表现争抢、责备、比赛、输赢或强迫表达。"],
    panels: buildPanels("lesson108", [
      ["Kind words.", "A soft ball, soft bag, and star block sit on the rug."],
      ["Thank you.", "Nia receives the soft ball."],
      ["Help me, please.", "Nia asks Lumo for help with the soft bag."],
      ["Good job!", "The star block stands upright."],
      ["A kind friend.", "The three friends smile kindly."],
      ["Thank you, please, good job.", "Three wordless icons show giving, asking, and cheering."],
      ["Pick one.", "The three kind-word objects wait for the child."],
      ["Kind words.", "The friends wave in the warm play room."]
    ]),
    quizzes: [
      { prompt: "Tap thank you.", answer: "Thank you", options: ["Thank you", "Run", "Hot"] },
      { prompt: "Tap please.", answer: "Please", options: ["Please", "Throw", "Dark"] },
      { prompt: "Tap good job.", answer: "Good job", options: ["Good job", "Push", "Sharp"] }
    ]
  },
  {
    id: "Lesson 109",
    tab: "109 Walk",
    title: "Walk Slowly",
    coreSentence: "Walk slowly.",
    targetWords: ["walk", "slowly", "feet"],
    parentNotes: ["安全走动只表现室内软路线垫，不表现真实道路或拥挤场景。", "孩子可以在原地慢慢走两步，跟读 `slowly`。", "不表现奔跑、摔倒、车辆、楼梯或危险边缘。"],
    panels: buildPanels("lesson109", [
      ["I see a path.", "A wide soft star path lies on the floor."],
      ["My feet.", "Nia looks at her feet on the path."],
      ["Walk slowly.", "Nia walks slowly on the soft path."],
      ["Slowly, slowly.", "Lumo makes a slow gentle gesture."],
      ["Walk to Bobo.", "Bobo waits at the end of the path."],
      ["Good job!", "Nia reaches Bobo safely."],
      ["Your turn.", "The path waits for the child's turn."],
      ["Walk slowly.", "The friends wave beside the soft path."]
    ]),
    quizzes: [
      { prompt: "Tap feet.", answer: "Feet", options: ["Feet", "Hair", "Cup"] },
      { prompt: "Tap walk.", answer: "Walk", options: ["Walk", "Jump", "Sleep"] },
      { prompt: "Tap slowly.", answer: "Slowly", options: ["Slowly", "Fast", "Loud"] }
    ]
  },
  {
    id: "Lesson 110",
    tab: "110 Hold",
    title: "Hold My Hand",
    coreSentence: "Hold my hand.",
    targetWords: ["hold", "hand", "together"],
    parentNotes: ["牵手只表现轻轻牵和一起走，尊重孩子是否愿意模仿。", "可以用玩偶之间牵手示范，不强迫孩子和成人牵手。", "不表现拉扯、拖拽、人群、道路或陌生人场景。"],
    panels: buildPanels("lesson110", [
      ["My hand.", "Nia shows one open hand."],
      ["Your hand.", "Lumo shows one small hand."],
      ["Hold my hand.", "Nia and Lumo hold hands gently."],
      ["Walk together.", "Nia and Lumo walk together on the soft path."],
      ["Together.", "Bobo smiles as the friends walk together."],
      ["Friends together.", "The friends make a small gentle circle."],
      ["Your turn.", "A friendly open hand invites the child."],
      ["Hold my hand.", "The friends wave beside the soft path."]
    ]),
    quizzes: [
      { prompt: "Tap hand.", answer: "Hand", options: ["Hand", "Foot", "Book"] },
      { prompt: "Tap hold.", answer: "Hold", options: ["Hold", "Throw", "Hide"] },
      { prompt: "Tap together.", answer: "Together", options: ["Together", "Alone", "Fast"] }
    ]
  },
  {
    id: "Lesson 111",
    tab: "111 Stop",
    title: "Stop and Look",
    coreSentence: "Stop and look.",
    targetWords: ["stop", "look", "path"],
    parentNotes: ["停和看只做室内路径游戏，不模拟真实交通训练。", "可以在地上放一个大手掌图标，让孩子停一停再走。", "不表现马路、车辆、危险警示、摔倒或惊吓。"],
    panels: buildPanels("lesson111", [
      ["I see a path.", "A soft star path has a big hand icon."],
      ["Walk slowly.", "Nia walks slowly toward the hand icon."],
      ["Stop.", "Nia stops at the big hand icon."],
      ["Look.", "Nia looks ahead calmly."],
      ["Stop and look.", "Lumo stops and looks on the path."],
      ["Good job!", "Bobo smiles and nods."],
      ["Your turn.", "The soft path and hand icon wait for the child."],
      ["Stop and look.", "The friends finish the path safely."]
    ]),
    quizzes: [
      { prompt: "Tap stop.", answer: "Stop", options: ["Stop", "Run", "Sleep"] },
      { prompt: "Tap look.", answer: "Look", options: ["Look", "Throw", "Hot"] },
      { prompt: "Tap path.", answer: "Path", options: ["Path", "Water", "Book"] }
    ]
  },
  {
    id: "Lesson 112",
    tab: "112 Safe Walk",
    title: "Walk Review",
    coreSentence: "Walk safely.",
    targetWords: ["walk", "hold", "stop", "look"],
    parentNotes: ["复习课只使用室内软路线垫，不扩展到真实交通场景。", "可以任选一个动作：慢走、牵手、停下或看一看。", "不表现车辆、道路、摔倒、拉扯或强刺激警示。"],
    panels: buildPanels("lesson112", [
      ["Walk safely.", "A soft path and big hand icon sit on the floor."],
      ["Walk slowly.", "Nia walks slowly on the path."],
      ["Hold my hand.", "Nia and Lumo hold hands gently."],
      ["Stop.", "Nia stops at the hand icon."],
      ["Look.", "Nia looks calmly ahead."],
      ["Walk, hold, stop, look.", "Four wordless icons show walking, holding, stopping, and looking."],
      ["Pick one.", "The path waits for the child to choose."],
      ["Walk safely.", "The friends wave beside the safe path."]
    ]),
    quizzes: [
      { prompt: "Tap walk.", answer: "Walk", options: ["Walk", "Sleep", "Hot"] },
      { prompt: "Tap hold.", answer: "Hold", options: ["Hold", "Push", "Dark"] },
      { prompt: "Tap stop.", answer: "Stop", options: ["Stop", "Run", "Sharp"] }
    ]
  },
  {
    id: "Lesson 113",
    tab: "113 Blocks",
    title: "Big Blocks",
    coreSentence: "Big blocks.",
    targetWords: ["big", "blocks", "build"],
    parentNotes: ["搭建主题只使用大号软积木，不表现小零件或高塔。", "可以让孩子摸一摸大积木，说 `big` 或 `blocks`。", "不表现砸人、扔积木、尖锐边角或危险高度。"],
    panels: buildPanels("lesson113", [
      ["I see blocks.", "Three large soft blocks sit on the rug."],
      ["Big blocks.", "Nia points to the large soft blocks."],
      ["I can build.", "Lumo carries one soft block with two hands."],
      ["Build with blocks.", "Bobo moves a soft block closer."],
      ["Put it here.", "Nia places one block on the rug."],
      ["Big, big blocks.", "Two soft blocks sit side by side."],
      ["Your turn.", "The big soft blocks wait for the child."],
      ["Big blocks.", "The friends wave around the big blocks."]
    ]),
    quizzes: [
      { prompt: "Tap blocks.", answer: "Blocks", options: ["Blocks", "Cup", "Book"] },
      { prompt: "Tap big.", answer: "Big", options: ["Big", "Small", "Quiet"] },
      { prompt: "Tap build.", answer: "Build", options: ["Build", "Throw", "Sleep"] }
    ]
  },
  {
    id: "Lesson 114",
    tab: "114 Stack",
    title: "Stack Up",
    coreSentence: "Stack up.",
    targetWords: ["stack", "up", "careful"],
    parentNotes: ["只表现低矮软积木，不搭高塔。", "可以叠两块大软积木，动作放慢说 `careful`。", "不表现砸落、危险高度、硬积木尖角或小零件入口。"],
    panels: buildPanels("lesson114", [
      ["I see blocks.", "Two large soft blocks sit side by side."],
      ["One block.", "Nia holds one soft block."],
      ["Up.", "Lumo points upward gently."],
      ["Stack up.", "Nia stacks one soft block on another."],
      ["Careful.", "Bobo steadies the small block stack."],
      ["Good job!", "The low block stack stands safely."],
      ["Your turn.", "Two soft blocks wait for the child."],
      ["Stack up.", "The friends wave beside the low block stack."]
    ]),
    quizzes: [
      { prompt: "Tap up.", answer: "Up", options: ["Up", "Down", "Cup"] },
      { prompt: "Tap stack.", answer: "Stack", options: ["Stack", "Run", "Hide"] },
      { prompt: "Tap careful.", answer: "Careful", options: ["Careful", "Fast", "Loud"] }
    ]
  },
  {
    id: "Lesson 115",
    tab: "115 Fix",
    title: "Fix It",
    coreSentence: "Fix it.",
    targetWords: ["fix", "fall", "again"],
    parentNotes: ["修复主题只表现软积木轻轻倒下，不制造失败压力。", "可以让孩子把两块积木重新摆好，说 `fix it`。", "不表现砸伤、哭闹、责备、破损物或危险工具。"],
    panels: buildPanels("lesson115", [
      ["I see a tower.", "A low soft block tower stands on the rug."],
      ["It falls.", "The soft blocks gently tip onto the rug."],
      ["It is okay.", "Nia looks calm beside the blocks."],
      ["Fix it.", "Lumo points to the soft blocks."],
      ["Try again.", "Nia and Bobo rebuild the low tower."],
      ["Good job!", "The low tower stands again."],
      ["Your turn.", "Two soft blocks wait to be fixed."],
      ["Fix it.", "The friends wave beside the fixed tower."]
    ]),
    quizzes: [
      { prompt: "Tap fall.", answer: "Fall", options: ["Fall", "Fly", "Sleep"] },
      { prompt: "Tap fix.", answer: "Fix", options: ["Fix", "Throw", "Hot"] },
      { prompt: "Tap again.", answer: "Again", options: ["Again", "No", "Dark"] }
    ]
  },
  {
    id: "Lesson 116",
    tab: "116 Build",
    title: "Build Review",
    coreSentence: "Build together.",
    targetWords: ["blocks", "stack", "fix", "together"],
    parentNotes: ["复习课只使用大号软积木和低矮小塔。", "可以任选一个动作：指积木、叠一块、扶正小塔。", "不表现高塔、砸落、受伤、责备或小零件。"],
    panels: buildPanels("lesson116", [
      ["Build together.", "Large soft blocks sit on the rug."],
      ["Big blocks.", "Nia points to the big soft blocks."],
      ["Stack up.", "Lumo stacks two soft blocks low."],
      ["It falls.", "The soft blocks gently tip over."],
      ["Fix it.", "Nia and Bobo fix the low tower."],
      ["Blocks, stack, fix.", "Wordless icons show blocks, stacking, and fixing."],
      ["Pick one.", "The soft blocks wait for the child to choose."],
      ["Build together.", "The friends wave beside the blocks."]
    ]),
    quizzes: [
      { prompt: "Tap blocks.", answer: "Blocks", options: ["Blocks", "Book", "Cup"] },
      { prompt: "Tap stack.", answer: "Stack", options: ["Stack", "Run", "Hot"] },
      { prompt: "Tap fix.", answer: "Fix", options: ["Fix", "Throw", "Dark"] }
    ]
  },
  {
    id: "Lesson 117",
    tab: "117 Night",
    title: "Good Night",
    coreSentence: "Good night.",
    targetWords: ["night", "moon", "sleep"],
    parentNotes: ["晚安主题保持明亮温暖，不强迫入睡。", "可以对窗外或玩偶说 `Good night.`", "不表现黑暗恐惧、惊吓、责备、遮住口鼻或高床跌落。"],
    panels: buildPanels("lesson117", [
      ["I see the moon.", "A moon glows outside the warm bedroom window."],
      ["It is night.", "Nia sits calmly and looks at the moon."],
      ["Good night, Bobo.", "Bobo waves gently in the warm room."],
      ["Good night, Lumo.", "Lumo glows softly beside Nia."],
      ["Time to sleep.", "Nia stands beside a low cozy bed."],
      ["Good night, friends.", "The friends sit together in soft light."],
      ["Say good night.", "The moon glows outside the window."],
      ["Good night.", "The friends wave gently in the cozy room."]
    ]),
    quizzes: [
      { prompt: "Tap moon.", answer: "Moon", options: ["Moon", "Sun", "Cup"] },
      { prompt: "Tap night.", answer: "Night", options: ["Night", "Morning", "Fast"] },
      { prompt: "Tap sleep.", answer: "Sleep", options: ["Sleep", "Run", "Hot"] }
    ]
  },
  {
    id: "Lesson 118",
    tab: "118 Pajamas",
    title: "Pajamas On",
    coreSentence: "Pajamas on.",
    targetWords: ["pajamas", "on", "soft"],
    parentNotes: ["睡衣主题只表现折好的睡衣和穿好后的完成状态，避免隐私换衣画面。", "可以摸一摸柔软布料，说 `soft`。", "不表现裸露、换衣过程、绳带缠绕、尖锐扣件或商标文字。"],
    panels: buildPanels("lesson118", [
      ["I see pajamas.", "Soft pajamas lie folded on a low chair."],
      ["Soft pajamas.", "Nia points to the soft pajamas."],
      ["Here you are.", "Bobo offers the folded pajamas."],
      ["Pajamas on.", "Nia is already wearing soft pajamas."],
      ["Soft and warm.", "Lumo points to the soft sleeves and pant legs."],
      ["I am ready.", "Nia sits calmly in pajamas."],
      ["Your turn.", "Folded pajamas wait on the low chair."],
      ["Pajamas on.", "The friends wave in the cozy bedroom."]
    ]),
    quizzes: [
      { prompt: "Tap pajamas.", answer: "Pajamas", options: ["Pajamas", "Shoes", "Book"] },
      { prompt: "Tap soft.", answer: "Soft", options: ["Soft", "Hard", "Fast"] },
      { prompt: "Tap on.", answer: "On", options: ["On", "Under", "Away"] }
    ]
  },
  {
    id: "Lesson 119",
    tab: "119 Light",
    title: "Night Light",
    coreSentence: "Light on.",
    targetWords: ["light", "on", "quiet"],
    parentNotes: ["夜灯主题保持柔光和安全低矮家具。", "可以点一下房间灯或玩具灯，说 `light`。", "不表现电线、插座、强光刺眼、黑暗恐惧或高处攀爬。"],
    panels: buildPanels("lesson119", [
      ["I see a light.", "A round night light sits on a low bedside table."],
      ["Light on.", "The small night light turns on softly."],
      ["Soft light.", "Soft warm light fills the room."],
      ["Quiet light.", "Lumo glows softly and quietly."],
      ["Quiet, please.", "Nia makes a gentle quiet gesture."],
      ["Moon and light.", "The moon and night light glow together."],
      ["Tap light.", "The round night light waits to be tapped."],
      ["Light on.", "The friends wave in soft light."]
    ]),
    quizzes: [
      { prompt: "Tap light.", answer: "Light", options: ["Light", "Ball", "Paper"] },
      { prompt: "Tap on.", answer: "On", options: ["On", "Under", "Away"] },
      { prompt: "Tap quiet.", answer: "Quiet", options: ["Quiet", "Loud", "Fast"] }
    ]
  },
  {
    id: "Lesson 120",
    tab: "120 Bedtime",
    title: "Bedtime Review",
    coreSentence: "Sleep well.",
    targetWords: ["night", "pajamas", "light", "sleep"],
    parentNotes: ["晚间复习只做流程认知，不要求孩子立即睡觉。", "可以任选一个物品：月亮、睡衣、夜灯或小床。", "不表现黑暗恐惧、遮住口鼻、强迫入睡、电线插座或高床跌落。"],
    panels: buildPanels("lesson120", [
      ["Sleep well.", "Moon, pajamas, night light, and low bed are visible."],
      ["Good night.", "The moon glows outside the window."],
      ["Pajamas on.", "Soft pajamas rest on a low chair."],
      ["Light on.", "The round night light glows softly."],
      ["Time to sleep.", "Nia stands beside the low cozy bed."],
      ["Night, pajamas, light, sleep.", "Wordless icons show moon, pajamas, night light, and bed."],
      ["Pick one.", "The bedtime objects wait for the child."],
      ["Sleep well.", "The friends wave in the warm bedtime room."]
    ]),
    quizzes: [
      { prompt: "Tap night.", answer: "Night", options: ["Night", "Morning", "Hot"] },
      { prompt: "Tap pajamas.", answer: "Pajamas", options: ["Pajamas", "Shoes", "Cup"] },
      { prompt: "Tap light.", answer: "Light", options: ["Light", "Ball", "Paper"] }
    ]
  },
  {
    id: "Lesson 121",
    tab: "121 One",
    title: "One Star",
    coreSentence: "One star.",
    targetWords: ["one", "star", "count"],
    parentNotes: ["数字只做点数感知，不要求识别书面数字。", "可以拿一颗积木说 `one`。", "不在画面里放数字或文字，避免做成书面练习。"],
    panels: buildPanels("lesson121", [
      ["One star.", "One large star block sits on the rug."],
      ["I see one.", "Nia points to one star."],
      ["One.", "Lumo shows one finger."],
      ["Count one.", "Bobo shows one dot without text."],
      ["One star in.", "Nia puts one star block into a basket."],
      ["One star out.", "The one star comes out of the basket."],
      ["Your turn.", "One star waits for the child."],
      ["One star.", "The friends wave beside one star."]
    ]),
    quizzes: [
      { prompt: "Tap one.", answer: "One", options: ["One", "Two", "Three"] },
      { prompt: "Tap star.", answer: "Star", options: ["Star", "Cup", "Shoe"] },
      { prompt: "Tap count.", answer: "Count", options: ["Count", "Sleep", "Run"] }
    ]
  },
  {
    id: "Lesson 122",
    tab: "122 Two",
    title: "Two Cups",
    coreSentence: "Two cups.",
    targetWords: ["two", "cups", "count"],
    parentNotes: ["餐桌数量只用空塑料杯，不放热水或玻璃。", "可以用两个安全杯子练习 `one, two`。", "不表现倒水、热饮、玻璃碎裂或品牌文字。"],
    panels: buildPanels("lesson122", [
      ["Two cups.", "Two plastic cups sit on a low table."],
      ["One cup.", "Nia points to the first cup."],
      ["Two cups.", "Nia points to the second cup."],
      ["Count two.", "Bobo lines up two cups."],
      ["One, two.", "Lumo taps the two cups gently."],
      ["Two cups here.", "The two cups sit in the middle of the low table."],
      ["Your turn.", "Two cups wait for the child."],
      ["Two cups.", "The friends wave beside the cups."]
    ]),
    quizzes: [
      { prompt: "Tap two.", answer: "Two", options: ["Two", "One", "Three"] },
      { prompt: "Tap cups.", answer: "Cups", options: ["Cups", "Blocks", "Moon"] },
      { prompt: "Tap count.", answer: "Count", options: ["Count", "Throw", "Hot"] }
    ]
  },
  {
    id: "Lesson 123",
    tab: "123 Three",
    title: "Three Blocks",
    coreSentence: "Three blocks.",
    targetWords: ["three", "blocks", "count"],
    parentNotes: ["数量主题只使用大号软积木，避免小块入口风险。", "可以点三块大积木说 `one, two, three`。", "不表现小零件、高塔、扔积木或竞争速度。"],
    panels: buildPanels("lesson123", [
      ["Three blocks.", "Three large soft blocks sit on the rug."],
      ["One block.", "Nia points to one block."],
      ["Two blocks.", "Lumo points to two blocks."],
      ["Three blocks.", "Bobo points to the third block."],
      ["Count three.", "The three soft blocks line up."],
      ["Blocks together.", "Nia places the blocks together."],
      ["Your turn.", "Three blocks wait for the child."],
      ["Three blocks.", "The friends wave beside the three blocks."]
    ]),
    quizzes: [
      { prompt: "Tap three.", answer: "Three", options: ["Three", "One", "Two"] },
      { prompt: "Tap blocks.", answer: "Blocks", options: ["Blocks", "Pajamas", "Light"] },
      { prompt: "Tap count.", answer: "Count", options: ["Count", "Sleep", "Push"] }
    ]
  },
  {
    id: "Lesson 124",
    tab: "124 Count",
    title: "Count Review",
    coreSentence: "Count with me.",
    targetWords: ["one", "two", "three", "count"],
    parentNotes: ["复习课只做 1 到 3 的口头点数，不使用书面数字。", "孩子可以任选一组物品点一点。", "不要求孩子完成计数题或速度比赛。"],
    panels: buildPanels("lesson124", [
      ["Count with me.", "A star, two cups, and three blocks sit in the room."],
      ["One star.", "Nia points to one star."],
      ["Two cups.", "Lumo points to two cups."],
      ["Three blocks.", "Bobo points to three blocks."],
      ["Count one, two, three.", "The three object groups line up clearly."],
      ["One, two, three.", "Three wordless dots glow one by one."],
      ["Pick one.", "The count objects wait for the child."],
      ["Count with me.", "The friends wave beside the count objects."]
    ]),
    quizzes: [
      { prompt: "Tap one.", answer: "One", options: ["One", "Four", "Run"] },
      { prompt: "Tap two.", answer: "Two", options: ["Two", "Hot", "Sleep"] },
      { prompt: "Tap three.", answer: "Three", options: ["Three", "Sharp", "Throw"] }
    ]
  },
  {
    id: "Lesson 125",
    tab: "125 Size",
    title: "Big and Small",
    coreSentence: "Big and small.",
    targetWords: ["big", "small", "block"],
    parentNotes: ["大小对比只用大号安全物和中号物，不使用可入口小物件。", "可以用两块不同大小积木说 `big`、`small`。", "不表现硬物砸落、尖角或小零件。"],
    panels: buildPanels("lesson125", [
      ["Big and small.", "One big soft block and one small soft block sit on the rug."],
      ["Big block.", "Nia points to the big block."],
      ["Small block.", "Lumo points to the small block."],
      ["Big, small.", "Bobo places the blocks side by side."],
      ["Big.", "Nia shows a big shape with her arms."],
      ["Small.", "Nia shows a small shape with her hands."],
      ["Pick one.", "The two blocks wait for the child."],
      ["Big and small.", "The friends wave beside the blocks."]
    ]),
    quizzes: [
      { prompt: "Tap big.", answer: "Big", options: ["Big", "Small", "Quiet"] },
      { prompt: "Tap small.", answer: "Small", options: ["Small", "Big", "Loud"] },
      { prompt: "Tap block.", answer: "Block", options: ["Block", "Cup", "Moon"] }
    ]
  },
  {
    id: "Lesson 126",
    tab: "126 UpDown",
    title: "Up and Down",
    coreSentence: "Up and down.",
    targetWords: ["up", "down", "hand"],
    parentNotes: ["动作对比只做慢速手部动作，不要求跳跃。", "可以举手和放手练习 `up`、`down`。", "不表现爬高、抛物、摔倒或快速动作。"],
    panels: buildPanels("lesson126", [
      ["Hands up.", "Nia raises her hands."],
      ["Hands down.", "Nia lowers her hands."],
      ["Up.", "Lumo lifts a small shield."],
      ["Down.", "Lumo lowers the shield."],
      ["Up and down.", "Bobo shows a gentle up and down motion."],
      ["Slowly.", "The friends move slowly."],
      ["Your turn.", "Two wordless hand icons invite movement."],
      ["Up and down.", "The friends wave after the action."]
    ]),
    quizzes: [
      { prompt: "Tap up.", answer: "Up", options: ["Up", "Down", "Sleep"] },
      { prompt: "Tap down.", answer: "Down", options: ["Down", "Up", "Hot"] },
      { prompt: "Tap hand.", answer: "Hand", options: ["Hand", "Foot", "Cup"] }
    ]
  },
  {
    id: "Lesson 127",
    tab: "127 Lines",
    title: "Long and Short",
    coreSentence: "Long and short.",
    targetWords: ["long", "short", "line"],
    parentNotes: ["长短对比使用宽软布线，不使用绳子缠绕。", "可以用两条纸条或布条指一指。", "不表现细绳、缠绕脖子、剪刀或小纸片入口。"],
    panels: buildPanels("lesson127", [
      ["I see lines.", "Two soft cloth lines lie on the rug."],
      ["Long line.", "Nia points to the long soft line."],
      ["Short line.", "Lumo points to the short soft line."],
      ["Long and short.", "Bobo places the lines side by side."],
      ["Long.", "Nia traces the long line slowly."],
      ["Short.", "Nia taps the short line."],
      ["Pick one.", "The long and short lines wait for the child."],
      ["Long and short.", "The friends wave beside the lines."]
    ]),
    quizzes: [
      { prompt: "Tap long.", answer: "Long", options: ["Long", "Short", "Up"] },
      { prompt: "Tap short.", answer: "Short", options: ["Short", "Long", "Down"] },
      { prompt: "Tap line.", answer: "Line", options: ["Line", "Cup", "Moon"] }
    ]
  },
  {
    id: "Lesson 128",
    tab: "128 Opposite",
    title: "Opposites Review",
    coreSentence: "Find opposites.",
    targetWords: ["big", "small", "up", "down"],
    parentNotes: ["复习课只做安全物品和手势对比。", "孩子可以任选一个词模仿动作。", "不表现跳跃、爬高、细绳或速度竞赛。"],
    panels: buildPanels("lesson128", [
      ["Find opposites.", "Big and small blocks sit beside up and down hand icons."],
      ["Big.", "Nia points to the big block."],
      ["Small.", "Lumo points to the small block."],
      ["Up.", "Nia raises her hands."],
      ["Down.", "Nia lowers her hands."],
      ["Big, small, up, down.", "Wordless icons show big, small, up, and down."],
      ["Pick one.", "The opposite icons wait for the child."],
      ["Find opposites.", "The friends wave beside the icons."]
    ]),
    quizzes: [
      { prompt: "Tap big.", answer: "Big", options: ["Big", "Small", "Hot"] },
      { prompt: "Tap small.", answer: "Small", options: ["Small", "Big", "Run"] },
      { prompt: "Tap up.", answer: "Up", options: ["Up", "Down", "Sleep"] }
    ]
  },
  {
    id: "Lesson 129",
    tab: "129 See",
    title: "I Can See",
    coreSentence: "I can see.",
    targetWords: ["see", "eyes", "picture"],
    parentNotes: ["观察主题只用无字图画卡，不做视力测试。", "可以让孩子指一指看到的星星或颜色。", "不表现强光直射眼睛、复杂文字或屏幕长时间观看。"],
    panels: buildPanels("lesson129", [
      ["I see a picture.", "A wordless picture card sits on a low table."],
      ["My eyes.", "Nia points gently to her eyes."],
      ["I can see.", "Nia looks at the picture card."],
      ["I see a star.", "Lumo points to a star picture."],
      ["Bobo can see.", "Bobo looks at the card."],
      ["Look and see.", "The friends look at the card together."],
      ["Your turn.", "The picture card waits for the child."],
      ["I can see.", "The friends wave beside the picture card."]
    ]),
    quizzes: [
      { prompt: "Tap eyes.", answer: "Eyes", options: ["Eyes", "Hands", "Feet"] },
      { prompt: "Tap picture.", answer: "Picture", options: ["Picture", "Cup", "Bag"] },
      { prompt: "Tap see.", answer: "See", options: ["See", "Hear", "Sleep"] }
    ]
  },
  {
    id: "Lesson 130",
    tab: "130 Hear",
    title: "I Can Hear",
    coreSentence: "I can hear.",
    targetWords: ["hear", "ears", "sound"],
    parentNotes: ["听觉主题只表现轻柔声音，不靠近耳朵。", "可以轻轻摇铃或拍手一次。", "不表现高分贝、尖叫、贴耳播放或持续噪音。"],
    panels: buildPanels("lesson130", [
      ["I hear a sound.", "A small bell sits on a soft mat."],
      ["My ears.", "Nia points gently to her ears."],
      ["I can hear.", "Lumo shakes the bell softly."],
      ["Soft sound.", "Bobo shows a wordless sound wave icon."],
      ["I hear the bell.", "Nia listens to the bell."],
      ["Quiet, please.", "The bell rests quietly on the mat."],
      ["Your turn.", "The bell waits for a gentle sound."],
      ["I can hear.", "The friends wave beside the bell."]
    ]),
    quizzes: [
      { prompt: "Tap ears.", answer: "Ears", options: ["Ears", "Eyes", "Hands"] },
      { prompt: "Tap sound.", answer: "Sound", options: ["Sound", "Picture", "Moon"] },
      { prompt: "Tap hear.", answer: "Hear", options: ["Hear", "See", "Run"] }
    ]
  },
  {
    id: "Lesson 131",
    tab: "131 Touch",
    title: "Soft Touch",
    coreSentence: "It is soft.",
    targetWords: ["touch", "soft", "pillow"],
    parentNotes: ["触摸主题只使用柔软大物件，动作轻轻做。", "可以摸摸枕头或软布说 `soft`。", "不表现尖锐、热、脏、未知材质或强迫触摸。"],
    panels: buildPanels("lesson131", [
      ["I see a pillow.", "A soft pillow sits on the rug."],
      ["Touch gently.", "Nia reaches out gently."],
      ["It is soft.", "Nia touches the pillow softly."],
      ["Soft pillow.", "Lumo touches the soft pillow."],
      ["Soft, soft.", "Bobo smiles beside the pillow."],
      ["Touch gently.", "The pillow rests in the middle of the rug."],
      ["Your turn.", "The pillow waits for the child."],
      ["It is soft.", "The friends wave beside the pillow."]
    ]),
    quizzes: [
      { prompt: "Tap pillow.", answer: "Pillow", options: ["Pillow", "Block", "Cup"] },
      { prompt: "Tap soft.", answer: "Soft", options: ["Soft", "Hard", "Fast"] },
      { prompt: "Tap touch.", answer: "Touch", options: ["Touch", "Throw", "Run"] }
    ]
  },
  {
    id: "Lesson 132",
    tab: "132 Sense",
    title: "Senses Review",
    coreSentence: "I can sense.",
    targetWords: ["see", "hear", "touch", "soft"],
    parentNotes: ["复习课只做看、听、轻触三类低刺激体验。", "孩子可以任选一个物品指一指或摸一摸。", "不表现强光、高分贝、尖锐材质或卫生风险。"],
    panels: buildPanels("lesson132", [
      ["I can sense.", "A picture card, bell, and pillow sit together."],
      ["I can see.", "Nia looks at the picture card."],
      ["I can hear.", "Lumo shakes the bell softly."],
      ["I can touch.", "Bobo touches the pillow gently."],
      ["It is soft.", "Nia points to the soft pillow."],
      ["See, hear, touch.", "Wordless icons show eyes, ears, and hand."],
      ["Pick one.", "The sense objects wait for the child."],
      ["I can sense.", "The friends wave beside the objects."]
    ]),
    quizzes: [
      { prompt: "Tap see.", answer: "See", options: ["See", "Sleep", "Hot"] },
      { prompt: "Tap hear.", answer: "Hear", options: ["Hear", "Run", "Sharp"] },
      { prompt: "Tap touch.", answer: "Touch", options: ["Touch", "Throw", "Dark"] }
    ]
  },
  {
    id: "Lesson 133",
    tab: "133 Sit",
    title: "Sit Down",
    coreSentence: "Sit down.",
    targetWords: ["sit", "down", "rug"],
    parentNotes: ["围坐主题只表现自愿坐在软地毯上，不强迫久坐。", "可以坐一下再站起来，保持轻松。", "不表现惩罚坐、约束身体、拥挤或高椅跌落。"],
    panels: buildPanels("lesson133", [
      ["I see a rug.", "A round star rug sits in the room."],
      ["Stand here.", "Nia stands beside the rug."],
      ["Sit down.", "Nia sits down on the rug."],
      ["Lumo sits down.", "Lumo sits beside Nia."],
      ["Sit together.", "Bobo sits with the friends."],
      ["Ready.", "The friends sit calmly on the rug."],
      ["Your turn.", "A space on the rug waits for the child."],
      ["Sit down.", "The friends wave while sitting."]
    ]),
    quizzes: [
      { prompt: "Tap rug.", answer: "Rug", options: ["Rug", "Cup", "Moon"] },
      { prompt: "Tap sit.", answer: "Sit", options: ["Sit", "Run", "Jump"] },
      { prompt: "Tap down.", answer: "Down", options: ["Down", "Up", "Hot"] }
    ]
  },
  {
    id: "Lesson 134",
    tab: "134 Listen",
    title: "Listen Please",
    coreSentence: "Listen, please.",
    targetWords: ["listen", "please", "quiet"],
    parentNotes: ["倾听主题保持温和请求，不做强制安静。", "可以听一声轻铃后说 `listen`。", "不表现斥责、罚坐、高分贝或长时间安静要求。"],
    panels: buildPanels("lesson134", [
      ["Sit down.", "The friends sit on the rug."],
      ["Listen, please.", "Nia makes a gentle listening gesture."],
      ["Quiet, please.", "Lumo glows softly."],
      ["I hear a sound.", "Bobo shows a soft sound icon."],
      ["We listen.", "The friends look and listen."],
      ["Thank you.", "Nia smiles gently."],
      ["Your turn.", "A quiet listening icon waits for the child."],
      ["Listen, please.", "The friends wave from the rug."]
    ]),
    quizzes: [
      { prompt: "Tap listen.", answer: "Listen", options: ["Listen", "Run", "Throw"] },
      { prompt: "Tap please.", answer: "Please", options: ["Please", "Fast", "Hot"] },
      { prompt: "Tap quiet.", answer: "Quiet", options: ["Quiet", "Loud", "Sharp"] }
    ]
  },
  {
    id: "Lesson 135",
    tab: "135 Hand",
    title: "Raise Your Hand",
    coreSentence: "Raise your hand.",
    targetWords: ["raise", "hand", "turn"],
    parentNotes: ["举手主题只表现轮流表达，不做课堂压力。", "孩子可以举一下手说 `my turn`。", "不表现抢答竞争、责备、长时间举手或拥挤队列。"],
    panels: buildPanels("lesson135", [
      ["My turn?", "Nia sits on the rug and looks at the friends."],
      ["Raise your hand.", "Nia raises one hand."],
      ["Hand up.", "Lumo raises one small hand."],
      ["Wait, please.", "Bobo waits calmly."],
      ["Your turn.", "Nia gives Bobo a turn."],
      ["Raise hand.", "Bobo raises one hand."],
      ["Your turn.", "A wordless raised hand icon waits for the child."],
      ["Raise your hand.", "The friends wave after taking turns."]
    ]),
    quizzes: [
      { prompt: "Tap hand.", answer: "Hand", options: ["Hand", "Foot", "Cup"] },
      { prompt: "Tap raise.", answer: "Raise", options: ["Raise", "Throw", "Sleep"] },
      { prompt: "Tap turn.", answer: "Turn", options: ["Turn", "Push", "Hot"] }
    ]
  },
  {
    id: "Lesson 136",
    tab: "136 Circle",
    title: "Circle Review",
    coreSentence: "Circle time.",
    targetWords: ["sit", "listen", "hand", "turn"],
    parentNotes: ["复习课只做温和围坐活动，不训练正式课堂纪律。", "可以任选一个动作：坐下、听、举手或轮流。", "不表现惩罚、责备、排队拥挤或强制安静。"],
    panels: buildPanels("lesson136", [
      ["Circle time.", "The friends sit in a small circle on the rug."],
      ["Sit down.", "Nia sits down on the rug."],
      ["Listen, please.", "Lumo makes a listening gesture."],
      ["Raise your hand.", "Bobo raises one hand."],
      ["Your turn.", "Nia gives Bobo a turn."],
      ["Sit, listen, hand, turn.", "Wordless icons show sitting, listening, hand, and turn."],
      ["Pick one.", "A space on the rug waits for the child."],
      ["Circle time.", "The friends wave from the circle."]
    ]),
    quizzes: [
      { prompt: "Tap sit.", answer: "Sit", options: ["Sit", "Run", "Hot"] },
      { prompt: "Tap listen.", answer: "Listen", options: ["Listen", "Throw", "Sleep"] },
      { prompt: "Tap hand.", answer: "Hand", options: ["Hand", "Foot", "Sharp"] }
    ]
  },
  {
    id: "Lesson 137",
    tab: "137 Green",
    title: "Green Leaf",
    coreSentence: "I see green.",
    targetWords: ["green", "leaf", "tree"],
    parentNotes: ["自然颜色只表现观察和指认，不摘真实植物。", "可以指绿色物品说 `green`。", "不表现误食植物、尖刺、泥土入口或过敏刺激。"],
    panels: buildPanels("lesson137", [
      ["I see green.", "A large green leaf sits on the rug."],
      ["Green leaf.", "Nia points to the green leaf."],
      ["I see a tree.", "Lumo points to a small potted tree."],
      ["It is green.", "Bobo looks at the green leaf."],
      ["Leaf in.", "The leaf goes into a low basket."],
      ["Green, green.", "The leaf rests on the rug again."],
      ["Your turn.", "The green leaf waits for the child."],
      ["I see green.", "The friends wave beside the green leaf."]
    ]),
    quizzes: [
      { prompt: "Tap green.", answer: "Green", options: ["Green", "Red", "Blue"] },
      { prompt: "Tap leaf.", answer: "Leaf", options: ["Leaf", "Cup", "Ball"] },
      { prompt: "Tap tree.", answer: "Tree", options: ["Tree", "Moon", "Shoe"] }
    ]
  },
  {
    id: "Lesson 138",
    tab: "138 Orange",
    title: "Orange Pumpkin",
    coreSentence: "It is orange.",
    targetWords: ["orange", "pumpkin", "round"],
    parentNotes: ["南瓜使用大号软玩具，不表现真实切开的食物。", "可以指橙色物品说 `orange`。", "不表现刀具、硬小块食物、误食或节日恐怖元素。"],
    panels: buildPanels("lesson138", [
      ["It is orange.", "A large soft orange pumpkin toy sits on the rug."],
      ["Orange pumpkin.", "Nia points to the orange pumpkin."],
      ["It is round.", "Lumo shows a round shape."],
      ["Soft pumpkin.", "Bobo gently touches the soft pumpkin."],
      ["Roll, roll.", "The pumpkin rolls gently on the rug."],
      ["Stop.", "The pumpkin stops in front of Nia."],
      ["Your turn.", "The orange pumpkin waits for the child."],
      ["It is orange.", "The friends wave beside the pumpkin."]
    ]),
    quizzes: [
      { prompt: "Tap orange.", answer: "Orange", options: ["Orange", "Green", "Purple"] },
      { prompt: "Tap pumpkin.", answer: "Pumpkin", options: ["Pumpkin", "Book", "Cup"] },
      { prompt: "Tap round.", answer: "Round", options: ["Round", "Square", "Long"] }
    ]
  },
  {
    id: "Lesson 139",
    tab: "139 Purple",
    title: "Purple Flower",
    coreSentence: "I see purple.",
    targetWords: ["purple", "flower", "petal"],
    parentNotes: ["花朵主题使用大号纸花或盆栽观察，不摘花。", "可以指紫色物品说 `purple`。", "不表现蜜蜂、尖刺、误食植物或花粉刺激。"],
    panels: buildPanels("lesson139", [
      ["I see purple.", "A large purple paper flower sits beside a pot."],
      ["Purple flower.", "Nia points to the purple flower."],
      ["A petal.", "Lumo points to one large petal."],
      ["It is purple.", "Bobo looks at the purple flower."],
      ["Hello, flower.", "Nia waves gently to the flower."],
      ["Flower here.", "The flower sits on the rug."],
      ["Your turn.", "The purple flower waits for the child."],
      ["I see purple.", "The friends wave beside the flower."]
    ]),
    quizzes: [
      { prompt: "Tap purple.", answer: "Purple", options: ["Purple", "Orange", "Green"] },
      { prompt: "Tap flower.", answer: "Flower", options: ["Flower", "Chair", "Ball"] },
      { prompt: "Tap petal.", answer: "Petal", options: ["Petal", "Cup", "Shoe"] }
    ]
  },
  {
    id: "Lesson 140",
    tab: "140 Colors",
    title: "Color Review",
    coreSentence: "Find colors.",
    targetWords: ["green", "orange", "purple", "color"],
    parentNotes: ["复习课只做颜色指认，不加入读写。", "孩子可以任选一个颜色词说。", "不表现误食、尖刺、蜜蜂、刀具或画内文字。"],
    panels: buildPanels("lesson140", [
      ["Find colors.", "A green leaf, orange pumpkin, and purple flower sit together."],
      ["Green leaf.", "Nia points to the green leaf."],
      ["Orange pumpkin.", "Lumo points to the orange pumpkin."],
      ["Purple flower.", "Bobo points to the purple flower."],
      ["Green, orange, purple.", "The three color objects glow one by one."],
      ["I see colors.", "Three wordless color icons glow."],
      ["Pick one.", "The color objects wait for the child."],
      ["Find colors.", "The friends wave beside the color objects."]
    ]),
    quizzes: [
      { prompt: "Tap green.", answer: "Green", options: ["Green", "Red", "Blue"] },
      { prompt: "Tap orange.", answer: "Orange", options: ["Orange", "Purple", "Yellow"] },
      { prompt: "Tap purple.", answer: "Purple", options: ["Purple", "Green", "White"] }
    ]
  },
  {
    id: "Lesson 141",
    tab: "141 Round",
    title: "Round Ball",
    coreSentence: "It is round.",
    targetWords: ["round", "ball", "roll"],
    parentNotes: ["形状动作只表现轻轻滚软球，不投掷。", "可以轻轻滚球说 `round`。", "不表现砸到人、快速滚动、硬球或竞争游戏。"],
    panels: buildPanels("lesson141", [
      ["It is round.", "A round soft ball sits on the rug."],
      ["Round ball.", "Nia points to the round ball."],
      ["Round, round.", "Lumo makes a round shape with hands."],
      ["Roll the ball.", "Bobo rolls the ball gently."],
      ["Stop.", "The ball stops in front of Nia."],
      ["Ball here.", "Nia places the ball in the middle."],
      ["Your turn.", "The round ball waits for the child."],
      ["It is round.", "The friends wave beside the round ball."]
    ]),
    quizzes: [
      { prompt: "Tap round.", answer: "Round", options: ["Round", "Square", "Triangle"] },
      { prompt: "Tap ball.", answer: "Ball", options: ["Ball", "Block", "Leaf"] },
      { prompt: "Tap roll.", answer: "Roll", options: ["Roll", "Throw", "Sleep"] }
    ]
  },
  {
    id: "Lesson 142",
    tab: "142 Square",
    title: "Square Block",
    coreSentence: "It is square.",
    targetWords: ["square", "block", "side"],
    parentNotes: ["方形主题使用大号软积木，不强调抽象几何术语。", "可以摸摸方块边缘说 `square`。", "不表现尖角硬物、砸落或小积木入口。"],
    panels: buildPanels("lesson142", [
      ["It is square.", "A large square soft block sits on the rug."],
      ["Square block.", "Nia points to the square block."],
      ["A side.", "Lumo points to one side of the block."],
      ["Turn the block.", "Bobo turns the soft block gently."],
      ["Square here.", "The square block rests on the rug."],
      ["Not round.", "Nia compares it with a round ball."],
      ["Your turn.", "The square block waits for the child."],
      ["It is square.", "The friends wave beside the square block."]
    ]),
    quizzes: [
      { prompt: "Tap square.", answer: "Square", options: ["Square", "Round", "Triangle"] },
      { prompt: "Tap block.", answer: "Block", options: ["Block", "Ball", "Flower"] },
      { prompt: "Tap side.", answer: "Side", options: ["Side", "Moon", "Cup"] }
    ]
  },
  {
    id: "Lesson 143",
    tab: "143 Triangle",
    title: "Triangle Roof",
    coreSentence: "A triangle roof.",
    targetWords: ["triangle", "roof", "top"],
    parentNotes: ["三角形使用大号玩具屋顶，不使用尖锐硬片。", "可以指屋顶说 `triangle`。", "不表现爬屋顶、高处、尖锐边角或画内文字。"],
    panels: buildPanels("lesson143", [
      ["A triangle roof.", "A toy house has a triangle roof."],
      ["Triangle.", "Nia points to the triangle roof."],
      ["Top.", "Lumo points to the top of the roof."],
      ["House.", "Bobo points to the toy house."],
      ["Triangle and square.", "The triangle roof and square block sit together."],
      ["Triangle and round.", "The triangle roof sits beside a round ball."],
      ["Your turn.", "The triangle roof waits for the child."],
      ["A triangle roof.", "The friends wave beside the toy house."]
    ]),
    quizzes: [
      { prompt: "Tap triangle.", answer: "Triangle", options: ["Triangle", "Square", "Round"] },
      { prompt: "Tap roof.", answer: "Roof", options: ["Roof", "Cup", "Leaf"] },
      { prompt: "Tap top.", answer: "Top", options: ["Top", "Down", "Sleep"] }
    ]
  },
  {
    id: "Lesson 144",
    tab: "144 Shapes",
    title: "Shape Review",
    coreSentence: "Find shapes.",
    targetWords: ["round", "square", "triangle", "shape"],
    parentNotes: ["复习课只用大号安全形状物，不做书面识别。", "孩子可以任选一个形状词说。", "不表现尖锐硬片、小零件或复杂拼图。"],
    panels: buildPanels("lesson144", [
      ["Find shapes.", "A round ball, square block, and triangle roof sit together."],
      ["Round ball.", "Nia points to the round ball."],
      ["Square block.", "Lumo points to the square block."],
      ["Triangle roof.", "Bobo points to the triangle roof."],
      ["Round, square, triangle.", "The three shapes glow one by one."],
      ["I see shapes.", "Three wordless shape icons glow."],
      ["Pick one.", "The shape objects wait for the child."],
      ["Find shapes.", "The friends wave beside the shape objects."]
    ]),
    quizzes: [
      { prompt: "Tap round.", answer: "Round", options: ["Round", "Square", "Triangle"] },
      { prompt: "Tap square.", answer: "Square", options: ["Square", "Round", "Triangle"] },
      { prompt: "Tap triangle.", answer: "Triangle", options: ["Triangle", "Round", "Square"] }
    ]
  },
  {
    id: "Lesson 145",
    tab: "145 Bag",
    title: "My Little Bag",
    coreSentence: "I have a bag.",
    targetWords: ["bag", "have", "carry"],
    parentNotes: ["外出收纳只表现轻软小包和室内准备，不真的出门。", "可以指自己的小包说 `bag`。", "不表现重包、勒绳、陌生环境或真实道路。"],
    panels: buildPanels("lesson145", [
      ["I see a bag.", "A small soft bag sits beside a low chair."],
      ["I have a bag.", "Nia points to the soft bag."],
      ["Carry the bag.", "Lumo carries the soft bag gently."],
      ["Soft bag.", "Bobo looks at the soft bag."],
      ["Bag here.", "The bag rests on the rug."],
      ["Here you are.", "Nia offers the bag to Lumo."],
      ["Your turn.", "The soft bag waits for the child."],
      ["I have a bag.", "The friends wave beside the bag."]
    ]),
    quizzes: [
      { prompt: "Tap bag.", answer: "Bag", options: ["Bag", "Ball", "Flower"] },
      { prompt: "Tap have.", answer: "Have", options: ["Have", "Throw", "Sleep"] },
      { prompt: "Tap carry.", answer: "Carry", options: ["Carry", "Run", "Hot"] }
    ]
  },
  {
    id: "Lesson 146",
    tab: "146 Pack",
    title: "Pack a Toy",
    coreSentence: "Pack a toy.",
    targetWords: ["pack", "toy", "bag"],
    parentNotes: ["收纳主题只用大号软玩具和轻软小包。", "可以把一个大玩具放进袋子说 `pack`。", "不表现小零件、塑料袋套头、重物或拉链夹手。"],
    panels: buildPanels("lesson146", [
      ["I see a toy.", "A large soft toy and soft bag sit on the rug."],
      ["Open the bag.", "Nia opens the soft bag."],
      ["A toy.", "Lumo holds the large soft toy."],
      ["Pack a toy.", "Nia packs the toy into the bag."],
      ["Toy in.", "Bobo points to the toy in the bag."],
      ["Close the bag.", "The soft bag closes gently."],
      ["Your turn.", "The toy and bag wait for the child."],
      ["Pack a toy.", "The friends wave beside the packed bag."]
    ]),
    quizzes: [
      { prompt: "Tap pack.", answer: "Pack", options: ["Pack", "Throw", "Sleep"] },
      { prompt: "Tap toy.", answer: "Toy", options: ["Toy", "Cup", "Moon"] },
      { prompt: "Tap bag.", answer: "Bag", options: ["Bag", "Leaf", "Block"] }
    ]
  },
  {
    id: "Lesson 147",
    tab: "147 Close",
    title: "Close the Bag",
    coreSentence: "Close the bag.",
    targetWords: ["close", "bag", "ready"],
    parentNotes: ["收纳动作只表现轻轻打开和合上软包。", "可以把大玩具放进包里再轻轻合上。", "不表现拉链夹手、勒绳、塑料袋套头或重物。"],
    panels: buildPanels("lesson147", [
      ["Close the bag.", "Close the Bag panel 1: Close the bag."],
      ["Open the bag.", "Close the Bag panel 2: Open the bag."],
      ["Pack a toy.", "Close the Bag panel 3: Pack a toy."],
      ["Close the bag.", "Close the Bag panel 4: Close the bag."],
      ["Ready.", "Close the Bag panel 5: Ready."],
      ["Bag is ready.", "Close the Bag panel 6: Bag is ready."],
      ["Your turn.", "Close the Bag panel 7: Your turn."],
      ["Close the bag.", "Close the Bag panel 8: Close the bag."]
    ]),
    quizzes: [
      { prompt: "Tap close.", answer: "Close", options: ["Close", "Run", "Hot"] },
      { prompt: "Tap bag.", answer: "Bag", options: ["Bag", "Sleep", "Throw"] },
      { prompt: "Tap ready.", answer: "Ready", options: ["Ready", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 148",
    tab: "148 Bag Review",
    title: "Bag Review",
    coreSentence: "Ready to go.",
    targetWords: ["bag", "toy", "ready", "go"],
    parentNotes: ["复习课只表现室内准备，不进入真实道路。", "孩子可以任选 bag、toy 或 ready 跟读。", "不表现陌生环境、交通、重包或奔跑出门。"],
    panels: buildPanels("lesson148", [
      ["Ready to go.", "Bag Review panel 1: Ready to go."],
      ["I have a bag.", "Bag Review panel 2: I have a bag."],
      ["Pack a toy.", "Bag Review panel 3: Pack a toy."],
      ["Close the bag.", "Bag Review panel 4: Close the bag."],
      ["Carry the bag.", "Bag Review panel 5: Carry the bag."],
      ["Bag, toy, ready.", "Bag Review panel 6: Bag, toy, ready."],
      ["Pick one.", "Bag Review panel 7: Pick one."],
      ["Ready to go.", "Bag Review panel 8: Ready to go."]
    ]),
    quizzes: [
      { prompt: "Tap bag.", answer: "Bag", options: ["Bag", "Run", "Hot"] },
      { prompt: "Tap toy.", answer: "Toy", options: ["Toy", "Sleep", "Throw"] },
      { prompt: "Tap ready.", answer: "Ready", options: ["Ready", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 149",
    tab: "149 Door",
    title: "At the Door",
    coreSentence: "At the door.",
    targetWords: ["door", "mat", "wait"],
    parentNotes: ["门口主题只表现室内门和门垫，不表现独自外出。", "可以指门或门垫说 `door`、`mat`。", "不表现夹手、跑出门、陌生人门外或真实道路。"],
    panels: buildPanels("lesson149", [
      ["At the door.", "At the Door panel 1: At the door."],
      ["I see the door.", "At the Door panel 2: I see the door."],
      ["Stand here.", "At the Door panel 3: Stand here."],
      ["Door mat.", "At the Door panel 4: Door mat."],
      ["Wait, please.", "At the Door panel 5: Wait, please."],
      ["Open the door.", "At the Door panel 6: Open the door."],
      ["Your turn.", "At the Door panel 7: Your turn."],
      ["At the door.", "At the Door panel 8: At the door."]
    ]),
    quizzes: [
      { prompt: "Tap door.", answer: "Door", options: ["Door", "Run", "Hot"] },
      { prompt: "Tap mat.", answer: "Mat", options: ["Mat", "Sleep", "Throw"] },
      { prompt: "Tap wait.", answer: "Wait", options: ["Wait", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 150",
    tab: "150 Map",
    title: "Take the Map",
    coreSentence: "Take the map.",
    targetWords: ["take", "map", "look"],
    parentNotes: ["地图主题使用无字图形卡，不表现真实定位信息。", "可以拿一张无字卡片说 `map`。", "不表现隐私地址、复杂文字、真实街道或迷路焦虑。"],
    panels: buildPanels("lesson150", [
      ["Take the map.", "Take the Map panel 1: Take the map."],
      ["I see a map.", "Take the Map panel 2: I see a map."],
      ["Look at the map.", "Take the Map panel 3: Look at the map."],
      ["Take the map.", "Take the Map panel 4: Take the map."],
      ["Map here.", "Take the Map panel 5: Map here."],
      ["Thank you.", "Take the Map panel 6: Thank you."],
      ["Your turn.", "Take the Map panel 7: Your turn."],
      ["Take the map.", "Take the Map panel 8: Take the map."]
    ]),
    quizzes: [
      { prompt: "Tap take.", answer: "Take", options: ["Take", "Run", "Hot"] },
      { prompt: "Tap map.", answer: "Map", options: ["Map", "Sleep", "Throw"] },
      { prompt: "Tap look.", answer: "Look", options: ["Look", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 151",
    tab: "151 Wave",
    title: "Wave Goodbye",
    coreSentence: "Bye, home.",
    targetWords: ["bye", "wave", "home"],
    parentNotes: ["告别主题只做温和挥手，不表现分离焦虑。", "可以对房间或玩偶挥手说 `bye`。", "不表现哭闹、独自离家、陌生环境或赶时间。"],
    panels: buildPanels("lesson151", [
      ["Bye, home.", "Wave Goodbye panel 1: Bye, home."],
      ["I wave goodbye.", "Wave Goodbye panel 2: I wave goodbye."],
      ["Bye, Nia.", "Wave Goodbye panel 3: Bye, Nia."],
      ["Bye, Bobo.", "Wave Goodbye panel 4: Bye, Bobo."],
      ["Wave, wave.", "Wave Goodbye panel 5: Wave, wave."],
      ["Goodbye.", "Wave Goodbye panel 6: Goodbye."],
      ["Your turn.", "Wave Goodbye panel 7: Your turn."],
      ["Bye, home.", "Wave Goodbye panel 8: Bye, home."]
    ]),
    quizzes: [
      { prompt: "Tap bye.", answer: "Bye", options: ["Bye", "Run", "Hot"] },
      { prompt: "Tap wave.", answer: "Wave", options: ["Wave", "Sleep", "Throw"] },
      { prompt: "Tap home.", answer: "Home", options: ["Home", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 152",
    tab: "152 Go Review",
    title: "Going Out Review",
    coreSentence: "Ready to go.",
    targetWords: ["door", "map", "wave", "ready"],
    parentNotes: ["复习课只表现室内准备流程。", "孩子可以任选 door、map 或 wave 做动作。", "不表现真实交通、独自出门、拥挤或陌生人。"],
    panels: buildPanels("lesson152", [
      ["Ready to go.", "Going Out Review panel 1: Ready to go."],
      ["At the door.", "Going Out Review panel 2: At the door."],
      ["Take the map.", "Going Out Review panel 3: Take the map."],
      ["Wave goodbye.", "Going Out Review panel 4: Wave goodbye."],
      ["Carry the bag.", "Going Out Review panel 5: Carry the bag."],
      ["Door, map, wave.", "Going Out Review panel 6: Door, map, wave."],
      ["Pick one.", "Going Out Review panel 7: Pick one."],
      ["Ready to go.", "Going Out Review panel 8: Ready to go."]
    ]),
    quizzes: [
      { prompt: "Tap door.", answer: "Door", options: ["Door", "Run", "Hot"] },
      { prompt: "Tap map.", answer: "Map", options: ["Map", "Sleep", "Throw"] },
      { prompt: "Tap wave.", answer: "Wave", options: ["Wave", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 153",
    tab: "153 Card",
    title: "Make a Card",
    coreSentence: "Make a card.",
    targetWords: ["make", "card", "star"],
    parentNotes: ["卡片主题使用预制无字大卡，不表现剪刀或胶水。", "可以拿一张无字卡说 `card`。", "不表现可读文字、剪刀、胶水、订书钉或小纸片入口。"],
    panels: buildPanels("lesson153", [
      ["Make a card.", "Make a Card panel 1: Make a card."],
      ["I see a card.", "Make a Card panel 2: I see a card."],
      ["A star card.", "Make a Card panel 3: A star card."],
      ["Make a card.", "Make a Card panel 4: Make a card."],
      ["Good job.", "Make a Card panel 5: Good job."],
      ["Card here.", "Make a Card panel 6: Card here."],
      ["Your turn.", "Make a Card panel 7: Your turn."],
      ["Make a card.", "Make a Card panel 8: Make a card."]
    ]),
    quizzes: [
      { prompt: "Tap make.", answer: "Make", options: ["Make", "Run", "Hot"] },
      { prompt: "Tap card.", answer: "Card", options: ["Card", "Sleep", "Throw"] },
      { prompt: "Tap star.", answer: "Star", options: ["Star", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 154",
    tab: "154 Give Card",
    title: "Give a Card",
    coreSentence: "Give a card.",
    targetWords: ["give", "card", "friend"],
    parentNotes: ["递卡片只表现温和分享，不表现礼物攀比。", "可以把无字卡递给玩偶说 `Here you are.`", "不表现商业礼物、可读文字、强迫分享或争抢。"],
    panels: buildPanels("lesson154", [
      ["Give a card.", "Give a Card panel 1: Give a card."],
      ["A card for you.", "Give a Card panel 2: A card for you."],
      ["Here you are.", "Give a Card panel 3: Here you are."],
      ["Thank you.", "Give a Card panel 4: Thank you."],
      ["A kind friend.", "Give a Card panel 5: A kind friend."],
      ["Give a card.", "Give a Card panel 6: Give a card."],
      ["Your turn.", "Give a Card panel 7: Your turn."],
      ["Give a card.", "Give a Card panel 8: Give a card."]
    ]),
    quizzes: [
      { prompt: "Tap give.", answer: "Give", options: ["Give", "Run", "Hot"] },
      { prompt: "Tap card.", answer: "Card", options: ["Card", "Sleep", "Throw"] },
      { prompt: "Tap friend.", answer: "Friend", options: ["Friend", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 155",
    tab: "155 Smile",
    title: "Smile Together",
    coreSentence: "Smile together.",
    targetWords: ["smile", "friend", "together"],
    parentNotes: ["微笑主题只表现温和表情，不要求孩子必须开心。", "可以对玩偶微笑或说 `smile`。", "不表现强迫表情、嘲笑、输赢或强烈情绪。"],
    panels: buildPanels("lesson155", [
      ["Smile together.", "Smile Together panel 1: Smile together."],
      ["I see a smile.", "Smile Together panel 2: I see a smile."],
      ["A friend smiles.", "Smile Together panel 3: A friend smiles."],
      ["Smile, Bobo.", "Smile Together panel 4: Smile, Bobo."],
      ["Together.", "Smile Together panel 5: Together."],
      ["Good job.", "Smile Together panel 6: Good job."],
      ["Your turn.", "Smile Together panel 7: Your turn."],
      ["Smile together.", "Smile Together panel 8: Smile together."]
    ]),
    quizzes: [
      { prompt: "Tap smile.", answer: "Smile", options: ["Smile", "Run", "Hot"] },
      { prompt: "Tap friend.", answer: "Friend", options: ["Friend", "Sleep", "Throw"] },
      { prompt: "Tap together.", answer: "Together", options: ["Together", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 156",
    tab: "156 Friend",
    title: "Friend Day Review",
    coreSentence: "Friend day.",
    targetWords: ["make", "give", "smile", "friend"],
    parentNotes: ["复习课只表现做卡、递卡和微笑。", "孩子可以任选 make、give 或 smile 跟读。", "不表现文字卡片、竞争礼物、争抢或强迫社交。"],
    panels: buildPanels("lesson156", [
      ["Friend day.", "Friend Day Review panel 1: Friend day."],
      ["Make a card.", "Friend Day Review panel 2: Make a card."],
      ["Give a card.", "Friend Day Review panel 3: Give a card."],
      ["Smile together.", "Friend Day Review panel 4: Smile together."],
      ["Thank you, friend.", "Friend Day Review panel 5: Thank you, friend."],
      ["Make, give, smile.", "Friend Day Review panel 6: Make, give, smile."],
      ["Pick one.", "Friend Day Review panel 7: Pick one."],
      ["Friend day.", "Friend Day Review panel 8: Friend day."]
    ]),
    quizzes: [
      { prompt: "Tap make.", answer: "Make", options: ["Make", "Run", "Hot"] },
      { prompt: "Tap give.", answer: "Give", options: ["Give", "Sleep", "Throw"] },
      { prompt: "Tap smile.", answer: "Smile", options: ["Smile", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 157",
    tab: "157 Fold",
    title: "Fold a Shirt",
    coreSentence: "Fold a shirt.",
    targetWords: ["fold", "shirt", "neat"],
    parentNotes: ["衣物整理只表现柔软衣物和简单对折。", "可以折一件小衣服说 `fold`。", "不表现熨斗、尖锐衣架、隐私换衣或责备。"],
    panels: buildPanels("lesson157", [
      ["Fold a shirt.", "Fold a Shirt panel 1: Fold a shirt."],
      ["I see a shirt.", "Fold a Shirt panel 2: I see a shirt."],
      ["Fold, fold.", "Fold a Shirt panel 3: Fold, fold."],
      ["Neat shirt.", "Fold a Shirt panel 4: Neat shirt."],
      ["Good job.", "Fold a Shirt panel 5: Good job."],
      ["Shirt here.", "Fold a Shirt panel 6: Shirt here."],
      ["Your turn.", "Fold a Shirt panel 7: Your turn."],
      ["Fold a shirt.", "Fold a Shirt panel 8: Fold a shirt."]
    ]),
    quizzes: [
      { prompt: "Tap fold.", answer: "Fold", options: ["Fold", "Run", "Hot"] },
      { prompt: "Tap shirt.", answer: "Shirt", options: ["Shirt", "Sleep", "Throw"] },
      { prompt: "Tap neat.", answer: "Neat", options: ["Neat", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 158",
    tab: "158 Basket",
    title: "Put in Basket",
    coreSentence: "Put it in.",
    targetWords: ["put in", "basket", "clothes"],
    parentNotes: ["衣物篮主题只用低矮篮子和柔软衣物。", "可以把衣服放进篮子说 `in`。", "不表现高处投掷、重篮子、夹手或清洁剂。"],
    panels: buildPanels("lesson158", [
      ["Put it in.", "Put in Basket panel 1: Put it in."],
      ["I see a basket.", "Put in Basket panel 2: I see a basket."],
      ["Clothes in.", "Put in Basket panel 3: Clothes in."],
      ["Put it in.", "Put in Basket panel 4: Put it in."],
      ["Thank you.", "Put in Basket panel 5: Thank you."],
      ["Basket here.", "Put in Basket panel 6: Basket here."],
      ["Your turn.", "Put in Basket panel 7: Your turn."],
      ["Put it in.", "Put in Basket panel 8: Put it in."]
    ]),
    quizzes: [
      { prompt: "Tap put in.", answer: "Put In", options: ["Put In", "Run", "Hot"] },
      { prompt: "Tap basket.", answer: "Basket", options: ["Basket", "Sleep", "Throw"] },
      { prompt: "Tap clothes.", answer: "Clothes", options: ["Clothes", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 159",
    tab: "159 Socks",
    title: "Match Socks",
    coreSentence: "Match socks.",
    targetWords: ["match", "socks", "pair"],
    parentNotes: ["袜子配对只用大号干净袜子，不做速度比赛。", "可以把两只袜子放一起说 `pair`。", "不表现脏衣物、责备、细小夹子或奔跑。"],
    panels: buildPanels("lesson159", [
      ["Match socks.", "Match Socks panel 1: Match socks."],
      ["I see socks.", "Match Socks panel 2: I see socks."],
      ["One sock.", "Match Socks panel 3: One sock."],
      ["Two socks.", "Match Socks panel 4: Two socks."],
      ["A pair.", "Match Socks panel 5: A pair."],
      ["Match socks.", "Match Socks panel 6: Match socks."],
      ["Your turn.", "Match Socks panel 7: Your turn."],
      ["Match socks.", "Match Socks panel 8: Match socks."]
    ]),
    quizzes: [
      { prompt: "Tap match.", answer: "Match", options: ["Match", "Run", "Hot"] },
      { prompt: "Tap socks.", answer: "Socks", options: ["Socks", "Sleep", "Throw"] },
      { prompt: "Tap pair.", answer: "Pair", options: ["Pair", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 160",
    tab: "160 Laundry",
    title: "Laundry Review",
    coreSentence: "Clothes away.",
    targetWords: ["fold", "basket", "socks", "away"],
    parentNotes: ["复习课只表现轻量衣物整理。", "孩子可以任选折衣、放篮子或配袜子。", "不表现清洁剂、电器、高处收纳或责备。"],
    panels: buildPanels("lesson160", [
      ["Clothes away.", "Laundry Review panel 1: Clothes away."],
      ["Fold a shirt.", "Laundry Review panel 2: Fold a shirt."],
      ["Put it in.", "Laundry Review panel 3: Put it in."],
      ["Match socks.", "Laundry Review panel 4: Match socks."],
      ["Good job.", "Laundry Review panel 5: Good job."],
      ["Fold, basket, socks.", "Laundry Review panel 6: Fold, basket, socks."],
      ["Pick one.", "Laundry Review panel 7: Pick one."],
      ["Clothes away.", "Laundry Review panel 8: Clothes away."]
    ]),
    quizzes: [
      { prompt: "Tap fold.", answer: "Fold", options: ["Fold", "Run", "Hot"] },
      { prompt: "Tap basket.", answer: "Basket", options: ["Basket", "Sleep", "Throw"] },
      { prompt: "Tap socks.", answer: "Socks", options: ["Socks", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 161",
    tab: "161 First",
    title: "First Card",
    coreSentence: "First card.",
    targetWords: ["first", "card", "start"],
    parentNotes: ["顺序主题只用无字故事卡，不做阅读测试。", "可以指第一张卡说 `first`。", "不表现文字、复杂规则、输赢或压力测验。"],
    panels: buildPanels("lesson161", [
      ["First card.", "First Card panel 1: First card."],
      ["I see a card.", "First Card panel 2: I see a card."],
      ["Start here.", "First Card panel 3: Start here."],
      ["First card.", "First Card panel 4: First card."],
      ["Look at it.", "First Card panel 5: Look at it."],
      ["Card here.", "First Card panel 6: Card here."],
      ["Your turn.", "First Card panel 7: Your turn."],
      ["First card.", "First Card panel 8: First card."]
    ]),
    quizzes: [
      { prompt: "Tap first.", answer: "First", options: ["First", "Run", "Hot"] },
      { prompt: "Tap card.", answer: "Card", options: ["Card", "Sleep", "Throw"] },
      { prompt: "Tap start.", answer: "Start", options: ["Start", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 162",
    tab: "162 Next",
    title: "Next Card",
    coreSentence: "Next card.",
    targetWords: ["next", "card", "turn"],
    parentNotes: ["下一张卡只做顺序感知，不要求讲完整故事。", "可以指第二张卡说 `next`。", "不表现可读文字、复杂剧情、计时或抢答。"],
    panels: buildPanels("lesson162", [
      ["Next card.", "Next Card panel 1: Next card."],
      ["First card.", "Next Card panel 2: First card."],
      ["Next card.", "Next Card panel 3: Next card."],
      ["Turn the card.", "Next Card panel 4: Turn the card."],
      ["Look again.", "Next Card panel 5: Look again."],
      ["Card here.", "Next Card panel 6: Card here."],
      ["Your turn.", "Next Card panel 7: Your turn."],
      ["Next card.", "Next Card panel 8: Next card."]
    ]),
    quizzes: [
      { prompt: "Tap next.", answer: "Next", options: ["Next", "Run", "Hot"] },
      { prompt: "Tap card.", answer: "Card", options: ["Card", "Sleep", "Throw"] },
      { prompt: "Tap turn.", answer: "Turn", options: ["Turn", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 163",
    tab: "163 Last",
    title: "Last Card",
    coreSentence: "Last card.",
    targetWords: ["last", "card", "end"],
    parentNotes: ["最后一张卡用于温和收束，不讲复杂剧情。", "可以指最后一张卡说 `last`。", "不表现文字、输赢、恐怖结尾或压力测验。"],
    panels: buildPanels("lesson163", [
      ["Last card.", "Last Card panel 1: Last card."],
      ["First card.", "Last Card panel 2: First card."],
      ["Next card.", "Last Card panel 3: Next card."],
      ["Last card.", "Last Card panel 4: Last card."],
      ["The end.", "Last Card panel 5: The end."],
      ["Good job.", "Last Card panel 6: Good job."],
      ["Your turn.", "Last Card panel 7: Your turn."],
      ["Last card.", "Last Card panel 8: Last card."]
    ]),
    quizzes: [
      { prompt: "Tap last.", answer: "Last", options: ["Last", "Run", "Hot"] },
      { prompt: "Tap card.", answer: "Card", options: ["Card", "Sleep", "Throw"] },
      { prompt: "Tap end.", answer: "End", options: ["End", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 164",
    tab: "164 Story",
    title: "Story Cards Review",
    coreSentence: "Tell a story.",
    targetWords: ["first", "next", "last", "story"],
    parentNotes: ["复习课只做无字图片排序，不要求孩子长句表达。", "孩子可以任选 first、next 或 last 跟读。", "不表现文字阅读、复杂情节、竞赛或评分。"],
    panels: buildPanels("lesson164", [
      ["Tell a story.", "Story Cards Review panel 1: Tell a story."],
      ["First card.", "Story Cards Review panel 2: First card."],
      ["Next card.", "Story Cards Review panel 3: Next card."],
      ["Last card.", "Story Cards Review panel 4: Last card."],
      ["The end.", "Story Cards Review panel 5: The end."],
      ["First, next, last.", "Story Cards Review panel 6: First, next, last."],
      ["Pick one.", "Story Cards Review panel 7: Pick one."],
      ["Tell a story.", "Story Cards Review panel 8: Tell a story."]
    ]),
    quizzes: [
      { prompt: "Tap first.", answer: "First", options: ["First", "Run", "Hot"] },
      { prompt: "Tap next.", answer: "Next", options: ["Next", "Sleep", "Throw"] },
      { prompt: "Tap last.", answer: "Last", options: ["Last", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 165",
    tab: "165 Wet",
    title: "Wet Cloth",
    coreSentence: "It is wet.",
    targetWords: ["wet", "cloth", "water"],
    parentNotes: ["湿布主题只用少量常温水和软布。", "可以指湿布说 `wet`，不要求真的触摸。", "不表现热水、电器进水、打翻滑倒或卫生风险。"],
    panels: buildPanels("lesson165", [
      ["It is wet.", "Wet Cloth panel 1: It is wet."],
      ["I see a cloth.", "Wet Cloth panel 2: I see a cloth."],
      ["Water here.", "Wet Cloth panel 3: Water here."],
      ["Wet cloth.", "Wet Cloth panel 4: Wet cloth."],
      ["Touch gently.", "Wet Cloth panel 5: Touch gently."],
      ["It is wet.", "Wet Cloth panel 6: It is wet."],
      ["Your turn.", "Wet Cloth panel 7: Your turn."],
      ["It is wet.", "Wet Cloth panel 8: It is wet."]
    ]),
    quizzes: [
      { prompt: "Tap wet.", answer: "Wet", options: ["Wet", "Run", "Hot"] },
      { prompt: "Tap cloth.", answer: "Cloth", options: ["Cloth", "Sleep", "Throw"] },
      { prompt: "Tap water.", answer: "Water", options: ["Water", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 166",
    tab: "166 Dry",
    title: "Dry Cloth",
    coreSentence: "It is dry.",
    targetWords: ["dry", "cloth", "clean"],
    parentNotes: ["干布主题只用干净柔软布料。", "可以摸摸干布说 `dry`。", "不表现脏布、清洁剂、粉尘、擦电器或强迫触摸。"],
    panels: buildPanels("lesson166", [
      ["It is dry.", "Dry Cloth panel 1: It is dry."],
      ["I see a cloth.", "Dry Cloth panel 2: I see a cloth."],
      ["Dry cloth.", "Dry Cloth panel 3: Dry cloth."],
      ["Clean cloth.", "Dry Cloth panel 4: Clean cloth."],
      ["Touch gently.", "Dry Cloth panel 5: Touch gently."],
      ["It is dry.", "Dry Cloth panel 6: It is dry."],
      ["Your turn.", "Dry Cloth panel 7: Your turn."],
      ["It is dry.", "Dry Cloth panel 8: It is dry."]
    ]),
    quizzes: [
      { prompt: "Tap dry.", answer: "Dry", options: ["Dry", "Run", "Hot"] },
      { prompt: "Tap cloth.", answer: "Cloth", options: ["Cloth", "Sleep", "Throw"] },
      { prompt: "Tap clean.", answer: "Clean", options: ["Clean", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 167",
    tab: "167 Wipe",
    title: "Wipe It Dry",
    coreSentence: "Wipe it dry.",
    targetWords: ["wipe", "dry", "cloth"],
    parentNotes: ["擦干主题只使用少量常温水和干软布。", "可以做一个轻轻擦的动作说 `wipe`。", "不表现热水、电器进水、清洁剂、打翻滑倒或用力摩擦。"],
    panels: buildPanels("lesson167", [
      ["Wipe it dry.", "Wipe It Dry panel 1: Wipe it dry."],
      ["I see a cloth.", "Wipe It Dry panel 2: I see a cloth."],
      ["Dry cloth.", "Wipe It Dry panel 3: Dry cloth."],
      ["Wipe, wipe.", "Wipe It Dry panel 4: Wipe, wipe."],
      ["It is dry.", "Wipe It Dry panel 5: It is dry."],
      ["Clean cloth.", "Wipe It Dry panel 6: Clean cloth."],
      ["Your turn.", "Wipe It Dry panel 7: Your turn."],
      ["Wipe it dry.", "Wipe It Dry panel 8: Wipe it dry."]
    ]),
    quizzes: [
      { prompt: "Tap wipe.", answer: "Wipe", options: ["Wipe", "Run", "Hot"] },
      { prompt: "Tap dry.", answer: "Dry", options: ["Dry", "Sleep", "Throw"] },
      { prompt: "Tap cloth.", answer: "Cloth", options: ["Cloth", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 168",
    tab: "168 Cloth",
    title: "Wet and Dry Review",
    coreSentence: "Wet or dry?",
    targetWords: ["wet", "dry", "cloth", "clean"],
    parentNotes: ["复习课只做湿/干指认，不要求孩子触摸湿布。", "孩子可以任选 wet、dry 或 cloth 跟读。", "不表现脏布、清洁剂、热水、电器或卫生风险。"],
    panels: buildPanels("lesson168", [
      ["Wet or dry?", "Wet and Dry Review panel 1: Wet or dry?"],
      ["Wet cloth.", "Wet and Dry Review panel 2: Wet cloth."],
      ["Dry cloth.", "Wet and Dry Review panel 3: Dry cloth."],
      ["Clean cloth.", "Wet and Dry Review panel 4: Clean cloth."],
      ["Wipe it dry.", "Wet and Dry Review panel 5: Wipe it dry."],
      ["Wet, dry, cloth.", "Wet and Dry Review panel 6: Wet, dry, cloth."],
      ["Pick one.", "Wet and Dry Review panel 7: Pick one."],
      ["Wet or dry?", "Wet and Dry Review panel 8: Wet or dry?"]
    ]),
    quizzes: [
      { prompt: "Tap wet.", answer: "Wet", options: ["Wet", "Run", "Hot"] },
      { prompt: "Tap dry.", answer: "Dry", options: ["Dry", "Sleep", "Throw"] },
      { prompt: "Tap cloth.", answer: "Cloth", options: ["Cloth", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 169",
    tab: "169 Basket",
    title: "Toy Basket",
    coreSentence: "Toy in basket.",
    targetWords: ["toy", "basket", "in"],
    parentNotes: ["收纳主题只用大号软玩具和低矮篮子。", "可以把一个大玩具放进篮子说 `in`。", "不表现高处投掷、小零件、责备或速度比赛。"],
    panels: buildPanels("lesson169", [
      ["Toy in basket.", "Toy Basket panel 1: Toy in basket."],
      ["I see a toy.", "Toy Basket panel 2: I see a toy."],
      ["I see a basket.", "Toy Basket panel 3: I see a basket."],
      ["Put toy in.", "Toy Basket panel 4: Put toy in."],
      ["Good job.", "Toy Basket panel 5: Good job."],
      ["Toy is in.", "Toy Basket panel 6: Toy is in."],
      ["Your turn.", "Toy Basket panel 7: Your turn."],
      ["Toy in basket.", "Toy Basket panel 8: Toy in basket."]
    ]),
    quizzes: [
      { prompt: "Tap toy.", answer: "Toy", options: ["Toy", "Run", "Hot"] },
      { prompt: "Tap basket.", answer: "Basket", options: ["Basket", "Sleep", "Throw"] },
      { prompt: "Tap in.", answer: "In", options: ["In", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 170",
    tab: "170 Shelf",
    title: "On the Shelf",
    coreSentence: "Put it on.",
    targetWords: ["shelf", "on", "toy"],
    parentNotes: ["架子主题只使用低矮开放架，不爬高。", "可以把大玩具放到低处说 `on`。", "不表现攀爬、高处取物、重物或架子倒落。"],
    panels: buildPanels("lesson170", [
      ["Put it on.", "On the Shelf panel 1: Put it on."],
      ["I see a shelf.", "On the Shelf panel 2: I see a shelf."],
      ["A toy.", "On the Shelf panel 3: A toy."],
      ["Toy on shelf.", "On the Shelf panel 4: Toy on shelf."],
      ["Put it on.", "On the Shelf panel 5: Put it on."],
      ["Good job.", "On the Shelf panel 6: Good job."],
      ["Your turn.", "On the Shelf panel 7: Your turn."],
      ["Put it on.", "On the Shelf panel 8: Put it on."]
    ]),
    quizzes: [
      { prompt: "Tap shelf.", answer: "Shelf", options: ["Shelf", "Run", "Hot"] },
      { prompt: "Tap on.", answer: "On", options: ["On", "Sleep", "Throw"] },
      { prompt: "Tap toy.", answer: "Toy", options: ["Toy", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 171",
    tab: "171 Floor",
    title: "Clean Floor",
    coreSentence: "Clean the floor.",
    targetWords: ["clean", "floor", "spot"],
    parentNotes: ["地面清洁只表现一点常温小水印和软布。", "可以指地面说 `clean`，不要求孩子真正清洁。", "不表现清洁剂、玻璃碎片、电器进水、滑倒或脏污。"],
    panels: buildPanels("lesson171", [
      ["Clean the floor.", "Clean Floor panel 1: Clean the floor."],
      ["I see a spot.", "Clean Floor panel 2: I see a spot."],
      ["Use a cloth.", "Clean Floor panel 3: Use a cloth."],
      ["Wipe, wipe.", "Clean Floor panel 4: Wipe, wipe."],
      ["Clean floor.", "Clean Floor panel 5: Clean floor."],
      ["Good job.", "Clean Floor panel 6: Good job."],
      ["Your turn.", "Clean Floor panel 7: Your turn."],
      ["Clean the floor.", "Clean Floor panel 8: Clean the floor."]
    ]),
    quizzes: [
      { prompt: "Tap clean.", answer: "Clean", options: ["Clean", "Run", "Hot"] },
      { prompt: "Tap floor.", answer: "Floor", options: ["Floor", "Sleep", "Throw"] },
      { prompt: "Tap spot.", answer: "Spot", options: ["Spot", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 172",
    tab: "172 Tidy",
    title: "Tidy Review",
    coreSentence: "Tidy up.",
    targetWords: ["basket", "shelf", "clean", "away"],
    parentNotes: ["复习课只做温和整理，不把家务做成惩罚。", "孩子可以任选放篮子、放架子或指软布。", "不表现责备、速度比赛、高处收纳、清洁剂或危险垃圾。"],
    panels: buildPanels("lesson172", [
      ["Tidy up.", "Tidy Review panel 1: Tidy up."],
      ["Toy in basket.", "Tidy Review panel 2: Toy in basket."],
      ["Toy on shelf.", "Tidy Review panel 3: Toy on shelf."],
      ["Clean the floor.", "Tidy Review panel 4: Clean the floor."],
      ["Put away.", "Tidy Review panel 5: Put away."],
      ["Basket, shelf, clean.", "Tidy Review panel 6: Basket, shelf, clean."],
      ["Pick one.", "Tidy Review panel 7: Pick one."],
      ["Tidy up.", "Tidy Review panel 8: Tidy up."]
    ]),
    quizzes: [
      { prompt: "Tap basket.", answer: "Basket", options: ["Basket", "Run", "Hot"] },
      { prompt: "Tap shelf.", answer: "Shelf", options: ["Shelf", "Sleep", "Throw"] },
      { prompt: "Tap clean.", answer: "Clean", options: ["Clean", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 173",
    tab: "173 Choose",
    title: "Choose a Card",
    coreSentence: "Choose a card.",
    targetWords: ["choose", "card", "quiet"],
    parentNotes: ["选择主题只用无字大卡，给孩子低压力选择。", "可以让孩子指一张卡说 `choose`。", "不表现文字题、评分、抢答、复杂规则或强迫选择。"],
    panels: buildPanels("lesson173", [
      ["Choose a card.", "Choose a Card panel 1: Choose a card."],
      ["I see cards.", "Choose a Card panel 2: I see cards."],
      ["Quiet card.", "Choose a Card panel 3: Quiet card."],
      ["Choose one.", "Choose a Card panel 4: Choose one."],
      ["This card.", "Choose a Card panel 5: This card."],
      ["Thank you.", "Choose a Card panel 6: Thank you."],
      ["Your turn.", "Choose a Card panel 7: Your turn."],
      ["Choose a card.", "Choose a Card panel 8: Choose a card."]
    ]),
    quizzes: [
      { prompt: "Tap choose.", answer: "Choose", options: ["Choose", "Run", "Hot"] },
      { prompt: "Tap card.", answer: "Card", options: ["Card", "Sleep", "Throw"] },
      { prompt: "Tap quiet.", answer: "Quiet", options: ["Quiet", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 174",
    tab: "174 Yes No",
    title: "Yes or No",
    coreSentence: "Yes or no?",
    targetWords: ["yes", "no", "choose"],
    parentNotes: ["Yes/No 主题只做温和表达，不要求固定答案。", "可以用点头或摇头配合 `yes`、`no`。", "不表现纠错压力、输赢、强迫回答或复杂问题。"],
    panels: buildPanels("lesson174", [
      ["Yes or no?", "Yes or No panel 1: Yes or no?"],
      ["Yes.", "Yes or No panel 2: Yes."],
      ["No.", "Yes or No panel 3: No."],
      ["Choose one.", "Yes or No panel 4: Choose one."],
      ["It is okay.", "Yes or No panel 5: It is okay."],
      ["Yes or no?", "Yes or No panel 6: Yes or no?"],
      ["Your turn.", "Yes or No panel 7: Your turn."],
      ["Yes or no?", "Yes or No panel 8: Yes or no?"]
    ]),
    quizzes: [
      { prompt: "Tap yes.", answer: "Yes", options: ["Yes", "Run", "Hot"] },
      { prompt: "Tap no.", answer: "No", options: ["No", "Sleep", "Throw"] },
      { prompt: "Tap choose.", answer: "Choose", options: ["Choose", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 175",
    tab: "175 Pick",
    title: "Pick This One",
    coreSentence: "I pick this.",
    targetWords: ["pick", "this", "card"],
    parentNotes: ["选择主题只用无字大卡，不做对错判断。", "孩子可以指一张卡说 `this`。", "不表现文字题、评分、抢答或强迫选择。"],
    panels: buildPanels("lesson175", [
      ["I pick this.", "Pick This One panel 1: I pick this."],
      ["I see cards.", "Pick This One panel 2: I see cards."],
      ["This card.", "Pick This One panel 3: This card."],
      ["Pick this one.", "Pick This One panel 4: Pick this one."],
      ["Yes.", "Pick This One panel 5: Yes."],
      ["Thank you.", "Pick This One panel 6: Thank you."],
      ["Your turn.", "Pick This One panel 7: Your turn."],
      ["I pick this.", "Pick This One panel 8: I pick this."]
    ]),
    quizzes: [
      { prompt: "Tap pick.", answer: "Pick", options: ["Pick", "Run", "Hot"] },
      { prompt: "Tap this.", answer: "This", options: ["This", "Sleep", "Throw"] },
      { prompt: "Tap card.", answer: "Card", options: ["Card", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 176",
    tab: "176 Choice",
    title: "Choice Review",
    coreSentence: "I choose.",
    targetWords: ["choose", "yes", "no", "pick"],
    parentNotes: ["复习课只做低压力选择表达。", "孩子可以用点头、摇头或指卡回应。", "不表现纠错压力、输赢、复杂规则或强迫回答。"],
    panels: buildPanels("lesson176", [
      ["I choose.", "Choice Review panel 1: I choose."],
      ["Choose a card.", "Choice Review panel 2: Choose a card."],
      ["Yes or no?", "Choice Review panel 3: Yes or no?"],
      ["I pick this.", "Choice Review panel 4: I pick this."],
      ["It is okay.", "Choice Review panel 5: It is okay."],
      ["Choose, yes, no.", "Choice Review panel 6: Choose, yes, no."],
      ["Pick one.", "Choice Review panel 7: Pick one."],
      ["I choose.", "Choice Review panel 8: I choose."]
    ]),
    quizzes: [
      { prompt: "Tap choose.", answer: "Choose", options: ["Choose", "Run", "Hot"] },
      { prompt: "Tap yes.", answer: "Yes", options: ["Yes", "Sleep", "Throw"] },
      { prompt: "Tap no.", answer: "No", options: ["No", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 177",
    tab: "177 Cloud",
    title: "Cloudy Window",
    coreSentence: "It is cloudy.",
    targetWords: ["cloudy", "cloud", "window"],
    parentNotes: ["天气主题只在室内窗边观察，不渲染阴暗恐惧。", "可以指窗外云朵说 `cloud`。", "不表现暴风、黑暗、闪电或独自外出。"],
    panels: buildPanels("lesson177", [
      ["It is cloudy.", "Cloudy Window panel 1: It is cloudy."],
      ["I see a cloud.", "Cloudy Window panel 2: I see a cloud."],
      ["Cloudy window.", "Cloudy Window panel 3: Cloudy window."],
      ["Look outside.", "Cloudy Window panel 4: Look outside."],
      ["Soft cloud.", "Cloudy Window panel 5: Soft cloud."],
      ["Cloud here.", "Cloudy Window panel 6: Cloud here."],
      ["Your turn.", "Cloudy Window panel 7: Your turn."],
      ["It is cloudy.", "Cloudy Window panel 8: It is cloudy."]
    ]),
    quizzes: [
      { prompt: "Tap cloudy.", answer: "Cloudy", options: ["Cloudy", "Run", "Hot"] },
      { prompt: "Tap cloud.", answer: "Cloud", options: ["Cloud", "Sleep", "Throw"] },
      { prompt: "Tap window.", answer: "Window", options: ["Window", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 178",
    tab: "178 Wind",
    title: "Windy Ribbon",
    coreSentence: "It is windy.",
    targetWords: ["windy", "wind", "ribbon"],
    parentNotes: ["风主题只用宽软丝带表示轻风。", "可以轻轻挥丝带说 `windy`。", "不表现强风、飞散物、细绳缠绕或户外危险。"],
    panels: buildPanels("lesson178", [
      ["It is windy.", "Windy Ribbon panel 1: It is windy."],
      ["I see a ribbon.", "Windy Ribbon panel 2: I see a ribbon."],
      ["Ribbon moves.", "Windy Ribbon panel 3: Ribbon moves."],
      ["Windy, windy.", "Windy Ribbon panel 4: Windy, windy."],
      ["Soft wind.", "Windy Ribbon panel 5: Soft wind."],
      ["Ribbon here.", "Windy Ribbon panel 6: Ribbon here."],
      ["Your turn.", "Windy Ribbon panel 7: Your turn."],
      ["It is windy.", "Windy Ribbon panel 8: It is windy."]
    ]),
    quizzes: [
      { prompt: "Tap windy.", answer: "Windy", options: ["Windy", "Run", "Hot"] },
      { prompt: "Tap wind.", answer: "Wind", options: ["Wind", "Sleep", "Throw"] },
      { prompt: "Tap ribbon.", answer: "Ribbon", options: ["Ribbon", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 179",
    tab: "179 Rain",
    title: "Rain Sound",
    coreSentence: "I hear rain.",
    targetWords: ["rain", "hear", "sound"],
    parentNotes: ["雨声主题只表现轻柔听辨，不表现雷暴。", "可以轻轻敲桌面模拟雨声。", "不表现打雷、洪水、深水、湿滑奔跑或恐惧场景。"],
    panels: buildPanels("lesson179", [
      ["I hear rain.", "Rain Sound panel 1: I hear rain."],
      ["I see rain.", "Rain Sound panel 2: I see rain."],
      ["Soft sound.", "Rain Sound panel 3: Soft sound."],
      ["Listen, please.", "Rain Sound panel 4: Listen, please."],
      ["Rain, rain.", "Rain Sound panel 5: Rain, rain."],
      ["Quiet rain.", "Rain Sound panel 6: Quiet rain."],
      ["Your turn.", "Rain Sound panel 7: Your turn."],
      ["I hear rain.", "Rain Sound panel 8: I hear rain."]
    ]),
    quizzes: [
      { prompt: "Tap rain.", answer: "Rain", options: ["Rain", "Run", "Hot"] },
      { prompt: "Tap hear.", answer: "Hear", options: ["Hear", "Sleep", "Throw"] },
      { prompt: "Tap sound.", answer: "Sound", options: ["Sound", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 180",
    tab: "180 Weather",
    title: "Weather Window Review",
    coreSentence: "Look outside.",
    targetWords: ["cloud", "wind", "rain", "look"],
    parentNotes: ["复习课只在室内窗边做天气观察。", "孩子可以任选 cloud、wind 或 rain 跟读。", "不表现雷暴、强风、独自外出、深水或恐怖天气。"],
    panels: buildPanels("lesson180", [
      ["Look outside.", "Weather Window Review panel 1: Look outside."],
      ["Cloudy window.", "Weather Window Review panel 2: Cloudy window."],
      ["Windy ribbon.", "Weather Window Review panel 3: Windy ribbon."],
      ["I hear rain.", "Weather Window Review panel 4: I hear rain."],
      ["Cloud, wind, rain.", "Weather Window Review panel 5: Cloud, wind, rain."],
      ["Look and listen.", "Weather Window Review panel 6: Look and listen."],
      ["Pick one.", "Weather Window Review panel 7: Pick one."],
      ["Look outside.", "Weather Window Review panel 8: Look outside."]
    ]),
    quizzes: [
      { prompt: "Tap cloud.", answer: "Cloud", options: ["Cloud", "Run", "Hot"] },
      { prompt: "Tap wind.", answer: "Wind", options: ["Wind", "Sleep", "Throw"] },
      { prompt: "Tap rain.", answer: "Rain", options: ["Rain", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 181",
    tab: "181 Okay",
    title: "I Feel Okay",
    coreSentence: "I feel okay.",
    targetWords: ["feel", "okay", "smile"],
    parentNotes: ["情绪主题只表现温和状态，不要求孩子必须开心。", "孩子可以说 `okay` 或指微笑卡。", "不表现强烈哭闹、责备、恐惧或诊断化表达。"],
    panels: buildPanels("lesson181", [
      ["I feel okay.", "I Feel Okay panel 1: I feel okay."],
      ["I see a smile.", "I Feel Okay panel 2: I see a smile."],
      ["Okay.", "I Feel Okay panel 3: Okay."],
      ["Smile softly.", "I Feel Okay panel 4: Smile softly."],
      ["It is okay.", "I Feel Okay panel 5: It is okay."],
      ["Feel okay.", "I Feel Okay panel 6: Feel okay."],
      ["Your turn.", "I Feel Okay panel 7: Your turn."],
      ["I feel okay.", "I Feel Okay panel 8: I feel okay."]
    ]),
    quizzes: [
      { prompt: "Tap feel.", answer: "Feel", options: ["Feel", "Run", "Hot"] },
      { prompt: "Tap okay.", answer: "Okay", options: ["Okay", "Sleep", "Throw"] },
      { prompt: "Tap smile.", answer: "Smile", options: ["Smile", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 182",
    tab: "182 Tired",
    title: "I Feel Tired",
    coreSentence: "I feel tired.",
    targetWords: ["tired", "rest", "bed"],
    parentNotes: ["疲倦主题只表现需要休息，不强迫入睡。", "可以说 `tired` 后坐下休息一下。", "不表现责备、催促、黑暗恐惧或高床跌落。"],
    panels: buildPanels("lesson182", [
      ["I feel tired.", "I Feel Tired panel 1: I feel tired."],
      ["Time to rest.", "I Feel Tired panel 2: Time to rest."],
      ["Soft bed.", "I Feel Tired panel 3: Soft bed."],
      ["Rest, please.", "I Feel Tired panel 4: Rest, please."],
      ["It is okay.", "I Feel Tired panel 5: It is okay."],
      ["Tired body.", "I Feel Tired panel 6: Tired body."],
      ["Your turn.", "I Feel Tired panel 7: Your turn."],
      ["I feel tired.", "I Feel Tired panel 8: I feel tired."]
    ]),
    quizzes: [
      { prompt: "Tap tired.", answer: "Tired", options: ["Tired", "Run", "Hot"] },
      { prompt: "Tap rest.", answer: "Rest", options: ["Rest", "Sleep", "Throw"] },
      { prompt: "Tap bed.", answer: "Bed", options: ["Bed", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 183",
    tab: "183 Rest",
    title: "Need a Rest",
    coreSentence: "I need rest.",
    targetWords: ["need", "rest", "quiet"],
    parentNotes: ["休息主题给孩子表达需要的语言，不当作命令。", "可以抱软枕说 `rest`。", "不表现强制睡觉、惩罚安静、遮住口鼻或黑暗恐惧。"],
    panels: buildPanels("lesson183", [
      ["I need rest.", "Need a Rest panel 1: I need rest."],
      ["Quiet, please.", "Need a Rest panel 2: Quiet, please."],
      ["Rest here.", "Need a Rest panel 3: Rest here."],
      ["Soft light.", "Need a Rest panel 4: Soft light."],
      ["Take a breath.", "Need a Rest panel 5: Take a breath."],
      ["Rest, rest.", "Need a Rest panel 6: Rest, rest."],
      ["Your turn.", "Need a Rest panel 7: Your turn."],
      ["I need rest.", "Need a Rest panel 8: I need rest."]
    ]),
    quizzes: [
      { prompt: "Tap need.", answer: "Need", options: ["Need", "Run", "Hot"] },
      { prompt: "Tap rest.", answer: "Rest", options: ["Rest", "Sleep", "Throw"] },
      { prompt: "Tap quiet.", answer: "Quiet", options: ["Quiet", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 184",
    tab: "184 Rest Review",
    title: "Rest Review",
    coreSentence: "Rest is okay.",
    targetWords: ["okay", "tired", "rest", "quiet"],
    parentNotes: ["复习课只做温和情绪和休息表达。", "孩子可以任选 okay、tired 或 rest 跟读。", "不表现强烈情绪、医疗困扰、责备或强迫入睡。"],
    panels: buildPanels("lesson184", [
      ["Rest is okay.", "Rest Review panel 1: Rest is okay."],
      ["I feel okay.", "Rest Review panel 2: I feel okay."],
      ["I feel tired.", "Rest Review panel 3: I feel tired."],
      ["I need rest.", "Rest Review panel 4: I need rest."],
      ["Quiet, please.", "Rest Review panel 5: Quiet, please."],
      ["Okay, tired, rest.", "Rest Review panel 6: Okay, tired, rest."],
      ["Pick one.", "Rest Review panel 7: Pick one."],
      ["Rest is okay.", "Rest Review panel 8: Rest is okay."]
    ]),
    quizzes: [
      { prompt: "Tap okay.", answer: "Okay", options: ["Okay", "Run", "Hot"] },
      { prompt: "Tap tired.", answer: "Tired", options: ["Tired", "Sleep", "Throw"] },
      { prompt: "Tap rest.", answer: "Rest", options: ["Rest", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 185",
    tab: "185 Beside",
    title: "Beside the Box",
    coreSentence: "Beside the box.",
    targetWords: ["beside", "box", "toy"],
    parentNotes: ["位置主题只用开放收纳盒和大号软玩具。", "可以把玩具放盒子旁说 `beside`。", "不表现密闭躲藏、攀爬、尖角盒或小零件。"],
    panels: buildPanels("lesson185", [
      ["Beside the box.", "Beside the Box panel 1: Beside the box."],
      ["I see a box.", "Beside the Box panel 2: I see a box."],
      ["Toy beside box.", "Beside the Box panel 3: Toy beside box."],
      ["Where is it?", "Beside the Box panel 4: Where is it?"],
      ["Here it is.", "Beside the Box panel 5: Here it is."],
      ["Beside, beside.", "Beside the Box panel 6: Beside, beside."],
      ["Your turn.", "Beside the Box panel 7: Your turn."],
      ["Beside the box.", "Beside the Box panel 8: Beside the box."]
    ]),
    quizzes: [
      { prompt: "Tap beside.", answer: "Beside", options: ["Beside", "Run", "Hot"] },
      { prompt: "Tap box.", answer: "Box", options: ["Box", "Sleep", "Throw"] },
      { prompt: "Tap toy.", answer: "Toy", options: ["Toy", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 186",
    tab: "186 Between",
    title: "Between Blocks",
    coreSentence: "Between blocks.",
    targetWords: ["between", "blocks", "middle"],
    parentNotes: ["between 只用两块大号软积木示范。", "可以把玩具放两块积木中间说 `between`。", "不表现挤压身体、高塔、小零件或危险缝隙。"],
    panels: buildPanels("lesson186", [
      ["Between blocks.", "Between Blocks panel 1: Between blocks."],
      ["Two blocks.", "Between Blocks panel 2: Two blocks."],
      ["Toy in middle.", "Between Blocks panel 3: Toy in middle."],
      ["Between blocks.", "Between Blocks panel 4: Between blocks."],
      ["Where is it?", "Between Blocks panel 5: Where is it?"],
      ["Here it is.", "Between Blocks panel 6: Here it is."],
      ["Your turn.", "Between Blocks panel 7: Your turn."],
      ["Between blocks.", "Between Blocks panel 8: Between blocks."]
    ]),
    quizzes: [
      { prompt: "Tap between.", answer: "Between", options: ["Between", "Run", "Hot"] },
      { prompt: "Tap blocks.", answer: "Blocks", options: ["Blocks", "Sleep", "Throw"] },
      { prompt: "Tap middle.", answer: "Middle", options: ["Middle", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 187",
    tab: "187 Near",
    title: "Near the Door",
    coreSentence: "Near the door.",
    targetWords: ["near", "door", "mat"],
    parentNotes: ["near 只在室内门垫附近表达，不开门外出。", "可以指门垫旁的玩具说 `near`。", "不表现陌生人门外、跑出门、夹手或真实道路。"],
    panels: buildPanels("lesson187", [
      ["Near the door.", "Near the Door panel 1: Near the door."],
      ["I see the door.", "Near the Door panel 2: I see the door."],
      ["Toy near door.", "Near the Door panel 3: Toy near door."],
      ["Door mat.", "Near the Door panel 4: Door mat."],
      ["Where is it?", "Near the Door panel 5: Where is it?"],
      ["Here it is.", "Near the Door panel 6: Here it is."],
      ["Your turn.", "Near the Door panel 7: Your turn."],
      ["Near the door.", "Near the Door panel 8: Near the door."]
    ]),
    quizzes: [
      { prompt: "Tap near.", answer: "Near", options: ["Near", "Run", "Hot"] },
      { prompt: "Tap door.", answer: "Door", options: ["Door", "Sleep", "Throw"] },
      { prompt: "Tap mat.", answer: "Mat", options: ["Mat", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 188",
    tab: "188 Where",
    title: "Where Review",
    coreSentence: "Where is it?",
    targetWords: ["beside", "between", "near", "where"],
    parentNotes: ["复习课只做开放空间里的位置指认。", "孩子可以任选 beside、between 或 near 跟读。", "不表现密闭躲藏、户外道路、攀爬或危险缝隙。"],
    panels: buildPanels("lesson188", [
      ["Where is it?", "Where Review panel 1: Where is it?"],
      ["Beside the box.", "Where Review panel 2: Beside the box."],
      ["Between blocks.", "Where Review panel 3: Between blocks."],
      ["Near the door.", "Where Review panel 4: Near the door."],
      ["Here it is.", "Where Review panel 5: Here it is."],
      ["Beside, between, near.", "Where Review panel 6: Beside, between, near."],
      ["Pick one.", "Where Review panel 7: Pick one."],
      ["Where is it?", "Where Review panel 8: Where is it?"]
    ]),
    quizzes: [
      { prompt: "Tap beside.", answer: "Beside", options: ["Beside", "Run", "Hot"] },
      { prompt: "Tap between.", answer: "Between", options: ["Between", "Sleep", "Throw"] },
      { prompt: "Tap near.", answer: "Near", options: ["Near", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 189",
    tab: "189 Piece",
    title: "Puzzle Piece",
    coreSentence: "Fit the piece.",
    targetWords: ["fit", "piece", "puzzle"],
    parentNotes: ["拼图主题只使用大号软拼图片。", "可以把两块大拼图轻轻合上说 `fit`。", "不表现小零件、吞咽风险、挫败责备或复杂拼图。"],
    panels: buildPanels("lesson189", [
      ["Fit the piece.", "Puzzle Piece panel 1: Fit the piece."],
      ["I see a piece.", "Puzzle Piece panel 2: I see a piece."],
      ["Puzzle piece.", "Puzzle Piece panel 3: Puzzle piece."],
      ["Try, try.", "Puzzle Piece panel 4: Try, try."],
      ["It fits.", "Puzzle Piece panel 5: It fits."],
      ["Good job.", "Puzzle Piece panel 6: Good job."],
      ["Your turn.", "Puzzle Piece panel 7: Your turn."],
      ["Fit the piece.", "Puzzle Piece panel 8: Fit the piece."]
    ]),
    quizzes: [
      { prompt: "Tap fit.", answer: "Fit", options: ["Fit", "Run", "Hot"] },
      { prompt: "Tap piece.", answer: "Piece", options: ["Piece", "Sleep", "Throw"] },
      { prompt: "Tap puzzle.", answer: "Puzzle", options: ["Puzzle", "Sharp", "Moon"] }
    ]
  },
  {
    id: "Lesson 190",
    tab: "190 Puzzle",
    title: "Puzzle Together",
    coreSentence: "Puzzle together.",
    targetWords: ["puzzle", "together", "help"],
    parentNotes: ["合作拼图只表现温和帮助和完成状态。", "孩子可以说 `together` 或 `help`。", "不表现比赛输赢、小零件、抢夺或复杂规则。"],
    panels: buildPanels("lesson190", [
      ["Puzzle together.", "Puzzle Together panel 1: Puzzle together."],
      ["I can help.", "Puzzle Together panel 2: I can help."],
      ["Fit the piece.", "Puzzle Together panel 3: Fit the piece."],
      ["Good job.", "Puzzle Together panel 4: Good job."],
      ["Together.", "Puzzle Together panel 5: Together."],
      ["Puzzle done.", "Puzzle Together panel 6: Puzzle done."],
      ["Your turn.", "Puzzle Together panel 7: Your turn."],
      ["Puzzle together.", "Puzzle Together panel 8: Puzzle together."]
    ]),
    quizzes: [
      { prompt: "Tap puzzle.", answer: "Puzzle", options: ["Puzzle", "Run", "Hot"] },
      { prompt: "Tap together.", answer: "Together", options: ["Together", "Sleep", "Throw"] },
      { prompt: "Tap help.", answer: "Help", options: ["Help", "Sharp", "Moon"] }
    ]
  }
];

let lessonIndex = 0;
let current = 0;
let quizIndex = 0;
let currentAudio = null;
let playbackToken = 0;
let sayTurnTimer = null;
let quizTimer = null;
let autoPageTimer = null;
let turnAnimationTimer = null;
let isTurning = false;
let lessonTabButtons = [];

const playbackSettingsKey = "hello-star-playback-v1";
const defaultAutoPageSeconds = 4;

const lessonIdEl = document.getElementById("lessonId");
const lessonTitleEl = document.getElementById("lessonTitle");
const lessonTabsEl = document.getElementById("lessonTabs");
const comicFrameEl = document.getElementById("comicFrame");
const sceneEl = document.getElementById("scene");
const lineEl = document.getElementById("lineText");
const pageNowEl = document.getElementById("pageNow");
const pageTotalEl = document.getElementById("pageTotal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const listenBtn = document.getElementById("listenBtn");
const sayBtn = document.getElementById("sayBtn");
const speakPanelBtn = document.getElementById("speakPanel");
const playbackSettingsEl = document.getElementById("playbackSettings");
const pageAudioToggle = document.getElementById("pageAudioToggle");
const autoPageToggle = document.getElementById("autoPageToggle");
const autoPageInterval = document.getElementById("autoPageInterval");
const autoPageStatusEl = document.getElementById("autoPageStatus");
const autoProgressEl = document.getElementById("autoProgress");
const coreSentenceEl = document.getElementById("coreSentence");
const targetWordsEl = document.getElementById("targetWords");
const quizPromptEl = document.getElementById("quizPrompt");
const answerGridEl = document.getElementById("answerGrid");
const feedbackEl = document.getElementById("feedback");
const parentNotesEl = document.getElementById("parentNotes");

function buildPanels(lessonFolder, rows) {
  return rows.map(([line, alt], index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      line,
      image: `../../assets/images/${lessonFolder}/panel${number}.png`,
      audio: `../../assets/audio/${lessonFolder}/panel${number}.m4a`,
      alt
    };
  });
}

function activeLesson() {
  return lessons[lessonIndex];
}

function activePanel() {
  return activeLesson().panels[current];
}

function renderLessonTabs() {
  if (lessonTabButtons.length === lessons.length) return;

  lessonTabsEl.innerHTML = "";
  lessonTabButtons = lessons.map((lesson, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = lesson.tab;
    button.addEventListener("click", () => selectLesson(index));
    lessonTabsEl.appendChild(button);
    return button;
  });
}

function updateLessonTabs(scrollActive = false) {
  lessonTabButtons.forEach((button, index) => {
    const isActive = index === lessonIndex;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (scrollActive) {
    lessonTabButtons[lessonIndex]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
}

function updateNavigationButtons() {
  prevBtn.disabled = current === 0 || isTurning;
  nextBtn.disabled = current === activeLesson().panels.length - 1 || isTurning;
}

function playPageTurn(direction) {
  if (!direction) return;

  window.clearTimeout(turnAnimationTimer);
  comicFrameEl.classList.remove("turn-next", "turn-prev");
  void comicFrameEl.offsetWidth;
  isTurning = true;
  comicFrameEl.classList.add(direction === "prev" ? "turn-prev" : "turn-next");
  updateNavigationButtons();

  turnAnimationTimer = window.setTimeout(() => {
    comicFrameEl.classList.remove("turn-next", "turn-prev");
    isTurning = false;
    updateNavigationButtons();
  }, 540);
}

function render({ direction = null, scrollLessonTab = false } = {}) {
  window.scrollTo({ left: 0 });
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;
  const lesson = activeLesson();
  const panel = activePanel();
  lessonIdEl.textContent = lesson.id;
  lessonTitleEl.textContent = lesson.title;
  const image = document.createElement("img");
  image.src = panel.image;
  image.alt = panel.alt;
  image.decoding = "async";
  image.addEventListener("error", () => {
    feedbackEl.textContent = "图片暂时无法加载，请刷新后重试。";
  }, { once: true });
  sceneEl.replaceChildren(image);
  lineEl.textContent = panel.line;
  pageNowEl.textContent = String(current + 1);
  pageTotalEl.textContent = String(lesson.panels.length);
  updateNavigationButtons();
  coreSentenceEl.textContent = lesson.coreSentence;
  targetWordsEl.innerHTML = lesson.targetWords.map((word) => `<span>${word}</span>`).join("");
  parentNotesEl.innerHTML = lesson.parentNotes.map((note) => `<li>${note}</li>`).join("");
  updateLessonTabs(scrollLessonTab);
  playPageTurn(direction);
}

function renderQuiz() {
  const quiz = activeLesson().quizzes[quizIndex];
  quizPromptEl.textContent = quiz.prompt;
  answerGridEl.innerHTML = "";
  feedbackEl.textContent = "";
  quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(button, option));
    answerGridEl.appendChild(button);
  });
}

function checkAnswer(button, option) {
  const quiz = activeLesson().quizzes[quizIndex];
  const buttons = [...answerGridEl.querySelectorAll("button")];
  buttons.forEach((item) => {
    item.classList.remove("correct", "wrong");
    item.disabled = false;
  });

  if (option === quiz.answer) {
    button.classList.add("correct");
    feedbackEl.textContent = "Good!";
    speak("Good!", 0.82, commonAudio.good);
    buttons.forEach((item) => {
      item.disabled = true;
    });
    window.clearTimeout(quizTimer);
    quizTimer = window.setTimeout(() => {
      quizTimer = null;
      quizIndex = (quizIndex + 1) % activeLesson().quizzes.length;
      renderQuiz();
    }, 1100);
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent = "Try again.";
    speak("Try again.", 0.82, commonAudio.tryAgain);
  }

  if (autoPageToggle.checked) scheduleAutoPage();
}

function stopAudio() {
  const audio = currentAudio;
  currentAudio = null;
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}

function clearSayTurnTimer() {
  window.clearTimeout(sayTurnTimer);
  sayTurnTimer = null;
}

function cancelNarration() {
  playbackToken += 1;
  clearSayTurnTimer();
  stopAudio();
  window.speechSynthesis?.cancel();
  lineEl.classList.remove("speaking");
  sceneEl.classList.remove("playing");
  return playbackToken;
}

function playAudio(src, token) {
  const audio = new Audio(src);
  currentAudio = audio;
  audio.preload = "auto";
  audio.addEventListener("ended", () => {
    if (currentAudio === audio) currentAudio = null;
  }, { once: true });
  return audio.play().catch((error) => {
    if (currentAudio === audio) currentAudio = null;
    if (token !== playbackToken) return null;
    throw error;
  });
}

function speak(text, rate = 0.78, audioSrc = null) {
  const token = cancelNarration();
  lineEl.classList.remove("speaking");
  void lineEl.offsetWidth;
  lineEl.classList.add("speaking");
  sceneEl.classList.remove("playing");
  void sceneEl.offsetWidth;
  sceneEl.classList.add("playing");

  if (audioSrc) {
    playAudio(audioSrc, token).catch(() => {
      if (token === playbackToken) speakWithBrowserVoice(text, rate, token);
    });
    return;
  }

  speakWithBrowserVoice(text, rate, token);
}

function speakWithBrowserVoice(text, rate, token) {
  if (token !== playbackToken) return;
  if (!("speechSynthesis" in window)) {
    feedbackEl.textContent = "语音暂时无法播放，请再试一次。";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = 1.12;
  utterance.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((voice) =>
    /Shelley|Samantha|Ava|Allison|Jenny|Aria|English/i.test(voice.name) && /en/i.test(voice.lang)
  );
  if (preferred) utterance.voice = preferred;
  window.speechSynthesis.speak(utterance);
}

function playCurrentPanel() {
  const panel = activePanel();
  speak(panel.line, 0.78, panel.audio);
}

function sayTurn() {
  const panel = activePanel();
  const requestedLesson = lessonIndex;
  const requestedPanel = current;
  speak("Your turn.", 0.72, commonAudio.yourTurn);
  sayTurnTimer = window.setTimeout(() => {
    sayTurnTimer = null;
    if (lessonIndex !== requestedLesson || current !== requestedPanel) return;
    speak(panel.line, 0.72, panel.audio);
  }, 900);
}

function selectedAutoPageSeconds() {
  const seconds = Number(autoPageInterval.value);
  return [3, 4, 5].includes(seconds) ? seconds : defaultAutoPageSeconds;
}

function clearAutoPageTimer() {
  window.clearTimeout(autoPageTimer);
  autoPageTimer = null;
  playbackSettingsEl.classList.remove("is-running");
  autoProgressEl.style.animation = "none";
}

function updateAutoPageStatus(message = null) {
  if (message) {
    autoPageStatusEl.textContent = message;
    return;
  }

  if (!autoPageToggle.checked) {
    autoPageStatusEl.textContent = "自动翻页已关闭";
    return;
  }

  const audioMode = pageAudioToggle.checked ? "同步播音" : "静音翻页";
  autoPageStatusEl.textContent = `自动翻页中 · ${selectedAutoPageSeconds()} 秒/页 · ${audioMode}`;
}

function restartAutoProgress(seconds) {
  playbackSettingsEl.classList.remove("is-running");
  autoProgressEl.style.animation = "none";
  void playbackSettingsEl.offsetWidth;
  playbackSettingsEl.style.setProperty("--auto-page-duration", `${seconds}s`);
  autoProgressEl.style.animation = "";
  playbackSettingsEl.classList.add("is-running");
}

function stopAutoPage({ completed = false } = {}) {
  clearAutoPageTimer();
  autoPageToggle.checked = false;
  updateAutoPageStatus(completed ? "本课读完啦！自动翻页已停止。" : "自动翻页已关闭");
}

function scheduleAutoPage() {
  clearAutoPageTimer();
  if (!autoPageToggle.checked) {
    updateAutoPageStatus();
    return;
  }

  if (document.hidden) {
    updateAutoPageStatus("页面已暂停，返回后继续。");
    return;
  }

  const panelCount = activeLesson().panels.length;
  if (current >= panelCount - 1) {
    stopAutoPage({ completed: true });
    return;
  }

  const seconds = selectedAutoPageSeconds();
  restartAutoProgress(seconds);
  autoPageStatusEl.textContent = `自动翻页中 · ${seconds} 秒/页 · 下一页 ${current + 2}/${panelCount}`;
  autoPageTimer = window.setTimeout(() => {
    autoPageTimer = null;
    const moved = navigateToPanel(current + 1, {
      direction: "next",
      narrate: pageAudioToggle.checked,
      resetAuto: false
    });
    if (moved) scheduleAutoPage();
  }, seconds * 1000);
}

function navigateToPanel(nextIndex, { direction = "next", narrate = pageAudioToggle.checked, resetAuto = true } = {}) {
  if (isTurning) return false;
  const lastIndex = activeLesson().panels.length - 1;
  const target = Math.max(0, Math.min(lastIndex, nextIndex));
  if (target === current) return false;

  cancelNarration();
  current = target;
  render({ direction });
  if (narrate) playCurrentPanel();
  if (resetAuto && autoPageToggle.checked) scheduleAutoPage();
  return true;
}

function selectLesson(index) {
  const nextLessonIndex = Math.max(0, Math.min(lessons.length - 1, index));
  const direction = nextLessonIndex < lessonIndex ? "prev" : "next";
  window.clearTimeout(quizTimer);
  quizTimer = null;
  clearAutoPageTimer();
  cancelNarration();
  lessonIndex = nextLessonIndex;
  current = 0;
  quizIndex = 0;
  render({ direction, scrollLessonTab: true });
  renderQuiz();
  if (pageAudioToggle.checked) playCurrentPanel();
  if (autoPageToggle.checked) scheduleAutoPage();
}

function readPlaybackSettings() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(playbackSettingsKey) || "{}");
    pageAudioToggle.checked = stored.pageAudio !== false;
    autoPageInterval.value = String([3, 4, 5].includes(Number(stored.seconds)) ? Number(stored.seconds) : defaultAutoPageSeconds);
  } catch {
    pageAudioToggle.checked = true;
    autoPageInterval.value = String(defaultAutoPageSeconds);
  }
  autoPageToggle.checked = false;
}

function savePlaybackSettings() {
  try {
    window.localStorage.setItem(playbackSettingsKey, JSON.stringify({
      pageAudio: pageAudioToggle.checked,
      seconds: selectedAutoPageSeconds()
    }));
  } catch {
    // The player still works when storage is unavailable (for example, strict private mode).
  }
}

prevBtn.addEventListener("click", () => {
  navigateToPanel(current - 1, { direction: "prev" });
});

nextBtn.addEventListener("click", () => {
  navigateToPanel(current + 1, { direction: "next" });
});

listenBtn.addEventListener("click", () => {
  playCurrentPanel();
  if (autoPageToggle.checked) scheduleAutoPage();
});

sayBtn.addEventListener("click", () => {
  sayTurn();
  if (autoPageToggle.checked) scheduleAutoPage();
});

speakPanelBtn.addEventListener("click", () => {
  playCurrentPanel();
  if (autoPageToggle.checked) scheduleAutoPage();
});

pageAudioToggle.addEventListener("change", () => {
  savePlaybackSettings();
  if (pageAudioToggle.checked) {
    playCurrentPanel();
  } else {
    cancelNarration();
  }
  if (autoPageToggle.checked) scheduleAutoPage();
});

autoPageToggle.addEventListener("change", () => {
  if (!autoPageToggle.checked) {
    stopAutoPage();
    return;
  }

  if (current === activeLesson().panels.length - 1) {
    cancelNarration();
    current = 0;
    render({ direction: "next" });
  }
  if (pageAudioToggle.checked) playCurrentPanel();
  scheduleAutoPage();
});

autoPageInterval.addEventListener("change", () => {
  autoPageInterval.value = String(selectedAutoPageSeconds());
  savePlaybackSettings();
  if (autoPageToggle.checked) scheduleAutoPage();
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (event.repeat || target instanceof Element && target.closest("button, input, select, textarea, a, [contenteditable='true']")) return;
  if (event.key === "ArrowLeft") prevBtn.click();
  if (event.key === "ArrowRight") nextBtn.click();
  if (event.key === " ") {
    event.preventDefault();
    listenBtn.click();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearAutoPageTimer();
    cancelNarration();
    if (autoPageToggle.checked) updateAutoPageStatus("页面已暂停，返回后继续。");
  } else if (autoPageToggle.checked) {
    scheduleAutoPage();
  }
});

window.addEventListener("pagehide", () => {
  clearAutoPageTimer();
  cancelNarration();
});

window.speechSynthesis?.addEventListener?.("voiceschanged", () => {});

readPlaybackSettings();
renderLessonTabs();
render();
renderQuiz();
updateAutoPageStatus();
