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
// function setTimer() {
//   timerEl.textContent = time;
//   timerId = setInterval(function () {
//     time--;
//     timerEl.innerHTML = time;

//     if (timerEl.innerHTML === 0) {
//       myStopfunction(timerId);

//       choicesEl.innerHTML = "";

//       finalScore.innerHTML = time;

//     }
//   }, 1000);

//   function myStopfunction(timerId) {
//     clearInterval(timerId);

//   }
// }


// make a timer
function setTimer() {
  time--;
  timerEl.innerHTML = time;

  if (time <= 0) {
    quizEnd();
  }



}

//display questions & for each question's choices make a button
function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  questionTitle.innerHTML = currentQuestion.title;


  // empty containers/ any old question choices
  choicesEl.innerHTML = "";


  // display answer choices & loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice (from instructor)
    var newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    var newButton = document.createElement("button");
    newButton.id = i;
    newButton.innerHTML = +[i] + 1 + ": " + currentQuestion.choices[i];
    newButton.className = "choices button";
    // display on the page (from instructor)
    document.body.appendChild(newButton);
    newButton.onclick = checkAnswer;
    // console.log(questions[currentQuestionIndex].answer);

  }

}

// check if answer is correct
function checkAnswer() {
  
  if (this.innerHTML !== questions[currentQuestionIndex].answer) {
    // console.log('Wrong!!')

    time -= 5;
    if (time < 0) {
      time = 0;
    }

    // display new time
    timerEl.innerHTML = time;

    // play "wrong" sfx
    sfxWrong.play();
    feedbackEl.innerHTML = "Wrong";

    // document.body.setAttribute("class", "wrong");
    // let finalScoreInt = parseInt(finalScore.innerHTML);
    // let currentTimerInt = parseInt(timerEl.innerHTML);
    // finalScoreInt -= currentTimerInt;
    // finalScore.innerHTML = finalScoreInt;

  }
  else {
    sfxRight.play();
    feedbackEl.innerHTML = "Correct";
    time ++;

    // document.body.setAttribute("class", "right");
    // myStopfunction(timerId);
    // let finalScoreInt = parseInt(finalScore.innerHTML);
    // finalScoreInt += currentTimerInt;
    // finalScore.innerHTML = finalScoreInt;
    // console.log('That is correct!')

    //disable button after clicking answer once
    this.disabled = true;
    displayNextBtn();
   
    // move to next question
    function displayNextBtn() {
      displayNextBtn.addEventListener("click", nextQuestion);
      displayNextBtn.classList.remove("hide");

      if (currentQuestion === questions.length) {
        console.log(currentQuestion);

        endQuiz();
      }
      else {
        getQuestion();
      }

    }

    // check if we've run out of questions
    // quizEnd
    // else 
    // getQuestion

  }
}

function quizEnd() {

  // stop timer
  clearInterval(timerId);
  // show end screen
  endScreen.classList.remove ("hide");
  // show final score

  // hide questions section
  questionsEl.classList.add("hide");
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

