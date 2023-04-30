/*
    main.js
    Purpose: Implement the logic for the R-P-S game, both for human player and AI computer player.
    Author: Harkeet Bal
*/

// Global variables:

let computerChoice;
let playerChoice;

let playerScore = 0;
let computerScore = 0;


// constants
const buttons = document.querySelectorAll('.btn');
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");
const output = document.querySelector("#output");
player.textContent = "Player score : ${playerScore}";
computer.textContent = "Computer score: ${computerScore}";
output.textContent = "Have fun";




