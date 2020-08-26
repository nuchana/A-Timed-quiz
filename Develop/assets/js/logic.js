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
var startScreen = document.getElementById("start-screen")

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

startBtn.addEventListener("click",startQuiz);
function startQuiz() {
  // hide start screen
  startScreen.style.display = "none";
  // un-hide questions section
  questionsEl.removeAttribute("class");
  // start timer
  time = questions.length * 15;
  // show starting time
  //getTime ();

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  let questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",


    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"],
      answer: "all of the above",
    },
    {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes",
    },
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log",
    },
  ]

  // update title with current question

  // clear out any old question choices

  // loop over choices

  // create new button for each choice

  // attach click event listener to each choice

  // display on the page
}

// create var
var score = 0

function questionClick() {

  // check if user guessed wrong
  if (questions[runningquestionsEl].correct == answer) {
    score++;
  }
  else { }




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
