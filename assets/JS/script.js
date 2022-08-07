var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-btns")

let randomQuestion, currentquestion

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
    currentquestion++
    nextQuestion()
}

function nextQuestion() {
    showQuestion(randomQuestion[currentquestion])
    
}

// Todo: reset for after next button is clicked 

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        
        button.addEventListener("click", selectAnswer);
        answerBtnEl.appendChild(button);
    });
}

function selectAnswer(event) {
    nextBtn.classList.remove("hide");
    var selectedBtn = event.target;
    console.log(selectedBtn)
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestionBtn);