const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownElBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
console.log('Date = ', countdownValue);
//set minimum date
const today = new Date().toISOString().split('T');
console.log('today', today);
dateEl.setAttribute('min', today[0]);

function updateDOM() {
  const now = new Date().getTime();
  //console.log('now = ', now);
  const distance = countdownValue - now;
  console.log('distance =', distance);
  console.log('countdownValue2', countdownValue);
  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  console.log(days, hours, minutes, seconds);
  countdownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[0].textContent = `${hours}`;
  timeElements[0].textContent = `${minutes}`;
  timeElements[0].textContent = `${seconds}`;
  inputContainer.hidden = true;
  countdownEl.hidden = false;
}

function updateCountDown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  //console.log(countdownTitle,' = ', countdownDate);
  //console.log(today);
  countdownValue = new Date(countdownDate).getTime();
  //console.log('countdownValue', countdownValue);
  updateDOM();
}

countdownForm.addEventListener('submit', updateCountDown);

