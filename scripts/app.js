
//create a function called computerPlay which will randomly return either 'Rock', 'Paper', or 'Scissors'
//This function will be used in the game to make the computer's play.
function computerPlay() {
    const hands = ['rock', 'paper', 'scissors'];  
    //use the Math.random function to generate a random number between 0 and 1 
    //multiply it by arr.length to make sure the number is between 0 and array length
    //use the math floor to get the index ranging from 0 - array length
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
function round(playerSelection, computerSelection) {
//Players make their selection
//Store results
        let results = ['You Win', 'You Lose', 'It\'s a draw'];
        computerSelection = computerPlay();
        playerSelection = getInput();
        
//play a single round of the game
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
