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
        question: "placeholder1",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder2",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder3",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder4",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder5",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder6",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder7",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder8",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder9",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
        ]
    },
    {
        question: "placeholder10",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: false},
            {text: "A3", correct: true},
            {text: "A4", correct: false}
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

function saveScore() { 
    quizContainer.classList.add("hide");
    contentContainer.classList.add("hide");
    saveForm.classList.remove("hide");
    saveInitialsBtn.classList.remove("hide");
}

function saveInitialsBtn () {
    scoreBoard()
}

// todo: populate a list of scores when the saveInitialsBtn is clicked
function scoreBoard(event) {
    event.preventDefault()
    var initialsInput = document.querySelector("input[name='initials']").value;

    saveForm.classList.add("hide");
    saveInitialsBtn.classList.add("hide");
    scoreBoardTitle.classList.remove("hide")
    
    var userInitials = document.createElement("li");
    userInitials.className = "initial";
    
    var initialsInfoEl = document.createElement("div")
    initialsInfoEl.className = "initials-info"
    initialsInfoEl.innerText = initialsInput

    console.log(userInitials)

    userInitials.appendChild(initialsInfoEl)
    initialsList.appendChild(userInitials)

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

saveInitialsBtn.addEventListener("click", scoreBoard);
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestionBtn);