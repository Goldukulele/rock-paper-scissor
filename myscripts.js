const buttons = document.querySelectorAll('.item');
const player = document.querySelector('.playerImage');
const comp = document.querySelector('.compImage');
const elements = document.querySelector('.gameElement');
const playerScoreDisplay = document.querySelector('.playerScore');
const compScoreDisplay = document.querySelector('.compScore');
const gameChecker = document.querySelector('.gameChecker');

const content = document.createElement('div');
const roundContent = document.createElement('div');
const roundCheck = document.createElement('div');
const beat = document.createElement('p');
const lose = document.createElement('p');
const ties = document.createElement('p');
const rockColor = document.createElement('p');
const paperColor = document.createElement('p');
const scissorsColor = document.createElement('p');
const resetButton = document.createElement('button');


beat.classList.add('beat')
beat.textContent = 'beats';
lose.classList.add('loseTo')
lose.textContent = 'loses to';
ties.classList.add('ties')
ties.textContent = 'Draw !';
rockColor.classList.add('rockColor')
rockColor.textContent = 'rock';
paperColor.classList.add('paperColor')
paperColor.textContent = 'paper';
scissorsColor.classList.add('scissorsColor')
scissorsColor.textContent = 'scissors';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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
            switch (playerValue) {
                case ('rock'):
                    roundCheck.appendChild(rockColor);
                    break;
                case ('paper'):
                    roundCheck.appendChild(paperColor);
                    break;
                case ('scissors'):
                    roundCheck.appendChild(scissorsColor);
            }
            roundCheck.appendChild(beat);
            switch (compValue) {
                case ('rock'):
                    roundCheck.appendChild(rockColor);
                    break;
                case ('paper'):
                    roundCheck.appendChild(paperColor);
                    break;
                case ('scissors'):
                    roundCheck.appendChild(scissorsColor);
            }
            break;
        case (compValue === 'rock' && playerValue === 'scissors'):
        case (compValue === 'paper' && playerValue === 'rock'):
        case (compValue === 'scissors' && playerValue === 'paper'):
            compScore += 1;
            switch (playerValue) {
                case ('rock'):
                    roundCheck.appendChild(rockColor);
                    break;
                case ('paper'):
                    roundCheck.appendChild(paperColor);
                    break;
                case ('scissors'):
                    roundCheck.appendChild(scissorsColor);
            }
            roundCheck.appendChild(lose);
            switch (compValue) {
                case ('rock'):
                    roundCheck.appendChild(rockColor);
                    break;
                case ('paper'):
                    roundCheck.appendChild(paperColor);
                    break;
                case ('scissors'):
                    roundCheck.appendChild(scissorsColor);
                    break;
            }
            break;
        default:
            roundCheck.appendChild(ties);

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

    let childTwo = gameChecker.firstElementChild;
    while (childTwo) {
        gameChecker.removeChild(childTwo);
        childTwo = gameChecker.firstElementChild;
    }
    resetButton.classList.add('play-again');
    resetButton.textContent = 'reset';
    gameChecker.appendChild(resetButton);
    document.querySelector('.play-again').addEventListener('click', () => {
        window.location.reload();
    });
}

function checkRound() {
    let gameChild = gameChecker.firstElementChild;
    let roundChild = roundCheck.firstElementChild;
    while (gameChild) {
        gameChecker.removeChild(gameChild);
        gameChild = gameChecker.firstElementChild;
    }
    while (roundChild) {
        roundCheck.removeChild(roundChild);
        roundChild = roundCheck.firstElementChild;
    }

    roundContent.classList.add('roundContent')
    roundContent.textContent = `Round ${round} !`;
    gameChecker.appendChild(roundContent);
    document.querySelector('.roundContent').style.color = getRandomColor();

    roundCheck.classList.add('roundCheck');
    gameChecker.appendChild(roundCheck);
}

function playRound(item) {
    round += 1;
    playerValue = playerChoice(item);
    compValue = computerChoice();
    checkRound();
    gameScore();
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
