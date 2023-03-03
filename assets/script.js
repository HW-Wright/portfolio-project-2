document.addEventListener("DOMContentLoaded", function() {
    let options = document.getElementsByClassName("button");
        if (this.getElementsByID("submit")) {
            getAnswer()
        }
})

const questions = [
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

/**
 * To cycle through the questions 
 */
function runQuiz() {
    document.getElementsByClassName("option").value = "";

    if (questions[0]) {
        let quiz = document.getElementById("quiz").value = questions[0].question;
        let option1 = document.getElementById("a").textContent = questions[0].options[0];
        let option2 = document.getElementById("b").textContent = questions[0].options[1];
        let option3 = document.getElementById("c").textContent = questions[0].options[2];    
    } else if (questions[1]) {
        let quiz = document.getElementById("quiz").value = questions[1].question;
        let option1 = document.getElementById("a").textContent = questions[1].options[0];
        let option2 = document.getElementById("b").textContent = questions[1].options[1];
        let option3 = document.getElementById("c").textContent = questions[1].options[2]; 
    } else if (questions[2]) {
        let quiz = document.getElementById("quiz").value = questions[2].question;
        let option1 = document.getElementById("a").textContent = questions[2].options[0];
        let option2 = document.getElementById("b").textContent = questions[2].options[1];
        let option3 = document.getElementById("c").textContent = questions[2].options[2]; 
    } else if (questions[3]) {
        let quiz = document.getElementById("quiz").value = questions[3].question;
        let option1 = document.getElementById("a").textContent = questions[3].options[0];
        let option2 = document.getElementById("b").textContent = questions[3].options[1];
        let option3 = document.getElementById("c").textContent = questions[3].options[2]; 
    } else if (questions[4]) {
        let quiz = document.getElementById("quiz").value = questions[4].question;
        let option1 = document.getElementById("a").textContent = questions[4].options[0];
        let option2 = document.getElementById("b").textContent = questions[4].options[1];
        let option3 = document.getElementById("c").textContent = questions[4].options[2]; 
    } else if (questions[5]) {
        let quiz = document.getElementById("quiz").value = questions[5].question;
        let option1 = document.getElementById("a").textContent = questions[5].options[0];
        let option2 = document.getElementById("b").textContent = questions[5].options[1];
        let option3 = document.getElementById("c").textContent = questions[5].options[2]; 
    } else if (questions[6]) {
        let quiz = document.getElementById("quiz").value = questions[6].question;
        let option1 = document.getElementById("a").textContent = questions[6].options[0];
        let option2 = document.getElementById("b").textContent = questions[6].options[1];
        let option3 = document.getElementById("c").textContent = questions[6].options[2]; 
    } else if (questions[7]) {
        let quiz = document.getElementById("quiz").value = questions[7].question;
        let option1 = document.getElementById("a").textContent = questions[7].options[0];
        let option2 = document.getElementById("b").textContent = questions[7].options[1];
        let option3 = document.getElementById("c").textContent = questions[7].options[2]; 
    } else if (questions[8]) {
        let quiz = document.getElementById("quiz").value = questions[8].question;
        let option1 = document.getElementById("a").textContent = questions[8].options[0];
        let option2 = document.getElementById("b").textContent = questions[8].options[1];
        let option3 = document.getElementById("c").textContent = questions[8].options[2]; 
    } else if (questions[9]) {
        let quiz = document.getElementById("quiz").value = questions[9].question;
        let option1 = document.getElementById("a").textContent = questions[9].options[0];
        let option2 = document.getElementById("b").textContent = questions[9].options[1];
        let option3 = document.getElementById("c").textContent = questions[9].options[2]; 
    } else if (questions[10]) {
        let quiz = document.getElementById("quiz").value = questions[10].question;
        let option1 = document.getElementById("a").textContent = questions[10].options[0];
        let option2 = document.getElementById("b").textContent = questions[10].options[1];
        let option3 = document.getElementById("c").textContent = questions[10].options[2]; 
    } else if (questions[11]) {
        let quiz = document.getElementById("quiz").value = questions[11].question;
        let option1 = document.getElementById("a").textContent = questions[11].options[0];
        let option2 = document.getElementById("b").textContent = questions[11].options[1];
        let option3 = document.getElementById("c").textContent = questions[11].options[2]; 
    } else if (questions[12]) {
        let quiz = document.getElementById("quiz").value = questions[12].question;
        let option1 = document.getElementById("a").textContent = questions[12].options[0];
        let option2 = document.getElementById("b").textContent = questions[12].options[1];
        let option3 = document.getElementById("c").textContent = questions[12].options[2]; 
    } else if (questions[13]) {
        let quiz = document.getElementById("quiz").value = questions[13].question;
        let option1 = document.getElementById("a").textContent = questions[13].options[0];
        let option2 = document.getElementById("b").textContent = questions[13].options[1];
        let option3 = document.getElementById("c").textContent = questions[13].options[2]; 
    } else if (questions[14]) {
        let quiz = document.getElementById("quiz").value = questions[14].question;
        let option1 = document.getElementById("a").textContent = questions[14].options[0];
        let option2 = document.getElementById("b").textContent = questions[14].options[1];
        let option3 = document.getElementById("c").textContent = questions[14].options[2]; 
    };
}

function getAnswer() {
    let userAnswer = document.getElementsByName("answer");
    for (i = 0; i < userAnswer.answer.length; i++) {
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

