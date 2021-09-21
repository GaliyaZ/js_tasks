const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');
const optionElements = document.querySelectorAll('.option');
console.log(optionElements);
const question = document.getElementById('question');
const numberOfQuestion = document.getElementById('number-of-question');
const countOfQuestions = document.getElementById('number-of-all-questions');
let indexOfQuestion, //index of current question
    indexOfPage = 0; //флаг проверки заданных вопросов
const answersTracker = document.getElementById('answers-tracker');
const BtnNext = document.getElementById('btn-next');
let score = 0;
const correctAnswer = document.getElementById('correct-answer');
let numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2');
const btnTryAgen = document.getElementById('btn-try-again');

const questions = [
  {
    question: "Самый зубастый столовый прибор?",
    options: [
      'Нож',
      'Кот',
      'Вилка',
      'Зубастик',
    ],
    rightAnswer: 2,
  },
  {
    question: 'Самый южный материк?',
    options: [
      'Антарктида',
      'Африка',
      'Южная Америка',
      'Мадагаскар',
    ],
    rightAnswer: 0
  },
  {
    question: 'Самое верное человеку животное?',
    options: [
      'Кот',
      'Игуана',
      'Попугай',
      'Собака',
    ],
    rightAnswer: 3
  },
  {
    question: 'Как лечь спать пораньше?',
    options: [
      'Обратиться к тайм-менеджменту',
      'Просто лечь спать пораньше',
      'Сон для слабаков!',
      'Подумать о вечном...',
    ],
    rightAnswer: 0
  }
];

countOfQuestions.innerHTML = questions.length;
console.log(indexOfQuestion)

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;
  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];
  numberOfQuestion.innerHTML = indexOfPage + 1;//номер текущей страницы
  indexOfPage++;
  console.log(indexOfPage);
}

const checkAnswer = e => {
  //console.log(e.target);
  if(e.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    e.target.classList.add('correct'); 
    updateAnswerTracker('correct');
    score++; 
  } else {
    e.target.classList.add('wrong');
    updateAnswerTracker('wrong');
  }
  disabledOptions();
}

const disabledOptions = () => {
  optionElements.forEach(item => {
    item.classList.add('disabled');
    if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add('correct');
    }
  })
}

for (option of optionElements) {
  option.addEventListener('click', e  => checkAnswer(e))
}

let completedAnswers = []; //хранит номера заданных вопросов

const quizOver = () => {
  //console.log('end of game')
  document.querySelector('.quiz-over-modal').classList.add('active');
  correctAnswer.innerHTML = score;
  numberOfAllQuestions2.innerHTML = questions.length;
}

let randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  //console.log(randomNumber);
  let hitDuplicate = false; //флаг проверки повторяющихся вопросов
  //console.log('indexOfPage: ', indexOfPage);
  if(indexOfPage == questions.length) { //последний вопрос?
    console.log('last question')
    quizOver();
  } else {
      if(completedAnswers.length > 0) {
        completedAnswers.forEach(i => {
          if(i == randomNumber) {
            hitDuplicate = true;
          }
        });
        if(hitDuplicate == true) {
          randomQuestion();
        } else { 
          indexOfQuestion = randomNumber;
          load();
        }
      }
    if(completedAnswers.length == 0) {
        indexOfQuestion = randomNumber;
        load();
    }
  }
  completedAnswers.push(indexOfQuestion); //заполнение массива заданными вопросами
};

window.addEventListener('load', () => { //запуска после загрузки страницы
  randomQuestion();
  answerTracker();
}) 

const enableOptions = () => {
  optionElements.forEach(i => {
    i.classList.remove('disabled', 'correct', 'wrong');
  })
}

const validate = () => {
  if(!optionElements[0].classList.contains('disabled')) {
    alert('Выберите ответ');
  } else {
    randomQuestion();
    enableOptions();
  }
}

BtnNext.addEventListener('click', () => {
  validate();
})

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
}

const updateAnswerTracker = status => {
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const tryAgen = () => {
  window.location.reload(); //перезагрузка страницы
}

btnTryAgen.addEventListener('click', tryAgen);
