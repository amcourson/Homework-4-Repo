var startButton = document.querySelector(".start-button");
var timeRemaining = document.getElementById(".time");
var quizQuesions = document.getElementById(".quiz");

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

function generateQuiz(questions, quizContainr, resultsContainer, submitButton)
console.log("showQuestions")
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
            a:'A set of data used in coding.',
            b:'Contains structured data arranged in rows and colums.',
            c:'Contains data attributes.',
        },
        correctAnswer: 'b',
    },
    {
        question: "What is HTML?",
        answers: {
            a:'HTML or Hypertext Markup :anguage is the standard markup language for documents designed to be displayed in a web browser.',
            b:'A programming language.',
            c:'Used to structure code in a webpage.',

        },
        correctAnswer: 'a',
    }
    ];

function showQuestions (questions,  quizContainer){
    var output = [];
    var answers;

    for(var i =0; i < questions.length; i++){
        answers = [];

        for(letter in questions[i].answers){
            answers.push(
                
            )
        }
    }
}

function showReuslts(questions, quizContainer, resultsContainer){

}

showQuestions(questions, quizContainer);

submitButton.onclick = function(){
    showResults(questions, quizCOntainer, resultsCOntainer);
}

}

function showHighScore (){

}