const userChoice = document.querySelector("#choice")

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