var score = localStorage.getItem("score");
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var timeRemaining = document.getElementById('timeRemaining');

function init () {
    if (!score) {
        score = {
        wins: 0,
        losses: 0
        };
    }
    score = localStorage.getItem("score"){

    )};
}

start.addEventListener("click", function (event) {
    console.log("Triggered the Start");
    countdown ();
)};

    
reset.addEventListener(click, function (event)); {
    console.log("Here");

    

function countdown () {
   var time = 5;

   var timeRemaining = setInterval(function () {
    if (time > 0){
        time--;
        console.log(time);
        showTime();
    } else {
        console.log('Timer is at ')
    }