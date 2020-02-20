let Console = require('./Console');

class ConsoleUser {
  constructor(name, console) {
    this.name = name;
    this.console = console;
  }

  clickButton(color) {
    this.console.buttons[color].click();
  }
}

module.exports = ConsoleUser;
