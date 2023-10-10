function getComputerChoice(){
    const arr = ['rock','paper','scissor'];
    const randomness = Math.floor(Math.random() * arr.length);
    return arr[randomness];
}

function returnWinner(playerSelection,computerSelection){

    // if player and comp have the same 
    if(playerSelection === computerSelection){
        return `Game Draw`;
    }

    // if player choose rock
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return `computer wins`;
        }
        else if(computerSelection === 'scissor'){
            return `player wins`;
        }
    }

    // if player choose paper
    else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return `player wins`;
        }
        else if(computerSelection === 'scissor'){
            return `computer wins`;
        }
    }

    // if player choose scissor
    else if(playerSelection === 'scissor'){
        if(computerSelection === 'rock'){
            return `computer wins`;
        }
        else if(computerSelection === 'paper'){
            return `player wins`;
        }
    }
}

/*
let player = prompt('Rock-Paper-Scissor??');
player = player.toLowerCase();        // lowercasing (making program case-insensetive)
if(player === 'scissors'){
    player = 'scissor';
}
let computer = getComputerChoice();
console.log(returnWinner(player,computer));
*/

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    for(let i = 0 ; i < 5 ; i++){
        let player = prompt('Rock-Paper-Scissor??');
        player = player.toLowerCase();        // lowercasing (making program case-insensetive)
        if(player === 'scissors'){
            player = 'scissor';
        }
        let computer = getComputerChoice();

        if(returnWinner(player,computer) == 'player wins'){
            console.log(returnWinner(player,computer));
            playerScore++;
        }
        else if(returnWinner(player,computer) == 'Game Draw'){
            console.log(returnWinner(player,computer));
            drawScore++;
        }
        else{
            console.log(returnWinner(player,computer));
            computerScore++;
        }    
    }
    alert(`Total points: \n player: ${playerScore}\n computer: ${computerScore}`);
}

game();