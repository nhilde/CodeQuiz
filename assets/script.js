const startBtn = document.querySelector("#startBtn");
const startCard = document.querySelector("#startCard");

const card1 = document.querySelector("#card1");
var question1= document.getElementById("form1").elements.namedItem("question1").value;

const card2 = document.querySelector("#card2");
var question2 = document.querySelector("#form2").elements.namedItem("question2").value;

const card3 = document.querySelector("#card3");
var question3 = document.querySelector("#form3").elements.namedItem("question3").value;

const card4 = document.querySelector("#card4");
const question4= document.querySelector("#question4");

const card5 = document.querySelector("#card5");
const question5= document.querySelector("#question5");

const endCard = document.querySelector("#endCard");
const scoreLine = document.querySelector("#scoreLine")
const scoreDisplay = document.querySelector("#scoreDisplay")
const tableBtn = document.querySelector("#tableBtn")
const userName = document.querySelector("#userName")

let timerInterval;
let timer = document.querySelector("#timer");
let startTime = 60;
let score = 0;

// const userName = document.querySelector("#scoreForm").elements.namedItem("question3").value;

// const player = localStorage.setItem("Name", userName)
// const playerScore = localStorage.setItem("Score", score)





$("#startBtn").on("click", function setTime() {
    timerInterval = setInterval(function () {
        startTime--;
        timer.textContent = startTime + " Seconds left";
  
        if (startTime === 0) {
            clearInterval(timerInterval);
            $(".questions").hide();
            alert("Time is up");
            $("#endCard").show();
        }
    }, 1000);})

console.log("test")
$("#startBtn").on("click", function (event) {
    event.preventDefault()
    $("#startCard").hide();
    $("#card1").show();
})

console.log(score)

$("#form1").on("submit", function (event) {
    event.preventDefault()
    var question1= document.getElementById("form1").elements.namedItem("question1").value;
    console.log("test3")
    if (question1 == "Portugal") {
        score++
    } 

    $("#card1").hide();
    $("#card2").show();
    console.log(score)
})

console.log(question1)

$("#form2").on("submit", function (event) {
    event.preventDefault()
    var question2= document.getElementById("form2").elements.namedItem("question2").value;
    if (question2 == "France") {
        score++
    } 
    $("#card2").hide();
    $("#card3").show();
    console.log(score)
})

$("#form3").on("submit", function (event) {
    event.preventDefault()
    var question3= document.getElementById("form3").elements.namedItem("question3").value;
    if (question3 == "90") {
        score++
    } 
    $("#card3").hide();
    $("#card4").show();
    console.log(score)
})

$("#form4").on("submit", function (event) {
    event.preventDefault()
    var question4= document.getElementById("form4").elements.namedItem("question4").value;
    if (question4 == "Chelsea") {
        score++
    } 
    $("#card4").hide();
    $("#card5").show();
    console.log(score)
})

$("#form5").on("submit", function (event) {
    event.preventDefault()
    var question5= document.getElementById("form5").elements.namedItem("question5").value;
    if (question5 == "Harry Kane") {
        score++
    } 
    clearInterval(timerInterval)
    $("#card5").hide();
    $("#endCard").removeClass("hide");
    console.log(score)

    

    
   
    $("#scoreLine").text(" You scored " + score + " points ")
    clearInterval(timerInterval)
    $("#timer").text("Time is up")
   
});


tableBtn.onclick = function () {
   
    const key = userName.value;
    const value = score;

    
    localStorage.setItem(key, value)
    

};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    scoreDisplay.innerHTML += `${key}: ${value} |` ;
}

