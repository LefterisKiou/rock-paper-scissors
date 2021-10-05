
optionsArr = ["rock", "paper", "scissors"]

// computer generates rock, paper, or scissors
let computerPlay = function(){
    return optionsArr[Math.floor(Math.random() * optionsArr.length)]
    }

// get user input
let rockPaperScissors = function(playerSelection, computerSelection){
    const input = prompt("Pick Rock, Paper or Scissors");
    playerSelection = input.toLowerCase();
    computerSelection = computerPlay()
    // values get compared
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors" ) {
        
       if (playerSelection == computerSelection) {
           return "It's a tie!"
       }
       else if (playerSelection == "rock" && computerSelection == "paper") {
           return "You Lose! Paper beats Rock" 
       }
       else if (playerSelection == "rock" && computerSelection == "scissors") {
           return "You Win! Rock beats Scissors"
       }
       else if (playerSelection == "paper" && computerSelection == "rock") {
           return "You Win! Paper beats Rock"
       }       
       else if (playerSelection == "paper" && computerSelection == "scissors") {
           return "You Lose! Scissors beats Paper" 
       }
       else if (playerSelection == "scissors" && computerSelection == "rock") {
           return "You Lose! Rock beats Scissors" 
       }
       else if (playerSelection == "scissors" && computerSelection == "paper") {
           return "You Win! Scissors beats Paper"
       }       
    }
    else {
        alert("Please pick a valid answer (Rock, Paper or Scissors)");
        return rockPaperScissors(playerSelection, computerSelection);
    }
}
let game = function() {
    let playerScore = 0;
    let computerScore = 0;
        
    for (let i = 1; i < 6; i++) {
        let result = rockPaperScissors();
        if (result.includes("You Win!")){
            playerScore++;
            console.log(`You Win! Round ${i} score: User score: ${playerScore} - Computer Score ${computerScore}`)
        }
        else if (result.includes("You Lose!")) {
            computerScore++;
            console.log(`You Lose! Round ${i} score: User score: ${playerScore} - Computer Score ${computerScore}`)
        }
        else {
            console.log(`It's a Tie! Round ${i} score: User score: ${playerScore} - Computer Score ${computerScore}`)
        }
        
    } 
}
