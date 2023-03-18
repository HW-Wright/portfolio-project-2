const quizQuestions = [{
    question: "What year did Jurrasic Park come out?",
    options: ["1998", "1995", "1993"],
    answer: 2,
},
{
    question: "Which actor has won the most Academy Awards in acting categories?",
    options: ["Julie Andrews", "Katharine Hepburn", "Meryl Streep"],
    answer: 1,
},
{
    question: "What is the highest grossing movie of all time?",
    options: ["Titanic", "Avatar", "Avengers: Endgame"],
    answer: 1,
},
{
    question: "Which female director became the first to win an academy award for directing?",
    options: ["Greta Gertwig", "Chloe Zhao", "Katheryn Bigalow"],
    answer: 2,
},
{
    question: "`Who starred in the in the 1971 film, 'Dirty Harry'?`",
    options: ["Clint Eastwood", "Richard Gere", "Burt Reynolds"],
    answer: 0,
},
{
    question: "Which of the below actors have NOT played Batman in live action?",
    options: ["Christian Bale", "Jack Nicholson", "Ben Affleck"],
    answer: 1,
},
{
    question: "Which of the below was legendary British film director Danny Boyle's first theatrical movie?",
    options: ["The Beach", "Shallow Grave", "Trainspotting"],
    answer: 1,
},
{
    question: "What was the name of the 1981 movie that stared iconic footballer Pele alongside Sylvester Stalone and Michael Caine?",
    options: ["Escape to Victory", "Blame it on Rio", "Nighthawks"],
    answer: 0,
},
{
    question: "What is the name of the device that powers Tony Stark's Iron Man suit?",
    options: ["Arc Reactor", "Reactor Disk", "Cosmic Battery"],
    answer: 0,
},
{
    question: "What is the name of the hotel from Stanley Kubrik's The Shining?",
    options: ["The Stanley Hotel", "The Overlook Hotel", "Hotel California"],
    answer: 1,
},
{
    question: "The NWA biopic 'Straight Outta Compton' hit theatres in what year?",
    options: ["2015", "2018", "2011"],
    answer: 0,
},
{
    question: "What is the name of Ice Cube's iconic series of comedy films?",
    options: ["Oneday", "Monday", "Friday"],
    answer: 2,
},
{
    question: "How many movies have topped $2billion at the global box office ever?",
    options: ["One", "Three", "Five"],
    answer: 2,
},
{
    question: "Why do they keep making Transformers movies?",
    options: ["Money", "Lack of new ideas", "Both"],
    answer: 2,
},
{
    question: "Who wrote and directed the 1997 romcom, 'Chasing Amy'?",
    options: ["Kevin Smith", "Ben Affleck", "Jason Lee"],
    answer: 0,
},
];
const quiz = document.getElementById("quiz");
const option1 = document.getElementById("a");
const option2 = document.getElementById("b");
const option3 = document.getElementById("c");
const seenQuestions = [];
const submitButton = document.getElementById("submit");
let currentQuestionIndex;


submitButton.addEventListener("click", function() {
seenQuestions.push(currentQuestionIndex);
getUserAnswer();
});


/**
* To generate a random number from the length of 
* quizQuestions and assign it to current question
*/
function generateRandomQuestionIndex() {
return Math.floor(Math.random() * quizQuestions.length);
}


/**
* To populate the question and answer
* areas with the corresponding html
*/
function populateQuestion() {

while (!currentQuestionIndex || seenQuestions.includes(currentQuestionIndex)) {
    currentQuestionIndex = generateRandomQuestionIndex();
}

quiz.innerHTML = quizQuestions[currentQuestionIndex].question;
option1.innerHTML = quizQuestions[currentQuestionIndex].options[0];
option2.innerHTML = quizQuestions[currentQuestionIndex].options[1];
option3.innerHTML = quizQuestions[currentQuestionIndex].options[2];

}

/**
* To retrieve the user submission from the radio inputs
*/
function getUserAnswer() {

let userAnswer = document.querySelector('input[name="answer"]:checked').value;
let value = quizQuestions[currentQuestionIndex].answer;
let correctAnswer = value.toString();

if (userAnswer === correctAnswer) {
    keepUserScore();
    correct();
} else {
    incorrect();
}

if (seenQuestions.length >= 10) {
    endGame();
} else {
    populateQuestion();
}
}

/**
* To cause submit button to flash green and
* read 'Correct!' if correct answer given
*/
function correct() {

let submit = document.getElementById("submit");

submit.style.backgroundColor = "#51B14E";
submit.innerText = "Correct!";

setTimeout(function() {
    submit.style.backgroundColor = "#8A0000";
    submit.innerText = "Sumbit!";
}, 300);
}

/**
 * To cause submit button's content
 * to read 'Incorrect!' if user is wrong.
 */
function incorrect() {

    let submit = document.getElementById("submit");

    submit.innerText = "Wrong!";

    setTimeout(function() {
        submit.innerText = "Submit!";
    }, 300);
}


/**
* To keep the score for the user to see
*/
function keepUserScore() {

var score = (document.getElementById("score").innerText);
document.getElementById("score").innerText = ++score;
}

/**
* To end the game and present user score,
* while hiding the standard score box
*/
function endGame() {

let quizDiv = document.getElementById("quiz-area");
let finalMessage = `<div id="final-message">
<p id="large-text">Game Over!<br>
You got ${score.innerText}/10</p>
<p id="small-text">Thank you for playing!</p>
</div>`;

quizDiv.innerHTML = finalMessage;

let hideDiv = document.getElementById("score-area");
hideDiv.style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", populateQuestion());