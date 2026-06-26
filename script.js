const TOTAL_CHAPTERS = 9;

const STORAGE = {
  introSeen: "legendhunter.intro.seen",
  solved: (n) => `legendhunter.chapter.${n}.solved`,
  completed: (n) => `legendhunter.chapter.${n}.completed`,
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

function splitAnswer(value = "") {
  return value.split("|").map(normalize);
}

function areOrderedValuesEqual(left, right) {
  return left.length === right.length && left.every((item, index) => item === right[index]);
}

function areSortedValuesEqual(left, right) {
  return areOrderedValuesEqual([...left].sort(), [...right].sort());
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

function everyChapterCompleted() {
  return Array.from({ length: TOTAL_CHAPTERS }, (_, index) => index + 1).every((chapter) =>
    isCompleted(chapter)
  );
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

const AudioEngine = {
  isEnabled() {
    return false;
  },
  unlock() {
    return Promise.resolve();
  },
  startAmbient() {},
  stopAmbient() {},
  setEnabled() {},
  success() {},
  error() {},
};

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

function enhanceStoryVideo(meta) {
  const hero = document.querySelector(".story-hero");
  const iframe = hero?.querySelector("iframe");

  if (!hero || !iframe || iframe.closest(".story-video-shell")) {
    return;
  }

  // This wrapper gives every YouTube embed the same layout and makes the video feel like part of the chapter design.
  const videoShell = document.createElement("section");
  videoShell.className = "story-video-shell";
  videoShell.innerHTML = `
    <div class="story-video-copy">
      <span class="story-video-kicker">Story Video</span>
      <h3>Watch ${meta.shortTitle} come to life</h3>
      <p>A short visual retelling to help beginners connect the written chapter with the legend on screen.</p>
    </div>
    <div class="story-video-frame"></div>
  `;

  videoShell.querySelector(".story-video-frame")?.appendChild(iframe);
  hero.appendChild(videoShell);
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

  enhanceStoryVideo(meta);

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

function createPuzzleContext(card, options = {}) {
  const chapter = options.chapter ?? Number(card.dataset.chapter);
  const gated = options.gated ?? true;
  const status = card.querySelector("[data-status]");
  const unlockLink = card.querySelector("[data-unlock-link]");
  const reveal = card.querySelector("[data-reveal]");
  const lockedNote = card.querySelector("[data-locked-note]");

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

  return {
    card,
    chapter,
    gated,
    status,
    unlockLink,
    reveal,
    lockedNote,
    markSolved,
  };
}

function bindTextLikePuzzle(context, messages) {
  const input = context.card.querySelector("[data-answer-input]");
  const button = context.card.querySelector("[data-check]");

  button?.addEventListener("click", () => {
    const correct = normalize(input?.value) === normalize(context.card.dataset.answer);

    if (correct) {
      context.markSolved(messages.successMessage);
      return;
    }

    setStatus(context.status, messages.errorMessage, "error");
    AudioEngine.error();
  });
}

function bindSequencePuzzle(context) {
  const buttons = [...context.card.querySelectorAll("[data-step]")];
  const progress = context.card.querySelector("[data-progress]");
  const answer = splitAnswer(context.card.dataset.answer);
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
        setStatus(context.status, "Wrong order. The puzzle reset.", "error");
        AudioEngine.error();
        return;
      }

      if (picks.length === answer.length) {
        context.markSolved("Sequence solved. Open the story chapter.");
        return;
      }

      setStatus(context.status, `Good. Next step after: ${latest}`);
    });
  });

  render();
}

function bindMultiSelectPuzzle(context) {
  const checkboxes = [...context.card.querySelectorAll("[data-option-box]")];
  const button = context.card.querySelector("[data-check]");
  const answer = splitAnswer(context.card.dataset.answer);

  button?.addEventListener("click", () => {
    const chosen = checkboxes
      .filter((box) => box.checked)
      .map((box) => normalize(box.value));

    if (areSortedValuesEqual(chosen, answer)) {
      context.markSolved("Correct. Open the story chapter.");
      return;
    }

    setStatus(context.status, "Incorrect selection. Try again.", "error");
    AudioEngine.error();
  });
}

