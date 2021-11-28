function computerPlay(){
    let gameValue = ['Rock', 'Paper', 'Scissor'];
    let randomValue = gameValue[Math.floor(Math.random() * gameValue.length)];
    return randomValue;
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let comp = computerSelection;

    if (player == 'rock'){
        if (comp == 'rock'){
            return alert("Draw! Rock ties with Rock.");
        }
        else if (comp == 'paper'){
            return alert("You Lose! Rock loses to Paper.");
        }
        else{
            return alert("You Win! Rock beats Scissors.");
        }
    }

    if (player == 'paper'){
        if (comp == 'rock'){
            return alert("You Win! Paper beats Rock.");
        }
        else if (comp == 'paper'){
            return alert("Draw! Paper ties with Paper.");
        }
        else{
            return alert("You Lose! Paper loses to Scissors.");
        }
    }

    if (player == 'scissors'){
        if (comp == 'rock'){
            return alert("You Lose! Scissors lose to Rock.");
        }
        else if (comp == 'paper'){
            return alert("You Win! Scissors beat Paper.");
        }
        else{
            return alert("Draw! Scissors ties with Scissors.");
        }
    }
}

function playerAnswer(){
    let answer = prompt("Rock, Paper, or Scissors?");
    if (answer.toLowerCase() == 'rock' || answer.toLowerCase() == 'paper' || answer.toLowerCase() == 'scissors'){
        return answer.toLowerCase();
    }
    if (answer.toLowerCase() == 'scissor'){
        return answer = 'scissors';
    }
    else {
        alert("Please enter Rock, Paper, or Scissors!");
        return playerAnswer();
    }
}
function game(){
    let playerPlay;
    const count = 5; //Rounds in game
    for (let i = 0; i <= 5; i++){
        playerPlay = playerAnswer();
        playRound(playerPlay, computerPlay());
    }
}
