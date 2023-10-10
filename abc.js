function getComputerChoice(){
    const arr = ['rock','paper','scissors'];
    const randomness = Math.floor(Math.random() * arr.length);
    return arr[randomness];
}

function round(playerSelection,computerSelection){

}

let player = prompt('Rock-Paper-Scissors??');
player = player.toLowerCase();        // making text lowercase
let computer = getComputerChoice();
console.log(round(player,computer));
