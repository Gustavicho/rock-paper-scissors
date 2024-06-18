/* -----  VARIABLES ----- */
const choicesBtns = document.querySelectorAll(".btn--choice")
const result = document.querySelector(".results")
const WIN = 5;

let computerChoice;
let userChoice;
let userWins = 0;
let computerWins = 0;

/* ----- ACTUAL CODE ----- */
choicesBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    playRound(event);
    showPts();
    if (computerWins === WIN || userWins === WIN){
      showWinner();
      // reset the play
      userWins = 0;
      computerWins = 0;
    }
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

  userChoice = getUserChoice(e);
  computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    resultText = "Draw!"
  } else if (winCondition[userChoice] === computerChoice) {
    userWins++;
    resultText = "YOU WIN!!!"
  } else {
    computerWins++;
    resultText = "The computer wins..."
  }
  result.textContent = resultText;
}

function showWinner() {
  if (userWins > computerWins){
    result.textContent = "YOU'RE THE ABSOLUTE WINNER";
  } else {
    result.textContent = "THE MACHINE IS THE ABSOLUTE WINNER";
  }
}

function showPts() {
  document.querySelector('.user-pts').textContent = userWins;
  document.querySelector('.comp-pts').textContent = computerWins;
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