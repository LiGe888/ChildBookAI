const imageBase = "../../assets/images/lesson31";
const lessonAudioBase = "../../assets/audio/lesson31";
const benchmarkAudioBase = "../../assets/audio/benchmark31";
const storageKey = "star-town-benchmark-lesson31-v1";
const criticalImageAssets = ["panel01.png", "panel02.png", "panel03.png", "panel04.png"];
const remainingImageAssets = ["panel05.png", "panel06.png", "panel07.png", "panel08.png"];

const phaseLabels = ["听故事", "找一找", "做动作", "我来说", "生活任务", "展示", "下次再用"];

const steps = [
  {
    phase: 1,
    kind: "story",
    eyebrow: "故事 1/4",
    title: "Nia 要出门啦",
    image: "panel01.png",
    alt: "Nia 背着小包，在门口和 Lumo、Bobo 准备出发",
    line: "Time to go.",
    speaker: "Nia 说",
    audio: `${benchmarkAudioBase}/time-to-go.mp3`,
    autoNext: true,
    holdMs: 2600,
    coachTitle: "先建立情境",
    coachCopy: "第一遍只看和听。指一指门、Nia 的小包，不需要让孩子马上开口。",
    success: "孩子看向角色、门或小包，愿意继续即可。"
  },
  {
    phase: 1,
    kind: "story",
    eyebrow: "故事 2/4",
    title: "鞋子在哪里？",
    image: "panel02.png",
    alt: "Lumo 指向摆着许多鞋的鞋架，Bobo 在旁边看",
    line: "Where are the shoes?",
    speaker: "Lumo 问",
    audio: `${lessonAudioBase}/panel02.mp3`,
    autoNext: true,
    holdMs: 3000,
    coachTitle: "留一点等待",
    coachCopy: "问题播完后停两秒，观察孩子会不会用眼睛或手指寻找，不要立即替孩子回答。",
    success: "孩子看向鞋架、指向任意一双鞋，或说 shoes。"
  },
  {
    phase: 1,
    kind: "story",
    eyebrow: "故事 3/4",
    title: "找到 Nia 的鞋",
    image: "panel03.png",
    alt: "一双绿色鞋放在星星地垫上",
    line: "Here are the shoes.",
    speaker: "Bobo 说",
    audio: `${lessonAudioBase}/panel03.mp3`,
    autoNext: true,
    holdMs: 2500,
    coachTitle: "把声音和物体连起来",
    coachCopy: "轻轻指一下绿色鞋，重复时只说 shoes，不解释句型和语法。",
    success: "孩子的视线落在绿色鞋上，或愿意模仿 shoes。"
  },
  {
    phase: 1,
    kind: "story",
    eyebrow: "故事 4/4",
    title: "准备穿鞋",
    image: "panel04.png",
    alt: "Nia 坐在小凳子上穿绿色鞋，Lumo 和 Bobo 在旁边陪伴",
    line: "Put on your shoes.",
    speaker: "Lumo 说",
    audio: `${lessonAudioBase}/panel04.mp3`,
    autoNext: true,
    holdMs: 2500,
    coachTitle: "这是家长输入句",
    coachCopy: "这句话由角色或家长说。孩子不需要复述，先通过看和动作理解。",
    success: "孩子看 Nia 穿鞋，或做出抬脚、拿鞋的动作。"
  },
  {
    phase: 2,
    kind: "find",
    eyebrow: "听懂并找到",
    title: "直接点画面里的鞋",
    image: "panel03.png",
    alt: "一双绿色鞋放在星星地垫上",
    line: "Where are the shoes?",
    speaker: "Lumo 问",
    audio: `${lessonAudioBase}/panel02.mp3`,
    coachTitle: "不使用文字选项",
    coachCopy: "让孩子直接点击真实画面中的鞋。不要念答案，也不要把手放到正确位置。",
    success: "孩子不识字也能点中绿色鞋；点错时允许继续寻找。"
  },
  {
    phase: 3,
    kind: "act",
    eyebrow: "听英文，做动作",
    title: "不用复述，也能证明听懂",
    image: "panel04.png",
    alt: "Nia 坐着穿鞋，朋友们在旁边陪伴",
    line: "Put on your shoes.",
    speaker: "家长说",
    audio: `${lessonAudioBase}/panel04.mp3`,
    coachTitle: "动作就是理解证据",
    coachCopy: "家长说一次英文，让孩子做拿鞋、抬脚或穿鞋动作。不会独立穿鞋可以帮助。",
    success: "孩子做出任何与鞋或穿鞋有关的动作，不要求说完整句。"
  },
  {
    phase: 4,
    kind: "say",
    eyebrow: "孩子的第一句",
    title: "这是孩子自然会说的话",
    image: "panel03.png",
    alt: "一双绿色鞋放在星星地垫上",
    line: "My shoes!",
    speaker: "孩子说",
    audio: `${benchmarkAudioBase}/my-shoes.mp3`,
    voiceFeedback: "Lumo 听见啦：My shoes!",
    coachTitle: "先说一个有用短语",
    coachCopy: "先听示范。孩子可以只说 shoes，也可以说 My shoes!；不愿录音时直接跟说即可。",
    success: "指鞋、说 shoes 或 My shoes! 都算完成。"
  },
  {
    phase: 4,
    kind: "say",
    eyebrow: "孩子的完成句",
    title: "穿好后，告诉大家",
    image: "panel06.png",
    alt: "Nia 穿好两只绿色鞋，和 Lumo、Bobo 开心地站在门口",
    line: "I'm ready!",
    speaker: "孩子说",
    audio: `${benchmarkAudioBase}/im-ready.mp3`,
    voiceFeedback: "Nia 听见啦，门打开了！",
    coachTitle: "输出属于孩子的语言",
    coachCopy: "这才是本课主要儿童输出。可以先跟说，录音只用于当场听见自己的声音。",
    success: "孩子说 ready、I'm ready!，或用开心站好的动作表达完成。"
  },
  {
    phase: 5,
    kind: "mission",
    eyebrow: "生活任务",
    title: "现在离开屏幕",
    image: "panel03.png",
    alt: "一双绿色鞋放在星星地垫上",
    line: "Find your shoes. Put them on.",
    speaker: "家长说",
    audio: `${benchmarkAudioBase}/find-your-shoes.mp3`,
    coachTitle: "设备留在原处",
    coachCopy: "开始后只说一次 Put on your shoes.，随后观察。需要帮助时可以帮孩子穿。",
    success: "独立完成、提示后完成或今天不想做都可以如实记录。"
  },
  {
    phase: 6,
    kind: "story",
    eyebrow: "回来展示",
    title: "告诉大家：我准备好啦",
    image: "panel06.png",
    alt: "Nia 穿好绿色鞋，和朋友们开心地站在门口",
    line: "I'm ready!",
    speaker: "孩子说",
    audio: `${benchmarkAudioBase}/im-ready.mp3`,
    autoNext: true,
    holdMs: 2200,
    coachTitle: "接受不同层级的回应",
    coachCopy: "孩子可以说完整句，也可以说 ready、shoes，或者只展示穿好的鞋。不要要求重录到完美。",
    success: "孩子愿意展示、回应或说出任意相关语言。"
  },
  {
    phase: 6,
    kind: "story",
    eyebrow: "家庭收尾",
    title: "一起出发",
    image: "panel08.png",
    alt: "Nia、Lumo 和 Bobo 穿好鞋走出家门",
    line: "Let's go!",
    speaker: "一起说",
    audio: `${benchmarkAudioBase}/lets-go.mp3`,
    autoNext: true,
    holdMs: 2400,
    coachTitle: "把终点放回生活",
    coachCopy: "和孩子一起说 Let's go!，做一个向前走的动作，让课程自然结束。",
    success: "孩子说 go、Let's go!，挥手或向前迈一步。"
  },
  {
    phase: 7,
    kind: "finish",
    eyebrow: "下次再用",
    title: "把今天的一句留到真实出门时",
    image: "panel08.png",
    alt: "Nia、Lumo 和 Bobo 准备一起出发",
    line: "Next time, say: I'm ready!",
    speaker: "给家长",
    audio: `${benchmarkAudioBase}/next-time.mp3`,
    coachTitle: "24 小时内再验证一次",
    coachCopy: "下一次真实出门时，家长只提示一次。动作、单词和短句都可以作为迁移证据。",
    success: "记录真实发生的表现，不提前排练，也不把未开口视为失败。"
  }
];

