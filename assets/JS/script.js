var startQuizBtn = document.querySelector("#start-quiz");
var test = document.querySelector("#test-content");
var counter = 60


var startQuiz = function() {
    startQuizBtn.remove();

    var testForm = document.createElement("div");
    testForm.textContent = ("test");
    testForm.className = "test-form";
    test.appendChild(testForm);
    
    var countdown = function() {
    console.log(counter)
    

    counter--;
    if(counter === 0 ) {
        console.log("Times Up!")
        clearInterval(countdown);
    };
    
    
}
};

var startCountdown = setInterval(countdown, 1000);
startQuizBtn.addEventListener("click", startQuiz);
