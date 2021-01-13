var timeRemaining = document.getElementById("time")




function timeLeft(){
    var timeRemaining = 50;

    var timerInterval = setInterval(function() {
        timeRemaining.textContent = timeRemaining + "seconds remaining";
        timeRemaining--;

        if (timeRemaining === 0){
            timeRemaining.textContent = "";
            clearInterval(timerInterval);
        }
    },1000);
}