let results = ['You Win', 'You Lose', 'It\'s a draw']; 
let playerScore = 0;
let computerScore = 0;

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
    playerSelection = getInput(); 
    computerSelection = computerPlay();
//play a single round
    if(playerSelection == computerSelection){
        console.log(results[2]);
    } else if (playerSelection == "rock" && computerSelection == "scissors" ){
        console.log(`${results[0]} Rock, Smashes Scissors!`);
        playerScore++;
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log(`${results[1]} Paper, Covers Rock!`);
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`${results[0]} Paper, Covers Rock!`);
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log(`${results[1]} Scissors, Cuts Paper!`);
        computerScore++
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log(`${results[0]} Scissors, Cuts Paper`);
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log(`${results[1]} Rock, Smashes Scissors`);
        computerScore++;
    }
}

//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//Loop over the previous function 5 times
//At the end of each round using an increment syntax in order to keep the score 
    //initialise variables to keep the score for the player and computer

function game(){
    for(let i = 0; i <= 5; i++){
        playRound();
    }
    return displayWinner();
}

function displayWinner(){
    if(playerScore == computerScore){
        console.log("congratualtions! It's a draw, hahahaha");
    } else if(playerScore > computerScore){
        console.log(`Player Score: ${playerScore} and Computer Score: ${computerScore} so, player one wins!`);
    } else if(playerScore < computerScore){
        console.log(`Player Score: ${playerScore} and Computer Score: ${computerScore} so, computer wins!`);
    }
}
