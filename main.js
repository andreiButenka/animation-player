// redo button restores default page's state
const redo = document.getElementById('redo');

// tools
const tools = document.querySelector('.tools');
const toolsItems = tools.querySelectorAll('.tools-list__item');
const bucket = document.getElementById('button-bucket');
const chooseColor = document.getElementById('button-choose');
const move = document.getElementById('button-move');
const transform = document.getElementById('button-transform');

// colors
const colors = document.querySelector('.colors');
const currentColor = document.getElementById('color_current');
const currentColorButton = colors.querySelector('.color-current-button');
const colorInput = document.getElementById('color-input');
const prevColor = document.getElementById('color_prev');
const prevColorButton = colors.querySelector('.color-prev-button');
const redColorButton = colors.querySelector('.color-red-button');
const blueColorButton = colors.querySelector('.color-blue-button');

// figures
const figureOne = document.getElementById('figure-one');
const figureTwo = document.getElementById('figure-two');
const figureThree = document.getElementById('figure-three');
const figureFour = document.getElementById('figure-four');
const figureFive = document.getElementById('figure-five');
const figureSix = document.getElementById('figure-six');
const figureSeven = document.getElementById('figure-seven');
const figureEight = document.getElementById('figure-eight');
const figureNine = document.getElementById('figure-nine');

// local storage
const store = window.localStorage;
let zIndex = +store.zIndex || 2;
function rememberState() {
  // save color UI elements
  currentColor.style.background = store.curColor || '#00FF00';
  prevColor.style.background = store.prevColor || '#000';
  // save cursor
  document.body.style.cursor = store['cursor-status'] || 'default';
  // save tools state
  if (store['button-bucket-checkSelect'] === 'false') {
    bucket.classList.add('selected');
  }
  if (store['button-bucket-checkSelect'] === 'true') {
    bucket.classList.remove('selected');
  }
  if (store['button-choose-checkSelect'] === 'false') {
    chooseColor.classList.add('selected');
  }
  if (store['button-choose-checkSelect'] === 'true') {
    chooseColor.classList.remove('selected');
  }
  if (store['button-move-checkSelect'] === 'false') {
    move.classList.add('selected');
  }
  if (store['button-move-checkSelect'] === 'true') {
    move.classList.remove('selected');
  }
  if (store['button-transform-checkSelect'] === 'false') {
    transform.classList.add('selected');
  }
  if (store['button-transform-checkSelect'] === 'true') {
    transform.classList.remove('selected');
  }
  // save figures border-radius
  if (store['figure-one-checkRound'] === 'false') {
    figureOne.classList.add('round');
  }
  if (store['figure-one-checkRound'] === 'true') {
    figureOne.classList.remove('round');
  }
  if (store['figure-two-checkRound'] === 'false') {
    figureTwo.classList.add('round');
  }
  if (store['figure-two-checkRound'] === 'true') {
    figureTwo.classList.remove('round');
  }
  if (store['figure-three-checkRound'] === 'false') {
    figureThree.classList.add('round');
  }
  if (store['figure-three-checkRound'] === 'true') {
    figureThree.classList.remove('round');
  }
  if (store['figure-four-checkRound'] === 'false') {
    figureFour.classList.add('round');
  }
  if (store['figure-four-checkRound'] === 'true') {
    figureFour.classList.remove('round');
  }
  if (store['figure-five-checkRound'] === 'false') {
    figureFive.classList.add('round');
  }
  if (store['figure-five-checkRound'] === 'true') {
    figureFive.classList.remove('round');
  }
  if (store['figure-six-checkRound'] === 'false') {
    figureSix.classList.add('round');
  }
  if (store['figure-six-checkRound'] === 'true') {
    figureSix.classList.remove('round');
  }
  if (store['figure-seven-checkRound'] === 'false') {
    figureSeven.classList.add('round');
  }
  if (store['figure-seven-checkRound'] === 'true') {
    figureSeven.classList.remove('round');
  }
  if (store['figure-eight-checkRound'] === 'false') {
    figureEight.classList.add('round');
  }
  if (store['figure-eight-checkRound'] === 'true') {
    figureEight.classList.remove('round');
  }
  if (store['figure-nine-checkRound'] === 'false') {
    figureNine.classList.add('round');
  }
  if (store['figure-nine-checkRound'] === 'true') {
    figureNine.classList.remove('round');
  }
  // save figures colors
  figureOne.style.backgroundColor = store['figure-one-color'] || '#C8C8C8';
  figureTwo.style.backgroundColor = store['figure-two-color'] || '#BABABA';
  figureThree.style.backgroundColor = store['figure-three-color'] || '#BCBCBC';
  figureFour.style.backgroundColor = store['figure-four-color'] || '#B7B7B7';
  figureFive.style.backgroundColor = store['figure-five-color'] || '#CBCBCB';
  figureSix.style.backgroundColor = store['figure-six-color'] || '#C5C5C5';
  figureSeven.style.backgroundColor = store['figure-seven-color'] || '#C3C3C3';
  figureEight.style.backgroundColor = store['figure-eight-color'] || '#C0C0C0';
  figureNine.style.backgroundColor = store['figure-nine-color'] || '#C8C8C8';
  // save figures position
  figureOne.style.top = store['figure-one-top'] || '127px';
  figureOne.style.left = store['figure-one-left'] || '333px';
  figureTwo.style.top = store['figure-two-top'] || '127px';
  figureTwo.style.left = store['figure-two-left'] || '578px';
  figureThree.style.top = store['figure-three-top'] || '127px';
  figureThree.style.left = store['figure-three-left'] || '823px';
  figureFour.style.top = store['figure-four-top'] || '373px';
  figureFour.style.left = store['figure-four-left'] || '333px';
  figureFive.style.top = store['figure-five-top'] || '373px';
  figureFive.style.left = store['figure-five-left'] || '578px';
  figureSix.style.top = store['figure-six-top'] || '373px';
  figureSix.style.left = store['figure-six-left'] || '8233px';
  figureSeven.style.top = store['figure-seven-top'] || '620px';
  figureSeven.style.left = store['figure-seven-left'] || '333px';
  figureEight.style.top = store['figure-eight-top'] || '620px';
  figureEight.style.left = store['figure-eight-left'] || '578px';
  figureNine.style.top = store['figure-nine-top'] || '620px';
  figureNine.style.left = store['figure-nine-left'] || '823px';
  // save figures position
  figureOne.style.zIndex = store['figure-one-zIndex'] || '2';
  figureTwo.style.zIndex = store['figure-two-zIndex'] || '2';
  figureThree.style.zIndex = store['figure-three-zIndex'] || '2';
  figureFour.style.zIndex = store['figure-four-zIndex'] || '2';
  figureFive.style.zIndex = store['figure-five-zIndex'] || '2';
  figureSix.style.zIndex = store['figure-six-zIndex'] || '2';
  figureSeven.style.zIndex = store['figure-seven-zIndex'] || '2';
  figureEight.style.zIndex = store['figure-eight-zIndex'] || '2';
  figureNine.style.zIndex = store['figure-nine-zIndex'] || '2';
}