const startScreen = document.getElementById("startScreen");
const lessonScreen = document.getElementById("lessonScreen");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const micPermissionCard = document.getElementById("micPermissionCard");
const micPermissionTitle = document.getElementById("micPermissionTitle");
const micPermissionCopy = document.getElementById("micPermissionCopy");
const micPermissionStatus = document.getElementById("micPermissionStatus");
const micPermissionBtn = document.getElementById("micPermissionBtn");
const phaseNameEl = document.getElementById("phaseName");
const phaseNowEl = document.getElementById("phaseNow");
const phaseTrackEls = [...document.querySelectorAll(".phase-track span")];
const stepEyebrowEl = document.getElementById("stepEyebrow");
const stepTitleEl = document.getElementById("stepTitle");
const phaseStepLabel = document.getElementById("phaseStepLabel");
const phaseStepTrack = document.getElementById("phaseStepTrack");
const audioBtn = document.getElementById("audioBtn");
const audioBtnIcon = document.getElementById("audioBtnIcon");
const audioBtnText = document.getElementById("audioBtnText");
const sceneFrame = document.getElementById("sceneFrame");
const sceneImage = document.getElementById("sceneImage");
const objectHotspot = document.getElementById("objectHotspot");
const sceneFeedback = document.getElementById("sceneFeedback");
const speakerChip = document.getElementById("speakerChip");
const lineTextEl = document.getElementById("lineText");
const journeyCue = document.getElementById("journeyCue");
const journeyCueIcon = document.getElementById("journeyCueIcon");
const journeyCueTitle = document.getElementById("journeyCueTitle");
const journeyCueCopy = document.getElementById("journeyCueCopy");
const interactionSlot = document.getElementById("interactionSlot");
const actionPanel = document.getElementById("actionPanel");
const actionOptionBtns = [...document.querySelectorAll("[data-action-result]")];
const recordPanel = document.getElementById("recordPanel");
const recordTarget = document.getElementById("recordTarget");
const recordBtn = document.getElementById("recordBtn");
const recordBtnText = document.getElementById("recordBtnText");
const recordControls = document.getElementById("recordControls");
const deleteRecordingBtn = document.getElementById("deleteRecordingBtn");
const recordStatus = document.getElementById("recordStatus");
const recordPlayback = document.getElementById("recordPlayback");
const micValueCard = document.getElementById("micValueCard");
const micValueCopy = document.getElementById("micValueCopy");
const micValueAllowBtn = document.getElementById("micValueAllowBtn");
const micValueSkipBtn = document.getElementById("micValueSkipBtn");
const missionPanel = document.getElementById("missionPanel");
const missionIntro = document.getElementById("missionIntro");
const missionWait = document.getElementById("missionWait");
const missionResult = document.getElementById("missionResult");
const missionStartBtn = document.getElementById("missionStartBtn");
const missionReturnBtn = document.getElementById("missionReturnBtn");
const missionTimer = document.getElementById("missionTimer");
const resultOptionBtns = [...document.querySelectorAll(".result-options button")];
const finishPanel = document.getElementById("finishPanel");
const finishBtn = document.getElementById("finishBtn");
const lessonControls = document.getElementById("lessonControls");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const coachTitleEl = document.getElementById("coachTitle");
const coachCopyEl = document.getElementById("coachCopy");
const successCopyEl = document.getElementById("successCopy");
const stageHeading = document.querySelector(".stage-heading");
const speechLine = document.querySelector(".speech-line");

const defaultState = () => ({
  stepIndex: 0,
  foundShoes: false,
  wrongFindAttempts: 0,
  actionDone: false,
  actionResult: null,
  audioCompletedSteps: [],
  missionStartedAt: null,
  missionReturnedAt: null,
  missionResult: null,
  recordingAttempts: 0,
  spokenCompletedSteps: [],
  completed: false,
  completedAt: null,
  updatedAt: Date.now()
});

let state = readState();
let currentAudio = null;
const promptAudio = document.getElementById("promptAudio");
promptAudio.preload = "auto";
let feedbackTimer = null;
let pendingAdvanceTimer = null;
let missionInterval = null;
let mediaRecorder = null;
let mediaStream = null;
let recordingPhase = "idle";
let recordingRequestToken = 0;
let activeRecordingStep = null;
let micPermissionState = "checking";
let micPermissionRequesting = false;
let micPermissionStatusHandle = null;
let sceneRenderToken = 0;
let criticalAssetsLoaded = false;
const recordingUrls = new Map();
const imagePreloadCache = new Map();
const audioWarmupCache = new Map();

