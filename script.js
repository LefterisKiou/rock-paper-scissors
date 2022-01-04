const rockCard = document.getElementById("rock");
const paperCard = document.getElementById("paper");
const scissorsCard = document.getElementById("scissors");
const selection = document.getElementById("selection");
const playButton = document.querySelector(".btn-warning")
const choice = document.getElementById('para')
const results = document.getElementById('results')
const empty = document.getElementById('empty')

let outcome = '';
let round = 1;
let playerScore = 0;
let computerScore = 0;

optionsArr = ["rock", "paper", "scissors"];


let clicked = function(e){
    if (e.target.className == "card-title mb-4"){
        let playerSelection = e.target.innerText
        choice.textContent = `Your choice is ${playerSelection}`
        selection.insertBefore(choice, results)
        e.target.offsetParent.classList.add('border', 'border-danger', 'border-3')
        rockCard.classList.remove('border', 'border-danger', 'border-3')
        paperCard.classList.remove('border', 'border-danger', 'border-3')
        scissorsCard.classList.remove('border', 'border-danger', 'border-3')
        e.target.offsetParent.classList.add('border', 'border-danger', 'border-3')
        empty.textContent = "";
    }
    else if (e.target.className == "card-body text-center"){
        let playerSelection =  e.target.children[0].innerText
        choice.textContent = `Your choice is ${playerSelection}`
        selection.insertBefore(choice, results)
        e.target.offsetParent.classList.add('border', 'border-danger', 'border-3')
        rockCard.classList.remove('border', 'border-danger', 'border-3')
        paperCard.classList.remove('border', 'border-danger', 'border-3')
        scissorsCard.classList.remove('border', 'border-danger', 'border-3')
        e.target.offsetParent.classList.add('border', 'border-danger', 'border-3')
        empty.textContent = "";
    }
    else if (e.target.className == "h1 mb-3"){
        let playerSelection =  e.target.previousElementSibling.innerText
        choice.textContent = `Your choice is ${playerSelection}`
        selection.insertBefore(choice, results)
        e.target.offsetParent.classList.add('border', 'border-danger', 'border-3')
        rockCard.classList.remove('border', 'border-danger', 'border-3')
        paperCard.classList.remove('border', 'border-danger', 'border-3')
        scissorsCard.classList.remove('border', 'border-danger', 'border-3')
        e.target.offsetParent.classList.add('border', 'border-danger', 'border-3')
        empty.textContent = "";
    }
    else {
        
        let playerSelection =  e.target.parentNode.previousElementSibling.innerText
        choice.textContent = `Your choice is ${playerSelection}`
        selection.insertBefore(choice, results)
        rockCard.classList.remove('border', 'border-danger', 'border-3')
        paperCard.classList.remove('border', 'border-danger', 'border-3')
        scissorsCard.classList.remove('border', 'border-danger', 'border-3')
        e.target.offsetParent.classList.add('border', 'border-danger', 'border-3')
        empty.textContent = "";
    }
}


let choiceText = function(){
    choice.textContent = `Your choice is ${clicked}`
    selection.insertBefore(choice, playButton)
    }


paperCard.addEventListener("click", clicked); 
rockCard.addEventListener("click", clicked); 
scissorsCard.addEventListener("click", clicked); 

// computer generates rock, paper, or scissors
let computerPlay = function(){
    return optionsArr[Math.floor(Math.random() * optionsArr.length)]
    }


// get user input
let rockPaperScissors = function(playerSelection, computerSelection){
    playerSelection = choice.innerText.substring(15).toLowerCase()
    computerSelection = computerPlay();

    
    if(playerSelection == "") {
        empty.textContent = "Please make a selection first"
    }

    else {
        // values get compared
        if (playerSelection == computerSelection) {
            outcome = "It's a tie"
        }
        else if (playerSelection == "rock" && computerSelection == "paper") {
        outcome = "You Lose! Paper beats Rock" 
        }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
        outcome = "You Win! Rock beats Scissors"
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
        outcome = "You Win! Paper beats Rock"
        }       
        else if (playerSelection == "paper" && computerSelection == "scissors") {
        outcome = "You Lose! Scissors beats Paper" 
        }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
        outcome = "You Lose! Rock beats Scissors" 
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
        outcome = "You Win! Scissors beats Paper"
        } 
    
    
        if (outcome.includes("You Win!")){
            playerScore++;
            results.textContent = `${outcome}. Round ${round} score: You: ${playerScore} - Computer: ${computerScore}`
            selection.insertBefore(results, playButton)
            round++;
        }
        else if (outcome.includes("You Lose!")) {
            computerScore++;
            results.textContent = `${outcome}. Round ${round} score: You: ${playerScore} - Computer: ${computerScore}`
            selection.insertBefore(results, playButton)
            round++;
        }
        else {
            results.textContent = `${outcome}. Round ${round} score: You: ${playerScore} - Computer: ${computerScore}`
            selection.insertBefore(results, playButton)
            round++;
        }

        if (playerScore == 5){
            results.textContent = `Congratulations, you win! Final score: You: ${playerScore} - Computer: ${computerScore}. Refresh the page to play again.`
            playButton.remove()
        }
        else if (computerScore == 5) {
            results.textContent = `Computer wins, better luck next time! Final score: You: ${playerScore} - Computer: ${computerScore}. Refresh the page to play again.`
            playButton.remove()
        }
    }

       
}


playButton.addEventListener("click", rockPaperScissors)




