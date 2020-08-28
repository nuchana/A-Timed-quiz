// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
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

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");



function startQuiz() {
  // hide start screen
  startScreen.style.display = "none";
  // un-hide questions section
  questionsEl.removeAttribute("hide");
  // start timer
  setTimer();

  // show starting time
  // displayTimer();

  getQuestion();
}

// make a timer
function setTimer() {
  timerEl.textContent = time;
  timerId = setInterval(function () {
    time = time - 1;
    timerEl.innerHTML = time;

    if (timerEl.innerHTML === 0) {
      myStopfunction(timerId);
      choicesEl.innerHTML = "";

      finalScore.innerHTML = time;

      // displayNextBtn();

    }
  }, 1000);

  function myStopfunction(timerId) {
    clearInterval(timerId);
  }
}

//display questions & for each question's choices make a button
function getQuestion() {
  // get current question object from array
  questionsEl.innerHTML = currentQuestionIndex

  // empty containers/ any old question choices
  questionsEl.innerHTML = "";
  choicesEl.innerHTML = "";


  // update title with current question
  let h2Question = document.createElement("h2");
  h2Question.classList.add("question");
  h2Question.innerHTML = questions[currentQuestionIndex].question;
  questionsEl.appendChild(h2Question);
  console.log(h2Question)

  // display answer choices & loop over choices
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    let h2Choices = document.createElement("button")
    h2Choices.innerHTML = "";
    h2Choices.classList.add("choices-btns");

    h2Choices.innerHTML = questions[currentQuestionIndex].choices[i];
    choiceCont.appendChild(h2Choices);
    h2Choices.onclick = checkAnswer;

  }

// create new button for each choice
// attach click event listener to each choice
// display on the page


}



function displayNextBtn() {
  displayNextBtn.addEventListener("click", nextQuestion);
  displayNextBtn.classList.remove("hide");
}


// check if answer is correct
function answerClick(event) {
  // onclick and grab some value from button

  for (var i = 0; i < questionsEl.length; i++) {
    var response = window.prompt(questionsEl[i].title)
    if (response == questions[i].answer) {
      score++;
      alert("Correct!");
    }
    else {
      score--;
      alert("wrong!");
    }

  }

  // penalize time

  // display new time on page

  // play "wrong" sound effect

  // else 
  // play "right" sound effect


  // flash right/wrong feedback on page for half a second

  // move to next question

  // check if we've run out of questions
  // quizEnd
  // else 
  // getQuestion
  if (currentQuestion === questions.length) {
    console.log(currentQuestion);

    endQuiz();
  }
  else {
    getQuestion();
  }

}

function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array

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

// function nextQuestion() {
//   ++currentQuestion;
//   body.setAttribute("class", "default");
//   setTimer();
//   displayQuestion();
//   displayNextBtn.setAttribute("class", "hide");
// }