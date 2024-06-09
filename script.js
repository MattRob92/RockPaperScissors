console.log("Hello World");

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

getComputerChoice();