function readState() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(storageKey) || "null");
    if (!stored || typeof stored !== "object") return defaultState();
    const actionResult = ["independent", "assisted", "confirmed"].includes(stored.actionResult)
      ? stored.actionResult
      : (stored.actionDone ? "confirmed" : null);
    return {
      ...defaultState(),
      ...stored,
      stepIndex: Math.max(0, Math.min(steps.length - 1, Number(stored.stepIndex) || 0)),
      foundShoes: Boolean(stored.foundShoes),
      wrongFindAttempts: Math.max(0, Number(stored.wrongFindAttempts) || 0),
      actionDone: Boolean(stored.actionDone || actionResult),
      actionResult,
      audioCompletedSteps: Array.isArray(stored.audioCompletedSteps)
        ? [...new Set(stored.audioCompletedSteps
          .map(Number)
          .filter((stepIndex) => Number.isInteger(stepIndex) && stepIndex >= 0 && stepIndex < steps.length))]
        : [],
      spokenCompletedSteps: Array.isArray(stored.spokenCompletedSteps)
        ? [...new Set(stored.spokenCompletedSteps
          .map(Number)
          .filter((stepIndex) => Number.isInteger(stepIndex) && stepIndex >= 0 && stepIndex < steps.length))]
        : [],
      missionStartedAt: Number(stored.missionStartedAt) || null,
      missionReturnedAt: Number(stored.missionReturnedAt) || null
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  state.updatedAt = Date.now();
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    // The lesson remains usable in strict private browsing mode.
  }
}

function clearSavedState() {
  try {
    window.localStorage.removeItem(storageKey);
  } catch {
    // Ignore unavailable storage.
  }
}

function hasMeaningfulProgress() {
  return state.stepIndex > 0 || state.foundShoes || state.actionDone || state.missionResult || state.completed;
}

function updateStartScreen() {
  const hasProgress = hasMeaningfulProgress();
  resetBtn.classList.toggle("hidden", !hasProgress);
  if (!criticalAssetsLoaded) {
    startBtn.disabled = true;
    startBtn.textContent = "故事准备中…";
    return;
  }
  startBtn.disabled = false;
  if (state.completed) {
    startBtn.innerHTML = "再体验一次 <span aria-hidden=\"true\">→</span>";
  } else if (hasProgress) {
    startBtn.innerHTML = "继续上次课程 <span aria-hidden=\"true\">→</span>";
  } else {
    startBtn.innerHTML = "开始今天的一课 <span aria-hidden=\"true\">→</span>";
  }
}

function preloadImageAsset(asset) {
  if (imagePreloadCache.has(asset)) return imagePreloadCache.get(asset);
  const promise = new Promise((resolve) => {
    const image = new Image();
    const finish = async (loaded) => {
      if (loaded && typeof image.decode === "function") {
        try {
          await image.decode();
        } catch {
          // A completed load is still usable when decode is unavailable or rejects.
        }
      }
      resolve(loaded);
    };
    image.addEventListener("load", () => finish(true), { once: true });
    image.addEventListener("error", () => finish(false), { once: true });
    image.src = `${imageBase}/${asset}`;
    if (image.complete) finish(image.naturalWidth > 0);
  });
  imagePreloadCache.set(asset, promise);
  return promise;
}

function warmAudioAsset(src) {
  if (audioWarmupCache.has(src)) return audioWarmupCache.get(src);
  const promise = new Promise((resolve) => {
    const audio = new Audio();
    let settled = false;
    const finish = (loaded) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      audio.removeEventListener("loadeddata", handleLoaded);
      audio.removeEventListener("error", handleError);
      resolve(loaded);
    };
    const handleLoaded = () => finish(true);
    const handleError = () => finish(false);
    const timeoutId = window.setTimeout(() => finish(false), 4000);
    audio.preload = "auto";
    audio.addEventListener("loadeddata", handleLoaded, { once: true });
    audio.addEventListener("error", handleError, { once: true });
    audio.src = src;
    audio.load();
  });
  audioWarmupCache.set(src, promise);
  return promise;
}

const criticalAssetsReady = Promise.all([
  ...criticalImageAssets.map(preloadImageAsset),
  ...steps.slice(0, 4).map((step) => warmAudioAsset(step.audio))
]);

criticalAssetsReady.then(() => {
  criticalAssetsLoaded = true;
  updateStartScreen();
});

function warmRemainingAssets() {
  remainingImageAssets.forEach(preloadImageAsset);
  steps.slice(4).forEach((step) => warmAudioAsset(step.audio));
}

function scheduleRemainingAssetWarmup() {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(warmRemainingAssets, { timeout: 2500 });
  } else {
    window.setTimeout(warmRemainingAssets, 500);
  }
}

function microphoneErrorDetails(error) {
  const name = error?.name || "";
  if (["NotAllowedError", "PermissionDeniedError"].includes(name)) {
    return {
      state: "denied",
      status: "浏览器没有允许麦克风。请在浏览器或系统的网站权限中改为“允许”后重试。",
      recordStatus: "麦克风未开启。可在浏览器或系统权限中允许后重试，也可以直接跟说并继续。"
    };
  }
  if (["NotFoundError", "DevicesNotFoundError"].includes(name)) {
    return {
      state: "unavailable",
      status: "没有检测到可用麦克风。连接麦克风后可以重新检查。",
      recordStatus: "没有检测到麦克风，可以直接跟说并继续。"
    };
  }
  if (["NotReadableError", "TrackStartError", "AbortError"].includes(name)) {
    return {
      state: "error",
      status: "麦克风暂时不可用，可能正被其他应用占用。关闭占用后再试。",
      recordStatus: "麦克风暂时不可用。关闭其他录音应用后可重试，也可以直接继续。"
    };
  }
  if (name === "SecurityError") {
    return {
      state: "insecure",
      status: "当前页面不能申请麦克风，请使用 localhost 或 HTTPS 打开。",
      recordStatus: "当前页面不能使用麦克风，可以直接跟说并继续。"
    };
  }
  return {
    state: "error",
    status: "麦克风没有成功开启，请稍后重试。",
    recordStatus: "麦克风没有成功开启，可以直接跟说并继续。"
  };
}

