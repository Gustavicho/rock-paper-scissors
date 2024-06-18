const choicesBtns = document.querySelectorAll(".btn--choice")
const result = document.querySelector(".results")

let computer;
let user;

choicesBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    playRound(event);
  });
});

/* ----- FUNCTIONS ----- */
function playRound(e) {
  const winCondition = {
    rock: "scis",
    scis: "paper",
    paper: "rock"
  };
  let resultText;
  user = getUserChoice(e);
  computer = getComputerChoice();

  if (user === computer) {
    resultText = "Draw!"
  } else if (winCondition[user] === computer) {
    resultText = "YOU WIN!!!"
  } else {
    resultText = "The computer wins..."
  }
  result.textContent = resultText;
}

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;

  switch (num) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scis";
  }
}

function getUserChoice(e) {
    return e.target.value;
}