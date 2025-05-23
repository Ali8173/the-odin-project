let compChoice;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 2)
    if(randomNumber === 0){
        compChoice = "rock"
    }else if(randomNumber === 1){
        compChoice = "paper"
    }else if(randomNumber === 2){
        compChoice = "scissors";
    }
}


function getHumanChoice(){
    let choice = prompt("Chosse between Rock, Paper, Scissors: ")
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "Stalemate";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return "You win!" ;
    } else {
        return "Computer wins!";
    }
    
};

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let round = 1; round<= 5; round++){
        console.log(`---Round${round}----`)

        const result = playRound(getHumanChoice(), compChoice)
        if(result === "You win!"){
            humanScore++
            console.log("You Win")
        }else if(result === "Computer wins!" ){
            computerScore++
            console.log("Computer Win")
        }else{
            console.log("This round is a draw")
        }
    }

    console.log(`your score ${humanScore}, computer score ${computerScore}`)

console.log("===Final Score===")
if(humanScore < computerScore){
    console.log("Computer won overall")
}else if(humanScore > computerScore){
    console.log("you won overall")
}else{
    console.log("It was a tie overall")
}
}

getComputerChoice();

playGame();