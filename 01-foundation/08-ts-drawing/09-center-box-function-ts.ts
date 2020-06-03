'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that draws one square and takes 1 parameters:
// The square size and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(squareSize: number): void {
  ctx.fillRect(300 - squareSize / 2, 200 - squareSize / 2, squareSize, squareSize);
}

function drawSomeSquares(numberOfSquares: number): void {
  let i: number = numberOfSquares;
  while (i > 0) {
    let squareSize = i * 100 + Math.floor(Math.random() * 45);
    let randomColor = Math.floor(Math.random() * (16777215)).toString(16);
    ctx.fillStyle = `#${randomColor}`;
    drawSquare(squareSize);
    i--;
  }
}

drawSomeSquares(3);