function updateMicPermissionUI(nextState, statusOverride = "") {
  const views = {
    checking: {
      title: "可选：开启麦克风",
      copy: "到“我来说”时可以录下并回放。录音不会上传。",
      status: "正在检查浏览器权限…",
      button: "检查中…",
      disabled: true
    },
    prompt: {
      title: "可选：开启麦克风",
      copy: "到“我来说”时可以录下并回放。录音不会上传。",
      status: "尚未申请。点击后浏览器会询问一次麦克风权限。",
      button: "开启麦克风",
      disabled: false
    },
    requesting: {
      title: "正在申请麦克风",
      copy: "请在浏览器的权限提示中选择“允许”。",
      status: "等待浏览器授权…",
      button: "等待授权…",
      disabled: true
    },
    granted: {
      title: "麦克风已开启",
      copy: "到“我来说”时可直接录音；声音只在当前页面回放。",
      status: "权限已获得，当前没有录音，也没有持续占用麦克风。",
      button: "已开启 ✓",
      disabled: true
    },
    denied: {
      title: "麦克风尚未开启",
      copy: "录音是可选项，不开启也能完成课程。",
      status: "请在浏览器或系统的网站权限中允许麦克风后，再点击重试。",
      button: "重试授权",
      disabled: false
    },
    unavailable: {
      title: "未检测到麦克风",
      copy: "连接麦克风后可重新检查；也可以直接跟说。",
      status: "当前没有可用的音频输入设备。",
      button: "重新检查",
      disabled: false
    },
    insecure: {
      title: "当前页面不能使用麦克风",
      copy: "请通过 localhost 或 HTTPS 打开课程。",
      status: "浏览器只允许安全页面申请麦克风。",
      button: "无法开启",
      disabled: true
    },
    unsupported: {
      title: "当前浏览器不支持录音",
      copy: "孩子仍可直接跟说，课程不会判失败。",
      status: "缺少浏览器录音能力。",
      button: "不支持录音",
      disabled: true
    },
    error: {
      title: "麦克风暂时不可用",
      copy: "关闭其他录音应用后可重试，也可以直接跟说。",
      status: "麦克风没有成功开启。",
      button: "重新尝试",
      disabled: false
    }
  };
  const view = views[nextState] || views.error;
  micPermissionState = nextState in views ? nextState : "error";
  micPermissionCard.dataset.state = micPermissionState;
  micPermissionTitle.textContent = view.title;
  micPermissionCopy.textContent = view.copy;
  micPermissionStatus.textContent = statusOverride || view.status;
  micPermissionBtn.textContent = view.button;
  micPermissionBtn.disabled = view.disabled;
  refreshIdleRecordPermissionUI();
}

function refreshIdleRecordPermissionUI() {
  if (recordingPhase !== "idle" || activeStep().kind !== "say" || recordPanel.classList.contains("hidden")) return;
  const unavailable = ["insecure", "unsupported"].includes(micPermissionState);
  recordBtn.disabled = ["checking", "requesting"].includes(micPermissionState);
  if (micPermissionState === "granted") {
    recordBtnText.textContent = "开始录音";
  } else if (micPermissionState === "denied") {
    recordBtnText.textContent = "重试或直接跟说";
  } else if (["unavailable", "error"].includes(micPermissionState)) {
    recordBtnText.textContent = "重试或直接跟说";
  } else if (unavailable) {
    recordBtnText.textContent = "不录音，直接跟说";
  } else if (["checking", "requesting"].includes(micPermissionState)) {
    recordBtnText.textContent = "检查麦克风…";
  } else {
    recordBtnText.textContent = "用麦克风说";
  }

  if (recordingUrls.has(state.stepIndex)) {
    recordStatus.textContent = "已经录好啦，可以听听自己的声音。";
  } else if (micPermissionState === "granted") {
    recordStatus.textContent = "麦克风已开启。点击开始录音，说完后点停止。";
  } else if (micPermissionState === "denied") {
    recordStatus.textContent = "麦克风未开启。可以重试，也可以直接跟说并继续。";
  } else if (unavailable) {
    recordStatus.textContent = "当前不能录音，仍可直接跟说，让角色回应。";
  } else {
    recordStatus.textContent = "点击后会先说明用途，再由你决定是否开启麦克风。";
  }
}

async function checkMicrophonePermission() {
  if (!window.isSecureContext) {
    updateMicPermissionUI("insecure");
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    updateMicPermissionUI("unsupported");
    return;
  }
  if (!navigator.permissions?.query) {
    updateMicPermissionUI("prompt");
    return;
  }
  try {
    if (micPermissionStatusHandle) micPermissionStatusHandle.onchange = null;
    micPermissionStatusHandle = await navigator.permissions.query({ name: "microphone" });
    const applyPermissionState = () => {
      const nextState = ["granted", "denied", "prompt"].includes(micPermissionStatusHandle.state)
        ? micPermissionStatusHandle.state
        : "prompt";
      updateMicPermissionUI(nextState);
    };
    micPermissionStatusHandle.onchange = applyPermissionState;
    applyPermissionState();
  } catch {
    // Safari/iOS may not support querying the microphone permission name.
    updateMicPermissionUI("prompt");
  }
}

async function requestMicrophonePermission() {
  if (micPermissionRequesting) return;
  if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    await checkMicrophonePermission();
    return;
  }

  micPermissionRequesting = true;
  updateMicPermissionUI("requesting");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    releaseMediaStream(stream);
    updateMicPermissionUI("granted");
  } catch (error) {
    const details = microphoneErrorDetails(error);
    updateMicPermissionUI(details.state, details.status);
  } finally {
    micPermissionRequesting = false;
  }
}

function activeStep() {
  return steps[state.stepIndex];
}

function setAudioButtonState(buttonState) {
  audioBtn.classList.toggle("is-playing", buttonState === "playing");
  audioBtn.classList.toggle("is-paused", buttonState === "paused");
  if (buttonState === "playing") {
    audioBtnIcon.textContent = "Ⅱ";
    audioBtnText.textContent = "暂停";
    audioBtn.setAttribute("aria-label", "暂停英文");
  } else if (buttonState === "paused") {
    audioBtnIcon.textContent = "▶";
    audioBtnText.textContent = "继续";
    audioBtn.setAttribute("aria-label", "继续播放英文");
  } else {
    audioBtnIcon.textContent = "▶";
    audioBtnText.textContent = "听一听";
    audioBtn.setAttribute("aria-label", "播放英文");
  }
}

function cancelPendingAdvance() {
  window.clearTimeout(pendingAdvanceTimer);
  pendingAdvanceTimer = null;
}

