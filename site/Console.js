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
    // We need a sequence of nested setTimeout functions
    let doSetTimeout = (i) => {
      if (i === this.gameSequence.length) {
        return;
      }
      setTimeout(() => {
        console.log('testing');
        for (let button of this.buttons) {
          console.log('button.color:');
          console.log(button.color);
          console.log('game.sequence[i]:');
          console.log(this.gameSequence[i]);
          if (button.color === this.gameSequence[i]) {
            console.log('test');
            button.click();
          }
        }
        doSetTimeout(i + 1);
      }, 750);
    };
    console.log('blah');
    doSetTimeout(0);

    /* console.log(this.buttons);
    for (let item of this.gameSequence) {
      setTimeout(() => {
        for (let button of this.buttons) {
          if (button.color === item.color) {
            button.click();
          }
        }
      }, 1000);
    } */
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
