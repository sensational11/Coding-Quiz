// Current Score 
var score =0 
// Start Quiz Trigger
var onClick = function() {
    
router("landing", "question-1") 
score = 0
}

// Navigation Handler
var router = function(idToHide , idToShow) {
    var elementtohide = document.getElementById (idToHide) 
    elementtohide.hidden = true
    var elementtoshow = document.getElementById (idToShow)
    elementtoshow.hidden= false
  if (idToShow == "quiz-complete") {
    finishgame()
  } 
} 

// Prints Users Final Score
var finishgame = function () {
   var finalscore = document.getElementById ("final-score")
   finalscore.innerHTML = "Your Final Score Is : " + score
}

// Answers Map
var answers = {
    "question-1": "question1-choice3",
    "question-2" : "question2-choice3",
    "question-3" : "question3-choice4",
    "question-4" :  "question4-choice3",
    "question-5" :  "question5-choice4",
}

// Check Your Answer Handler
var checkanswer = function (questionid, choiceid ) {
var result = document.getElementById (questionid + "-result")
    if (answers[questionid]==choiceid){
    result.innerHTML = "Correct!"
    score=score +10
    
}
else {
    result.innerHTML = "Wrong!"
}
window.setTimeout (function(){
    result.innerHTML = ""

},2000)

}


// Initializing Action Handlers   
var startButton = 
document.getElementById ("landing-start-quiz")
startButton.onclick = onClick

var question1choice1 = document.getElementById ("question1-choice1")
question1choice1.onclick= function () {
    router("question-1", "question-2")
    checkanswer("question-1", "question1-choice1")
}

var question1choice2 = document.getElementById ("question1-choice2")
question1choice2.onclick= function () {
    router("question-1", "question-2")
    checkanswer("question-1", "question1-choice2")
}

var question1choice3 = document.getElementById ("question1-choice3")
question1choice3.onclick= function () {
    router("question-1", "question-2")
    checkanswer("question-1", "question1-choice3")
}

var question1choice4 = document.getElementById ("question1-choice4")
question1choice4.onclick= function () {
    router("question-1", "question-2")
    checkanswer("question-1", "question1-choice4")
}

var question2choice1 = document.getElementById("question2-choice1")
question2choice1.onclick= function () {
    router("question-2", "question-3")
    checkanswer("question-2", "question2-choice1")
}

var question2choice2 = document.getElementById("question2-choice2")
question2choice2.onclick= function () {
    router("question-2", "question-3")
    checkanswer("question-2", "question2-choice2")
}

var question2choice3 = document.getElementById("question2-choice3")
question2choice3.onclick= function () {
    router("question-2", "question-3")
    checkanswer("question-2", "question2-choice3")
}

var question2choice4 = document.getElementById("question2-choice4")
question2choice4.onclick= function () {
    router("question-2", "question-3")
    checkanswer("question-2", "question2-choice4")
}

var question3choice1 = document.getElementById("question3-choice1")
question3choice1.onclick= function () {
    router("question-3", "question-4")
    checkanswer("question-3", "question3-choice1")
}

var question3choice2 = document.getElementById("question3-choice2")
question3choice2.onclick= function () {
    router("question-3", "question-4")
    checkanswer("question-3", "question3-choice2")
}

var question3choice3 = document.getElementById("question3-choice3")
question3choice3.onclick= function () {
    router("question-3", "question-4")
    checkanswer("question-3", "question3-choice3")
}

var question3choice4 = document.getElementById("question3-choice4")
question3choice4.onclick= function () {
    router("question-3", "question-4")
    checkanswer("question-3", "question3-choice4")
}

var question4choice1 = document.getElementById("question4-choice1")
question4choice1.onclick= function () {
    router("question-4", "question-5")
    checkanswer("question-4", "question4-choice1")
}

var question4choice2 = document.getElementById("question4-choice2")
question4choice2.onclick= function () {
    router("question-4", "question-5")
    checkanswer("question-4", "question4-choice2")
}


var question4choice3 = document.getElementById("question4-choice3")
question4choice3.onclick= function () {
    router("question-4", "question-5")
    checkanswer("question-4", "question4-choice3")
}


var question4choice4 = document.getElementById("question4-choice4")
question4choice4.onclick= function () {
    router("question-4", "question-5")
    checkanswer("question-4", "question4-choice4")
}

var question5choice1 = document.getElementById("question5-choice1")
question5choice1.onclick= function () {
    checkanswer("question-5", "question5-choice1")
    router("question-5", "quiz-complete")
    
}        

var question5choice2 = document.getElementById("question5-choice2")
question5choice2.onclick= function () {
    checkanswer("question-5", "question5-choice2")
    router("question-5", "quiz-complete")
}

var question5choice3 = document.getElementById("question5-choice3")
question5choice3.onclick= function () {
    checkanswer("question-5", "question5-choice3")
    router("question-5", "quiz-complete")
    
}

var question5choice4 = document.getElementById("question5-choice4")
question5choice4.onclick= function () {
    checkanswer("question-5", "question5-choice4")
    router("question-5", "quiz-complete")
    
}

// Update LeaderBoard with score of current game
var initialsforms = document.getElementById("initials-form")
initialsforms.onsubmit = function (event) {
event.preventDefault()
    router("quiz-complete", "highscores")


}











    




