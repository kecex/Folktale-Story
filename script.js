const TOTAL_CHAPTERS = 9;

const STORAGE = {
  introSeen: "legendhunter.intro.seen",
  solved: (n) => `legendhunter.chapter.${n}.solved`,
  completed: (n) => `legendhunter.chapter.${n}.completed`,
  audioEnabled: "legendhunter.audio.enabled",
};

const CHAPTERS = {
  1: {
    shortTitle: "Puteri Gunung Ledang",
    homeTitle: "The mountain princess",
    region: "Johor",
    icon: "Mountain",
    image: "img/puteri gunung ledang 2.jpg",
    badge: "Moonlit Mountain",
    theme: "Mountain Mist",
    artClass: "art-ledang",
    stamp: "Mist Trail",
    summary: "A mountain princess, a royal request, and a distance no kingdom can cross.",
  },
  2: {
    shortTitle: "Dayang Senandung",
    homeTitle: "The Voice of Dayang Senandung",
    region: "Pahang",
    icon: "Song",
    image: "img/dayang senandung 2.jpeg",
    badge: "Golden Voice",
    theme: "Royal Lament",
    artClass: "art-dayang",
    stamp: "Silver Verse",
    summary: "A sorrowful princess whose voice changes the course of her fate.",
  },
  3: {
    shortTitle: "Sang Kancil",
    homeTitle: "Kancil's lesson",
    region: "Across the Malay world",
    icon: "Forest",
    image: "img/sang kancil 2.jpg",
    badge: "Forest Wit",
    theme: "Trickster Forest",
    artClass: "art-kancil",
    stamp: "Quick Mind",
    summary: "Cleverness and patience turn a small creature into a legend.",
  },
  4: {
    shortTitle: "Mahsuri",
    homeTitle: "Hidden number",
    region: "Langkawi, Kedah",
    icon: "Island",
	image: "img/mahsuri 2.png",
    badge: "White Cloth Oath",
    theme: "Island Curse",
    artClass: "art-mahsuri",
    stamp: "Island Echo",
    summary: "A tale of innocence, betrayal, and a curse that lingers for generations.",
  },
  5: {
    shortTitle: "Santubong & Sejinjang",
    homeTitle: "Puteri Santubong and Puteri Sejinjang",
    region: "Sarawak",
    icon: "River",
	image: "img/puteri sejinjang dan puteri santubong 2.png",
    badge: "Twin Sisters",
    theme: "River Sisters",
    artClass: "art-santubong",
    stamp: "River Weave",
    summary: "Two princesses turn skill, rivalry, and memory into landscape itself.",
  },
  6: {
    shortTitle: "Sang Kelembai",
    homeTitle: "The Legend of Sang Kelembai",
    region: "Perak",
    icon: "Stone",
	image: "img/sang kelembai 2.jpeg",
    badge: "Stone Whisper",
    theme: "Ancient Curse",
    artClass: "art-kelembai",
    stamp: "Stone Gaze",
    summary: "A single glance can turn fear into folklore and memory into warning.",
  },
  7: {
    shortTitle: "Puteri Lindungan Bulan",
    homeTitle: "Puteri Lindungan Bulan",
    region: "Kedah",
    icon: "Moon",
	image: "img/puteri lindungan bulan 2.png",
    badge: "Moon Veil",
    theme: "Moonlit Refuge",
    artClass: "art-bulan",
    stamp: "Lunar Shield",
    summary: "A princess disappears into moonlight to escape a threat too near to ignore.",
  },
  8: {
  shortTitle: "Batu Belah Batu Bertangkup",
  homeTitle: "Batu Belah Batu Bertangkup",
  region: "Selangor",
  icon: "Rock",
  image: "img/batu belah batu bertangkup 2.png",
  badge: "Family First",
  theme: "Legendary Rock",
  artClass: "art-batu-belah",
  stamp: "Mother's Love",
  summary: "A touching folktale about family, love, and the importance of appreciating those who care for us."
  },
  9: {
    shortTitle: "Cik Siti Wan Kembang",
    homeTitle: "Cik Siti Wan Kembang",
    region: "Kelantan",
    icon: "Queen",
	image: "img/cik siti wan kembang 2.jpeg",
    badge: "Royal Kijang",
    theme: "Queen's Legacy",
    artClass: "art-kembang",
    stamp: "Golden Crest",
    summary: "A queen, a deer, and a legacy remembered as both symbol and story.",
  },
};