rememberState(store);

// redo button restores page's default state
function redoHandler() {
  bucket.classList.remove('selected');
  chooseColor.classList.remove('selected');
  move.classList.remove('selected');
  transform.classList.remove('selected');
  // currentColor.style.backgroundColor = '#00FF00';
  // prevColor.style.backgroundColor = '#000';
  figureOne.style.top = '127px';
  figureOne.style.left = '333px';
  figureOne.style.backgroundColor = '#C8C8C8';
  figureOne.classList.remove('round');
  figureTwo.style.top = '127px';
  figureTwo.style.left = '578px';
  figureTwo.style.backgroundColor = '#BABABA';
  figureTwo.classList.remove('round');
  figureThree.style.top = '127px';
  figureThree.style.left = '823px';
  figureThree.style.backgroundColor = '#BCBCBC';
  figureThree.classList.remove('round');
  figureFour.style.top = '373px';
  figureFour.style.left = '333px';
  figureFour.style.backgroundColor = '#B7B7B7';
  figureFour.classList.remove('round');
  figureFive.style.top = '373px';
  figureFive.style.left = '578px';
  figureFive.style.backgroundColor = '#CBCBCB';
  figureFive.classList.remove('round');
  figureSix.style.top = '373px';
  figureSix.style.left = '823px';
  figureSix.style.backgroundColor = '#C5C5C5';
  figureSix.classList.remove('round');
  figureSeven.style.top = '620px';
  figureSeven.style.left = '333px';
  figureSeven.style.backgroundColor = '#C3C3C3';
  figureSeven.classList.remove('round');
  figureEight.style.top = '620px';
  figureEight.style.left = '578px';
  figureEight.style.backgroundColor = '#C0C0C0';
  figureEight.classList.remove('round');
  figureNine.style.top = '620px';
  figureNine.style.left = '823px';
  figureNine.style.backgroundColor = '#C8C8C8';
  figureNine.classList.remove('round');
  document.body.style.cursor = 'default';
  store.clear();
}
redo.addEventListener('click', redoHandler);

