
class ConsoleUser {
  constructor(name, console) {
    this.name = name;
    this.console = console;
  }

  clickButton(color) {
    this.console.click(color);
  }
}

module.exports = ConsoleUser;
