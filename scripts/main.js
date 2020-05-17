function computerPlay (){
    let choices = ['rock', 'paper', 'scissors'];
    return(choices[Math.floor(Math.random()*choices.length)])
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return "You Lose! Paper beats Rock"
    } else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return "You Lose! Scissors beats Paper"
    } else if (computerSelection == 'rock' && playerSelection == 'paper'){
        return "You Win! Paper beats Rock"
    } else if(computerSelection == 'scissors' && playerSelection == 'rock') {
        return "You Win! Rock beats Scissors"
    } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        return "You Win! Scissors beats Paper"
    } else {
        return "That is a tie"
    }
}

function game(){
    let score = 0
    for (let i = 0; i < 5; i++){
        let playerSelection = window.prompt('Make a choice');
        let computerSelection = computerPlay();

        let x = (singleRound(playerSelection, computerSelection));
        console.log(x);
        if (x.charAt(4) == 'W'){
            score += 1;
            console.log(`Score is ${score}`);
        } else if (x.charAt(4) == 'L'){
            score -= 1;
            console.log(`Score is ${score}`);
        }
        
    }
}