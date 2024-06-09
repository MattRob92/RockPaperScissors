console.log("Hello World");

function getHumanChoice() {
    console.log("Choose One of this : ");
    console.log("1) - rock");
    console.log("2) - paper");
    console.log("3) - scissor");
  
    let choice = prompt("Enter your choice here : ");


    console.log(choice);
    return choice;

}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];

    //uses the choices array .length makes sure every string is given a number  0, 1 ,2
    const randomindex = Math.floor(Math.random() * choices.length);

    //gets the number from random index to choose which string to choose from choices
    // if choices wasn't here it'd only generate numbers from 0 - 2
    const choice = choices[randomindex];

    //logs the answer
    console.log(choice);

    return choice;
}

  //  Score variables

  let humanScore = 0;
  let computerScore = 0;

function playGame(){

    function playRound(humanChoice, computerChoice){
        humanChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You loose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissor") {
            console.log("You Win! Rock beats Scissor");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("Equality! Rock Rock");
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("Equality! Paper Paper");
        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            console.log("You Loose! Scissor beats Paper");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You Win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "scissor" && computerChoice === "paper") {
            console.log("You Win! Scissor beats Paper");
            humanScore++;
        } else if (humanChoice === "scissor" && computerChoice === "scissor") {
            console.log("Equality! Scissor Scissor");
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            console.log("You Loose! Rock beats Scissor");
            computerScore++;
        }
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




getHumanChoice();
getComputerChoice();