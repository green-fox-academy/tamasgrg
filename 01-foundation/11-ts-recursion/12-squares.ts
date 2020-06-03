'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvasWidth: number = 600;
const canvasHeight: number = 600;

function drawSquare(startX: number, startY: number, size: number) {
  ctx.strokeRect(startX, startY, size ,size);
}

function fractalSquares(x: number, y: number, a: number) {
  drawSquare(x, y, a);
  if (a > minSize) {
    fractalSquares(x + a / 3, y, a / 3);
    fractalSquares(x, y + a / 3, a / 3);
    fractalSquares(x + 2 * a / 3, y + a / 3, a / 3);
    fractalSquares(x + a / 3, y + 2 * a / 3, a / 3);
  }
}

const minSize: number = 5;
fractalSquares(0, 0, canvasHeight);