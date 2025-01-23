const quizData = [
    {
        question: "asrtgen",
        answer: "strange"
    },
    {
        question: "tsyremy",
        answer: "mystery"
    },
    {
        question: "fricliaona",
        answer: "california"
    },
];

let currentQuestion = 0;

displayQuestion();

function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = "Unscramble the letters: " + quizData[currentQuestion].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value;
    const correctAnswer = quizData[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        Swal.fire({
            icon: "success",
            title: "Correct answer!",
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                displayQuestion();
                document.getElementById("answer-input").value = "";
            } else {
                Swal.fire({
                    icon: "success",
                    title: "You've completed the quiz!",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.location.href = "escaped2.html";
                });
            }
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Incorrect answer. Try again!",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

document.getElementById("submit-button").addEventListener("click", checkAnswer);