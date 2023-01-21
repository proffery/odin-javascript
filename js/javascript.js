let computerWins = 0;
let playerWins = 0;
let draws = 0;
const GAMES = 5;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

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

function playRound(e, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = e.target.id;
        if (playerSelection === undefined) {
            console.log('Input ERROR!');
            return 'Input ERROR!';
        }

        else
        if (computerSelection === playerSelection) {
            draws++;
            console.log('No winners...');
            return 'No winners...'
        }

        else 
        if (playerSelection === 'rock' &&  computerSelection === 'scissors' ||
            playerSelection === 'scissors' &&  computerSelection === 'paper' ||
            playerSelection === 'paper' &&  computerSelection === 'rock') {
            playerWins++;
            console.log(`You Won, ${playerSelection} beats ${computerSelection}!`);
            return `You Won, ${playerSelection} beats ${computerSelection}!`;
        }       
        else {
            computerWins++
            console.log(`You Lose, ${computerSelection} beats ${playerSelection}!`);
            return `You Lose, ${computerSelection} beats ${playerSelection}!`;
        }
}

function isEnd() {
    if (playerWins != GAMES || computerWins != GAMES) {
        let winner;
        if (computerWins > playerWins) {
            winner = 'Computer';
        }
        else if(computerWins < playerWins) {
            winner = 'Player';
        }
        else {
            winner = 'No one win'
        }
    }
    else {
        return `WINNER - ${winner}!\nGame report:\nComputer Wins - ${computerWins}\nPlayer Wins - ${playerWins}\nDraws - ${draws}`
    }
}
 
    // if (isEnd) {
    //     let winner;
    //     if (computerWins > playerWins) {
    //         winner = 'Computer';
    //     }
    //     else if(computerWins < playerWins) {
    //         winner = 'Player';
    //     }
    //     else {
    //         winner = 'No one win'
    //     }
    //     return `WINNER - ${winner}!\nGame report:\nComputer Wins - ${computerWins}\nPlayer Wins - ${playerWins}\nDraws - ${draws}`
    // }
// function game() {
//     let round = [];
//     let computerWins = 0;
//     let playerWins = 0;
//     let draws = 0;
//     let winner;
//     for (let i = 0; i < 5; i++) {
//         round.i = playRound;
//         if (round.i.startsWith('You Won')) {
//             playerWins++;
//         }
//         else if (round.i.startsWith('You Lose')) {
//             computerWins++;
//         }
//         else if (round.i.startsWith('No')) {
//             draws++;
//         }
//         else {
//             i--;
//         }
//         console.log(round.i);
//     }

//     if (computerWins > playerWins) {
//         winner = 'Computer';
//     }
//     else if(computerWins < playerWins) {
//         winner = 'Player';
//     }
//     else {
//         winner = 'No one win'
//     }
//     return `WINNER - ${winner}!\nGame report:\nComputer Wins - ${computerWins}\nPlayer Wins - ${playerWins}\nDraws - ${draws}`
// }

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);


// function playSound(e) {
//     const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = this.document.querySelector(`[data-key="${e.keyCode}"]`);
//     audio.play();
//     key.classList.add('playing');
// }

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
// this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);

//console.log(game());

