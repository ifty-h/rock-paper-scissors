function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    if(choiceNum == 0) return "rock";
    else if(choiceNum == 1) return "paper";
    else if(choiceNum == 2) return "scissors";
}

function getHumanChoice(){
    let choiceEntered = false;
    while(!choiceEntered){
        let choice = prompt("Rock, paper, or scissors?\n").toLowerCase();
        if(choice == "r" || choice == "rock") return "rock";
        else if(choice == "p" || choice == "paper") return "paper";
        else if(choice == "s" || choice == "scissors") return "scissors";
        alert("Invalid choice.");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if(humanChoice == "rock"){
        if(computerChoice == "rock") console.log("Tie! Rock and Rock.");
        else if(computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.");
            ++computerScore;
        }
        else if(computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors.");
            ++humanScore;
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            console.log("You lose! Paper beats Rock.");
            ++humanScore;
        }
        else if(computerChoice == "paper") console.log("Tie! Paper and Paper.");
        else if(computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper.");
            ++computerScore;
        }
    }
    else if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors.");
            ++computerScore;
        } 
        else if(computerChoice == "paper"){
            console.log("You win! Scissors beats Paper.");
            ++humanScore;
        }
        else if(computerChoice == "scissors") console.log("Tie! Scissors beats Scissors.");
    }
}