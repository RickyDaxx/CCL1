let currentQuestion = 0;
    let score = 0;

    const questions = [
      {
        question: "Who was the famous lawman who brought order to the town of Tombstone, Arizona?",
        options: ["Wyatt Earp", "Doc Holliday", "Pat Garrett", "Wild Bill Hickok"],
        correct: 0
      },
      {
        question: "What was the name of the famous outlaw who robbed the First National Bank of Northfield, Minnesota?",
        options: ["Jesse James", "Butch Cassidy", "Sundance Kid", "Black Jack McCoy"],
        correct: 0
      },
      {
        question: "Who was the leader of the Texas Rangers during the Wild West era?",
        options: ["Sam Houston", "Stephen F. Austin", "John Wesley Hardin", "Charles Goodnight"],
        correct: 3
      },
      {
        question: "What was the name of the famous gunfight that took place in Tombstone, Arizona?",
        options: ["Gunfight at the O.K. Corral", "Battle of Little Bighorn", "Battle of Gettysburg", "Battle of the Alamo"],
        correct: 0
      }
    ];

    function displayQuestion() {
      const questionElement = document.getElementById("question");
      questionElement.textContent = questions[currentQuestion].question;

      const optionsElement = document.getElementById("options");
      optionsElement.innerHTML = "";
      questions[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsElement.appendChild(optionElement);
      });
    }

    function checkAnswer(answer) {
      if (answer === questions[currentQuestion].correct) {
        score++;
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Correct!";
      } else {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Incorrect. The correct answer was " + questions[currentQuestion].options[questions[currentQuestion].correct];
      }

      currentQuestion++;
      if (currentQuestion >= questions.length) {
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Quiz complete! Your final score is " + score + " out of " + questions.length;
        if (score >= 3) {
          window.location.href = "escaped3.html";
        } else {
          window.location.href = "index.html";
        }
      } else {
        displayQuestion();
      }
    }

    displayQuestion();