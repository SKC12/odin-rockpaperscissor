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
                win(computerSelection);
            } else if (computerSelection === "paper") {
                loss(computerSelection);
            } else {
                draw(computerSelection);
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                win(computerSelection);
            } else if (computerSelection === "scissor") {
                loss(computerSelection);
            } else {
                draw(computerSelection);
            }
            break;
        case "scissor":
            if (computerSelection === "paper") {
                win(computerSelection)
            } else if (computerSelection === "rock") {
                loss(computerSelection);
            } else {
                draw(computerSelection);
            }
            break;      
        
    }
}

function win(computerSelection){
    console.log("win");
    let pcScore = document.querySelector('.pc-score');
    let playerScore = document.querySelector('.player-score');
    let announcer = document.querySelector('.announcer');

    if (pcScore.textContent >= 5 || playerScore.textContent >= 5){
        announcer.textContent = "The game is already over!"
        return;
    }    

    playerScore.textContent = parseInt(playerScore.textContent)+1;

    if (playerScore.textContent == 5){
        announcer.textContent = `The PC chose ${computerSelection}, you have won this round and the match. CONGRATULATIONS!`;
        return;
    }
    announcer.textContent = `The PC chose ${computerSelection}, you have won this round!`
}

function loss(computerSelection) {
    console.log("loss");
    let pcScore = document.querySelector('.pc-score');
    let playerScore = document.querySelector('.player-score');
    let announcer = document.querySelector('.announcer');

    if (pcScore.textContent >= 5 || playerScore.textContent >= 5){
        announcer.textContent = "The game is already over!";
        return;
    }

    pcScore.textContent = parseInt(pcScore.textContent)+1;

    if (pcScore.textContent == 5){
        announcer.textContent = `The PC chose ${computerSelection}, you have lost this round and the match. Good luck next time!`;
        return;
    }
    announcer.textContent = `The PC chose ${computerSelection}, you have lost this round!`;
}

function draw(computerSelection) {
    console.log("draw");
    let pcScore = document.querySelector('.pc-score');
    let playerScore = document.querySelector('.player-score');
    let announcer = document.querySelector('.announcer');

    if (pcScore.textContent >= 5 || playerScore.textContent >= 5){
        announcer.textContent = "The game is already over!"
        return;
    }

    announcer.textContent = `The PC also chose ${computerSelection}, it's a draw!`

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

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(btn => btn.addEventListener('click', (e)=> playRound(e.target.className, computerPlay())));

/*
let rockBtn = document.querySelector('button[class="rock"');
rockBtn.addEventListener('click', (e)=> playRound(e.target.className, computerPlay));

*/