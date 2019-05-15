function Letter(char) {
  this.char = char;
  this.guessed = false;
  this.printLetter = function() {
    if (this.guessed) {
      return this.char;
    } else return "_";
  };
  this.checkGuess = function(guess) {
    if (guess === char) {
      this.guessed = true;
    } else return;
  };
}
module.exports = Letter;
