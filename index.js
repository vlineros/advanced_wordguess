const inquirer = require("inquirer");
const Word = require("./word");
var guesses = 10; //work to increment
var guessWord = new Word("blueberry");
inquirer
  .prompt([
    {
      message: "Guess a Letter: ",
      name: "userGuess",
      type: "input"
    }
  ])
  .then(function(response) {
    guessWord.checkLetters(response);
  });
