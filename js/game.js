const question = document.querySelector("#question");
const choices = document.querySelectorAll(".choice-text");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

const getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("/end.html");
  }

  questionCounter += 1;
  const questionIdx = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIdx];

  question.textContent = currentQuestion.question;

  for (let i = 1; i <= 4; i += 1) {
    choices[i - 1].textContent = currentQuestion[`choice${i}`];
  }

  acceptingAnswers = true;

  availableQuestions.splice(questionIdx, 1);
};

for (const choice of choices) {
  choice.addEventListener("click", (evt) => {
    if (!acceptingAnswers) {
      return;
    }

    acceptingAnswers = false;

    const selectedAnswer = evt.target.textContent;
    console.log(selectedAnswer);

    getNewQuestion();
  });
}

startGame();
