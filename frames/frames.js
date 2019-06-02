const states = {};
let frameCounter = 1;
let dataCounter = 1;
let bucketToolState = false;

function checkBucketToolState() {
  if (bucket.classList.contains('selected')) {
    bucketToolState = true;
  } else {
    bucketToolState = false;
  }
}

function keepBucketToolState() {
  if (bucketToolState) {
    bucket.classList.add('selected');
    document.body.style.cursor = "url('assets/img/cursor-bucket.cur'),auto";
  }
}

function removeFrameActiveState() {
  const frames = document.getElementById('frames');
  for (let i = 0; i < frames.children.length; i += 1) {
    frames.children[i].classList.remove('active-frame');
  }
}

function readColors(a, b) {
  figureOne.style.backgroundColor = states[`${a}-${b}-one`] || '#C8C8C8';
  figureTwo.style.backgroundColor = states[`${a}-${b}-two`] || '#BABABA';
  figureThree.style.backgroundColor = states[`${a}-${b}-three`] || '#BCBCBC';
  figureFour.style.backgroundColor = states[`${a}-${b}-four`] || '#B7B7B7';
  figureFive.style.backgroundColor = states[`${a}-${b}-five`] || '#CBCBCB';
  figureSix.style.backgroundColor = states[`${a}-${b}-six`] || '#C5C5C5';
  figureSeven.style.backgroundColor = states[`${a}-${b}-seven`] || '#C3C3C3';
  figureEight.style.backgroundColor = states[`${a}-${b}-eight`] || '#C0C0C0';
  figureNine.style.backgroundColor = states[`${a}-${b}-nine`] || '#C8C8C8';
}

function createFrame() {
  checkBucketToolState();
  redoHandler();
  keepBucketToolState();
  removeFrameActiveState();
  const addFrameButton = document.getElementById('add-frame');
  const frames = document.getElementById('frames');
  const frameNew = document.createElement('li');
  frameNew.id = `frame-${frameCounter}`;
  frameNew.className = `frame frame-${frameCounter} active-frame`;
  dataCounter += 1;
  const canvasNew = document.createElement('canvas');
  canvasNew.id = `canvas-${frameCounter}`;
  canvasNew.className = `canvas canvas-${frameCounter}`;
  canvasNew.setAttribute('data-unique-id', dataCounter);
  canvasNew.width = 130;
  canvasNew.height = 130;

  const ctx = canvasNew.getContext('2d');

  ctx.fillStyle = 'rgb(200, 200, 200)';
  ctx.fillRect(canvasNew.offsetLeft, canvasNew.offsetTop, 40, 40);

  ctx.fillStyle = 'rgb(186, 186, 186)';
  ctx.fillRect(canvasNew.offsetLeft + 45, canvasNew.offsetTop, 40, 40);

  ctx.fillStyle = 'rgb(188, 188, 188)';
  ctx.fillRect(canvasNew.offsetLeft + 90, canvasNew.offsetTop, 40, 40);

  ctx.fillStyle = 'rgb(183, 183, 183)';
  ctx.fillRect(canvasNew.offsetLeft, canvasNew.offsetTop + 45, 40, 40);

  ctx.fillStyle = 'rgb(203, 203, 203)';
  ctx.fillRect(canvasNew.offsetLeft + 45, canvasNew.offsetTop + 45, 40, 40);

  ctx.fillStyle = 'rgb(197, 197, 197)';
  ctx.fillRect(canvasNew.offsetLeft + 90, canvasNew.offsetTop + 45, 40, 40);

  ctx.fillStyle = 'rgb(195, 195, 195)';
  ctx.fillRect(canvasNew.offsetLeft, canvasNew.offsetTop + 90, 40, 40);

  ctx.fillStyle = 'rgb(192, 192, 192)';
  ctx.fillRect(canvasNew.offsetLeft + 45, canvasNew.offsetTop + 90, 40, 40);

  ctx.fillStyle = 'rgb(200, 200, 200)';
  ctx.fillRect(canvasNew.offsetLeft + 90, canvasNew.offsetTop + 90, 40, 40);

  const frameNumberNew = document.createElement('div');
  frameNumberNew.id = `frame-number-${frameCounter}`;
  frameNumberNew.className = `frame-number frame-number-${frameCounter}`;

  const numberNew = document.createElement('span');
  numberNew.id = `number-${frameCounter}`;
  numberNew.className = `number number-${frameCounter}`;
  numberNew.innerHTML = frameCounter;

  const frameDeleteNew = document.createElement('div');
  frameDeleteNew.id = `freme-delete-${frameCounter}`;
  frameDeleteNew.className = `frame-delete frame-delete-${frameCounter}`;

  const frameDotsNew = document.createElement('div');
  frameDotsNew.id = `freme-dots-${frameCounter}`;
  frameDotsNew.className = `frame-dots frame-dots-${frameCounter}`;

  const frameCopyNew = document.createElement('div');
  frameCopyNew.id = `freme-copy-${frameCounter}`;
  frameCopyNew.className = `frame-copy frame-copy-${frameCounter}`;

  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-one`] = '#C8C8C8';
  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-two`] = '#BABABA';
  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-three`] = '#BCBCBC';
  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-four`] = '#B7B7B7';
  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-five`] = '#CBCBCB';
  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-six`] = '#C5C5C5';
  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-seven`] = '#C3C3C3';
  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-eight`] = '#C0C0C0';
  states[`${canvasNew.id}-${canvasNew.getAttribute('data-unique-id')}-nine`] = '#C8C8C8';

  frameNew.appendChild(canvasNew);
  frameNew.appendChild(frameNumberNew);
  frameNumberNew.appendChild(numberNew);
  frameNew.appendChild(frameDeleteNew);
  frameNew.appendChild(frameDotsNew);
  frameNew.appendChild(frameCopyNew);
  frames.insertBefore(frameNew, addFrameButton);

  frameCounter += 1;
}