function bindMatchPuzzle(context) {
  const selects = [...context.card.querySelectorAll(".match-select")];
  const button = context.card.querySelector("[data-check]");

  button?.addEventListener("click", () => {
    const correct = selects.every((select) => select.value === select.dataset.ans);

    if (correct) {
      context.markSolved("Solved. Open the story chapter.");
      return;
    }

    setStatus(context.status, "Not quite. Try again.", "error");
    AudioEngine.error();
  });
}

function bindSingleChoicePuzzle(context) {
  const button = context.card.querySelector("[data-check]");

  button?.addEventListener("click", () => {
    const selected = context.card.querySelector('input[type="radio"]:checked');
    const correct = normalize(selected?.value) === normalize(context.card.dataset.answer);

    if (correct) {
      context.markSolved("Solved. Open the story chapter.");
      return;
    }

    setStatus(context.status, "Not quite. Try again.", "error");
    AudioEngine.error();
  });
}

function bindWordPuzzle(context) {
  const wordTarget = normalize(context.card.dataset.answer);
  const letterButtons = [...context.card.querySelectorAll(".word-btn")];
  const wordDisplay = context.card.querySelector("[data-word]");
  const button = context.card.querySelector("[data-check]");

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
    if (normalize(renderWord()) === wordTarget) {
      context.markSolved("Solved. Open the story chapter.");
      return;
    }

    setStatus(context.status, "Wrong combination. Try again.", "error");
    AudioEngine.error();
  });
}

function bindFillBlankPuzzle(context) {
  const button = context.card.querySelector("[data-check]");
  const answer = splitAnswer(context.card.dataset.answer);

  button?.addEventListener("click", () => {
    const blanks = [
      normalize(context.card.querySelector('[data-blank="1"]')?.value),
      normalize(context.card.querySelector('[data-blank="2"]')?.value),
    ];

    if (areOrderedValuesEqual(blanks, answer)) {
      context.markSolved("Solved. Open the story chapter.");
      return;
    }

    setStatus(context.status, "Not quite. Check your facts.", "error");
    AudioEngine.error();
  });
}

function wirePuzzleCard(card, options, puzzleBinders) {
  const context = createPuzzleContext(card, options);
  const { chapter, gated, status, unlockLink, reveal, lockedNote } = context;
  const solved = chapter ? isSolved(chapter) : false;
  const requiredComplete = !gated || chapter === 1 ? true : isCompleted(chapter - 1);

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
    context.markSolved(chapter ? "Solved. Open the story chapter." : "Bonus lore revealed.");
    return;
  }

  setStatus(status, chapter === 1 ? "Solve this to unlock Chapter 1." : `Chapter ${chapter} is ready.`);
  puzzleBinders[card.dataset.puzzle]?.(context);
}

function initHome() {
  const completionBanner = document.querySelector("[data-completion-banner]");

  decorateQuizCards();
  renderContinueJourney();
  renderBadges();

  // Keep puzzle behavior in a lookup table so each game type stays small and easier to edit.
  const puzzleBinders = {
    text(context) {
      bindTextLikePuzzle(context, {
        successMessage: "Solved. Open the story chapter.",
        errorMessage: "Not quite. Try again.",
      });
    },
    code(context) {
      bindTextLikePuzzle(context, {
        successMessage: "Code accepted. Open the story chapter.",
        errorMessage: "Wrong code.",
      });
    },
    sequence: bindSequencePuzzle,
    multi: bindMultiSelectPuzzle,
    match: bindMatchPuzzle,
    mcq: bindSingleChoicePuzzle,
    scenario: bindSingleChoicePuzzle,
    wordsearch: bindWordPuzzle,
    "fill-blank": bindFillBlankPuzzle,
  };

  document.querySelectorAll("[data-chapter-card]").forEach((card) => {
    wirePuzzleCard(card, { chapter: Number(card.dataset.chapter), gated: true }, puzzleBinders);
  });

  document.querySelectorAll("[data-bonus-card]").forEach((card) => {
    wirePuzzleCard(card, { gated: false }, puzzleBinders);
  });

  if (completionBanner) {
    completionBanner.hidden = !everyChapterCompleted();
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
  injectProgressTracker();
  enhanceStoryPage();
  initOpeningScene();

  const pageInitializers = {
    home: initHome,
    story: initStory,
    final: initFinalPage,
  };

  pageInitializers[document.body.dataset.page]?.();
});
