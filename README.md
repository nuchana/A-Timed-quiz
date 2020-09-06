What i did

1. I review all variables and add where it needed
2. start working on startQuiz function by 
    - using setInterval to start timer and counting down (including a condition that if time is 0, the quiz ends). 
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
    - redirect to next page of printHighscore

7. function printHighscore 
    - get store from local storage 
    - display on page
    - and then call it

8. funcitn clearHighScore
    - add onclick event
    - clear the event/score
    - go back to the start screen




