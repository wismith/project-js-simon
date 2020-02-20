class Button {
  constructor(color, sound = undefined, id = undefined) {
    this.color = color;
    this.sound = sound;
    this.id = id;
  }

  click() {
    alert(`You clicked the ${this.color} button.`);
    // Pulse color
    // play sound
  }
}


$('.simon-button.green').on('click', function() {
  alert('You clicked the green button');
});

$('.simon-button.blue').on('click', function() {
  alert('You clicked the blue button');
});

$('.simon-button.yellow').on('click', function() {
  alert('You clicked the yellow button');
});

$('.simon-button.red').on('click', function() {
  alert('You clicked the red button');
});

module.exports = Button;
