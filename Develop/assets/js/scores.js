function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highScore = localStorage.getItem('mostRecentScore');
  console.log ("mostRecentScore", highScore);
  // display on page
  highScore.innerHTML = mostRecentScore
 
  // (optional) sort highscores by score property in descending order

  // for each score
    // create li tag for each high score

    // display on page
}

printHighscores();
function clearHighscores() {
  // (and reload)
}

// attache clear event to clear score button

// run printhighscore when page loads