function buildThumbScene(chapter) {
  const scenes = {
    1: `
      <div class="thumb-scene">
        <div class="scene-moon"></div>
        <div class="scene-mountain"></div>
        <div class="scene-castle"></div>
      </div>
    `,
    2: `
      <div class="thumb-scene">
        <div class="scene-cloud"></div>
        <div class="scene-singer"></div>
        <div class="scene-note note-a"></div>
        <div class="scene-note note-b"></div>
      </div>
    `,
    3: `
      <div class="thumb-scene">
        <div class="scene-bush"></div>
        <div class="scene-kancil"></div>
        <div class="scene-log"></div>
      </div>
    `,
    4: `
      <div class="thumb-scene">
        <div class="scene-island"></div>
        <div class="scene-cloth"></div>
        <div class="scene-wave"></div>
      </div>
    `,
    5: `
      <div class="thumb-scene">
        <div class="scene-river"></div>
        <div class="scene-sister sister-a"></div>
        <div class="scene-sister sister-b"></div>
      </div>
    `,
    6: `
      <div class="thumb-scene">
        <div class="scene-stone"></div>
        <div class="scene-stone small-a"></div>
        <div class="scene-stone small-b"></div>
      </div>
    `,
    7: `
      <div class="thumb-scene">
        <div class="scene-big-moon"></div>
        <div class="scene-princess"></div>
        <div class="scene-stars"></div>
      </div>
    `,
    8: `
      <div class="thumb-scene">
        <div class="scene-shell"></div>
        <div class="scene-wave-band"></div>
        <div class="scene-chant-lines"></div>
      </div>
    `,
    9: `
      <div class="thumb-scene">
        <div class="scene-crown"></div>
        <div class="scene-kijang"></div>
        <div class="scene-sun"></div>
      </div>
    `,
  };

  return scenes[chapter] || `<div class="thumb-scene"></div>`;
}

function buildThumbMedia(chapter, meta) {
  if (meta.image) {
    return `
      <div class="thumb-photo-wrap">
        <img class="thumb-photo" src="${meta.image}" alt="${meta.shortTitle}" />
      </div>
    `;
  }

  return buildThumbScene(chapter);
}

