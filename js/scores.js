function printHighscores() {
  // either get scores from localstorage or set to empty array
  
  var highScore = localStorage.getItem('mostRecentScore');
  var initials = localStorage.getItem('initials');

  console.log ("mostRecentScore", highScore);
  // display on page
  document.getElementById("highscores").textContent = highScore;
 
 
  // (optional) sort highscores by score property in descending order

  // for each score
    // create li tag for each high score

    // display on page
}

printHighscores();

var clear = document.getElementById("clear");
clear.addEventListener("click", clearHighscores);
function clearHighscores() {

  document.getElementById("highscores").textContent = "";

  // (and reload)
}

// attache clear event to clear score button

// run printhighscore when page loads
