Re-submission because my html file as a entry point file was in a sub-folder. Next time, I need to make sure that my index.html is in the root directory of my project. I revised all relative paths accordingly. 

1. I review all variables and add where it needed such as var mostRecentScore for local storage.
2. start working on startQuiz function by 
    - Using setInterval to start timer and counting down. I included a condition that if time is 0, the quiz ends. Or else, it will continue counting down to negative. 
    - Hide starting screen and unhide question page once click start Btn is activated.  
    - move to getQuestion 
3. function getQuestion 
    - update current question and create button of choices
    - loop over an array of choices
    - when it's onclick, we move to checkAnswer function
4. Function checkAnswer
    - Create a condition if/else: if the user click the right answer, he gets 5 more secs. Else, his time is reduced by 5 sec.
    - add SFX
    - move to the next question
    - also check if it's last question or not. if yes, the quiz ends.

5. funciton quizEnd
    - timer stops with clearInterval
    - update final score
    - show end screen and hide questin section

6. function saveHighscore
    - when submitBtn is clicked, we move to saveHighscore function
    - get value of input box
    - save score and initial in local storage (JSON parse to change string to object here)
    - redirect to next page of printHighscore (window.location.xxx)

7. function printHighscore 
    - get store from local storage 
    - display on page
    - and then call it

8. funcitn clearHighScore
    - add onclick event
    - clear the event/score
    - go back to the start screen

My challenge part here is saving in the local storage and retrieving it. JSON is to exchange data to/from a web server.
When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object. I learnt something new from doing this homework for sure.



