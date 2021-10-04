
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
        
       if (playerSelection == "rock" & computerSelection == "rock") {
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
       else if (playerSelection == "paper" && computerSelection == "paper") {
           return "It's a tie!"        
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
       else if (playerSelection == "scissors" && computerSelection == "scissors") {
           return "It's a tie!"
       }
    }
    // This part here doesn't work. After the alert, and the prompt, the method returns undefined.
    else {
        alert("Please pick a valid answer (Rock, Paper or Scissors)");
        rockPaperScissors(playerSelection, computerSelection);
    }
}
let game = function() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 6; i++) {
        rockPaperScissors();
        if (rockPaperScissors().includes("You Win!")){
            playerScore++;
            console.log(`You Win! Round ${i} score: User score: ${playerScore} - Computer Score ${computerScore}`)
        }
        else if (rockPaperScissors().includes("You Lose!")) {
            computerScore++;
            console.log(`You Lose! Round ${i} score: User score: ${playerScore} - Computer Score ${computerScore}`)
        }
        else {
            console.log(`It's a Tie! Round ${i} score: User score: ${playerScore} - Computer Score ${computerScore}`)
        }
        
    } 
}
