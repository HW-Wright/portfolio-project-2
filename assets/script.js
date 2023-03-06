document.addEventListener("DOMContentLoaded", populateQuestion())

const quizQuestions = [
    {
        question: "What year did Jurrasic Park come out?",
        options: ["1998", "1995", "1993"],
        answerIndex: 2,
    },
    {
        question: "Which actor has won the most Academy Awards in acting categories?",
        options: ["Julie Andrews", "Katharine Hepburn", "Meryl Streep"],
        answerIndex: 1,
    },
    {
        question: "What is the highest grossing movie of all time?",
        options: ["Titanic", "Avatar", "Avengers: Endgame"],
        answerIndex: 1,
    },
    {
        question: "Which female director became the first to win an academy award for directing?",
        options: ["Greta Gertwig", "Chloe Zhao", "Katheryn Bigalow"],
        answerIndex: 2, 
    },
    {
        question: "Which line does Clint Eastwood famously deliver in the 1971 film, 'Dirty Harry'?",
        options: ["`'Do I feel lucky?' Well do ya, punk?`", "`Dying ain't much of a living, boy.`", "`Go where you're lookin', and look where you're goin'.`"],
        answerIndex: 0,
    },
    {
        question: "Which of the below actors have NOT played Batman in live action?",
        options: ["Christian Bale", "Jack Nicholson", "Ben Affleck"],
        answerIndex: 1,
    },
    {
        question: "Which of the below was legendary British film director Danny Boyle's first theatrical movie?",
        options: ["The Beach", "Shallow Grave", "Trainspotting"],
        answerIndex: 1,
    },
    {
        question: "What was the name of the 1981 movie that stared iconic footballer Pele alongside Sylvester Stalone and Michael Caine?",
        options: ["Escape to Victory", "Blame it on Rio", "Nighthawks"],
        answerIndex: 0,
    },
    {
        question: "What is the name of the device that powers Tony Stark's Iron Man suit?",
        options: ["Arc Reactor", "Reactor Disk", "Cosmic Battery"],
        answerIndex: 0,
    },
    {
        question: "What is the name of the hotel from Stanley Kubrik's The Shining?",
        options: ["The Stanley Hotel", "The Overlook Hotel", "Hostel California"],
        answerIndex: 1,
    },
    {
        question: "The NWA biopic 'Straight Outta Compton' hit theatres in what year?",
        options: ["2015", "2018", "2011"],
        answerIndex: 0,
    },
    {
        question: "What is the name of Ice Cube's iconic series of comedy films?",
        options: ["Oneday", "Monday", "Friday"],
        answerIndex: 2,
    },
    {
        question: "How many movies have topped $2billion at the global box office ever?",
        options: ["One", "Three", "Five"],
        answerIndex: 2,
    },
    {
        question: "Why do they keep making Transformers movies?",
        options: ["Money", "Lack of new ideas", "Both"],
        answerIndex: 2,
    },
    {
        question: "Who wrote and directed the 1997 queer romcom, 'Chasing Amy'?",
        options: ["Kevin Smith", "Ben Affleck", "Jason Lee"],
        answerIndex: 0,
    },
];
const quiz = document.getElementById("quiz").value;
const option1 = document.getElementById("a").value;
const option2 = document.getElementById("b").value;
const option3 = document.getElementById("c").value;

function populateQuestion () {

    let currentQuestion = 0;
    
    if (currentQuestion = 0){
        quiz.innerHTML = quizQuestions[0].question;
        option1.innerHTML = quizQuestions[0].options[0];
        option2.innerHTML = quizQuestions[0].options[1];
        option3.innerHTML = quizQuestions[0].options[2];
    } else if (currentQuestion = 1) {
        quiz.innerHTML = quizQuestions[1].question;
        option1.innerHTML = quizQuestions[1].options[0];
        option2.innerHTML = quizQuestions[1].options[1];
        option3.innerHTML = quizQuestions[1].options[2];
    }
   
}

/**
 * To cycle through the questions 
 */
function runQuiz() {
    document.getElementsByClassName("option").value = "";

    
}

function getAnswer() {
    let userAnswer = document.getElementsByName("answer");
    for (i = 0; i < userAnswer.length; i++) {
        if(userAnswer[i].checked) {
            function checkAnswer();
        }
    }
}

function checkAnswer() {
    
}

function keepScore() {

}

function displayScore() {

}

