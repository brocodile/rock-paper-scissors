function getComputerChoice(){
    const arr = ['rock','paper','scissor'];
    const randomness = Math.floor(Math.random() * arr.length);
    return arr[randomness];
}

function returnWinner(playerSelection,computerSelection){
    if(playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            return `Game Draw both are ${playerSelection}`;
        }
        else if(computerSelection === 'paper'){
            return `You Lose!! Computer's ${computerSelection} wins over ${playerSelection}`;
        }
        else if(computerSelection === 'scissor'){
            return `You Win!! Your ${playerSelection} wins over ${computerSelection}`;
        }
    }
}

let player = prompt('Rock-Paper-Scissor??');
player = player.toLowerCase();        // making text lowercase
if(player === 'scissors'){
    player = 'scissor';
}
let computer = getComputerChoice();
console.log(returnWinner(player,computer));
