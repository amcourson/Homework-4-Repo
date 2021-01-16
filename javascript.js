var startButton = document.querySelector(".start-button");
var timeRemaining = document.getElementById(".time")

var secondsLeft =50;

function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeRemaining.textContent = secondsLeft + "50 seconds left";
        if (secondsLeft ===0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    },1000);
}

function reduceTime(){
    timerInterval.textContent = "";
   //if chosen answer is wrong take off time
   //if chose answer is correct continue
}


//event listener button
// when button is clicked, if wrong, take off time and move to new question. 
//if correct move to new question
//at the end display results 
//ask initials and display highscores 

function generateQuiz

function showQuestions(){
    var myQuestions = [
        {
            question: "What is an array?",
            answers: {
                a:'An object that allows you to store multiple variable in a single varriable.',
                b:'Something used in JavaScript.',
                c: 'A list',
            },
            correctAnwser: 'a'
        },
    {
        question: "What is a dataset?",
        answers: {
            a:'',
            b:'',
            c:'',
        },
        correctAnswer: ''
    }
}
    ];

function showResults

function displayHighScores
