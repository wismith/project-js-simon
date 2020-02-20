class Button {
  constructor(color, htmlElement, sound = undefined, id = undefined) {
    this.color = color;
    this.sound = sound;
    this.id = id;
    this.htmlElement = htmlElement;
  }

  click() {
    alert(`You clicked the ${this.color} button.`);
    $(this.htmlElement).addClass('clicked');
    setTimeout(() => true, 250);
    $(this.htmlElement).removeClass('clicked');
    // play sound
  }
}

module.exports = Button;
