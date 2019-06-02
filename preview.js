const fullScreenButton = document.getElementById('full-screen');
const frameRateInput = document.getElementById('frame-rate');
const frameRateInputLabel = document.getElementById('frame-rate-label');
const frames = document.getElementById('frames');
const previewTool = document.getElementById('preview-tool');
const perviewWindow = document.getElementById('preview-window');
let index = 0;
let fpsRate = 5;

function fullScreenButtonHandler() {
  fullScreenButton.classList.toggle('full-screen-mode');
  if (fullScreenButton.classList.contains('full-screen-mode')) {
    previewTool.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function frameRateInputHandler() {
  fpsRate = frameRateInput.value;
  frameRateInputLabel.innerHTML = `${frameRateInput.value} fps`;
}

function setDefaultFps() {
  frameRateInputLabel.innerHTML = `${frameRateInput.value} fps`;
}

function previewHandler() {
  setTimeout(() => {
    if (!frames.children[index].classList.contains('add-frame')) {
      const canvas = frames.children[index].children[0];
      perviewWindow.style.background = `url(${canvas.toDataURL()}') 0 0 no-repeat`;
      perviewWindow.style.backgroundSize = 'cover';
    }
    index += 1;
    if (index < frames.children.length - 1) {
      previewHandler();
    } else {
      index = 0;
      previewHandler();
    }
  }, 1000 / fpsRate);
}

window.addEventListener('load', setDefaultFps);
window.addEventListener('load', previewHandler);

frameRateInput.addEventListener('input', frameRateInputHandler);

fullScreenButton.addEventListener('click', fullScreenButtonHandler);
