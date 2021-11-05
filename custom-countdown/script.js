const inputContainer = document.getElementById('input-contaienr');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');
let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
//set minimum date
const today = new Date().toISOString().split('T');
dateEl.setAttribute('min', today[0]);

function updateCountDown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle,' = ', countdownDate);
}
//console.log(today);
countdownValue = new Date(countdownDate).getTime();

countdownForm.addEventListener('submit', updateCountDown);

