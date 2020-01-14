
//create a function called computerPlay which will randomly return either 'Rock', 'Paper', or 'Scissors'

function computerPlay() {
    const hands = ['rock', 'paper', 'scissors'];  
    return hands[Math.floor(Math.random() * hands.length)];
}

//write a helper function that makes your round function case insensitive 

function getInput() {
    let x = prompt("Rock, Paper, or Scissors?");
    x = x.toLowerCase();
    return x;
}

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - playerSelection and computerSelection
//The function must return a string that declares the winner of the round

function playRound(playerSelection, computerSelection) {
    let results = ['You Win', 'You Lose', 'It\'s a draw'];     
    
//play a single round
    if(playerSelection == computerSelection){
        console.log(results[2]);
    } else if (playerSelection == "rock" && computerSelection == "scissors" ){
        console.log(`${results[0]} Rock, Smashes Scissors!`)
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log(`${results[1]} Paper, Covers Rock!`);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`${results[0]} Paper, Covers Rock!`);
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log(`${results[1]} Scissors, Cuts Paper!`);
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log(`${results[0]} Scissors, Cuts Paper`);
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log(`${results[1]} Rock, Smashes Scissors`);
    }
}

computerSelection = computerPlay();
playerSelection = getInput();
console.log(playRound(playerSelection, computerSelection));
