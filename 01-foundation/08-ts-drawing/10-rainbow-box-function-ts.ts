'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function drawSquare(squareSize: number, squareColor: string): void {
  ctx.fillStyle = `#${squareColor}`;
  ctx.fillRect(300 - squareSize / 2, 200 - squareSize / 2, squareSize, squareSize);
}

function drawSomeSquares(numberOfSquares: number): void {
  let i: number = numberOfSquares;
  while (i > 0) {
    let squareSize = i * 50 + Math.floor(Math.random() * 25);
    let squareColor = Math.floor(Math.random() * (16777215)).toString(16);
    drawSquare(squareSize, squareColor);
    i--;
  }
}

drawSomeSquares(8);