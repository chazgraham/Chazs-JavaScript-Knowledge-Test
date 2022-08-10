var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-btns");
var contentContainer = document.getElementById("container");
var saveForm = document.getElementById("save-form");
var saveInitialsBtn = document.getElementById("save-initials");
var initialsList = document.querySelector("#initials-list");
var scoreBoardTitle = document.getElementById("score-title");

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
    nextQuestion();
}

function nextQuestionBtn() {
    currentquestion++;
    nextQuestion();
}

function nextQuestion() {
    resetQuiz();
    showQuestion(randomQuestion[currentquestion]);
}

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

function selectAnswer(event) {
    var selectedBtn = event.target;
    var correct = selectedBtn.dataset.correct;
    answerClass(document.body, correct);
    Array.from(answerBtnEl.children).forEach(function button(button) {
        answerClass(button, button.dataset.correct);
    })

    if (randomQuestion.length > currentquestion + 1) {
        nextBtn.classList.remove("hide");
    } else {
        saveScore()
    }
}

function answerClass(element, correct) {
    clearAnswerClass(element);

    if (correct = correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearAnswerClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong")
}

function resetQuiz(){
    nextBtn.classList.add("hide");
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function saveScore() { 
    quizContainer.classList.add("hide");
    contentContainer.classList.add("hide");
    saveForm.classList.remove("hide");
    saveInitialsBtn.classList.remove("hide");
}

function scoreBoard(event) {
    event.preventDefault()
    var initialsInput = document.querySelector("input[name='initials']").value;

    saveForm.classList.add("hide");
    saveInitialsBtn.classList.add("hide");
    scoreBoardTitle.classList.remove("hide");
    startBtn.classList.remove("hide")
    startBtn.textContent = ("restart")
    contentContainer.classList.remove("hide")

    var userInitials = document.createElement("li");
    userInitials.className = "initial";
    
    var initialsInfoEl = document.createElement("div");
    initialsInfoEl.className = "initials-info";
    initialsInfoEl.innerText = initialsInput;

    console.log(userInitials);

    userInitials.appendChild(initialsInfoEl);
    initialsList.appendChild(userInitials);
}

// TODO: make a timer
// TODO: make a function that keeps track of right and wrong answers
// TODO: make save user score to local data

saveInitialsBtn.addEventListener("click", scoreBoard);
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestionBtn);
