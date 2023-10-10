function getComputerChoice(){
    const arr = ['rock','paper','scissors'];
    const randomness = Math.floor(Math.random() * arr.length);
    return arr[randomness];
}

function returnWinner(playerSelection,computerSelection){

}

let player = prompt('Rock-Paper-Scissors??');
player = player.toLowerCase();        // making text lowercase
let computer = getComputerChoice();
console.log(returnWinner(player,computer));
