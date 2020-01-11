//create a function called computerPlay which will randomly return either 'Rock', 'Paper', or 'Scissors'
//This function will be used in the game to make the computer's play.
function computerPlay(x) {
    const hands = ['Rock', 'Paper', 'Scissors'];  
    //use the Math.random function to generate a random number between 0 and 1 
    //multiply it by arr.length to make sure the number is between 0 and array length
    //use the math floor to get the index ranging from 0 - array length
    return hands[Math.floor(Math.random() * hands.length)];
}

