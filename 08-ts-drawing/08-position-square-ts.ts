'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawRectangle(positionX: number, positionY: number): void {
  ctx.fillRect(positionX, positionY, 50, 50);
}

function drawSomeRectangles(numberOfRectangles: number): void {
  let i: number = 0;
  while (i < numberOfRectangles) {
    let positionX = Math.floor(Math.random()*600);
    let positionY = Math.floor(Math.random()*400);
    drawRectangle(positionX, positionY);
    i++;
  }
}

drawSomeRectangles(6);