var startQuizBtn = document.querySelector("#start-quiz");
var test = document.querySelector("#test-content");

startQuizBtn.addEventListener("click", function(){
    var testForm = document.createElement("div");
testForm.textContent = ("test");
testForm.className = "test-form";
test.appendChild(testForm)
});
