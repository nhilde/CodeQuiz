const startBtn = document.querySelector("#startBtn");
const startCard = document.querySelector("#startCard");
const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question5 = document.querySelector("#question5");
const timer = document.querySelector("#timer");
const startTime = 60;

//example timer setup below
//const timeIs = theQuestions.length * 18

function setTime() {
var timerInterval = setInterval(function() {
startTime--;
timer.textContent = startTime + "Seconds left" ; 

if (timer === 0) {
    clearInterval(timerInterval);
    $(".questions").hide();
    alert("Time is up");
}
}, 60000);


}


$("#startBtn").on("click", setTime)

console.log("test")
$("#startBtn").on("click", function() {
    $("#startCard").hide();
    $("#question1").show();

    console.log("test2")
})

$("#question1").on("submit", function() {
    $("#question1").hide();
    $("#question2").show();
    console.log(test3)







})