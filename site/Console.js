let Button = require('./Button');

class Console {
  constructor() {
    this.buttons = [];
    for (let color of ['green', 'blue', 'yellow', 'red']) {
      this.buttons.push(new Button(color));
    }
    this.currentSequence = [];
  }

  endGame() {
    return 'The game has ended';
  }
}

module.exports = Console;
