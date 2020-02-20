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

  addRound() {
    let randomIndex = Math.floor(Math.random() * 4);
    this.gameSequence.push(this.colors[randomIndex]);
  }

  click(color) {
    this.buttons[color].click();
    this.userSequence.push(this.refDict[color]);
  }

  checkMove() {
    // Check the button the user clicked against the corresponding item of the pattern
    return this.userSequence.join('') === this.gameSequence.join('');
  }

  endGame() {
    return 'The game has ended';
  }
}

module.exports = Console;
