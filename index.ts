#! /usr/bin/env node

import inquirer from "inquirer";

//1)Computer will generate a random number
//2)User input for guessing number
//3)Compare user input with computer generated number & show result

const randomNumber = Math.floor(Math.random() * 6 + 1);


console.log("Welcome To Number Guessing Games");

const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "please guess a number between 1-6",
  },
]);

if (answers.userGuessNumber === "randomNumber") {
  console.log("Congratulation!you guess right number");
} else {
  console.log("you guess wrong number");
}
