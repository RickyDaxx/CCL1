const quizData = [
    {
      question: "What color is the sky on a sunny day?",
      colors: ["#87CEEB", "#FF0000", "#008000", "#FFFF00"],
      correctColor: "#87CEEB"
    },
    {
      question: "What color is the grass?",
      colors: ["#008000", "#FF0000", "#0000FF", "#FFFF00"],
      correctColor: "#008000"
    },
    {
        question: "Which one of these colors is NOT represented on the californian flag?",
        colors: ["#9D1B36", "#378649", "#FFFFFF", "#FFFF00"],
        correctColor: "#FFFF00"
      },
      {
        question: "What color is the smoke from a volcano?",
        colors: ["#008000", "#FF0000", "#0000FF", "#A8A8A8"],
        correctColor: "#A8A8A8"
      },
    
  ];
  
  let currentQuestion = 0;
  
  displayQuestion();
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = quizData[currentQuestion].question;
    const colorOptionsElement = document.getElementById("color-options");
    colorOptionsElement.innerHTML = "";
    quizData[currentQuestion].colors.forEach((color, index) => {
      const colorOption = document.createElement("div");
      colorOption.className = "color-option";
      colorOption.style.background = color;
      colorOption.onclick = () => checkAnswer(color);
      colorOptionsElement.appendChild(colorOption);
    });
  }
  
  function checkAnswer(userColor) {
    const correctColor = quizData[currentQuestion].correctColor;
    const resultElement = document.getElementById("result");
    if (userColor === correctColor) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#4CAF50";
      setTimeout(() => {
        currentQuestion++;
        if (currentQuestion >= quizData.length) {
          resultElement.textContent = "Quiz complete!";
          resultElement.style.color = "#534caf";
          setTimeout(() => {
            window.location.href = "index4.html";
          }, 2000);
        } else {
          displayQuestion();
        }
      }, 1000);
    } else {
      resultElement.textContent = "Incorrect, try again!";
      resultElement.style.color = "#f44336";
    }
  }