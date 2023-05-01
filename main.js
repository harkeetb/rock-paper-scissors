/*
    main.js
    Purpose: Implement the logic for the R-P-S game, both for human player and AI computer player.
    Author: Harkeet Bal
*/

// global variables:
let computerChoice = {value: ""};    // initialize computer choice to a null choice 
let playerChoice;
let computerChoiceInt;               // integer value representing a choice for comparison
let playerChoiceInt;
let playerScore = 0;                 // keep track of the players' scores
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

        computerChoiceInt = computerTurn(computerChoice); // generate a random choice for the computer
        main(); // run the game
    })
})

// generate a random choice for the computer player which is determined when a button is pressed
function computerTurn(computerChoice){
    let rand = Math.floor(Math.random() * 3); // random number from 0-2

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

// plays a single round of RPS and declares the winner of the round by checking which actions were chosen
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

// 
function main(){
    output.textContent = "Choose Rock, Paper or Scissors";
    playRound();   // play rounds until a player has a score of 3

    // update the score display
    player.textContent = `Player score: ${playerScore}`;
    computer.textContent = `Computer score: ${computerScore}`;

    // Display results once a player reaches 3 points
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