function scheduleAdvance(expectedStepIndex, delay = 1600, { focus = false } = {}) {
  cancelPendingAdvance();
  pendingAdvanceTimer = window.setTimeout(() => {
    pendingAdvanceTimer = null;
    if (state.stepIndex !== expectedStepIndex || lessonScreen.classList.contains("hidden")) return;
    moveStep(1, { focus });
  }, delay);
}

function stopPromptAudio({ cancelAdvance = true } = {}) {
  if (cancelAdvance) cancelPendingAdvance();
  promptAudio.onended = null;
  promptAudio.onerror = null;
  promptAudio.pause();
  try {
    promptAudio.currentTime = 0;
  } catch {
    // Some browsers do not expose currentTime until metadata is ready.
  }
  currentAudio = null;
  setAudioButtonState("idle");
}

function playAudio(src, {
  showError = true,
  trackStep = null,
  autoAdvance = false,
  onEnded = null,
  onError = null
} = {}) {
  stopPromptAudio();
  const expectedStepIndex = Number.isInteger(trackStep) ? trackStep : state.stepIndex;
  let settled = false;
  const handleError = (error) => {
    if (settled) return;
    settled = true;
    const errorName = error?.name || (promptAudio.error ? `MediaError:${promptAudio.error.code}` : "UnknownError");
    promptAudio.dataset.lastError = errorName;
    console.warn("Prompt audio playback failed", { src: promptAudio.currentSrc || src, error: errorName });
    if (currentAudio === promptAudio) currentAudio = null;
    setAudioButtonState("idle");
    if (showError) showSceneFeedback("声音暂时没播放，点“听一听”或手动继续。", 2200);
    if (typeof onError === "function") onError();
  };

  currentAudio = promptAudio;
  delete promptAudio.dataset.lastError;
  promptAudio.src = src;
  promptAudio.preload = "auto";
  promptAudio.onended = () => {
    if (settled) return;
    settled = true;
    if (currentAudio === promptAudio) currentAudio = null;
    setAudioButtonState("idle");
    if (Number.isInteger(trackStep) && !state.audioCompletedSteps.includes(trackStep)) {
      state.audioCompletedSteps.push(trackStep);
      saveState();
    }
    if (typeof onEnded === "function") onEnded();
    if (autoAdvance && state.stepIndex === expectedStepIndex && activeStep().autoNext) {
      scheduleAdvance(expectedStepIndex, activeStep().holdMs || 2400);
    }
  };
  promptAudio.onerror = handleError;
  promptAudio.load();
  setAudioButtonState("playing");
  return promptAudio.play().catch(handleError);
}

function playCurrentAudio() {
  const step = activeStep();
  return playAudio(step.audio, {
    trackStep: state.stepIndex,
    autoAdvance: Boolean(step.autoNext)
  });
}

function toggleCurrentAudio() {
  cancelPendingAdvance();
  if (currentAudio === promptAudio && !promptAudio.ended && promptAudio.src) {
    if (promptAudio.paused) {
      setAudioButtonState("playing");
      promptAudio.play().catch(() => {
        setAudioButtonState("paused");
        showSceneFeedback("点一下“听一听”再次播放。", 1800);
      });
    } else {
      promptAudio.pause();
      setAudioButtonState("paused");
    }
    return;
  }
  playCurrentAudio();
}

function updatePhaseProgress() {
  const phase = activeStep().phase;
  phaseNameEl.textContent = phaseLabels[phase - 1];
  phaseNowEl.textContent = String(phase);
  phaseTrackEls.forEach((item, index) => {
    const itemPhase = index + 1;
    item.classList.toggle("done", state.completed || itemPhase < phase);
    item.classList.toggle("active", !state.completed && itemPhase === phase);
  });

  const phaseStepIndices = steps
    .map((step, index) => ({ phase: step.phase, index }))
    .filter((item) => item.phase === phase)
    .map((item) => item.index);
  const phaseStepPosition = Math.max(0, phaseStepIndices.indexOf(state.stepIndex));
  const unit = phase === 1 ? "幕" : "步";
  phaseStepLabel.textContent = phaseStepIndices.length > 1
    ? `${phaseLabels[phase - 1]}，第 ${phaseStepPosition + 1} ${unit}，共 ${phaseStepIndices.length} ${unit}`
    : `${phaseLabels[phase - 1]}，当前任务`;
  phaseStepTrack.replaceChildren(...phaseStepIndices.map((_, index) => {
    const dot = document.createElement("span");
    dot.classList.toggle("done", index < phaseStepPosition);
    dot.classList.toggle("active", index === phaseStepPosition);
    return dot;
  }));
}

function animateScene() {
  sceneFrame.classList.remove("is-changing");
  void sceneFrame.offsetWidth;
  sceneFrame.classList.add("is-changing");
}

async function renderSceneImage(step, expectedStepIndex) {
  sceneImage.alt = step.alt;
  if (sceneImage.dataset.asset === step.image) return;
  const token = ++sceneRenderToken;
  sceneFrame.classList.add("is-loading-image");
  const loaded = await preloadImageAsset(step.image);
  if (token !== sceneRenderToken || state.stepIndex !== expectedStepIndex) return;
  sceneFrame.classList.remove("is-loading-image");
  if (!loaded) {
    showSceneFeedback("画面暂时没加载好，仍可听声音继续。", 2200);
    return;
  }
  sceneImage.src = `${imageBase}/${step.image}`;
  sceneImage.dataset.asset = step.image;
  animateScene();
}

function resetTransientPanels() {
  objectHotspot.classList.add("hidden");
  objectHotspot.classList.remove("found");
  sceneFeedback.classList.add("hidden");
  sceneFrame.classList.remove("voice-success");
  interactionSlot.classList.remove("hidden");
  journeyCue.classList.remove("hidden");
  actionPanel.classList.add("hidden");
  recordPanel.classList.add("hidden");
  micValueCard.classList.add("hidden");
  missionPanel.classList.add("hidden");
  finishPanel.classList.add("hidden");
  stageHeading.classList.remove("hidden");
  sceneFrame.classList.remove("hidden");
  speechLine.classList.remove("hidden");
  lessonControls.classList.remove("hidden");
  window.clearTimeout(feedbackTimer);
  stopMissionTimer();
}

