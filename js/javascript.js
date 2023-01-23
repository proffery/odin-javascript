let computerWins = 0;
let playerWins = 0;
let draws = 0;
const GAMES = 5;
const keys = document.querySelectorAll('.key');
const keysPc = document.querySelectorAll('.key-pc');
const rockPc = document.querySelector('#rock-pc');
const paperPc = document.querySelector('#paper-pc');
const scissorsPc = document.querySelector('#scissors-pc');
const textTop = document.querySelector('.text-top');
const textBottom = document.querySelector('.text-bottom');
const footer = document.querySelector('div.footer');

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
    
    if (computerSelection === playerSelection) {
        if (!isEnd()) {
            draws++;
            textBottom.textContent = `|PLAYER - ${playerWins}|Draws - ${draws}|PC - ${computerWins}|`;
            textTop.textContent = 'No winners...';
        }
        else {
            endOfGame();
        }
    }

    else 
    if (playerSelection === 'rock' &&  computerSelection === 'scissors' ||
        playerSelection === 'scissors' &&  computerSelection === 'paper' ||
        playerSelection === 'paper' &&  computerSelection === 'rock') {
        if (!isEnd()) {
            playerWins++;
            textBottom.textContent = `|PLAYER - ${playerWins}|Draws - ${draws}|PC - ${computerWins}|`;
            textTop.textContent =`You Won, ${playerSelection} beats ${computerSelection}!`;
        }
        else {
            endOfGame();
        }
    }       
    else {
        if (!isEnd()) {
            computerWins++;
            textBottom.textContent = `|PLAYER - ${playerWins}|Draws - ${draws}|PC - ${computerWins}|`;
            textTop.textContent = `You Lose, ${computerSelection} beats ${playerSelection}!`;
        }
        else {
            endOfGame();
        }
    }    
}

function isEnd() {
    if (playerWins >= GAMES || computerWins >= GAMES) {
        return true;
    }
    else {
        return false;
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

function endOfGame() {
    let winner;
    if (computerWins > playerWins) {
        winner = 'COMPUTER';
    }
    else {
        winner = 'PLAYER';
    }

    const end = document.createElement('h1');
    const reload = document.createElement('h3');
    end.textContent = `${winner} is WIN`;
    reload.textContent = 'reload page for new game';
    footer.appendChild(reload);
    footer.appendChild(end);
    footer.classList.add('end-game');

}

keys.forEach(key => key.addEventListener('click', playSound));
keys.forEach(key => key.addEventListener('click', playRound));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keysPc.forEach(key => key.addEventListener('transitionend', removeTransition));
//console.log(game());

