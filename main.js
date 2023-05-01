/*
    main.js
    Purpose: Implement the logic for the R-P-S game, both for human player and AI computer player.
    Author: Harkeet Bal
*/

// global variables:
let computerChoice;
let playerChoice;
let computerChoiceInt;
let playerChoiceInt;
let playerScore = 0;
let computerScore = 0;


// constants
const buttons = document.querySelectorAll('.btn');
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");
const output = document.querySelector("#output");
player.textContent = `Player score : ${playerScore}`;
computer.textContent = `Computer score: ${computerScore}`;
output.textContent = "First to 3 wins. Have fun!";


// button logic:
buttons.forEach((button)=>{button.addEventListener
    ('click', ()=>{

        playerChoice = button.id;
        // check which action was chosen
        switch(playerChoice){
            case "rock":
                playerChoiceInt = 0;
                break;
            case "paper":
                playerChoiceInt = 1;
                break;
            case "scissors":
                playerChoiceInt = 2;
                break;
        }

        computerChoiceInt = computerTurn(computerChoice);
        play();
    })
})

function computerTurn(computerChoice){
    let rand = Math.floor(Math.random() * 3); // random number from 0-2
    computerChoice = {value: ""}; // initialize a field that contains the computers choice (0,1,2 for r,p,s)

    // check which action was taken and update the field
    if(rand == 0){
        computerChoice.value = "rock";
    }
    else if(rand == 1){
        computerChoice.value = "paper";
    }
    else{
        computerChoice.value = "scissors";
    }

    return rand;
}

// plays a single round of RPS and declares the winner of the round
function playRound(){
    // player chose rock:
    if(playerChoiceInt == 0){
        if(computerChoiceInt == 2){
            output.textContent = `You won this round. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
            playerScore++;
        }
        else if(computerChoiceInt == 0){
            output.textContent = `A tie. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
        }
        else{
            output.textContent = `You lost this round. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
            computerScore++;
        }
    }
    // player chose paper:
    else if(playerChoiceInt == 1){
        if(computerChoiceInt == 0){
            output.textContent = `You won this round. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
            playerScore++;
        }
        else if(computerChoiceInt == 1){
            output.textContent = `A tie. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
        }
        else{
            output.textContent = `You lost this round. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
            computerScore++;
        }
    }
    // player chose scissors
    else{
        if(computerChoiceInt == 1){
            output.textContent = `You won this round. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
            playerScore++;
        }
        else if(computerChoiceInt == 3){
            output.textContent = `A tie. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
        }
        else{
            output.textContent = `You lost this round. You chose ${playerChoice} and the computer chose ${computerChoice.value}`;
            computerScore++;
        }
    }
}


function play(){
    output.textContent = "Choose Rock, Paper or Scissors";

    playRound();    
    // update the score display
    player.textContent = `Player score: ${playerScore}`;
    computer.textContent = `Computer score: ${computerScore}`;

    if(playerScore == 3){
        output.textContent = "You won!";
        reset();
    }
    else if(computerScore == 3){
        output.textContent = "You lost.";
        reset();
    }
}

// helper function to reset game statistics
function reset(){
    playerScore = 0;
    computerScore = 0;
    player.textContent = `Player score: ${playerScore}`;
    computer.textContent = `Computer score: ${computerScore}`;
}