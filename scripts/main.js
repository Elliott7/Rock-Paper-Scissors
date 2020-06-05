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

// function game(){
//     let score = 0
//     for (let i = 0; i < 5; i++){
//         let playerSelection = window.prompt('Make a choice');
//         let computerSelection = computerPlay();

//         let x = (singleRound(playerSelection, computerSelection));
//         console.log(x);
//         if (x.charAt(4) == 'W'){
//             score += 1;
//             console.log(`Score is ${score}`);
//         } else if (x.charAt(4) == 'L'){
//             score -= 1;
//             console.log(`Score is ${score}`);
//         }
        
//     }
// }
let userScore = 0;
let cpuScore = 0;
const updateUserScore = document.querySelector('.user-score');
const updateCpuScore = document.querySelector('.cpu-score');
const textBox = document.querySelector('.result-box');
const ani1 = document.querySelector('.animation1');
const ani2 = document.querySelector('.animation2');

// function pictureToChange(){
//     document.getElementById("tochange").src = "/images/rock2.png"
// }
function winner(){
    if (userScore === 5){
        alert('You won! Play again?');
        userScore = 0;
        cpuScore = 0;
        updateScores();
    } else if(cpuScore === 5){
        alert('You lost! Are you going to let a computer beat you like that?');
        userScore = 0;
        cpuScore = 0;
        updateScores();
    }
}

function game(playerSelection){
    let computerSelection = computerPlay();
    document.getElementById("tochange").src = "images/rock2.png"
    document.getElementById("change1").src = "images/rock2.png"

    let x = (singleRound(playerSelection, computerSelection));
    animationRepeat();
    setTimeout(function(){animationRepeat(); 
        document.getElementById("tochange").src = `images/${computerSelection}2.png`;
        document.getElementById("change1").src = `images/${playerSelection}2.png`;
        scoreAndTextUpdate(); 
        updateScores();
        winner();
        }, 1500);
    function scoreAndTextUpdate(){
        if (x.charAt(4) == 'W'){
            userScore++;
            console.log(`Score is User:${userScore}, CPU:${cpuScore}`);
            textBox.textContent = x;
        } else if (x.charAt(4) == 'L'){
            cpuScore++;
            console.log(`Score is User:${userScore}, CPU:${cpuScore}`);
            textBox.textContent = x;
        } else{
            textBox.textContent = x;
        }
    }
}

function animationRepeat(){
    ani1.classList.toggle('move-left');
    ani2.classList.toggle('move-right');
}

function updateScores(){
    updateUserScore.textContent = userScore;
    updateCpuScore.textContent = cpuScore;
}

const uRock = document.querySelector('.up1');
uRock.addEventListener('click', (e) => {
    game('rock');

     }
)
const uPaper = document.querySelector('.up2');
uPaper.addEventListener('click', (e) => {
    game('paper');
     }
)
const uScissors = document.querySelector('.up3');
uScissors.addEventListener('click', (e) => {
    game('scissors');
     }
)






function evenNumbers(){
    for (let i = 0; i<=10; i++){
        if (i % 2 == 0){
            alert(i);
        }else{
            continue;
        }
    }
}

function numbers(){
    let i = 0;
    while (i < 3){
        alert(`number ${i}!`);
        i++;
    }
}

function getNumber(){
    let input = 0
    while (input < 100){
        input = prompt('Enter a number above 100');
    }
}

function findPrime(num){
    arrayOfPrimes = [];
    for (let count = 2; count < num; count++){
        if (num % count == 0){ 
        break;
        } else if (count == num-1){
            arrayOfPrimes.push(num);
            alert(`${arrayOfPrimes} is a prime number`);
            break
        }

    }
    
}

function findPrimes(num){
    arrayOfPrimes = [];
    for (let count = 2; count < num; count++){
        for (let indCount = 2; indCount < count; indCount++){
            if (count % indCount == 0){
                break;
            }else if (indCount = count-1){
                arrayOfPrimes.push(count);
            }
        }
    }
    alert(arrayOfPrimes)


}