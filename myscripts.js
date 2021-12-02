const buttons = document.querySelectorAll('.item');
const player = document.querySelector('.playerImage');
const comp = document.querySelector('.compImage');
const elements = document.querySelector('.gameElement');
const playerScoreDisplay = document.querySelector('.playerScore');
const compScoreDisplay = document.querySelector('.compScore');
const gameChecker = document.querySelector('.gameChecker');

const content = document.createElement('div');
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

let playerValue = '';
let compValue = '';
let playerScore = 0;
let compScore = 0;
let round = 0;


let playerChoice = (item) => {
    let itemValue = item.classList;
    let playerSign = '';
    let gameValue = '';

    if (itemValue.contains('fa-hand-rock')) {
        playerSign = 'far fa-hand-rock fa-7x';
        gameValue = 'rock';
    }
    else if (itemValue.contains('fa-hand-paper')) {
        playerSign = 'far fa-hand-paper fa-7x';
        gameValue = 'paper';
    }
    else if (itemValue.contains('fa-hand-scissors')) {
        playerSign = 'far fa-hand-scissors fa-7x';
        gameValue = 'scissors';
    }

    updatePlayerBox(playerSign);
    return gameValue;
}

let computerChoice = () => {
    let gameValue = ['rock', 'paper', 'scissors'];
    let randomValue = gameValue[Math.floor(Math.random() * gameValue.length)];

    updateComputerBox(randomValue);
    return randomValue;
}

function updatePlayerBox(item) {
    return player.classList.value = item;
}

function updateComputerBox(item) {
    switch (item) {
        case 'rock':
            comp.classList.value = 'far fa-hand-rock fa-7x';
            break;
        case 'paper':
            comp.classList.value = 'far fa-hand-paper fa-7x';
            break;
        case 'scissors':
            comp.classList.value = 'far fa-hand-scissors fa-7x';
            break;
    }
    return;
}

function gameScore() {
    switch (true) {
        case (playerValue === 'rock' && compValue === 'scissors'):
        case (playerValue === 'paper' && compValue === 'rock'):
        case (playerValue === 'scissors' && compValue === 'paper'):
            playerScore += 1;
            break;
        case (compValue === 'rock' && playerValue === 'scissors'):
        case (compValue === 'paper' && playerValue === 'rock'):
        case (compValue === 'scissors' && playerValue === 'paper'):
            compScore += 1;
            break;
    }

    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = compScore;
}


function gameEnd() {
    let child = elements.firstElementChild;
    while (child) {
        elements.removeChild(child);
        child = elements.firstElementChild;
    }

    if (playerScore === 5) {
        content.classList.add('win');
        content.textContent = 'Victory !';
        elements.appendChild(content);
    }
    if (compScore === 5) {
        content.classList.add('lose');
        content.textContent = 'Defeat . . .';
        elements.appendChild(content);
    }
    
}

function checkRound() {
    gameChecker.removeChild(gameChecker.firstElementChild);
    content.classList.add('round')
    content.textContent = `Round ${round} !`;
    gameChecker.appendChild(content);

}

function playRound(item) {
    round += 1;
    playerValue = playerChoice(item);
    compValue = computerChoice();
    gameScore();
    checkRound()

}

function playGame() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button);
            if (playerScore === 5 || compScore === 5) {
                gameEnd();
            }
            
        });
    });
}

playGame();
