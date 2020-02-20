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

module.exports = Button;
