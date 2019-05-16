const Letter = require("./letter");
function Word(word) {
  this.word = word;
  this.wordArr = [];
  let arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    let newLetter = new Letter(arr[i]);
    this.wordArr.push(newLetter);
  }
  this.printWord = function() {
    var printArr = [];
    for (let i = 0; i < this.wordArr.length; i++) {
      let newLetter = this.wordArr[i].printLetter();
      printArr.push(newLetter);
    }
    return printArr.join(" ");
  };
  this.checkLetters = function(letter) {
    for (let i = 0; i < this.wordArr.length; i++) {
      this.wordArr[i].checkGuess(letter);
    }
  };
}
module.exports = Word;
