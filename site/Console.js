let Button = require('./Button');

class Console {
  constructor() {
    this.colors = ['green', 'blue', 'yellow', 'red'];
    this.refDict = { 'green': 'g', 'blue': 'b', 'yellow': 'y', 'red': 'r' };
    this.buttons = [];
    for (let color of this.colors) {
      this.buttons.push({ color: new Button(color) });
    }
    this.gameSequence = [];
    this.userSequence = [];
  }

  startNewGame() {
    this.nextRound();
  }

  nextRound() {
    let randomIndex = Math.floor(Math.random() * 4);
    this.gameSequence.push(this.colors[randomIndex]);
    this.promptMove();
  }

  promptMove() {
    // Play the current sequence for the user
  }

  moveCorrect() {
    // Check the button the user clicked against the corresponding item of the pattern
    return this.userSequence.join('') === this.gameSequence.join('');
  }

  click(color) {
    this.buttons[color].click();
    this.userSequence.push(this.refDict[color]);
    if (this.moveCorrect()) {
      this.nextRound();
    } else {
      this.endGame();
    }
  }

  endGame() {
    return 'The game has ended';
  }
}

module.exports = Console;
