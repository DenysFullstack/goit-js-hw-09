import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const qtDays = document.querySelector('span[data-days]');
const qtHours = document.querySelector('span[data-hours]');
const qtMinutes = document.querySelector('span[data-minutes]');
const qtSeconds = document.querySelector('span[data-seconds]');

btnStart.addEventListener('click', onBtnStartClick);
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date(selectedDates[0]) <= Date.now()) {
      return alert('Please choose a date in the future');
    }
    btnStart.disabled = false;
    console.log(new Date(selectedDates[0]));
  },
};

flatpickr(input, options);

function onBtnStartClick() {
  input.disabled = true;
  btnStart.disabled = true;

  idInterval = setInterval(() => {
    const pressedTime = new Date(input.value);

    const currentTime = pressedTime - Date.now();

    if (pressedTime < Date.now()) {
      return stopTimer();
    }

    const finalTime = convertMs(currentTime);
    console.log(finalTime);
    qtDays.textContent = String(finalTime.days).padStart(2, '0');
    qtHours.textContent = String(finalTime.hours).padStart(2, '0');
    qtMinutes.textContent = String(finalTime.minutes).padStart(2, '0');
    qtSeconds.textContent = String(finalTime.seconds).padStart(2, '0');
  }, 1000);

  function stopTimer() {
    clearInterval(idInterval);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
