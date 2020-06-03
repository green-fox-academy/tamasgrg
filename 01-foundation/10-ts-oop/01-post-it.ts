'use strict';
// Create a PostIt a class that has
  // a backgroundColor
  // a text on it
  // a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

export class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(text: string, backgroundColor: string, textColor: string) {
    this.text = text;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
  }
}

let idea = new PostIt('Idea 1', 'orange', 'blue');
let awesome = new PostIt('Awesome', 'pink', 'black');
let superb = new PostIt('Superb!', 'yellow', 'green');