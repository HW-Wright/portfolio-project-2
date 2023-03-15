/**
 * To listen for user submission
 * and runt the quiz
 */
let button = document.getElementById("submit");
    button.addEventListener("click", function(event){
        seenQuestions.push(currentQuestionIndex);
        getUserAnswer();
        console.log("button pushed")
    });


// Below are a set of constant variables that are required in various functions throughout the code
const quizQuestions = [
    {
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
        question: "Which line does Clint Eastwood famously deliver in the 1971 film, 'Dirty Harry'?",
        options: ["`'Do I feel lucky?' Well do ya, punk?`", "`Dying ain't much of a living, boy.`", "`Go where you're lookin', and look where you're goin'.`"],
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
const currentQuestionIndex = Math.floor(Math.random() * quizQuestions.length);
        

/**
 * To populate the question and answer
 * areas with the corresponding html
 */
function populateQuestion () {

    if(!seenQuestions.includes(currentQuestionIndex)) {
        quiz.innerHTML = quizQuestions[currentQuestionIndex].question;
        option1.innerHTML = quizQuestions[currentQuestionIndex].options[0];
        option2.innerHTML = quizQuestions[currentQuestionIndex].options[1];
        option3.innerHTML = quizQuestions[currentQuestionIndex].options[2];
    }
}

/**
 * To retrive the user submission from the radio inputs
 */
function getUserAnswer() {

    let options = document.getElementsByClassName("option");

        for(i = 0; i <= options.length; i++) {
            const userAnswer = document.querySelector('input[name="answer"]:checked').value;
            if(userAnswer === quizQuestions[currentQuestionIndex].answer) {
                keepUserScore();
                populateQuestion();
            } else populateQuestion();
        }
    }

/**
 * To keep the score for the user to see
 */
function keepUserScore() {

    let score = document.getElementById("score").textContent;
    document.getElementById("score").textContent = ++score;
}

/**
 * To end the game and present user score
 */
function endGame() {

    if(seenQuestions.length === 10) {
        alert(`Game Over! You got ${score}/10!`);
    }
    
    
}


document.addEventListener("DOMContentLoaded", populateQuestion())