function normalize(value) {
  return (value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function isSolved(chapter) {
  return sessionStorage.getItem(STORAGE.solved(chapter)) === "1";
}

function isCompleted(chapter) {
  return sessionStorage.getItem(STORAGE.completed(chapter)) === "1";
}

function setSolved(chapter) {
  sessionStorage.setItem(STORAGE.solved(chapter), "1");
}

function setCompleted(chapter) {
  sessionStorage.setItem(STORAGE.completed(chapter), "1");
}

function setStatus(statusNode, message, type = "") {
  if (!statusNode) {
    return;
  }

  statusNode.textContent = message;
  statusNode.className = type ? `status ${type}` : "status";
}

function setPuzzleDisabled(card, disabled) {
  card.querySelectorAll("input, button, select").forEach((element) => {
    if (!element.hasAttribute("data-lock-ignore")) {
      element.disabled = disabled;
    }
  });
}

function completedCount() {
  return Array.from({ length: TOTAL_CHAPTERS }, (_, index) => index + 1).filter((chapter) =>
    isCompleted(chapter)
  ).length;
}

function getNextStep() {
  for (let chapter = 1; chapter <= TOTAL_CHAPTERS; chapter += 1) {
    if (!isSolved(chapter)) {
      return {
        chapter,
        href: `index.html#chapter-${chapter}`,
        label: `Continue with Chapter ${chapter} Puzzle`,
      };
    }

    if (!isCompleted(chapter)) {
      return {
        chapter,
        href: `story${chapter}.html`,
        label: `Continue with Chapter ${chapter}`,
      };
    }
  }

  return {
    chapter: TOTAL_CHAPTERS,
    href: "final-page.html",
    label: "View Journey Ending",
  };
}

const AudioEngine = (() => {
  let context;
  let masterGain;
  let ambientGain;
  let audioUnlocked = false;
  let ambientInterval;

  function isEnabled() {
    return sessionStorage.getItem(STORAGE.audioEnabled) === "1";
  }

  function createContext() {
    if (!context) {
      context = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = context.createGain();
      masterGain.gain.value = 0.18;
      masterGain.connect(context.destination);
    }
  }

  async function unlock() {
    createContext();
    if (context.state === "suspended") {
      await context.resume();
    }
    audioUnlocked = true;
  }

  function playTone({ frequency = 440, duration = 0.18, type = "sine", volume = 0.08, when = 0 } = {}) {
    if (!audioUnlocked || !isEnabled()) {
      return;
    }

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startAt = context.currentTime + when;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startAt);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

    oscillator.connect(gain);
    gain.connect(masterGain);
    oscillator.start(startAt);
    oscillator.stop(startAt + duration + 0.03);
  }

  function startAmbient() {
    if (!audioUnlocked || !isEnabled()) {
      return;
    }

    if (ambientGain) {
      return;
    }

    ambientGain = context.createGain();
    ambientGain.gain.value = 0.045;
    ambientGain.connect(masterGain);

    const pad = context.createOscillator();
    pad.type = "triangle";
    pad.frequency.value = 164.81;
    pad.connect(ambientGain);
    pad.start();

    const shimmer = context.createOscillator();
    shimmer.type = "sine";
    shimmer.frequency.value = 246.94;
    shimmer.connect(ambientGain);
    shimmer.start();

    ambientGain._nodes = [pad, shimmer];

    ambientInterval = window.setInterval(() => {
      playTone({ frequency: 329.63, duration: 1.6, volume: 0.018, type: "sine" });
      playTone({ frequency: 392, duration: 1.2, volume: 0.012, type: "triangle", when: 0.3 });
    }, 4200);
  }

  function stopAmbient() {
    if (ambientInterval) {
      window.clearInterval(ambientInterval);
      ambientInterval = undefined;
    }

    if (ambientGain?._nodes) {
      ambientGain._nodes.forEach((node) => {
        try {
          node.stop();
        } catch {
          return undefined;
        }
      });
    }

    ambientGain?.disconnect();
    ambientGain = undefined;
  }

  function setEnabled(enabled) {
    sessionStorage.setItem(STORAGE.audioEnabled, enabled ? "1" : "0");

    if (!enabled) {
      stopAmbient();
      return;
    }

    unlock().then(() => {
      startAmbient();
    });
  }

  return {
    isEnabled,
    unlock,
    startAmbient,
    stopAmbient,
    setEnabled,
    success() {
      playTone({ frequency: 523.25, duration: 0.16, type: "triangle", volume: 0.07 });
      playTone({ frequency: 659.25, duration: 0.22, type: "triangle", volume: 0.06, when: 0.08 });
    },
    error() {
      playTone({ frequency: 220, duration: 0.14, type: "sawtooth", volume: 0.05 });
      playTone({ frequency: 185, duration: 0.2, type: "sawtooth", volume: 0.04, when: 0.04 });
    },
  };
})();

function buildProgressMarkup(page, currentChapter = 0) {
  const completed = completedCount();
  const dots = Array.from({ length: TOTAL_CHAPTERS }, (_, index) => {
    const chapter = index + 1;
    const state = isCompleted(chapter)
      ? "done"
      : chapter === currentChapter
        ? "current"
        : isSolved(chapter)
          ? "open"
          : "locked";

    return `<span class="progress-dot ${state}">0${chapter}</span>`;
  }).join("");

  if (page !== "home") {
    return `
      <section class="progress-shell compact">
        <div class="progress-inline">
          <strong>${completed}/${TOTAL_CHAPTERS} complete</strong>
          <div class="progress-dots compact-dots">${dots}</div>
        </div>
        <div class="progress-bar compact-bar"><span style="width:${(completed / TOTAL_CHAPTERS) * 100}%"></span></div>
      </section>
    `;
  }

  return `
    <section class="progress-shell">
      <div class="progress-copy">
        <div class="eyebrow">Journey Tracker</div>
        <h2>${completed}/${TOTAL_CHAPTERS} chapters completed</h2>
        <p>Track the folktale path from first riddle to final legend ending.</p>
      </div>
      <div class="progress-dots">${dots}</div>
      <div class="progress-bar"><span style="width:${(completed / TOTAL_CHAPTERS) * 100}%"></span></div>
    </section>
  `;
}

function injectProgressTracker() {
  const page = document.body.dataset.page;
  const currentChapter = Number(document.body.dataset.chapter || 0);
  const markup = buildProgressMarkup(page, currentChapter);

  if (page === "home") {
    const anchor = document.querySelector("[data-progress-anchor]");
    if (anchor) {
      const existing = anchor.querySelector(".progress-shell");
      if (existing) {
        existing.outerHTML = markup;
      } else {
        anchor.insertAdjacentHTML("beforeend", markup);
      }
    }
    return;
  }

  const mainContainer = document.querySelector("main .container");
  if (mainContainer) {
    const existing = mainContainer.querySelector(".progress-shell");
    if (existing) {
      existing.outerHTML = markup;
    } else {
      mainContainer.insertAdjacentHTML("afterbegin", markup);
    }
  }
}

function injectSoundToggle() {
  if (document.querySelector("[data-audio-toggle]")) {
    return;
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = "sound-toggle";
  button.setAttribute("data-audio-toggle", "");

  const render = () => {
    button.textContent = AudioEngine.isEnabled() ? "Sound: On" : "Sound: Off";
  };

  render();

  button.addEventListener("click", async () => {
    const next = !AudioEngine.isEnabled();
    if (next) {
      await AudioEngine.unlock();
    }
    AudioEngine.setEnabled(next);
    render();
  });

  document.body.appendChild(button);
}

function decorateQuizCards() {
  document.querySelectorAll("[data-chapter-card]").forEach((card) => {
    const chapter = Number(card.dataset.chapter);
    const meta = CHAPTERS[chapter];

    if (!meta || card.querySelector(".chapter-thumb")) {
      return;
    }

    card.id = `chapter-${chapter}`;
    card.dataset.region = meta.region;
    card.style.setProperty("--stagger-order", String(chapter));

    const title = card.querySelector("h3");
    title?.insertAdjacentHTML(
      "beforebegin",
      `<div class="chapter-thumb ${meta.artClass}">
        ${buildThumbMedia(chapter, meta)}
        <div class="thumb-glow"></div>
        <div class="thumb-label">${meta.region}</div>
        <div class="thumb-icon">${meta.icon}</div>
      </div>`
    );
  });
}

function renderContinueJourney() {
  const button = document.querySelector("[data-continue-link]");
  if (!button) {
    return;
  }

  const next = getNextStep();
  button.href = next.href;
  button.textContent = next.label;
}

function renderBadges() {
  const container = document.querySelector("[data-badge-grid]");
  if (!container) {
    return;
  }

  container.innerHTML = Object.entries(CHAPTERS)
    .sort(([a], [b]) => {
      const doneA = isCompleted(Number(a));
      const doneB = isCompleted(Number(b));
      if (doneA !== doneB) {
        return doneA ? -1 : 1;
      }
      return Number(a) - Number(b);
    })
    .map(([chapter, meta]) => {
      const done = isCompleted(Number(chapter));
      return `
        <article class="badge-card ${done ? "earned" : "locked-badge"}">
          <div class="badge-orb ${meta.artClass}">${done ? `0${chapter}` : "?"}</div>
          <h3>${done ? meta.badge : "Locked Stamp"}</h3>
          <p>${done ? meta.summary : `Complete Chapter ${chapter} to unlock this folktale stamp.`}</p>
        </article>
      `;
    })
    .join("");
}

function enhanceStoryPage() {
  const page = document.body.dataset.page;
  if (page !== "story") {
    return;
  }

  const chapter = Number(document.body.dataset.chapter);
  const meta = CHAPTERS[chapter];
  const hero = document.querySelector(".story-hero");
  const box = document.querySelector(".story-box");

  if (!meta || !hero || hero.querySelector(".story-cover")) {
    return;
  }

  hero.insertAdjacentHTML(
    "beforeend",
    `
      <div class="story-meta">
        <span class="pill">${meta.region}</span>
        <span class="pill">${meta.theme}</span>
        <span class="pill">${meta.stamp}</span>
      </div>
      <div class="story-cover ${meta.artClass}">
        <div class="story-cover-copy">
          <span>Folktale Atmosphere</span>
          <strong>${meta.homeTitle}</strong>
        </div>
      </div>
    `
  );

  if (box && !document.querySelector(".chapter-stamp")) {
    box.insertAdjacentHTML(
      "beforeend",
      `<div class="chapter-stamp ${meta.artClass}">
        <span>Collectible Stamp</span>
        <strong>${meta.badge}</strong>
      </div>`
    );
  }
}

function initOpeningScene() {
  if (document.body.dataset.page !== "home") {
    return;
  }

  const overlay = document.getElementById("welcome-overlay");
  const closeBtn = document.getElementById("close-welcome");

  if (!overlay || !closeBtn) {
    return;
  }

  if (sessionStorage.getItem(STORAGE.introSeen) === "1") {
    overlay.hidden = true;
    return;
  }

  overlay.hidden = false;
  closeBtn.addEventListener("click", async () => {
    sessionStorage.setItem(STORAGE.introSeen, "1");
    overlay.hidden = true;
    if (AudioEngine.isEnabled()) {
      await AudioEngine.unlock();
      AudioEngine.startAmbient();
    }
  });
}

function initHome() {
  const completionBanner = document.querySelector("[data-completion-banner]");

  decorateQuizCards();
  renderContinueJourney();
  renderBadges();

  const wirePuzzle = (card, options = {}) => {
    const chapter = options.chapter ?? Number(card.dataset.chapter);
    const gated = options.gated ?? true;
    const solved = chapter ? isSolved(chapter) : false;
    const requiredComplete = !gated || chapter === 1 ? true : isCompleted(chapter - 1);
    const status = card.querySelector("[data-status]");
    const unlockLink = card.querySelector("[data-unlock-link]");
    const reveal = card.querySelector("[data-reveal]");
    const lockedNote = card.querySelector("[data-locked-note]");
    const puzzle = card.dataset.puzzle;

    const markSolved = (message) => {
      if (chapter) {
        setSolved(chapter);
      }

      card.classList.remove("locked");
      card.classList.add("just-solved");
      window.setTimeout(() => card.classList.remove("just-solved"), 900);
      setPuzzleDisabled(card, false);
      setStatus(status, message, "success");
      AudioEngine.success();

      if (unlockLink) {
        unlockLink.hidden = false;
      }

      if (reveal) {
        reveal.hidden = false;
      }

      if (lockedNote) {
        lockedNote.hidden = true;
      }

      renderContinueJourney();
      injectProgressTracker();
    };

    if (gated && !requiredComplete) {
      card.classList.add("locked");
      setPuzzleDisabled(card, true);
      setStatus(status, `Finish Chapter ${chapter - 1} to unlock this puzzle.`);

      if (unlockLink) {
        unlockLink.hidden = true;
      }

      if (reveal) {
        reveal.hidden = true;
      }

      if (lockedNote) {
        lockedNote.hidden = false;
      }

      return;
    }

    if (!solved && gated && chapter > 1) {
      card.classList.add("newly-unlocked");
    }

    card.classList.remove("locked");
    setPuzzleDisabled(card, false);

    if (lockedNote) {
      lockedNote.hidden = true;
    }

    if (solved) {
      markSolved(chapter ? "Solved. Open the story chapter." : "Bonus lore revealed.");
      return;
    }

    if (puzzle === "text" || puzzle === "code") {
      const input = card.querySelector("[data-answer-input]");
      const button = card.querySelector("[data-check]");

      button?.addEventListener("click", () => {
        const correct = normalize(input?.value) === normalize(card.dataset.answer);
        if (correct) {
          markSolved(
            puzzle === "code" ? "Code accepted. Open the story chapter." : "Solved. Open the story chapter."
          );
          return;
        }

        setStatus(status, puzzle === "code" ? "Wrong code." : "Not quite. Try again.", "error");
        AudioEngine.error();
      });
    }

    if (puzzle === "sequence") {
      const buttons = [...card.querySelectorAll("[data-step]")];
      const progress = card.querySelector("[data-progress]");
      const answer = (card.dataset.answer || "").split("|").map(normalize);
      let picks = [];

      const render = () => {
        if (progress) {
          progress.textContent = `Current order: ${picks.join(" → ") || "none"}`;
        }
      };

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          picks.push(normalize(button.dataset.step));
          button.disabled = true;
          render();

          const latest = picks[picks.length - 1];
          const matchesPrefix = answer.slice(0, picks.length).every((item, index) => item === picks[index]);

          if (!matchesPrefix) {
            picks = [];
            buttons.forEach((element) => {
              element.disabled = false;
            });
            render();
            setStatus(status, "Wrong order. The puzzle reset.", "error");
            AudioEngine.error();
            return;
          }

          if (picks.length === answer.length) {
            markSolved("Sequence solved. Open the story chapter.");
            return;
          }

          setStatus(status, `Good. Next step after: ${latest}`);
        });
      });

      render();
    }

    if (puzzle === "multi") {
      const checkboxes = [...card.querySelectorAll("[data-option-box]")];
      const button = card.querySelector("[data-check]");
      const answer = (card.dataset.answer || "").split("|").map(normalize).sort();

      button?.addEventListener("click", () => {
        const chosen = checkboxes
          .filter((box) => box.checked)
          .map((box) => normalize(box.value))
          .sort();

        const correct = chosen.length === answer.length && chosen.every((item, index) => item === answer[index]);

        if (correct) {
          markSolved("Correct. Open the story chapter.");
          return;
        }

        setStatus(status, "Incorrect selection. Try again.", "error");
        AudioEngine.error();
      });
    }

    if (puzzle === "match") {
      const selects = [...card.querySelectorAll(".match-select")];
      const button = card.querySelector("[data-check]");

      button?.addEventListener("click", () => {
        const correct = selects.every((select) => select.value === select.dataset.ans);

        if (correct) {
          markSolved("Solved. Open the story chapter.");
          return;
        }

        setStatus(status, "Not quite. Try again.", "error");
        AudioEngine.error();
      });
    }

    if (puzzle === "mcq" || puzzle === "scenario") {
      const button = card.querySelector("[data-check]");

      button?.addEventListener("click", () => {
        const selected = card.querySelector('input[type="radio"]:checked');
        const correct = normalize(selected?.value) === normalize(card.dataset.answer);

        if (correct) {
          markSolved("Solved. Open the story chapter.");
          return;
        }

        setStatus(status, "Not quite. Try again.", "error");
        AudioEngine.error();
      });
    }

    if (puzzle === "wordsearch") {
      const wordTarget = normalize(card.dataset.answer);
      const letterButtons = [...card.querySelectorAll(".word-btn")];
      const wordDisplay = card.querySelector("[data-word]");
      const button = card.querySelector("[data-check]");

      const renderWord = () => {
        const currentWord = letterButtons
          .filter((element) => element.classList.contains("active"))
          .map((element) => element.dataset.val || "")
          .join("");

        if (wordDisplay) {
          wordDisplay.textContent = currentWord;
        }

        return currentWord;
      };

      letterButtons.forEach((letterButton) => {
        letterButton.addEventListener("click", () => {
          letterButton.classList.toggle("active");
          renderWord();
        });
      });

      button?.addEventListener("click", () => {
        const currentWord = normalize(renderWord());

        if (currentWord === wordTarget) {
          markSolved("Solved. Open the story chapter.");
          return;
        }

        setStatus(status, "Wrong combination. Try again.", "error");
        AudioEngine.error();
      });
    }

    if (puzzle === "fill-blank") {
      const button = card.querySelector("[data-check]");
      const answer = (card.dataset.answer || "").split("|").map(normalize);

      button?.addEventListener("click", () => {
        const blank1 = normalize(card.querySelector('[data-blank="1"]')?.value);
        const blank2 = normalize(card.querySelector('[data-blank="2"]')?.value);
        const correct = blank1 === answer[0] && blank2 === answer[1];

        if (correct) {
          markSolved("Solved. Open the story chapter.");
          return;
        }

        setStatus(status, "Not quite. Check your facts.", "error");
        AudioEngine.error();
      });
    }
  };

  document.querySelectorAll("[data-chapter-card]").forEach((card) => {
    wirePuzzle(card, { chapter: Number(card.dataset.chapter), gated: true });
  });

  document.querySelectorAll("[data-bonus-card]").forEach((card) => {
    wirePuzzle(card, { gated: false });
  });

  if (completionBanner) {
    completionBanner.hidden = !Array.from({ length: TOTAL_CHAPTERS }, (_, index) => index + 1).every((chapter) =>
      isCompleted(chapter)
    );
  }
}

