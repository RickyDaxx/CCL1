const hintButton = document.getElementById("hint-button");

hintButton.addEventListener("click", () => {
  Swal.fire({
    icon: "info",
    title: "Hint",
    text: "Only letters are allowed.",
    showConfirmButton: false,
    timer: 3000,
  });
});

const answerForm = document.getElementById("answer-form");

answerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const letter1 = document.getElementById("letter-1").value.toUpperCase();
  const letter2 = document.getElementById("letter-2").value.toUpperCase();
  const letter3 = document.getElementById("letter-3").value.toUpperCase();
  const letter4 = document.getElementById("letter-4").value.toUpperCase();
  const letter5 = document.getElementById("letter-5").value.toUpperCase();
  const answer = letter1 + " " + letter2 + " " + letter3 + " " + letter4 + " " + letter5;
  if (answer === "H O T E L") {
    Swal.fire({
      icon: "success",
      title: "Correct! You have unlocked the next room.",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "escaped4.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Incorrect. Try again!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});