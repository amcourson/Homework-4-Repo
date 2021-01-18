var startButton = document.querySelector(".start-button");
var timeRemaining = document.getElementById("time");
var quizQuestions = document.getElementById("questions");

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

    var textnode = document.createTextNode(myQuestions[0].question);        
   
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



function showResults(questions, quizContainer, resultsContainer){

}

// showQuestions(questions, quizContainer);

// submitButton.onclick = function(){
//     showResults(questions, quizContainer, resultsContainer);
// }


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
// console.log("showQuestions")


function showHighScore (){

}
}
generateQuiz()