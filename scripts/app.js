//create a function called computerPlay which will randomly return either 'Rock', 'Paper', or 'Scissors'
//This function will be used in the game to make the computer's play.
function computerPlay(x) {
    const hands = ['Rock', 'Paper', 'Scissors'];  
    //use the Math.random function to generate a random number between 0 and 1 
    //multiply it by arr.length to make sure the number is between 0 and array length
    //use the math floor to get the index ranging from 0 - array length
    return hands[Math.floor(Math.random() * 3)];
}

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - playerSelection and computerSelection
//The function must return a string that declares the winner of the round

function round(playerSelection, computerSelection) {
//Players make their selection
//Store results
        let results = ['You Win', 'You Lose', 'It\'s a draw'];
        computerSelection = computerPlay();
        playerSelection = prompt("Rock, Paper, or Scissors?");
//play a single round of the game
        if(playerSelection == computerSelection){
        console.log(results[2]);
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" ){
        console.log(`${results[0]} Rock, Smashes Scissors!`)
    } else if (playerSelction == "Rock" && computerSelection == "Paper"){
        console.log(`${results[1]} Paper, Covers Rock!`);
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`${results[0]} Paper, Covers Rock!`);
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log(`${results[1]} Scissors, Cuts Paper!`);
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log(`${results[0]} Scissors, Cuts Paper`);
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        console.log(`${results[1]} Rock, Smashes Scissors`);
    }
}