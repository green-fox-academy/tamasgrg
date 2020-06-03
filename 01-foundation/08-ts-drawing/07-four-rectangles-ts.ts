'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRandomRectangles(numberOfRectangles: number): void {
  let i: number = 0;
  while (i < numberOfRectangles) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let randomPositionX = Math.floor(Math.random()*600);
    let randomPositionY = Math.floor(Math.random()*400);
    let randomSizeX = Math.floor(Math.random()*300);
    let randomSizeY = Math.floor(Math.random()*200);
    ctx.fillStyle = `#${randomColor}`;
    ctx.fillRect(randomPositionX, randomPositionY, randomSizeX, randomSizeY);
    i++;
  }
}

drawRandomRectangles(6);