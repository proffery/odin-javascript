let computerWins = 0;
let playerWins = 0;
let draws = 0;
const GAMES = 5;
const keys = document.querySelectorAll('.key');
const keysPc = document.querySelectorAll('.key-pc');
const rockPc = document.querySelector('#rock-pc');
const paperPc = document.querySelector('#paper-pc');
const scissorsPc = document.querySelector('#scissors-pc');

function getComputerChoice() {
    let cpChoise = Math.floor(Math.random() * 3);
    if (cpChoise === 0) {
        rockPc.classList.add('playing');
        return 'rock';
    }
    else if (cpChoise === 1) {
        paperPc.classList.add('playing');
        return 'paper';
    }
    else {
        scissorsPc.classList.add('playing');
        return 'scissors';
    }
}

function playRound(e) {  
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    e.stopPropagation();
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
        return false;
    }

    else {
        return true;
    }
}

function playSound(e) {
    const audio = document.querySelector(`audio[id="${e.target.id}"]`)
    const key = document.querySelector(`div#${e.target.id}`);
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
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

keys.forEach(key => key.addEventListener('click', playRound));
keys.forEach(key => key.addEventListener('click', playSound));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keysPc.forEach(key => key.addEventListener('transitionend', removeTransition));
//console.log(game());

