console.log("Hello World");

function getHumanChoice() {
    console.log("Choose One of these: ");
    console.log("1) - rock");
    console.log("2) - paper");
    console.log("3) - scissors");

    let choice = prompt("Enter your choice here: ").toLowerCase();
    console.log(choice);
    return choice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    console.log(choice);
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            return "computer";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            return "human";
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("Equality! Rock Rock");
            return "draw";
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("Equality! Paper Paper");
            return "draw";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beat Paper");
            return "computer";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            return "human";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beat Paper");
            return "human";
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Equality! Scissors Scissors");
            return "draw";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            return "computer";
        }
    }

    for (let p = 0; p < 5; p++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        if (p === 4) {
            console.log("5 Rounds! End of the Game.");
        }
    }

    if (humanScore > computerScore){
        return console.log("Victory!")
    }else if (humanScore < computerScore){
        return console.log("Defeat!")
    }else if (humanScore === computerScore){
        return console.log("Stalemate")
    }

    console.log(`Final Score: Human ${humanScore} - ${computerScore} Computer`);
}

playGame();
