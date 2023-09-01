import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]')
input.addEventListener('input', onInputDate);
btnStart.addEventListener('click',onBtnStartClick)

flatpickr(input);

// const qtDays = document.querySelector('span[data-days]');
// const qtHours = document.querySelector('span[data-hours]');
// const qtMinutes = document.querySelector('span[data-minutes]');
// const qtSeconds = document.querySelector('span[data-seconds]');

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

let millisecondsDifference = null;

function onInputDate(e) {
  const targetDate = e.target.value;
  console.log(targetDate);
  const date = new Date(targetDate);
  const targetMilliseconds = date.getTime();
  console.log(targetMilliseconds);
  const currentDate = new Date();
  console.log(currentDate.getTime());
  const currentQtMiliseconds = currentDate.getTime();
  millisecondsDifference = targetMilliseconds - currentQtMiliseconds;
  console.log(millisecondsDifference);
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

console.log(convertMs(millisecondsDifference));

function onBtnStartClick(){
  idInterval = setInterval(()=>(
    millisecondsDifference - 1000
  ),1000
  )
  console.log(millisecondsDifference);
}

const b = 10;
console.log(b);