// color input behavior
function colorInputHendler() {
  prevColor.style.backgroundColor = getComputedStyle(currentColor).backgroundColor;
  store.prevColor = getComputedStyle(currentColor).backgroundColor;
  currentColor.style.backgroundColor = colorInput.value;
  store.curColor = colorInput.value;
}
colorInput.addEventListener('change', colorInputHendler);

// keyboard tools control
function keyboardEventHandler(event) {
  const keyCode = event.which;
  if (keyCode === 80) {
    store[`${bucket.id}-checkSelect`] = bucket.classList.contains('selected');
    bucket.classList.toggle('selected');
    for (let i = 0; i < toolsItems.length; i += 1) {
      if (toolsItems[i] !== bucket) {
        store[`${toolsItems[i].id}-checkSelect`] = 'true';
        toolsItems[i].classList.remove('selected');
      }
    }
    if (bucket.classList.contains('selected')) {
      document.body.style.cursor = "url('assets/img/cursor-bucket.cur'),auto";
      store['cursor-status'] = "url('assets/img/cursor-bucket.cur'),auto";
    } else {
      document.body.style.cursor = 'default';
      store['cursor-status'] = 'default';
    }
  }
  if (keyCode === 67) {
    store[`${chooseColor.id}-checkSelect`] = chooseColor.classList.contains('selected');
    chooseColor.classList.toggle('selected');
    for (let i = 0; i < toolsItems.length; i += 1) {
      if (toolsItems[i] !== chooseColor) {
        store[`${toolsItems[i].id}-checkSelect`] = 'true';
        toolsItems[i].classList.remove('selected');
      }
    }
    if (chooseColor.classList.contains('selected')) {
      document.body.style.cursor = "url('assets/img/cursor-pipette.cur'),auto";
      store['cursor-status'] = "url('assets/img/cursor-pipette.cur'),auto";
    } else {
      document.body.style.cursor = 'default';
      store['cursor-status'] = 'default';
    }
  }
  if (keyCode === 77) {
    store[`${move.id}-checkSelect`] = move.classList.contains('selected');
    move.classList.toggle('selected');
    for (let i = 0; i < toolsItems.length; i += 1) {
      if (toolsItems[i] !== move) {
        store[`${toolsItems[i].id}-checkSelect`] = 'true';
        toolsItems[i].classList.remove('selected');
      }
    }
    if (move.classList.contains('selected')) {
      document.body.style.cursor = "url('assets/img/cursor-move.cur'),auto";
      store['cursor-status'] = "url('assets/img/cursor-move.cur'),auto";
    } else {
      document.body.style.cursor = 'default';
      store['cursor-status'] = 'default';
    }
  }
  if (keyCode === 84) {
    store[`${transform.id}-checkSelect`] = transform.classList.contains('selected');
    transform.classList.toggle('selected');
    for (let i = 0; i < toolsItems.length; i += 1) {
      if (toolsItems[i] !== transform) {
        store[`${toolsItems[i].id}-checkSelect`] = 'true';
        toolsItems[i].classList.remove('selected');
      }
    }
    if (transform.classList.contains('selected')) {
      document.body.style.cursor = "url('assets/img/cursor-transform.cur'),auto";
      store['cursor-status'] = "url('assets/img/cursor-transform.cur'),auto";
    } else {
      document.body.style.cursor = 'default';
      store['cursor-status'] = 'default';
    }
  }
}

document.addEventListener('keydown', keyboardEventHandler, false);

// events

// tools cursor state
function cursorStateByToolsHandler(event) {
  if (event.target.classList.contains('bucket') && !event.target.classList.contains('selected')) {
    document.body.style.cursor = "url('assets/img/cursor-bucket.cur'),auto";
    store['cursor-status'] = "url('assets/img/cursor-bucket.cur'),auto";
  }

  if (event.target.classList.contains('bucket') && event.target.classList.contains('selected')) {
    document.body.style.cursor = 'default';
    store['cursor-status'] = 'default';
  }

  if (event.target.classList.contains('choose-color') && !event.target.classList.contains('selected')) {
    document.body.style.cursor = "url('assets/img/cursor-pipette.cur'),auto";
    store['cursor-status'] = "url('assets/img/cursor-pipette.cur'),auto";
  }

  if (event.target.classList.contains('choose-color') && event.target.classList.contains('selected')) {
    document.body.style.cursor = 'default';
    store['cursor-status'] = 'default';
  }

  if (event.target.classList.contains('move') && !event.target.classList.contains('selected')) {
    document.body.style.cursor = "url('assets/img/cursor-move.cur'),auto";
    store['cursor-status'] = "url('assets/img/cursor-move.cur'),auto";
  }

  if (event.target.classList.contains('move') && event.target.classList.contains('selected')) {
    document.body.style.cursor = 'default';
    store['cursor-status'] = 'default';
  }

  if (event.target.classList.contains('transform') && !event.target.classList.contains('selected')) {
    document.body.style.cursor = "url('assets/img/cursor-transform.cur'),auto";
    store['cursor-status'] = "url('assets/img/cursor-transform.cur'),auto";
  }

  if (event.target.classList.contains('transform') && event.target.classList.contains('selected')) {
    document.body.style.cursor = 'default';
    store['cursor-status'] = 'default';
  }

  if (event.target.classList.contains('tools-list__item')) {
    store[`${event.target.id}-checkSelect`] = event.target.classList.contains('selected');
    event.target.classList.toggle('selected');
    for (let i = 0; i < toolsItems.length; i += 1) {
      if (toolsItems[i] !== event.target) {
        toolsItems[i].classList.remove('selected');
        store[`${toolsItems[i].id}-checkSelect`] = true;
      }
    }
  }
}

tools.addEventListener('click', cursorStateByToolsHandler);

// color input press state
function colorInputHandler() {
  currentColorButton.classList.add('selected');
  setTimeout(() => {
    currentColorButton.classList.remove('selected');
  }, 250);
}

colorInput.addEventListener('click', colorInputHandler);

// cursor state when choose color tool selected
function cursorStateByChooseColorToolHandler(event) {
  const targetPick = event.target;
  if (chooseColor.classList.contains('selected')) {
    redColorButton.classList.add('pipette-cursor');
    blueColorButton.classList.add('pipette-cursor');
    prevColorButton.classList.add('pipette-cursor');

    if (targetPick === chooseColor) return;

    if (getComputedStyle(targetPick).backgroundColor) {
      prevColor.style.backgroundColor = getComputedStyle(currentColor).backgroundColor;
      store.prevColor = getComputedStyle(currentColor).backgroundColor;
      currentColor.style.backgroundColor = getComputedStyle(targetPick).backgroundColor;
      store.curColor = getComputedStyle(targetPick).backgroundColor;
    }
  } else {
    redColorButton.classList.remove('pipette-cursor');
    blueColorButton.classList.remove('pipette-cursor');
    prevColorButton.classList.remove('pipette-cursor');
  }
}

document.addEventListener('click', cursorStateByChooseColorToolHandler);

// bucket and transform tools
function bucketAndTransformToolsHandler(event) {
  const goalColor = getComputedStyle(currentColor).backgroundColor;
  const targetPick = event.target;

  if (targetPick.classList.contains('figure')) {
    if (bucket.classList.contains('selected')) {
      targetPick.style.backgroundColor = goalColor;
      store[`${targetPick.id}-color`] = goalColor;
    }
  }

  if (targetPick.classList.contains('figure')) {
    if (transform.classList.contains('selected')) {
      store[`${targetPick.id}-checkRound`] = targetPick.classList.contains('round');
      targetPick.classList.toggle('round');
    }
  }
}

document.addEventListener('click', bucketAndTransformToolsHandler);

// red color button behavior
function redColorButtonHandler() {
  const buildInColor = getComputedStyle(this.firstChild).backgroundColor;
  const savedColor = getComputedStyle(currentColor).backgroundColor;
  if (!chooseColor.classList.contains('selected')) {
    this.classList.add('selected');
    setTimeout(() => {
      redColorButton.classList.remove('selected');
    }, 250);
  }
  prevColor.style.backgroundColor = savedColor;
  store.prevColor = savedColor;
  currentColor.style.backgroundColor = buildInColor;
  store.curColor = buildInColor;
}

redColorButton.addEventListener('click', redColorButtonHandler);

// blue color button behavior
function blueColorButtonHandler() {
  const buildInColor = getComputedStyle(this.firstChild).backgroundColor;
  const savedColor = getComputedStyle(currentColor).backgroundColor;
  if (!chooseColor.classList.contains('selected')) {
    this.classList.add('selected');
    setTimeout(() => {
      blueColorButton.classList.remove('selected');
    }, 250);
  }
  prevColor.style.backgroundColor = savedColor;
  store.prevColor = savedColor;
  currentColor.style.backgroundColor = buildInColor;
  store.curColor = buildInColor;
}

blueColorButton.addEventListener('click', blueColorButtonHandler);

// prev color button behavior
function prevColorButtonHandler() {
  const prevSavedColor = getComputedStyle(this.firstChild).backgroundColor;
  const savedColor = getComputedStyle(currentColor).backgroundColor;
  if (!chooseColor.classList.contains('selected')) {
    this.classList.add('selected');
    setTimeout(() => {
      prevColorButton.classList.remove('selected');
    }, 250);
  }
  prevColor.style.backgroundColor = savedColor;
  store.prevColor = savedColor;
  currentColor.style.backgroundColor = prevSavedColor;
  store.curColor = prevSavedColor;
}
prevColorButton.addEventListener('click', prevColorButtonHandler);

const figuresCoords = {};
const figuresDefCoords = document.querySelectorAll('.figure');

for (let i = 0; i < figuresDefCoords.length; i += 1) {
  figuresCoords[figuresDefCoords[i].id] = figuresDefCoords[i].getBoundingClientRect();
}

// drag-n-drop
let targetDrag;
let oldTop;
let oldLeft;
let coords;
let shiftX;
let shiftY;
let horiz;
let vert;

function returnFalse() {
  return false;
}

function overlap(rect1, rect2) {
  if (rect1.right < rect2.left
    || rect1.left > rect2.right
    || rect1.bottom < rect2.top
    || rect1.top > rect2.bottom) {
    return false;
  }
  return true;
}

function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function moveAt(e) {
  targetDrag.style.left = `${e.pageX - shiftX}px`;
  store[`${targetDrag.id}-left`] = `${e.pageX - shiftX}px`;
  targetDrag.style.top = `${e.pageY - shiftY}px`;
  store[`${targetDrag.id}-top`] = `${e.pageY - shiftY}px`;
  horiz = e.clientX;
  vert = e.clientY;
}

function moveMouse(e) {
  moveAt(e);
}

function upMouse(e) {
  const oldCoords = e.target.getBoundingClientRect();
  e.target.style.opacity = '1';
  e.target.style.boxShadow = 'none';
  e.target.style.pointerEvents = 'none';

  const elementUnder = document.elementFromPoint(horiz, vert);
  const newCoords = elementUnder.getBoundingClientRect();

  if (overlap(oldCoords, newCoords) && elementUnder.classList.contains('figure')) {
    e.target.style.top = `${getCoords(elementUnder).top}px`;
    store[`${e.target.id}-top`] = `${getCoords(elementUnder).top}px`;
    e.target.style.left = `${getCoords(elementUnder).left}px`;
    store[`${e.target.id}-left`] = `${getCoords(elementUnder).left}px`;
    elementUnder.style.top = oldTop;
    store[`${elementUnder.id}-top`] = oldTop;
    elementUnder.style.left = oldLeft;
    store[`${elementUnder.id}-left`] = oldLeft;
  }
  document.onmousemove = null;
  targetDrag.onmouseup = null;
  e.target.style.pointerEvents = 'auto';
}

function dragDropSwapHandler(event) {
  targetDrag = event.target;
  oldTop = getComputedStyle(targetDrag).top;
  oldLeft = getComputedStyle(targetDrag).left;

  if (move.classList.contains('selected')) {
    if (targetDrag.classList.contains('figure')) {
      if (event.which !== 1) {
        return;
      }
      targetDrag.style.opacity = '0.9';
      targetDrag.style.boxShadow = '0px 7px 5px -1px rgba(0, 0, 0, 0.26)';
      oldTop = `${getCoords(targetDrag).top}px`;
      oldLeft = `${getCoords(targetDrag).left}px`;
      coords = getCoords(targetDrag);
      shiftX = event.pageX - coords.left;
      shiftY = event.pageY - coords.top;

      document.body.appendChild(targetDrag);
      moveAt(event);

      targetDrag.style.zIndex = `${zIndex + 1}`;
      store[`${targetDrag.id}-zIndex`] = `${zIndex + 1}`;
      zIndex += 1;
      store.zIndex = zIndex;

      document.onmousemove = moveMouse;

      targetDrag.onmouseup = upMouse;
    }

    targetDrag.ondragstart = returnFalse;
  }
}

document.addEventListener('mousedown', dragDropSwapHandler);
