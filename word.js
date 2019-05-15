const Letter = require("./letter");
function Word(word) {
  this.wordArr = [];
  let arr = word.split("");
  for (i = 0; i < arr.length; i++) {
    let newLetter = new Letter(arr[i]);
    this.wordArr.push(newLetter);
  }
  this.printWord = function() {
    let printArr = [];
    for (let i = 0; i < wordArr.length; i++) {
      let newLetter = wordArr[i].printLetter();
      printArr.push(newLetter);
    }
    return printArr.join("");
  };
  this.checkLetters = function(letter) {
    for (let i = 0; i < wordArr.length; i++) {
      wordArr[i].checkGuess();
    }
  };
}
var word = new Word("blueberry");
console.log(word.wordArr);
