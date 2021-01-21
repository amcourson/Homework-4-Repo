var startButton = document.querySelector(".start-button");
var timeRemaining = document.getElementById("time");
var quizQuestions = document.getElementById("questions");
var correctAnswer = document.getElementById("Answer0");
var answer2 = document.getElementById("Answer1");
var answer3 = document.getElementById("Answer2");



function reduceTime() {
    var timeRemaining = 15;
    var time = setInterval(function () {
        console.log(timeRemaining);
        timeRemaining--;
        if (timeRemaining === 0) {
            stopInterval()
        }
    }, 1000);

    var stopInterval = function () {
        console.log('time is up!');
        clearInterval(time);
    }


    // timerInterval.textContent = "";
    //if chosen answer is wrong take off time
    //if chose answer is correct continue
}

startButton.addEventListener("click", function () {
    showQuestions();
    reduceTime();
    startButton.style.display = 'none'


});

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
            'HTML or Hypertext Markup :language is the standard markup language for documents designed to be displayed in a web browser.',
            'A programming language.',
            'Used to structure code in a webpage.',

        ],
        correctAnswer: 0
    }
];
//event listener button
// when button is clicked, if wrong, take off time and move to new question. 
//if correct move to new question
//at the end display results 
//ask initials and display highscores 
function showQuestions() {
//     var myQuestions = [
//         {
//             question: "What is an array?",
//             answers: [
//                 'An object that allows you to store multiple variable in a single varriable.',
//                 'Something used in JavaScript.',
//                 'A list',
//             ],
//             correctAnwser: 0
//         },
//         {
//             question: "What is a dataset?",
//             answers: [
//                 'A set of data used in coding.',
//                 'Contains structured data arranged in rows and colums.',
//                 'Contains data attributes.',
//             ],
//             correctAnswer: 1
//         },
//         {
//             question: "What is HTML?",
//             answers: [
//                 'HTML or Hypertext Markup :language is the standard markup language for documents designed to be displayed in a web browser.',
//                 'A programming language.',
//                 'Used to structure code in a webpage.',

//             ],
//             correctAnswer: 0
//         }
//     ];

    var question1 = myQuestions[0].question

    quizQuestions.prepend(question1);
    // showAnswers(myQuestions[0]);
correctAnswer.textContent=myQuestions[0].answers[0];
answer2.textContent=myQuestions[0].answers[1];
answer3.textContent=myQuestions[0].answers[2];

}


function showAnswers(currentQuestion) {
    var question2 = myQuestions[1].question[0]

    quizQuestions.prepend(question2);
    // showAnswers(myQuestions[0]);
correctAnswer.textContent=myQuestions[1].answers[0];
answer2.textContent=myQuestions[1].answers[1];
answer3.textContent=myQuestions[2].answers[2];

    }


// console.log(correctAnswer);
correctAnswer.addEventListener('click', function () {
    var Answer0 = document.getElementById("Answer0");
    console.log(Answer0.textContent);
    if (Answer0.textContent === "An object that allows you to store multiple variable in a single varriable.") {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
   showAnswers()
 }



    function showResults(questions, quizContainer, resultsContainer) {

    }

    // showQuestions(questions, quizContainer);

    // submitButton.onclick = function(){
    //     showResults(questions, quizContainer, resultsContainer);
    // }


    function generateQuiz(questions, quizContainer, resultsContainer, submitButton, showAnswers, showHighScore) {
        // console.log("showQuestions")


        function showHighScore() {

        }
        generateQuiz()
    }
})
