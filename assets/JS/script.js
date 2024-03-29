// buttons
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var answerBtnEl = document.getElementById("answer-btns");
var saveInitialsBtn = document.getElementById("save-initials");

var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var contentContainer = document.getElementById("container");
var saveForm = document.getElementById("save-form");
var initialsList = document.querySelector("#initials-list");
var scoreBoardTitle = document.getElementById("score-title");


// combined Questions list
let randomQuestion, currentquestion;

var questionList = [
    {
        question: "What does isNaN stand for?",
        answers: [
            {text: "Is not a number", correct: true},
            {text: "Is a number", correct: false},
            {text: "Is number after number", correct: false},
            {text: "Is not action number", correct: false}
        ]
    },
    {
        question: " Which symbol is used for single line comments in Javascript?",
        answers: [
            {text: "$", correct: false},
            {text: "//", correct: true},
            {text: "/*", correct: false},
            {text: "!", correct: false}
        ]
    },
    {
        question: "How can generic objects be created?",
        answers: [
            {text: "function I ();", correct: false},
            {text: "object() = I ", correct: false},
            {text: "var I = new object();", correct: true},
            {text: "if object() = I;", correct: false}
        ]
    },
    {
        question: "Is JavaScript case sensitive?",
        answers: [
            {text: "only funtions are case sensitive", correct: false},
            {text: "No", correct: false},
            {text: "sometimes", correct: false},
            {text: "Yes", correct: true}
        ]
    },
    {
        question: "What does DOM stand for in JavaScript?",
        answers: [
            {text: "Domain of model", correct: false},
            {text: "Document Object Model", correct: true},
            {text: "Data Object Modle", correct: false},
            {text: "Direct Origin Mode", correct: false}
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            {text: "Netscape", correct: true},
            {text: "Sega", correct: false},
            {text: "Apple", correct: false},
            {text: "Microsoft", correct: false}
        ]
    },
    {
        question: "What allows the user to enter input by providing a text box",
        answers: [
            {text: "log", correct: false},
            {text: "alert", correct: false},
            {text: "prompt", correct: true},
            {text: "add", correct: false}
        ]
    },
    {
        question: "How can you convert the string of any base to an integer in JavaScript?",
        answers: [
            {text: "num.convert", correct: false},
            {text: "string()number", correct: false},
            {text: "string = this is a number", correct: false},
            {text: "parseInt() function", correct: true}
        ]
    },
    {
        question: "What is a strict equality operator",
        answers: [
            {text: "==", correct: false},
            {text: "=+", correct: false},
            {text: "===", correct: true},
            {text: "=", correct: false}
        ]
    },
    {
        question: "What only checks for equality in value",
        answers: [
            {text: "===", correct: false},
            {text: "=", correct: false},
            {text: "==", correct: true},
            {text: "=+", correct: false}
        ]
    }
]

function startQuiz() {
    startBtn.classList.add("hide");
    randomQuestion = questionList.sort(() => Math.random() -.5);
    currentquestion = 0;
    quizContainer.classList.remove("hide");
    score = 0
    time = 60;
    var startTimer = setInterval(countDown, 1000);
    var counter = document.getElementById("time");

    // timer function
    function countDown() {
        seconds = time;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        counter.innerHTML = seconds;
        time--;
    
        if(time < 0) {
            console.log("times up");
            clearInterval(startTimer);
            saveScore();
        }
        if (randomQuestion.length > currentquestion + 1) {     
        } else {
            clearInterval(startTimer);
        }
    }
    nextQuestion();
}

// selects next question
function nextQuestionBtn() {
    currentquestion++;
    nextQuestion();
}

// removes previous question when new question is called
function nextQuestion() {
    resetQuiz();
    showQuestion(randomQuestion[currentquestion]);
}

// populates buttons for each answer and pulls the question out of the question array
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach( function answer(answer) {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        answerBtnEl.appendChild(button);
    });
}

// targets what button was hit and adds the correct data from the question object
function selectAnswer(event) {
    var selectedBtn = event.target;
    var correct = selectedBtn.dataset.correct;
    answerClass(document.body, correct);
    Array.from(answerBtnEl.children).forEach(function button(button) {
        answerClass(button, button.dataset.correct);
    })

    // if there is still a question in the array the next button will populate if no question is left the the save form function will be called
    if (randomQuestion.length > currentquestion + 1) {
        nextBtn.classList.remove("hide");
    } else {
        saveScore()
    }
    // if the correct vaule for the answer is true then the userScore function will run
    if (correct) {
        userScore()
    }
}

// every time the user selects the correct answer is will add 1 to their score
let score = 0;
function userScore() {
    score = (score)+1;
    console.log(score)
}

// selects a class for the selected answer button based of if the correct value is true
function answerClass(element, correct) {
    clearAnswerClass(element);

    if (correct = correct) {
        element.classList.add("correct");
        time = time + 3
    } else {
        time = time - 2;
        element.classList.add("wrong");
    } 

}

// clears the previous class list
function clearAnswerClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong")
}

// removes the previous question and answers
function resetQuiz(){
    nextBtn.classList.add("hide");
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

// pulls up the save initials form and hides everything else
function saveScore() { 
    quizContainer.classList.add("hide");
    contentContainer.classList.add("hide");
    saveForm.classList.remove("hide");
    saveInitialsBtn.classList.remove("hide");
}

// logs the users initials/scores on the newly created scoreboard
function scoreBoard(event) {
    event.preventDefault()
    var initialsInput = document.querySelector("input[name='initials']").value;

    saveForm.classList.add("hide");
    saveInitialsBtn.classList.add("hide");
    scoreBoardTitle.classList.remove("hide");
    contentContainer.classList.remove("hide")

    if(initialsInput < 2) {
        alert("Please Enter initials")
        // uses error code so it doesnt push empty form up
        initialsInput.remove()
    } else {
        saveUserData()
        window.location.reload()
    }
}

var saveUserData = function() {
    var initialsInput = document.querySelector("input[name='initials']").value + " " +score + "/10";
    let key = Math.random() + Date.now();
    localStorage.setItem(key, JSON.stringify(initialsInput));
}

var loadUserData = function() {
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var score = localStorage.getItem(key)
        
        var oldScore = document.createElement("li");
        oldScore.className = "initial";
        oldScore.innerText = score
       
        initialsList.appendChild(oldScore);
    }  
};

saveInitialsBtn.addEventListener("click", scoreBoard);
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestionBtn);

loadUserData()