function renderJourneyCue(step) {
  const phaseStepCount = steps.filter((item) => item.phase === step.phase).length;
  if (step.kind === "story") {
    journeyCueIcon.textContent = step.autoNext ? "▶" : "✦";
    journeyCueTitle.textContent = step.autoNext ? "故事正在连续播放" : "看画面，听角色说";
    journeyCueCopy.textContent = step.autoNext
      ? `这一段会自己往下讲；到需要孩子参与时会停下。当前阶段共 ${phaseStepCount} 步。`
      : "动作、单词或短句都可以，不需要追求一次说完整。";
    return;
  }
  if (step.kind === "find") {
    journeyCueIcon.textContent = "👟";
    journeyCueTitle.textContent = state.foundShoes ? "找到了，准备做动作" : "轮到孩子找鞋";
    journeyCueCopy.textContent = state.foundShoes
      ? "角色回应后会自动进入下一步。"
      : "直接点画面里的绿色鞋；找错了可以继续试。";
    return;
  }
  journeyCue.classList.add("hidden");
}

function updateNextButton(step) {
  nextBtn.disabled = false;
  if (step.kind === "story" && step.autoNext) {
    nextBtn.innerHTML = "手动下一步 <span aria-hidden=\"true\">→</span>";
  } else if (step.kind === "find") {
    nextBtn.innerHTML = "找到后自动继续 <span aria-hidden=\"true\">→</span>";
  } else if (step.kind === "act") {
    nextBtn.innerHTML = "做完后自动继续 <span aria-hidden=\"true\">→</span>";
  } else if (step.kind === "say") {
    nextBtn.innerHTML = "暂不录音，继续 <span aria-hidden=\"true\">→</span>";
  } else if (step.kind === "mission") {
    nextBtn.innerHTML = "记录后继续 <span aria-hidden=\"true\">→</span>";
  } else {
    nextBtn.innerHTML = state.stepIndex === steps.length - 2
      ? "完成课程 <span aria-hidden=\"true\">→</span>"
      : "继续 <span aria-hidden=\"true\">→</span>";
  }
}

function renderStep({ play = false, focus = false, scroll = true } = {}) {
  stopPromptAudio();
  stopRecordingIfNeeded();
  resetTransientPanels();

  const step = activeStep();
  const expectedStepIndex = state.stepIndex;
  updatePhaseProgress();
  stepEyebrowEl.textContent = step.eyebrow;
  stepTitleEl.textContent = step.title;
  renderSceneImage(step, expectedStepIndex);
  speakerChip.textContent = step.speaker;
  lineTextEl.textContent = step.line;
  coachTitleEl.textContent = step.coachTitle;
  coachCopyEl.textContent = step.coachCopy;
  successCopyEl.textContent = step.success;
  renderJourneyCue(step);

  backBtn.disabled = state.stepIndex === 0;
  updateNextButton(step);

  if (step.kind === "find") renderFindStep();
  if (step.kind === "act") renderActionStep();
  if (step.kind === "say") renderRecordStep();
  if (step.kind === "mission") renderMissionStep();
  if (step.kind === "finish") renderFinishStep();

  saveState();
  if (play && step.kind !== "finish") playCurrentAudio();
  if (focus && step.kind !== "finish") {
    stepTitleEl.setAttribute("tabindex", "-1");
    stepTitleEl.focus({ preventScroll: true });
  }
  if (scroll) window.scrollTo({ top: 0, behavior: "auto" });
}

function renderFindStep() {
  objectHotspot.classList.remove("hidden");
  objectHotspot.classList.toggle("found", state.foundShoes);
  nextBtn.disabled = !state.foundShoes;
  if (state.foundShoes) showSceneFeedback("找到了！My shoes!", 0);
}

