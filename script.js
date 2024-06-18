const userChoice = document.querySelector("#choice")
const result = document.querySelector(".results")

let computer;
let user;

document.querySelector("button").addEventListener("click", () => {
  user = getUserChoice();
  computer = getComputerChoice();
  let resultText;

  if (user === computer) {
    resultText = "Draw!"
  } else if (
    user === "rock" && computer === "scis" ||
    user === "scis" && computer === "paper" ||
    user === "paper" && computer === "rock" )
  {
    resultText = "YOU WIN!!!"
  } else {
    resultText = "The computer wins..."
  }
  result.textContent = resultText;
});

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;

  switch (num) {
    case 1:
      return "rock"

    case 2:
      return "paper"

    case 3:
      return "scis"
  }
}

function getUserChoice() {
    return userChoice.value
}