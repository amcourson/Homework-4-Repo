var startButton = document.querySelector(".start-button");
var timeRemainingEl = document.getElementById("time");
var quizQuestions = document.getElementById("questions");
var correctAnswer = document.getElementById("correct");

var i =0;

function timerTimer(){
    var timeLeft= 60;

    var timerInterval =setInterval(function() {
        timeRemainingEl.textContent = timeLeft + "seconds reamining";
        timeLeft--;

        if (timeLeft === 0) {
            timeRemainingEl.textContent = "";
            reduceTime();
            clearInterval(timerInterval);
        }
    },1000);
}






function reduceTime(){
    timerInterval.textContent = "";
   //if chosen answer is wrong take off time
   //if chose answer is correct continue
}

startButton.addEventListener("click",function(){
    showQuestions();
    startButton.style.display = 'none'

    
});


//event listener button
// when button is clicked, if wrong, take off time and move to new question. 
//if correct move to new question
//at the end display results 
//ask initials and display highscores 
function showQuestions(){
    var myQuestions = [
        {
            question: "What is an array?",
            answers: [
                'An object that allows you to store multiple variable in a single varriable.',
                'Something used in JavaScript.',
                'A list',
            ],
            correctAnwser: 0
        },
    {
        question: "What is a dataset?",
        answers: [
            'A set of data used in coding.',
            'Contains structured data arranged in rows and colums.',
            'Contains data attributes.',
        ],
        correctAnswer: 1
    },
    {
        question: "What is HTML?",
        answers: [
            'HTML or Hypertext Markup :anguage is the standard markup language for documents designed to be displayed in a web browser.',
            'A programming language.',
            'Used to structure code in a webpage.',

        ],
        correctAnswer: 0
    }
    ];

    var textnode = document.createTextNode(myQuestions[0,1,2].question);        
   
quizQuestions.appendChild(textnode);
showAnswers(myQuestions[0]);
}

function showAnswers (currentQuestion){
    var output = [];
    var answers = currentQuestion.answers;

    for(var i =0; i < answers.length; i++){
        var node = document.createElement("button");               
        var textnode = document.createTextNode(answers[i]);         
        node.appendChild(textnode);
        quizQuestions.appendChild(node);
        
    }
}

correctAnswer.addEventListener('click',function(){
    showAnswers(correctAnswer[0,1,2]);
}
);

function showResults(questions, quizContainer, resultsContainer){

}

// showQuestions(questions, quizContainer);

// submitButton.onclick = function(){
//     showResults(questions, quizContainer, resultsContainer);
// }


function generateQuiz(questions, quizContainer, resultsContainer, submitButton, showAnswers, showHighScore){
// console.log("showQuestions")


function showHighScore (){

}
}
generateQuiz()