function renderActionStep() {
  actionPanel.classList.remove("hidden");
  actionOptionBtns.forEach((button) => {
    const selected = button.dataset.actionResult === state.actionResult;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  nextBtn.disabled = !state.actionDone;
}

function renderRecordStep() {
  recordPanel.classList.remove("hidden");
  hideMicValuePrompt();
  recordTarget.textContent = activeStep().line;
  recordBtn.classList.remove("is-recording");
  recordBtnText.textContent = "开始录音";
  recordBtn.disabled = false;
  const savedUrl = recordingUrls.get(state.stepIndex);
  if (savedUrl) {
    recordPlayback.src = savedUrl;
    recordPlayback.classList.remove("hidden");
    deleteRecordingBtn.classList.remove("hidden");
    recordStatus.textContent = "已经录好啦，可以听听自己的声音。";
  } else {
    recordPlayback.removeAttribute("src");
    recordPlayback.classList.add("hidden");
    deleteRecordingBtn.classList.add("hidden");
  }
  refreshIdleRecordPermissionUI();
}

function renderMissionStep() {
  missionPanel.classList.remove("hidden");
  nextBtn.disabled = !state.missionResult;
  const isResultOpen = Boolean(state.missionReturnedAt) || missionResult.dataset.open === "true";
  missionIntro.classList.toggle("hidden", Boolean(state.missionStartedAt));
  missionWait.classList.toggle("hidden", !state.missionStartedAt || Boolean(state.missionResult) || isResultOpen);
  missionResult.classList.toggle("hidden", !state.missionStartedAt || (!state.missionResult && !isResultOpen));

  resultOptionBtns.forEach((button) => {
    const selected = button.dataset.result === state.missionResult;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  if (state.missionStartedAt && !state.missionResult && !isResultOpen) {
    startMissionTimer();
  }
  if (state.missionResult) {
    missionWait.classList.add("hidden");
    missionResult.classList.remove("hidden");
    missionResult.dataset.open = "true";
  }
}

function renderFinishStep() {
  stageHeading.classList.add("hidden");
  sceneFrame.classList.add("hidden");
  speechLine.classList.add("hidden");
  interactionSlot.classList.add("hidden");
  finishPanel.classList.remove("hidden");
  lessonControls.classList.add("hidden");
  finishBtn.disabled = state.completed;
  finishBtn.textContent = state.completed ? "已保存在当前设备 ✓" : "保存今天的完成记录";
  if (state.completed) {
    phaseNameEl.textContent = "已完成";
    phaseNowEl.textContent = "7";
    phaseTrackEls.forEach((item) => {
      item.classList.add("done");
      item.classList.remove("active");
    });
  }
}

function showSceneFeedback(message, duration = 1800) {
  window.clearTimeout(feedbackTimer);
  sceneFeedback.textContent = message;
  sceneFeedback.classList.remove("hidden");
  if (duration > 0) {
    feedbackTimer = window.setTimeout(() => {
      sceneFeedback.classList.add("hidden");
    }, duration);
  }
}

function completeAndAdvance({
  expectedStepIndex = state.stepIndex,
  feedback,
  feedbackAudio = `${benchmarkAudioBase}/you-did-it.mp3`,
  delay = 1800,
  voiceResult = false
} = {}) {
  if (state.stepIndex !== expectedStepIndex) return;
  nextBtn.disabled = false;
  if (voiceResult) sceneFrame.classList.add("voice-success");
  if (feedback) showSceneFeedback(feedback, delay);
  if (feedbackAudio) playAudio(feedbackAudio, { showError: false });
  scheduleAdvance(expectedStepIndex, delay, { focus: false });
}

function completeSpokenStep(expectedStepIndex = state.stepIndex) {
  if (state.stepIndex !== expectedStepIndex || activeStep().kind !== "say") return;
  if (!state.spokenCompletedSteps.includes(expectedStepIndex)) {
    state.spokenCompletedSteps.push(expectedStepIndex);
    saveState();
  }
  micValueCard.classList.add("hidden");
  recordControls.classList.remove("hidden");
  completeAndAdvance({
    expectedStepIndex,
    feedback: activeStep().voiceFeedback || "角色听见啦！",
    delay: 2000,
    voiceResult: true
  });
}

function showMicValuePrompt() {
  if (activeStep().kind !== "say") return;
  const canRequest = !["insecure", "unsupported"].includes(micPermissionState);
  micValueCopy.textContent = activeStep().line === "I'm ready!"
    ? "说 “I'm ready!”，Nia 就会回应并打开门。要使用麦克风吗？"
    : `说 “${activeStep().line}”，Lumo 就会回应你。要使用麦克风吗？`;
  micValueAllowBtn.classList.toggle("hidden", !canRequest);
  micValueSkipBtn.textContent = canRequest ? "我说完了，不录音" : "我说完了，继续故事";
  micValueCard.classList.remove("hidden");
  recordControls.classList.add("hidden");
  recordStatus.textContent = canRequest
    ? "先说明用途，再由家长决定是否弹出系统权限。"
    : "当前不能录音，但开口和动作仍然算完成。";
  micValueSkipBtn.focus({ preventScroll: true });
}

function hideMicValuePrompt() {
  micValueCard.classList.add("hidden");
  recordControls.classList.remove("hidden");
}

function moveStep(delta, { focus = true } = {}) {
  cancelPendingAdvance();
  const target = Math.max(0, Math.min(steps.length - 1, state.stepIndex + delta));
  if (target === state.stepIndex) return;
  state.stepIndex = target;
  renderStep({ play: true, focus, scroll: focus });
}

function releaseMediaStream(stream = mediaStream) {
  if (!stream) return;
  stream.getTracks().forEach((track) => track.stop());
  if (mediaStream === stream) mediaStream = null;
}

function stopRecordingIfNeeded() {
  recordingRequestToken += 1;
  if (recordingPhase === "requesting") {
    recordingPhase = "idle";
    activeRecordingStep = null;
    recordBtn.disabled = false;
  }
  if (mediaRecorder?.state === "recording") {
    recordingPhase = "stopping";
    mediaRecorder.stop();
  }
  releaseMediaStream();
}

function supportedAudioMimeType() {
  if (!window.MediaRecorder) return "";
  return ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

async function startRecording() {
  if (recordingPhase !== "idle") return;
  if (!window.isSecureContext) {
    updateMicPermissionUI("insecure");
    recordStatus.textContent = "当前页面不能使用麦克风，可以直接跟说并继续。";
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    updateMicPermissionUI("unsupported");
    recordStatus.textContent = "当前浏览器暂不支持录音，可以直接跟说并继续。";
    return;
  }

  hideMicValuePrompt();
  stopPromptAudio();
  recordingPhase = "requesting";
  const requestedStep = state.stepIndex;
  activeRecordingStep = requestedStep;
  const requestToken = ++recordingRequestToken;
  recordBtn.disabled = true;
  recordBtnText.textContent = "准备录音…";
  recordStatus.textContent = "正在请求麦克风权限。";
  updateMicPermissionUI("requesting");

  try {
    const requestedStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    if (requestToken !== recordingRequestToken || recordingPhase !== "requesting") {
      releaseMediaStream(requestedStream);
      return;
    }

    mediaStream = requestedStream;
    updateMicPermissionUI("granted");
    const mimeType = supportedAudioMimeType();
    const recorder = new MediaRecorder(requestedStream, mimeType ? { mimeType } : undefined);
    const chunks = [];
    mediaRecorder = recorder;

    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    });

    recorder.addEventListener("stop", () => {
      const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
      const oldUrl = recordingUrls.get(requestedStep);
      if (oldUrl) URL.revokeObjectURL(oldUrl);
      const url = URL.createObjectURL(blob);
      recordingUrls.set(requestedStep, url);
      releaseMediaStream(requestedStream);
      state.recordingAttempts += 1;
      if (!state.spokenCompletedSteps.includes(requestedStep)) {
        state.spokenCompletedSteps.push(requestedStep);
      }
      saveState();
      if (mediaRecorder === recorder) {
        mediaRecorder = null;
        recordingPhase = "idle";
        activeRecordingStep = null;
      }
      recordBtn.disabled = false;
      if (requestedStep === state.stepIndex && activeStep().kind === "say") {
        renderRecordStep();
        completeSpokenStep(requestedStep);
      }
    }, { once: true });

    recorder.start();
    recordingPhase = "recording";
    recordBtn.disabled = false;
    recordBtn.classList.add("is-recording");
    recordBtnText.textContent = "停止录音";
    recordStatus.textContent = "正在录音…说完后点停止。";
    deleteRecordingBtn.classList.add("hidden");
    recordPlayback.classList.add("hidden");
  } catch (error) {
    if (requestToken === recordingRequestToken) {
      releaseMediaStream();
      mediaRecorder = null;
      recordingPhase = "idle";
      activeRecordingStep = null;
      recordBtn.disabled = false;
      recordBtn.classList.remove("is-recording");
      const details = microphoneErrorDetails(error);
      updateMicPermissionUI(details.state, details.status);
      if (state.stepIndex === requestedStep && activeStep().kind === "say") {
        recordStatus.textContent = details.recordStatus;
      }
    }
  }
}

function stopRecording() {
  if (recordingPhase === "recording" && mediaRecorder?.state === "recording") {
    recordingPhase = "stopping";
    mediaRecorder.stop();
    recordBtn.disabled = true;
    recordBtn.classList.remove("is-recording");
    recordBtnText.textContent = "处理中…";
    recordStatus.textContent = "正在准备回放。";
  }
}

function deleteCurrentRecording() {
  const url = recordingUrls.get(state.stepIndex);
  if (url) URL.revokeObjectURL(url);
  recordingUrls.delete(state.stepIndex);
  renderRecordStep();
}

function startMissionTimer() {
  stopMissionTimer();
  updateMissionTimer();
  missionInterval = window.setInterval(updateMissionTimer, 1000);
}

function stopMissionTimer() {
  window.clearInterval(missionInterval);
  missionInterval = null;
}

function updateMissionTimer() {
  if (!state.missionStartedAt) {
    missionTimer.textContent = "00:00";
    return;
  }
  const elapsed = Math.max(0, Math.floor((Date.now() - state.missionStartedAt) / 1000));
  const minutes = Math.min(99, Math.floor(elapsed / 60));
  const seconds = elapsed % 60;
  missionTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function resetLesson() {
  stopPromptAudio();
  stopMissionTimer();
  stopRecordingIfNeeded();
  recordingUrls.forEach((url) => URL.revokeObjectURL(url));
  recordingUrls.clear();
  clearSavedState();
  state = defaultState();
  missionResult.dataset.open = "false";
  startScreen.classList.remove("hidden");
  lessonScreen.classList.add("hidden");
  updateStartScreen();
  phaseNameEl.textContent = "准备";
  phaseNowEl.textContent = "0";
  phaseTrackEls.forEach((item) => item.classList.remove("done", "active"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startBtn.addEventListener("click", () => {
  if (startBtn.disabled) return;
  if (state.completed) {
    clearSavedState();
    state = defaultState();
    missionResult.dataset.open = "false";
  }
  startScreen.classList.add("hidden");
  lessonScreen.classList.remove("hidden");
  scheduleRemainingAssetWarmup();
  renderStep({ play: true, focus: true });
});

resetBtn.addEventListener("click", resetLesson);
micPermissionBtn.addEventListener("click", requestMicrophonePermission);
audioBtn.addEventListener("click", toggleCurrentAudio);
backBtn.addEventListener("click", () => moveStep(-1));
nextBtn.addEventListener("click", () => moveStep(1));

objectHotspot.addEventListener("click", (event) => {
  event.stopPropagation();
  if (activeStep().kind !== "find") return;
  state.foundShoes = true;
  saveState();
  objectHotspot.classList.add("found");
  nextBtn.disabled = false;
  renderJourneyCue(activeStep());
  completeAndAdvance({
    expectedStepIndex: state.stepIndex,
    feedback: "找到了！My shoes!",
    feedbackAudio: `${benchmarkAudioBase}/my-shoes.mp3`,
    delay: 1900
  });
});

sceneFrame.addEventListener("click", (event) => {
  if (activeStep().kind !== "find" || state.foundShoes || event.target === objectHotspot) return;
  state.wrongFindAttempts += 1;
  saveState();
  showSceneFeedback("再看看星星地垫上，绿色的鞋在哪里？", 2200);
});

actionOptionBtns.forEach((button) => {
  button.addEventListener("click", () => {
    state.actionDone = true;
    state.actionResult = button.dataset.actionResult;
    saveState();
    renderActionStep();
    completeAndAdvance({
      expectedStepIndex: state.stepIndex,
      feedback: button.dataset.actionResult === "independent" ? "动作完成！鞋穿上啦。" : "一起完成也很棒，准备开口啦。",
      delay: 1800
    });
  });
});

recordBtn.addEventListener("click", () => {
  if (recordingPhase === "recording") {
    stopRecording();
  } else if (recordingPhase === "idle") {
    if (micPermissionState === "granted") {
      startRecording();
    } else {
      showMicValuePrompt();
    }
  }
});

micValueAllowBtn.addEventListener("click", () => {
  hideMicValuePrompt();
  startRecording();
});

micValueSkipBtn.addEventListener("click", () => {
  completeSpokenStep(state.stepIndex);
});

deleteRecordingBtn.addEventListener("click", deleteCurrentRecording);

missionStartBtn.addEventListener("click", () => {
  state.missionStartedAt = Date.now();
  state.missionReturnedAt = null;
  state.missionResult = null;
  missionResult.dataset.open = "false";
  saveState();
  playAudio(`${benchmarkAudioBase}/find-your-shoes.mp3`, { showError: false });
  renderMissionStep();
});

missionReturnBtn.addEventListener("click", () => {
  stopMissionTimer();
  state.missionReturnedAt = Date.now();
  saveState();
  missionWait.classList.add("hidden");
  missionResult.classList.remove("hidden");
  missionResult.dataset.open = "true";
});

resultOptionBtns.forEach((button) => {
  button.addEventListener("click", () => {
    state.missionResult = button.dataset.result;
    saveState();
    resultOptionBtns.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    nextBtn.disabled = false;
    completeAndAdvance({
      expectedStepIndex: state.stepIndex,
      feedback: button.dataset.result === "not-today" ? "今天不想做也没关系，我们一起收尾。" : "生活任务完成，回到故事里！",
      delay: 1800
    });
  });
});

finishBtn.addEventListener("click", () => {
  state.completed = true;
  state.completedAt = Date.now();
  saveState();
  renderFinishStep();
  coachTitleEl.textContent = "完成记录已保存在本机";
  coachCopyEl.textContent = "没有上传录音或儿童个人信息。下一次真实出门时，再观察一次自然回应。";
  successCopyEl.textContent = "真实记录动作、单词或短句，不追求一次说得完美。";
  playAudio(`${benchmarkAudioBase}/you-did-it.mp3`, { showError: false });
});

window.addEventListener("beforeunload", () => {
  stopPromptAudio();
  stopMissionTimer();
  stopRecordingIfNeeded();
  recordingUrls.forEach((url) => URL.revokeObjectURL(url));
});

window.addEventListener("pagehide", () => {
  stopPromptAudio();
  stopMissionTimer();
  stopRecordingIfNeeded();
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) return;
  cancelPendingAdvance();
  if (currentAudio === promptAudio && !promptAudio.paused) {
    promptAudio.pause();
    setAudioButtonState("paused");
  }
});

updateStartScreen();
checkMicrophonePermission();
if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
const restorePageTop = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "auto" });
};
restorePageTop();
window.addEventListener("pageshow", restorePageTop);
window.addEventListener("load", () => window.setTimeout(restorePageTop, 0), { once: true });
