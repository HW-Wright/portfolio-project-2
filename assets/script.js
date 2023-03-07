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
const quiz = document.getElementById("quiz");
const option1 = document.getElementById("a");
const option2 = document.getElementById("b");
const option3 = document.getElementById("c");
const userAnswer = document.getElementsByName("answer").value;

/**
 * To populate the question and answer
 * areas with the corresponding html
 */
function populateQuestion () {

    let currentQuestion = Math.floor(Math.random() * 14);
    
    if (currentQuestion === 0){
        quiz.innerHTML = quizQuestions[0].question;
        option1.innerHTML = quizQuestions[0].options[0];
        option2.innerHTML = quizQuestions[0].options[1];
        option3.innerHTML = quizQuestions[0].options[2];
    } else if (currentQuestion === 1) {
        quiz.innerHTML = quizQuestions[1].question;
        option1.innerHTML = quizQuestions[1].options[0];
        option2.innerHTML = quizQuestions[1].options[1];
        option3.innerHTML = quizQuestions[1].options[2];
    } else if (currentQuestion === 2) {
        quiz.innerHTML = quizQuestions[2].question;
        option1.innerHTML = quizQuestions[2].options[0];
        option2.innerHTML = quizQuestions[2].options[1];
        option3.innerHTML = quizQuestions[2].options[2];
    } else if (currentQuestion === 3) {
        quiz.innerHTML = quizQuestions[3].question;
        option1.innerHTML = quizQuestions[3].options[0];
        option2.innerHTML = quizQuestions[3].options[1];
        option3.innerHTML = quizQuestions[3].options[2];
    } else if (currentQuestion === 4) {
        quiz.innerHTML = quizQuestions[4].question;
        option1.innerHTML = quizQuestions[4].options[0];
        option2.innerHTML = quizQuestions[4].options[1];
        option3.innerHTML = quizQuestions[4].options[2];
    } else if (currentQuestion === 5) {
        quiz.innerHTML = quizQuestions[5].question;
        option1.innerHTML = quizQuestions[5].options[0];
        option2.innerHTML = quizQuestions[5].options[1];
        option3.innerHTML = quizQuestions[5].options[2];
    } else if (currentQuestion === 6) {
        quiz.innerHTML = quizQuestions[6].question;
        option1.innerHTML = quizQuestions[6].options[0];
        option2.innerHTML = quizQuestions[6].options[1];
        option3.innerHTML = quizQuestions[6].options[2];
    } else if (currentQuestion === 7) {
        quiz.innerHTML = quizQuestions[7].question;
        option1.innerHTML = quizQuestions[7].options[0];
        option2.innerHTML = quizQuestions[7].options[1];
        option3.innerHTML = quizQuestions[7].options[2];
    } else if (currentQuestion === 8) {
        quiz.innerHTML = quizQuestions[8].question;
        option1.innerHTML = quizQuestions[8].options[0];
        option2.innerHTML = quizQuestions[8].options[1];
        option3.innerHTML = quizQuestions[8].options[2];
    } else if (currentQuestion === 9) {
        quiz.innerHTML = quizQuestions[9].question;
        option1.innerHTML = quizQuestions[9].options[0];
        option2.innerHTML = quizQuestions[9].options[1];
        option3.innerHTML = quizQuestions[9].options[2];
    } else if (currentQuestion === 10) {
        quiz.innerHTML = quizQuestions[10].question;
        option1.innerHTML = quizQuestions[10].options[0];
        option2.innerHTML = quizQuestions[10].options[1];
        option3.innerHTML = quizQuestions[10].options[2];
    } else if (currentQuestion === 11) {
        quiz.innerHTML = quizQuestions[11].question;
        option1.innerHTML = quizQuestions[11].options[0];
        option2.innerHTML = quizQuestions[11].options[1];
        option3.innerHTML = quizQuestions[11].options[2];
    } else if (currentQuestion === 12) {
        quiz.innerHTML = quizQuestions[12].question;
        option1.innerHTML = quizQuestions[12].options[0];
        option2.innerHTML = quizQuestions[12].options[1];
        option3.innerHTML = quizQuestions[12].options[2];
    } else if (currentQuestion === 13) {
        quiz.innerHTML = quizQuestions[13].question;
        option1.innerHTML = quizQuestions[13].options[0];
        option2.innerHTML = quizQuestions[13].options[1];
        option3.innerHTML = quizQuestions[13].options[2];
    } else if (currentQuestion === 14) {
        quiz.innerHTML = quizQuestions[14].question;
        option1.innerHTML = quizQuestions[14].options[0];
        option2.innerHTML = quizQuestions[14].options[1];
        option3.innerHTML = quizQuestions[14].options[2];
    }
   
}

/**
 * To cycle through the questions 
 * and call function to check answer
 */
function runQuiz() {
    document.getElementsByClassName("option").value = "";

    // Need to add code to cycle through questions

    document.addEventListener("click", function() {
        if (this.getElementsById("submit ")) {
            getAnswer()
        }
        })
    
}

// function getAnswer() {
//     for (i = 0; i < userAnswer.length; i++) {
//         if(userAnswer[i].checked) {
//             function checkAnswer()
//         }
//     }
// }

function checkAnswer() {
    // How do I search object array for correct answer
}

function keepScore() {

}

function displayScore() {

}


document.addEventListener("DOMContentLoaded", populateQuestion())
