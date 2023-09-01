const startBtn = document.querySelector('.js-start-btn');
const stopBtn = document.querySelector('.js-stop-btn');
const body = document.body;

let idInterval = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  idInterval = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStopBtn() {
  clearInterval(idInterval);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}
