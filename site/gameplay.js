let ConsoleUser = require('./ConsoleUser');
let Console = require('./Console');

let simonConsole = new Console();
let player = new ConsoleUser('name', simonConsole);
player.beginGame();

$('.simon-button.green').on('click', () => player.clickButton('green'));
$('.simon-button.blue').on('click', () => player.clickButton('blue'));
$('.simon-button.yellow').on('click', () => player.clickButton('yellow'));
$('.simon-button.red').on('click', () => player.clickButton('red'));
