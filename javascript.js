console.log("Test");

function computerPlay(){
    let rng = Math.floor(Math.random()*(3-1+1))+1;
    let computerMove = "";
    switch (rng) {
        case 1:
            computerMove = "rock"
            break;
        case 2:
            computerMove = "paper"
            break;
        case 3:
            computerMove = "scissor"
            break;
    }
    return computerMove;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case "rock" :
            if (computerSelection === "scissor") {
                return "You win! Rock beats Scissors!"
            } else if (computerSelection === "paper") {
                return "You lose! Paper beats Rock!"
            } else {
                return "It's a draw!"
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                return "You win! Paper beats Rocks!"
            } else if (computerSelection === "scissor") {
                return "You lose! Scissors beats Paper!"
            } else {
                return "It's a draw!"
            }
            break;
        case "scissor":
            if (computerSelection === "paper") {
                return "You win! Scissors beats Paper!"
            } else if (computerSelection === "rock") {
                return "You lose! Rock beats Scissors!"
            } else {
                return "It's a draw!"
            }
            break;      
        
    }
}

function game(){
    let counter = 0;
    while (counter < 5){
        let playerChoice = window.prompt("Choose your move (Rock, Paper or Scissor)!")
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissor"){
            computerChoice = computerPlay();
            console.log(playRound(playerChoice, computerChoice));
            counter++;
        } else {
            console.log("Invalid choice!")
        }
    }
}
