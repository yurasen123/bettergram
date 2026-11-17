(() => {
  "use strict";

  const levels = window.levels;
  const translations = window.translations;
  const languageStorageKey = "bettergram-language";
  let language = "en";
  let hasSavedLanguage = false;
  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage === "en" || savedLanguage === "uk") {
      language = savedLanguage;
      hasSavedLanguage = true;
    }
  } catch (error) {
    console.error("Could not read the saved language.", error);
  }

  const pluralRules = {
    en: new Intl.PluralRules("en-US"),
    uk: new Intl.PluralRules("uk-UA")
  };

  const t = (path, params = {}) => {
    const keys = path.split(".");
    let current = translations?.[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        current = null;
        break;
      }
    }
    if (current === null || current === undefined) {
      current = translations?.en;
      for (const key of keys) {
        if (current && current[key] !== undefined) {
          current = current[key];
        } else {
          return path;
        }
      }
    }
    if (typeof current === "string" && params) {
      return current.replace(/\{(\w+)\}/g, (_, k) => (params[k] !== undefined ? params[k] : `{${k}}`));
    }
    return current;
  };

  const plural = (categoryKey, count) => {
    const pr = pluralRules[language] || pluralRules.en;
    const rule = pr.select(count);
    const forms = t(categoryKey);
    const word = (forms && forms[rule]) || (forms && forms.other) || "";
    return `${count} ${word}`;
  };

  const localizedLevelName = level => translations?.[language]?.levels?.[level.name] || translations?.en?.levels?.[level.name] || level.name;
  const localizedColorName = color => translations?.[language]?.colors?.[color.name] || translations?.en?.colors?.[color.name] || color.name;
  const pluralizeCells = count => plural("plural.cells", count);
  const pluralizeMistakes = count => plural("plural.mistakes", count);

  const boards = levels.map(level => level.solution.map(row => row.map(() => 0)));
  const hintsLeft = levels.map(() => 3);
  const undoStacks = levels.map(() => []);
  const levelCookie = "bettergram-level";
  const unlockedLevelCookie = "bettergram-unlocked-level";
  const savedLevel = document.cookie.split("; ").find(cookie => cookie.startsWith(`${levelCookie}=`));
  let savedLevelValue = savedLevel ? savedLevel.slice(levelCookie.length + 1) : null;
  if (!savedLevel && window.location.protocol === "file:") {
    try {
      savedLevelValue = window.localStorage.getItem(levelCookie);
    } catch (error) {
      console.error("Could not read the saved level.", error);
    }
  }
  const parsedSavedLevel = savedLevelValue === null ? 0 : Number(savedLevelValue);
  const hasSavedLevel = Number.isInteger(parsedSavedLevel) && parsedSavedLevel >= 0 && parsedSavedLevel < levels.length;
  const savedUnlockedLevel = document.cookie.split("; ").find(cookie => cookie.startsWith(`${unlockedLevelCookie}=`));
  let savedUnlockedLevelValue = savedUnlockedLevel ? savedUnlockedLevel.slice(unlockedLevelCookie.length + 1) : null;
  if (!savedUnlockedLevel && window.location.protocol === "file:") {
    try {
      savedUnlockedLevelValue = window.localStorage.getItem(unlockedLevelCookie);
    } catch (error) {
      console.error("Could not read unlocked levels.", error);
    }
  }
  const parsedUnlockedLevel = savedUnlockedLevelValue === null ? 0 : Number(savedUnlockedLevelValue);
  let unlockedLevel = Number.isInteger(parsedUnlockedLevel) && parsedUnlockedLevel >= 0 && parsedUnlockedLevel < levels.length
    ? parsedUnlockedLevel
    : 0;
  let levelIndex = hasSavedLevel ? Math.min(parsedSavedLevel, unlockedLevel) : 0;
  let selectedColor = 1;
  let crossMode = false;
  let drag = null;
  let suppressClickUntil = 0;
  let won = false;
  let winModalTimer = 0;

  const board = document.getElementById("board");
  const boardShell = document.getElementById("board-shell");
  const layout = document.getElementById("board-layout");
  const levelGallery = document.getElementById("level-gallery");
  const startScreen = document.getElementById("start-screen");
  const howToScreen = document.getElementById("how-to-screen");
  const feedbackScreen = document.getElementById("feedback-screen");
  const levelScreen = document.getElementById("level-screen");
  const gameScreen = document.getElementById("game-screen");
  const levelMenuButton = document.getElementById("level-menu-button");
  const startMenuButton = document.getElementById("start-menu-button");
  const howToHomeButton = document.getElementById("how-to-home-button");
  const playButton = document.getElementById("play-button");
  const levelsButton = document.getElementById("levels-button");
  const howToPlayButton = document.getElementById("how-to-play-button");
  const feedbackButton = document.getElementById("feedback-button");
  const installButton = document.getElementById("install-button");
  const feedbackHomeButton = document.getElementById("feedback-home-button");
  const feedbackForm = document.getElementById("feedback-form");
  const feedbackStatus = document.getElementById("feedback-status");
  const currentLevelNumber = document.getElementById("current-level-number");
  const rowClues = document.getElementById("row-clues");
  const columnClues = document.getElementById("column-clues");
  const palette = document.getElementById("palette");
  const levelTitle = document.getElementById("level-title");
  const progress = document.getElementById("progress");
  const mistakes = document.getElementById("mistakes");
  const puzzleSize = document.getElementById("puzzle-size");
  const colorLegend = document.getElementById("color-legend");
  const modeButton = document.getElementById("mode-button");
  const undoButton = document.getElementById("undo-button");
  const restartButton = document.getElementById("restart-button");
  const hintButton = document.getElementById("hint-button");
  const modal = document.getElementById("win-modal");
  const winCopy = document.getElementById("win-copy");
  const nextButton = document.getElementById("next-button");
  const viewPaintingButton = document.getElementById("view-painting-button");
  const paintingPreview = document.getElementById("painting-preview");
  const languageDialog = document.getElementById("language-dialog");

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(element => {
      element.innerHTML = t(element.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(element => {
      const mappings = element.dataset.i18nAttr.split(",");
      for (const mapping of mappings) {
        const [attr, key] = mapping.split(":");
        if (attr && key) {
          element.setAttribute(attr.trim(), t(key.trim()));
        }
      }
    });
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    document.title = t("meta.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = t("meta.description");
    }
    applyStaticTranslations();
    document.querySelectorAll("[data-language-toggle]").forEach(button => {
      button.textContent = language === "uk" ? "English" : "Українська";
      button.setAttribute(
        "aria-label",
        language === "uk" ? t("ui.switchToEn") : t("ui.switchToUk")
      );
    });
    buildLevelGallery();
    render();
    if (!gameScreen.hidden) measureUIOverhead();
  }

  function saveLanguage() {
    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch (error) {
      console.error("Could not save the selected language.", error);
    }
  }

  function chooseLanguage(nextLanguage) {
    if (nextLanguage !== "en" && nextLanguage !== "uk") return;
    language = nextLanguage;
    saveLanguage();
    applyLanguage();
    languageDialog.hidden = true;
    languageDialog.setAttribute("aria-hidden", "true");
    playButton.focus();
  }

  document.querySelectorAll("[data-language-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      language = language === "uk" ? "en" : "uk";
      saveLanguage();
      applyLanguage();
    });
  });
  document.querySelectorAll("[data-language-choice]").forEach(button => {
    button.addEventListener("click", () => chooseLanguage(button.dataset.languageChoice));
  });

  const currentLevel = () => levels[levelIndex];
  const currentBoard = () => boards[levelIndex];
  const size = () => currentLevel().solution.length;
  const colorHex = value => value > 0 ? currentLevel().colors[value - 1].hex : "";
  const isCorrectCell = (row, col) =>
    currentLevel().solution[row][col] > 0 &&
    currentBoard()[row][col] === currentLevel().solution[row][col];
  const isMistake = (row, col) => {
    const target = currentLevel().solution[row][col];
    const value = currentBoard()[row][col];
    return value > 0 ? value !== target : value === -1 && target > 0;
  };
  const isColorComplete = colorIndex =>
    currentLevel().solution.every((row, r) =>
      row.every((target, c) => target !== colorIndex || currentBoard()[r][c] === colorIndex)
    );

  function saveLevel() {
    if (window.location.protocol === "file:") {
      try {
        window.localStorage.setItem(levelCookie, String(levelIndex));
      } catch (error) {
        console.error("Could not save the current level.", error);
      }
      return;
    }
    document.cookie = `${levelCookie}=${levelIndex}; Max-Age=31536000; Path=/; SameSite=Lax`;
  }

  function saveUnlockedLevel() {
    if (window.location.protocol === "file:") {
      try {
        window.localStorage.setItem(unlockedLevelCookie, String(unlockedLevel));
      } catch (error) {
        console.error("Could not save unlocked levels.", error);
      }
      return;
    }
    document.cookie = `${unlockedLevelCookie}=${unlockedLevel}; Max-Age=31536000; Path=/; SameSite=Lax`;
  }

  function selectLevel(index) {
    if (!Number.isInteger(index) || index < 0 || index > unlockedLevel || index >= levels.length) return;
    levelIndex = index;
    currentLevelNumber.textContent = String(levelIndex + 1);
    selectedColor = 1;
    crossMode = false;
    saveLevel();
    render();
  }

  function showLevelScreen() {
    window.clearTimeout(winModalTimer);
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    gameScreen.hidden = true;
    startScreen.hidden = true;
    howToScreen.hidden = true;
    feedbackScreen.hidden = true;
    levelScreen.hidden = false;
    levelGallery.querySelectorAll(".level-card")[levelIndex]?.focus();
  }

  function showStartScreen() {
    window.clearTimeout(winModalTimer);
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    gameScreen.hidden = true;
    howToScreen.hidden = true;
    levelScreen.hidden = true;
    feedbackScreen.hidden = true;
    startScreen.hidden = false;
    playButton.focus();
  }

  function showFeedbackScreen() {
    startScreen.hidden = true;
    howToScreen.hidden = true;
    levelScreen.hidden = true;
    gameScreen.hidden = true;
    feedbackScreen.hidden = false;
    feedbackForm.querySelector("textarea").focus();
  }

  function showHowToScreen() {
    startScreen.hidden = true;
    feedbackScreen.hidden = true;
    levelScreen.hidden = true;
    gameScreen.hidden = true;
    howToScreen.hidden = false;
    document.getElementById("how-to-title").focus();
  }

  function measureUIOverhead() {
    // Measure the vertical space consumed by everything except the board shell,
    // so the board-size CSS formula can cap the board to the remaining height.
    requestAnimationFrame(() => {
      const appEl = document.querySelector(".app");
      const sections = [
        document.querySelector(".game-topbar"),
        document.querySelector(".heading"),
        document.querySelector(".puzzle-key"),
        document.querySelector(".controls"),
      ];
      let overhead = 0;
      // app padding-top + padding-bottom
      const appStyle = getComputedStyle(appEl);
      overhead += parseFloat(appStyle.paddingTop) + parseFloat(appStyle.paddingBottom);
      // gap between game-screen children: (count - 1) * gap
      const gsStyle = getComputedStyle(gameScreen);
      const gap = parseFloat(gsStyle.gap) || 0;
      // board-shell padding
      const shellStyle = getComputedStyle(boardShell);
      overhead += parseFloat(shellStyle.paddingTop) + parseFloat(shellStyle.paddingBottom);
      overhead += columnClues.getBoundingClientRect().height;
      // height of each other element + its share of the gap
      let visibleSections = 0;
      sections.forEach(el => {
        if (el) { overhead += el.getBoundingClientRect().height; visibleSections++; }
      });
      // gaps: (total children in game-screen - 1) * gap
      const gameChildren = gameScreen.querySelectorAll(":scope > *:not([hidden])").length;
      overhead += gap * Math.max(0, gameChildren - 1);
      // add a small safety margin
      overhead += 12;
      appEl.style.setProperty("--ui-overhead", `${Math.round(overhead)}px`);
    });
  }

  function showGameScreen() {
    startScreen.hidden = true;
    howToScreen.hidden = true;
    feedbackScreen.hidden = true;
    levelScreen.hidden = true;
    gameScreen.hidden = false;
    render();
    measureUIOverhead();
    levelTitle.focus();
  }

  function buildLevelGallery() {
    levelGallery.innerHTML = "";
    levels.forEach((level, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "level-card";
      const locked = index > unlockedLevel;
      button.disabled = locked;
      const hard = level.hard ? t("game.hardSuffix") : "";
      const lockedText = locked ? t("game.lockedSuffix", { prev: index }) : "";
      button.setAttribute("aria-label", t("game.levelCardAria", {
        num: index + 1,
        name: localizedLevelName(level),
        hard,
        locked: lockedText
      }));
      const preview = document.createElement("span");
      preview.className = "level-preview";
      preview.style.setProperty("--size", String(level.solution.length));
      preview.setAttribute("aria-hidden", "true");
      level.solution.forEach(row => row.forEach(value => {
        const pixel = document.createElement("span");
        if (value > 0) pixel.style.setProperty("--fill", level.colors[value - 1].hex);
        preview.append(pixel);
      }));
      const number = document.createElement("span");
      number.className = "card-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const title = document.createElement("span");
      title.className = "card-title";
      title.textContent = localizedLevelName(level);
      button.append(preview, number, title);
      button.addEventListener("click", () => {
        if (index > unlockedLevel) return;
        selectLevel(index);
        showGameScreen();
      });
      levelGallery.append(button);
    });
  }

  function runs(values) {
    const result = [];
    let value = 0;
    let count = 0;
    for (const cell of values) {
      if (cell > 0 && cell === value) {
        count++;
      } else {
        if (count) result.push({ count, color: value });
        value = cell > 0 ? cell : 0;
        count = cell > 0 ? 1 : 0;
      }
    }
    if (count) result.push({ count, color: value });
    return result;
  }

  function cluePattern(axis, index) {
    const solution = currentLevel().solution;
    return runs(axis === "row" ? solution[index] : solution.map(row => row[index]));
  }

  function patternMatches(axis, index) {
    const target = cluePattern(axis, index);
    const cells = axis === "row"
      ? currentBoard()[index]
      : currentBoard().map(row => row[index]);
    const actual = runs(cells);
    return target.length === actual.length && target.every((run, i) =>
      run.count === actual[i].count && run.color === actual[i].color
    );
  }

  function minimumClueLength(pattern) {
    return pattern.reduce((length, run, index) =>
      length + run.count + (index > 0 && pattern[index - 1].color === run.color ? 1 : 0), 0
    );
  }

  function completedClueRuns(axis, index) {
    const target = cluePattern(axis, index);
    const cells = axis === "row"
      ? currentBoard()[index]
      : currentBoard().map(row => row[index]);
    const actual = runs(cells);
    const completed = new Set();
    let nextTarget = 0;
    for (const run of actual) {
      const match = target.findIndex((clue, clueIndex) =>
        clueIndex >= nextTarget && clue.count === run.count && clue.color === run.color
      );
      if (match >= 0) {
        completed.add(match);
        nextTarget = match + 1;
      }
    }
    return completed;
  }

  function makeClue(axis, index) {
    const clue = document.createElement("div");
    clue.className = axis === "row" ? "row-clue" : "column-clue";
    clue.dataset.axis = axis;
    clue.dataset.index = String(index);
    const pattern = cluePattern(axis, index);
    const starting = minimumClueLength(pattern) === size();
    clue.dataset.starting = String(starting);
    if (starting) {
      clue.classList.add("starting-clue");
      clue.title = t("ui.hintPlacement");
    }
    for (const run of pattern) {
      const item = document.createElement("span");
      item.className = "clue-run";
      item.textContent = String(run.count);
      item.style.setProperty("--clue-color", colorHex(run.color));
      item.style.setProperty("--clue-ink", currentLevel().colors[run.color - 1].clueInk);
      item.dataset.color = String(run.color);
      clue.append(item);
    }
    return clue;
  }

  function cellAriaLabel(row, col, value) {
    const position = t("game.cellPosition", { row: row + 1, col: col + 1 });
    if (value > 0) {
      const state = isCorrectCell(row, col)
        ? t("game.cellCorrectLocked")
        : isMistake(row, col)
          ? t("game.cellIncorrectColor")
          : "";
      return `${position}, ${localizedColorName(currentLevel().colors[value - 1])}${state}`;
    }
    if (value === -1) {
      const incorrect = isMistake(row, col) ? t("game.cellIncorrect") : "";
      return `${position}${t("game.cellCrossed")}${incorrect}`;
    }
    return `${position}, ${t("game.cellEmpty")}`;
  }

  function render() {
    const level = currentLevel();
    const n = size();
    won = isSolved();
    layout.style.setProperty("--size", n);
    board.style.setProperty("--size", n);
    rowClues.style.setProperty("--size", n);
    columnClues.style.setProperty("--size", n);
    levelTitle.textContent = localizedLevelName(level);
    const filledCells = level.solution.flat().filter(value => value > 0).length;
    puzzleSize.textContent = `${n} × ${n} · ${pluralizeCells(filledCells)}`;
    colorLegend.innerHTML = "";
    level.colors.forEach((color, index) => {
      const count = level.solution.flat().filter(value => value === index + 1).length;
      const item = document.createElement("span");
      item.className = "legend-color";
      item.setAttribute("aria-label", `${localizedColorName(color)}: ${pluralizeCells(count)}`);
      const dot = document.createElement("span");
      dot.className = "legend-dot";
      dot.style.setProperty("--swatch", color.hex);
      dot.setAttribute("aria-hidden", "true");
      const label = document.createElement("span");
      label.textContent = `${localizedColorName(color)} ${count}`;
      item.append(dot, label);
      colorLegend.append(item);
    });
    board.setAttribute("aria-label", t("game.boardAria", {
      size: n,
      name: localizedLevelName(level)
    }));
    board.innerHTML = "";
    rowClues.innerHTML = "";
    columnClues.innerHTML = "";
    palette.innerHTML = "";
    boardShell.classList.toggle("won", won);
    for (let col = 0; col < n; col++) columnClues.append(makeClue("column", col));
    for (let row = 0; row < n; row++) rowClues.append(makeClue("row", row));

    currentBoard().forEach((cells, row) => cells.forEach((value, col) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "cell";
      cell.dataset.row = String(row);
      cell.dataset.col = String(col);
      cell.setAttribute("role", "gridcell");
      const correct = isCorrectCell(row, col);
      cell.setAttribute("aria-label", cellAriaLabel(row, col, value));
      if (col === 4 || (n === 10 && col === 4)) cell.classList.add("divider-right");
      if (row === 4 || (n === 10 && row === 4)) cell.classList.add("divider-bottom");
      if (correct) {
        cell.classList.add("locked");
        cell.setAttribute("aria-disabled", "true");
      }
      if (isMistake(row, col)) cell.classList.add("mistake");
      if (value > 0) {
        cell.classList.add("filled");
        cell.style.setProperty("--fill", colorHex(value));
      } else if (value === -1) {
        cell.classList.add("crossed");
      }
      board.append(cell);
    }));

    level.colors.forEach((color, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "swatch";
      button.style.setProperty("--swatch", color.hex);
      button.setAttribute("aria-label", t("game.selectColorAria", {
        color: localizedColorName(color)
      }));
      button.setAttribute("aria-pressed", String(selectedColor === index + 1 && !crossMode));
      button.addEventListener("click", () => {
        selectedColor = index + 1;
        crossMode = false;
        updateControls();
      });
      palette.append(button);
    });
    updateClueCompletion();
    updateProgress();
    updateControls();
    modal.classList.toggle("open", won);
    modal.setAttribute("aria-hidden", String(!won));
    if (won) configureWinModal();
  }

  function updateControls() {
    if (isColorComplete(selectedColor)) {
      const nextColor = currentLevel().colors.findIndex((_, index) => !isColorComplete(index + 1));
      if (nextColor >= 0) selectedColor = nextColor + 1;
    }
    modeButton.textContent = t(crossMode ? "ui.modeCross" : "ui.modeFill");
    modeButton.setAttribute("aria-pressed", String(crossMode));
    palette.querySelectorAll(".swatch").forEach((button, index) => {
      const complete = isColorComplete(index + 1);
      button.disabled = complete;
      button.classList.toggle("completed", complete);
      const completed = complete ? t("game.completedSuffix") : "";
      button.setAttribute("aria-label", t("game.colorCompletedAria", {
        color: localizedColorName(currentLevel().colors[index]),
        completed
      }));
      button.setAttribute("aria-pressed", String(selectedColor === index + 1 && !crossMode));
    });
    undoButton.disabled = undoStacks[levelIndex].length === 0;
    hintButton.disabled = hintsLeft[levelIndex] === 0 || won;
    hintButton.textContent = `${t("ui.hint")} (${hintsLeft[levelIndex]}/3)`;
  }

  function updateClueCompletion() {
    document.querySelectorAll(".row-clue, .column-clue").forEach(clue => {
      const completed = completedClueRuns(clue.dataset.axis, Number(clue.dataset.index));
      const done = patternMatches(clue.dataset.axis, Number(clue.dataset.index));
      const starting = clue.dataset.starting === "true" && !done;
      clue.classList.toggle("starting-clue", starting);
      clue.title = starting ? t("ui.hintPlacement") : "";
      clue.querySelectorAll(".clue-run").forEach((run, runIndex) =>
        run.classList.toggle("done", completed.has(runIndex))
      );
    });
  }

  function autoCrossCompletedLines() {
    const n = size();
    for (const axis of ["row", "column"]) {
      for (let index = 0; index < n; index++) {
        if (!patternMatches(axis, index)) continue;
        for (let offset = 0; offset < n; offset++) {
          const row = axis === "row" ? index : offset;
          const col = axis === "row" ? offset : index;
          if (currentBoard()[row][col] !== 0) continue;
          currentBoard()[row][col] = -1;
          const cell = board.querySelector(`[data-row="${row}"][data-col="${col}"]`);
          if (!cell) continue;
          cell.classList.add("crossed");
          cell.setAttribute("aria-label", cellAriaLabel(row, col, -1));
        }
      }
    }
  }

  function updateProgress() {
    let filled = 0;
    let incorrect = 0;
    currentBoard().forEach((row, r) => row.forEach((value, c) => {
      if (value > 0) filled++;
      if (isMistake(r, c)) incorrect++;
    }));
    const total = currentLevel().solution.flat().filter(value => value > 0).length;
    progress.textContent = `${filled} / ${total}`;
    mistakes.textContent = pluralizeMistakes(incorrect);
  }

  function isSolved() {
    const solution = currentLevel().solution;
    const state = currentBoard();
    return solution.every((row, r) => row.every((target, c) =>
      target > 0 ? state[r][c] === target : state[r][c] <= 0
    ));
  }

  function snapshot() {
    return currentBoard().map(row => row.slice());
  }

  function saveUndo() {
    undoStacks[levelIndex].push(snapshot());
  }

  function restartLevel() {
    window.clearTimeout(winModalTimer);
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    currentBoard().forEach(row => row.fill(0));
    hintsLeft[levelIndex] = 3;
    undoStacks[levelIndex] = [];
    selectedColor = 1;
    crossMode = false;
    drag = null;
    suppressClickUntil = 0;
    won = false;
    render();
  }

  function applyAction(row, col, action) {
    if (won || row < 0 || col < 0 || row >= size() || col >= size()) return;
    const current = currentBoard()[row][col];
    if (isCorrectCell(row, col)) return;
    const target = currentLevel().solution[row][col];
    if (current === action) {
      if (isMistake(row, col)) animateMistake(board.querySelector(`[data-row="${row}"][data-col="${col}"]`));
      return;
    }
    currentBoard()[row][col] = action;
    const cell = board.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (!cell) return;
    cell.classList.remove("filled", "crossed", "hint-pulse", "mistake", "locked");
    cell.style.removeProperty("--fill");
    if (action > 0) {
      cell.classList.add("filled");
      cell.style.setProperty("--fill", colorHex(action));
      if (action === target) {
        cell.classList.add("locked");
        cell.setAttribute("aria-disabled", "true");
      } else {
        cell.classList.add("mistake");
        animateMistake(cell);
      }
    } else if (action === -1) {
      cell.classList.add("crossed");
      cell.removeAttribute("aria-disabled");
      if (target > 0) {
        cell.classList.add("mistake");
        animateMistake(cell);
      }
    }
    cell.setAttribute("aria-label", cellAriaLabel(row, col, action));
    autoCrossCompletedLines();
    updateClueCompletion();
    updateProgress();
    if (isSolved()) {
      won = true;
      if (levelIndex < levels.length - 1 && unlockedLevel === levelIndex) {
        unlockedLevel++;
        saveUnlockedLevel();
        buildLevelGallery();
      }

      boardShell.classList.add("won");
      configureWinModal();
      window.clearTimeout(winModalTimer);
      winModalTimer = window.setTimeout(() => {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        viewPaintingButton.focus();
      }, 360);
    }
    updateControls();
  }

  function animateMistake(cell) {
    if (!cell) return;
    cell.classList.remove("mistake-shake");
    void cell.offsetWidth;
    cell.classList.add("mistake-shake");
    cell.addEventListener("animationend", () => cell.classList.remove("mistake-shake"), { once: true });
  }

  function cellFromPoint(x, y) {
    const element = document.elementFromPoint(x, y);
    return element && element.closest ? element.closest(".cell") : null;
  }

  function processDragCell(cell) {
    if (!drag || !cell || !board.contains(cell)) return;
    const key = `${cell.dataset.row},${cell.dataset.col}`;
    if (drag.visited.has(key)) return;
    drag.visited.add(key);
    applyAction(Number(cell.dataset.row), Number(cell.dataset.col), drag.action);
  }

  board.addEventListener("mousedown", event => {
    if (event.button !== 0) return;
    const cell = event.target.closest(".cell");
    if (!cell) return;
    event.preventDefault();
    saveUndo();
    drag = { action: crossMode ? -1 : selectedColor, visited: new Set() };
    processDragCell(cell);
  });

  document.addEventListener("mousemove", event => {
    if (drag) processDragCell(cellFromPoint(event.clientX, event.clientY));
  });
  document.addEventListener("mouseup", () => {
    if (drag) {
      drag = null;
      suppressClickUntil = Date.now() + 350;
    }
  });

  board.addEventListener("touchstart", event => {
    const touch = event.changedTouches[0];
    const cell = cellFromPoint(touch.clientX, touch.clientY);
    if (!cell || !board.contains(cell)) return;
    event.preventDefault();
    saveUndo();
    drag = { action: crossMode ? -1 : selectedColor, visited: new Set() };
    processDragCell(cell);
    suppressClickUntil = Date.now() + 700;
  }, { passive: false });

  document.addEventListener("touchmove", event => {
    if (!drag || !event.touches.length) return;
    event.preventDefault();
    const touch = event.touches[0];
    processDragCell(cellFromPoint(touch.clientX, touch.clientY));
  }, { passive: false });
  document.addEventListener("touchend", () => { drag = null; }, { passive: true });
  document.addEventListener("touchcancel", () => { drag = null; }, { passive: true });

  board.addEventListener("click", event => {
    if (Date.now() < suppressClickUntil) return;
    const cell = event.target.closest(".cell");
    if (!cell) return;
    saveUndo();
    applyAction(Number(cell.dataset.row), Number(cell.dataset.col), crossMode ? -1 : selectedColor);
  });

  modeButton.addEventListener("click", () => {
    crossMode = !crossMode;
    updateControls();
  });

  undoButton.addEventListener("click", () => {
    const previous = undoStacks[levelIndex].pop();
    if (!previous) return;
    boards[levelIndex] = previous.map((row, r) => row.map((value, c) =>
      isCorrectCell(r, c) ? currentBoard()[r][c] : value
    ));
    render();
  });

  restartButton.addEventListener("click", restartLevel);

  hintButton.addEventListener("click", () => {
    if (hintsLeft[levelIndex] === 0 || won) return;
    const solution = currentLevel().solution;
    const choices = [];
    solution.forEach((row, r) => row.forEach((target, c) => {
      const current = currentBoard()[r][c];
      if (target > 0 ? current !== target : current !== -1) choices.push({ row: r, col: c, target });
    }));
    if (!choices.length) return;
    const choice = choices[Math.floor(Math.random() * choices.length)];
    saveUndo();
    hintsLeft[levelIndex]--;
    applyAction(choice.row, choice.col, choice.target > 0 ? choice.target : -1);
    const cell = board.querySelector(`[data-row="${choice.row}"][data-col="${choice.col}"]`);
    if (cell) {
      cell.classList.remove("hint-pulse");
      void cell.offsetWidth;
      cell.classList.add("hint-pulse");
      cell.addEventListener("animationend", () => cell.classList.remove("hint-pulse"), { once: true });
    }
  });

  function configureWinModal() {
    const hasNext = levelIndex < levels.length - 1;
    winCopy.textContent = t(hasNext ? "ui.winCopyNext" : "ui.winCopyAll");
    nextButton.textContent = t(hasNext ? "ui.nextLevel" : "ui.playAgain");
    paintingPreview.style.setProperty("--size", size());
    paintingPreview.innerHTML = "";
    currentLevel().solution.forEach(row => row.forEach(value => {
      const pixel = document.createElement("span");
      if (value > 0) pixel.style.backgroundColor = colorHex(value);
      paintingPreview.append(pixel);
    }));
  }

  levelMenuButton.addEventListener("click", showLevelScreen);
  startMenuButton.addEventListener("click", showStartScreen);
  howToHomeButton.addEventListener("click", showStartScreen);
  levelsButton.addEventListener("click", showLevelScreen);
  howToPlayButton.addEventListener("click", showHowToScreen);
  feedbackButton.addEventListener("click", showFeedbackScreen);
  feedbackHomeButton.addEventListener("click", showStartScreen);
  feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    feedbackStatus.textContent = t("ui.feedbackNotConfigured");
  });
  playButton.addEventListener("click", () => showGameScreen());

  viewPaintingButton.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    levelMenuButton.focus();
  });

  nextButton.addEventListener("click", () => {
    selectLevel(levelIndex < levels.length - 1 ? levelIndex + 1 : 0);
    levelTitle.focus();
  });

  // Re-measure when the window resizes (orientation change, keyboard open, etc.)
  window.addEventListener("resize", () => {
    if (!gameScreen.hidden) measureUIOverhead();
  });

  // PWA install prompt handler
  let deferredInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (installButton) {
      installButton.hidden = false;
    }
  });

  if (installButton) {
    installButton.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice && choice.outcome === "accepted") {
        installButton.hidden = true;
      }
      deferredInstallPrompt = null;
    });
  }

  window.addEventListener("appinstalled", () => {
    if (installButton) installButton.hidden = true;
    deferredInstallPrompt = null;
  });

  // Register Service Worker for offline play
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(error => {
        console.warn("ServiceWorker registration failed:", error);
      });
    });
  }

  currentLevelNumber.textContent = String(levelIndex + 1);
  applyLanguage();
  if (!hasSavedLanguage) {
    languageDialog.hidden = false;
    languageDialog.setAttribute("aria-hidden", "false");
    languageDialog.querySelector("[data-language-choice]").focus();
  }
})();
