let Button = require('./Button');

class Console {
  constructor() {
    this.buttons = [];
    for (let color of ['green', 'blue', 'yellow', 'red']) {
      this.buttons.push({ 'color': new Button(color) });
    }
    this.sequence = [];
  }

  endGame() {
    return 'The game has ended';
  }
}

module.exports = Console;
