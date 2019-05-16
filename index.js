const inquirer = require("inquirer");
const Word = require("./word");
const randomWords = require("random-words");
var guesses = 10;
var previousGuess = "";
var guessWord = "";

function mainGame() {
  guesses = 10;
  guessWord = new Word(randomWords());
  console.log(guessWord.word);
  console.log(guessWord.printWord() + "\n");
  guessGame();
}
function guessGame() {
  inquirer
    .prompt([
      {
        message: "Guess a Letter: ",
        name: "userGuess",
        type: "input"
      }
    ])
    .then(function(response) {
      guessWord.checkLetters(response.userGuess);
      console.log(guessWord.printWord() + "\n");
      if (guessWord.printWord() === previousGuess) {
        console.log("Incorrect! \n");
        guesses--;
      } else {
        console.log("Correct! \n");
      }
      previousGuess = guessWord.printWord();
      console.log("Guesses left: " + guesses);
      if (guessWord.printWord() === guessWord.word.split("").join(" ")) {
        console.log("That's correct you win!");
        mainGame();
      } else if (guessWord.printWord() === previousGuess) {
        if (guesses <= 0) {
          ("Ohhhh, you lose! OUCH");
          mainGame();
        } else guessGame();
      } else {
        guessGame();
      }
    });
}
mainGame();
