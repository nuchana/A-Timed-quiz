// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
// var time = 3;
var timerId;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startScreen = document.getElementById("start-screen");
var finalScore = document.getElementById("final-score");
var questionTitle = document.getElementById("question-title")
var timerCount = document.querySelector("#timer");
var endScreen = document.getElementById("end-screen")

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");



function startQuiz() {
  // hide start screen
  startScreen.style.display = "none";
  // un-hide questions section
  questionsEl.classList.remove("hide");

  // start timer
  // setTimer();
  timerId = setInterval(setTimer, 1000);

  // show starting time
  timerEl.innerHTML = time;
  // displayTimer();

  getQuestion();
}

// make a timer
function setTimer() {
  time--;
  timerEl.innerHTML = time;

  if (time <= 0) {
    quizEnd();
  }

}

function getQuestion() {
  // get current question object from array
  currentQuestion = questions[currentQuestionIndex];
  // update title with current question
  questionTitle.textContent = currentQuestion.title;
  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    var choice = document.createElement("button");
    choice.textContent = currentQuestion.choices[i];
    // attach click event listener to each choice
    choices.onlick = checkAnswer;
    // console.log(choice);
    // display on the page
    choicesEl.appendChild(choice);
  }
}

// check if answer is correct
choicesEl.addEventListener("click", checkAnswer);
function checkAnswer() {

  if (event.target.textContent === questions[currentQuestionIndex].answer) {

    // timerId = timerId + 5;
    // timerEl.innerHTML = timerId
    time += 5;
    timerEl.innerHTML = time
    sfxRight.play();

  }

  else {
    // timerId = timerId - 5;
    // timerEl.innerHTML = timerId;
    time -= 5;
    timerEl.innerHTML = time
    sfxWrong.play();

  }
  // move to next question

  currentQuestionIndex++

  // check if we’ve run out of questions. if yes, quiz end. else, move to next question

  if (currentQuestionIndex > questions.length - 1) {
    quizEnd();
  } else {
    getQuestion();
  }

}

function quizEnd() {

  // stop timer
  clearInterval(timerId);
  // show end screen
  endScreen.classList.remove("hide");
  // show final score
  finalScore.innerHTML = time
  // hide questions section
  questionsEl.classList.add("hide");
}


function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  initialsEl = initialsEl.value;

  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  if (initialsEl === "") {
    alert("Please leave your initial");
  }
  else {
    var saveHighscore = JSON.parse(window.localStorage.getItem("highScores")) || [];
    localStorage.setItem("Initials", initialsEl);

  }

  // format new score object for current user

  // save to localstorage

  // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;