function initStory() {
  const chapter = Number(document.body.dataset.chapter);
  const requiredSolved = Number(document.body.dataset.requiresSolved || chapter);
  const gate = document.querySelector("[data-story-gate]");
  const content = document.querySelector("[data-story-content]");
  const completeBtn = document.querySelector("[data-complete]");
  const completionState = document.querySelector("[data-completion-state]");
  const nextLink = document.querySelector("[data-next-link]");
  const lockMessage = document.querySelector("[data-lock-message]");

  if (!isSolved(requiredSolved)) {
    gate.hidden = false;
    content.hidden = true;
    setStatus(lockMessage, `This chapter is locked. Solve Chapter ${requiredSolved} on the home page first.`);
    return;
  }

  gate.hidden = true;
  content.hidden = false;

  const renderCompletion = () => {
    const done = isCompleted(chapter);
    const finalChapter = chapter === TOTAL_CHAPTERS;

    setStatus(
      completionState,
      done
        ? `Chapter ${chapter} already completed.`
        : `Chapter ${chapter} is open. Mark it complete to unlock the next puzzle.`,
      done ? "success" : ""
    );

    if (completeBtn) {
      completeBtn.textContent = done ? "Chapter confirmed" : `Confirm Chapter ${chapter}`;
      completeBtn.disabled = done;
    }

    if (nextLink) {
      nextLink.hidden = !done;
      nextLink.href = finalChapter ? "final-page.html" : "index.html#quiz";
      nextLink.textContent = finalChapter ? "View the ending" : "Next chapter";
    }
  };

  completeBtn?.addEventListener("click", () => {
    setCompleted(chapter);
    AudioEngine.success();
    renderCompletion();
    injectProgressTracker();
  });

  renderCompletion();
}

function initFinalPage() {
  const gate = document.querySelector("[data-final-gate]");
  const content = document.querySelector("[data-final-content]");
  const summary = document.querySelector("[data-final-summary]");

  if (!isCompleted(TOTAL_CHAPTERS)) {
    gate.hidden = false;
    content.hidden = true;
    return;
  }

  gate.hidden = true;
  content.hidden = false;

  if (summary) {
    summary.textContent = `${completedCount()} of ${TOTAL_CHAPTERS} chapters completed in this session. Every folktale stamp has been earned.`;
  }

  renderBadges();
}

document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem(STORAGE.audioEnabled)) {
    sessionStorage.setItem(STORAGE.audioEnabled, "1");
  }

  injectSoundToggle();
  injectProgressTracker();
  enhanceStoryPage();
  initOpeningScene();

  if (AudioEngine.isEnabled() && document.body.dataset.page !== "home") {
    document.addEventListener(
      "click",
      () => {
        AudioEngine.unlock().then(() => AudioEngine.startAmbient());
      },
      { once: true }
    );
  }

  if (document.body.dataset.page === "home") {
    initHome();
  }

  if (document.body.dataset.page === "story") {
    initStory();
  }

  if (document.body.dataset.page === "final") {
    initFinalPage();
  }
});
