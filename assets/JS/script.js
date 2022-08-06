var startQuizBtn = document.querySelector("#start-quiz");
var test = document.querySelector("#test-content");

var startQuiz = function() {
    startQuizBtn.remove();
    var testForm = document.createElement("div");
    testForm.textContent = ("test");
    testForm.className = "test-form";
    test.appendChild(testForm);
};



startQuizBtn.addEventListener("click", startQuiz);