function setFirstFrameActive() {
  const frames = document.getElementById('frames');
  if (frames.children.length === 2) {
    frames.children[0].classList.add('active-frame');
  }
}

function setFrameActive(e) {
  if (e.target.classList.contains('frame')
    && !e.target.classList.contains('add')) {
    removeFrameActiveState();
    e.target.classList.add('active-frame');
  }
}

window.addEventListener('DOMContentLoaded', createFrame, false);
window.addEventListener('DOMContentLoaded', setFirstFrameActive, false);

frames.addEventListener('click', setFrameActive);

function reindexFrames() {
  const frames = document.getElementById('frames');
  for (let i = 0; i < frames.children.length; i += 1) {
    if (!frames.children[i].classList.contains('add-frame')) {
      frames.children[i].children[1].children[0].innerHTML = i + 1;
    }
  }
}

function deleteFrame(e) {
  const frames = document.getElementById('frames');
  let canvasId = null;
  let dataUniqueId = null;
  if (e.target.classList.contains('frame-delete')) {
    const parent = e.target.parentElement;
    if (frames.children.length !== 2) {
      if (parent.classList.contains('active-frame')
        && parent.previousElementSibling) {
        parent.previousElementSibling.classList.add('active-frame');
        canvasId = parent.previousElementSibling.children[0].id;
        dataUniqueId = parent.previousElementSibling.children[0].getAttribute('data-unique-id');
        readColors(canvasId, dataUniqueId);
      }
      if (parent.classList.contains('active-frame')
        && !parent.previousElementSibling) {
        parent.nextElementSibling.classList.add('active-frame');
        canvasId = parent.nextElementSibling.children[0].id;
        dataUniqueId = parent.nextElementSibling.children[0].getAttribute('data-unique-id');
        readColors(canvasId, dataUniqueId);
      }
      frames.removeChild(parent);
      frameCounter -= 1;
      reindexFrames();
    }
  }
}

function copyFrame(e) {
  const frames = document.getElementById('frames');
  if (e.target.classList.contains('frame-copy')) {
    const parent = e.target.parentElement;
    const clone = parent.cloneNode(true);
    dataCounter += 1;
    frames.insertBefore(clone, parent.nextElementSibling);
    clone.children[0].setAttribute('data-unique-id', dataCounter);
    const destCtx = clone.children[0].getContext('2d');
    destCtx.drawImage(parent.children[0],
      clone.children[0].offsetLeft - 5, clone.children[0].offsetTop - 5);
    parent.classList.remove('active-frame');
    clone.classList.add('active-frame');
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-one`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-one`];
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-two`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-two`];
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-three`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-three`];
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-four`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-four`];
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-five`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-five`];
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-six`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-six`];
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-seven`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-seven`];
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-eight`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-eight`];
    states[`${clone.children[0].id}-${clone.children[0].getAttribute('data-unique-id')}-nine`] = states[`${parent.children[0].id}-${parent.children[0].getAttribute('data-unique-id')}-nine`];
    reindexFrames();
  }
}

function frameFeedback(e) {
  if (e.target.classList.contains('frame')
    && !e.target.classList.contains('add')) {
    const canvasColor = e.target.children[0].id;
    const canvasUniqueId = e.target.children[0].getAttribute('data-unique-id');
    readColors(canvasColor, canvasUniqueId);
  }
}

frames.addEventListener('click', deleteFrame);
frames.addEventListener('click', copyFrame);
frames.addEventListener('click', frameFeedback);

const addFrameButton = document.getElementById('add-frame');

addFrameButton.addEventListener('click', createFrame);

figures.addEventListener('click', (e) => {
  const buttonBucket = document.getElementById('button-bucket');
  const colorCurrent = document.getElementById('color_current');
  const color = getComputedStyle(colorCurrent).backgroundColor;
  const canvas = document.querySelector('.active-frame').children[0];
  const ctx = canvas.getContext('2d');
  if (buttonBucket.classList.contains('selected')) {
    if (e.target.classList.contains('figure-one')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft - 5, canvas.offsetTop - 5, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-one`] = color;
    }
    if (e.target.classList.contains('figure-two')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft + 40, canvas.offsetTop - 5, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-two`] = color;
    }
    if (e.target.classList.contains('figure-three')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft + 85, canvas.offsetTop - 5, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-three`] = color;
    }
    if (e.target.classList.contains('figure-four')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft - 5, canvas.offsetTop + 40, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-four`] = color;
    }
    if (e.target.classList.contains('figure-five')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft + 40, canvas.offsetTop + 40, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-five`] = color;
    }
    if (e.target.classList.contains('figure-six')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft + 85, canvas.offsetTop + 40, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-six`] = color;
    }
    if (e.target.classList.contains('figure-seven')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft - 5, canvas.offsetTop + 85, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-seven`] = color;
    }
    if (e.target.classList.contains('figure-eight')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft + 40, canvas.offsetTop + 85, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-eight`] = color;
    }
    if (e.target.classList.contains('figure-nine')) {
      ctx.fillStyle = color;
      ctx.fillRect(canvas.offsetLeft + 85, canvas.offsetTop + 85, 40, 40);
      states[`${canvas.id}-${canvas.getAttribute('data-unique-id')}-nine`] = color;
    }
  }
});
