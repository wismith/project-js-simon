class Button {
  constructor(color, htmlElement, sound = undefined, id = undefined) {
    this.color = color;
    this.sound = sound;
    this.id = id;
    this.htmlElement = htmlElement;
  }

  click() {
    $(this.htmlElement).addClass('clicked');

    setTimeout(() => {
      $(this.htmlElement).removeClass('clicked');
    }, 250);
    // play sound
  }
}
