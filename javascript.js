
function getComputerChoice() {
    let cpChoise = Math.floor(Math.random() * 3);
    if (cpChoise === 0) {
        return 'rock';
    }
    else if (cpChoise === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let playerChoise = prompt('Rock, Paper or Scissors?').toLowerCase();

    if (playerChoise === 'rock' || playerChoise === 'paper' || playerChoise === 'scissors') {
        return playerChoise;
    }

    else {
        alert('Input ERROR!');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === undefined) {
        return 'Input ERROR!';
    }

    else
    if (computerSelection === playerSelection) {
        return 'No winners...'
    }

    else 
    if (playerSelection === 'rock' &&  computerSelection === 'scissors' ||
        playerSelection === 'scissors' &&  computerSelection === 'paper' ||
        playerSelection === 'paper' &&  computerSelection === 'rock') {
        return `You Won, ${playerSelection} beats ${computerSelection}!`;
    }       
    else {
        return `You Lose, ${computerSelection} beats ${playerSelection}!`;
    }
}

function game() {
    let round = [];
    let computerWins = 0;
    let playerWins = 0;
    let draws = 0;
    let winner;
    for (let i = 0; i < 5; i++) {
        round.i =  playRound(getPlayerChoice(), getComputerChoice());
        if (round.i.startsWith('You Won')) {
            playerWins++;
        }

        if (round.i.startsWith('You Lose')) {
            computerWins++;
        }

        if (round.i.startsWith('No')) {
            draws++;
        }
        console.log(round.i);
    }
    if (computerWins > playerWins) {
        winner = 'Computer';
    }

    else if(computerWins < playerWins) {
        winner = 'Player';
    }
    else {
        winner = 'No one win'
    }
    return `WINNER - ${winner}!\nGame report:\nComputer Wins - ${computerWins}\nPlayer Wins - ${playerWins}\nDraws - ${draws}`
}

console.log(game());