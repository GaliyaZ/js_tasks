const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');
const complete =document.getElementById('complete');
const completeInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;
console.log('Date = ', countdownValue);
//set minimum date
const today = new Date().toISOString().split('T');
console.log('today', today);
dateEl.setAttribute('min', today[0]);

function timeEnd() {
  console.log('time end!')
}

function updateDOM() {
  countdownActive = setInterval( () => {
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
  //if time end, show complete info
  if (distance < 0) {
    clearInterval(countdownActive );
    countdownEl.hidden = true;
    inputContainer.hidden = true;
    complete.hidden = false;
    completeInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
  } else {
      //show time
  countdownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3 ].textContent = `${seconds}`;
  inputContainer.hidden = true;
  countdownEl.hidden = false;
  }
}, second); 
}

function updateCountDown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  //console.log(countdownTitle,' = ', countdownDate);
  //console.log(today);
  if (countdownDate == '') {
    alert('Please, select a date.')
  } else {
    countdownValue = new Date(countdownDate).getTime();
    //console.log('countdownValue', countdownValue);
    updateDOM();
  }  
}

function reset() {
  countdownEl.hidden = true;
  complete.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countdownActive ); 
}

countdownForm.addEventListener('submit', updateCountDown);
countdownBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);
