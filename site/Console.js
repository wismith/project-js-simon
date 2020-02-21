// let Button = require('./Button');

class Console {
  constructor() {
    this.colors = ['green', 'blue', 'yellow', 'red'];
    this.refDict = { 'green': '.simon-button.green', 'blue': '.simon-button.blue', 'yellow': '.simon-button.yellow', 'red': '.simon-button.red' };
    this.buttons = [];
    for (let color of this.colors) {
      this.buttons.push(new Button(color, this.refDict[color]));
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
    console.log(this.buttons);
    for (let item of this.gameSequence) {
      setTimeout((item) => {
        for (let button of this.buttons) {
          if (button.color === item.color) {
            button.click();
          }
        }
      }, 1000);
    }
  }

  moveCorrect() {
    // Check the button the user clicked against the corresponding item of the pattern
    return this.userSequence.join('') === this.gameSequence.join('');
  }

  click(color) {
    for (let button of this.buttons) {
      if (button.color === color) {
        button.click();
      }
    }
    this.userSequence.push(color);
    if (this.userSequence.length === this.gameSequence.length) {
      if (this.moveCorrect()) {
        this.userSequence = [];
        this.nextRound();
      } else {
        this.endGame();
      }
    }
  }

  endGame() {
    return 'The game has ended';
  }
}
