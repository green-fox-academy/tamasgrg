'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvasWidth: number = 600;
const canvasHeight: number = 600;

function drawSquare(startX: number, startY: number, size: number, lineWidth: number) {
  ctx.lineWidth = lineWidth;
  ctx.strokeRect(startX, startY, size, size);
}

function squareGrid(x: number, y: number, a: number, lw: number) {
  drawSquare(x / 4, y / 4, a / 2, lw / 4);
  if (a > minSize) {
    squareGrid(x - a / 2, y - a / 2, a / 2, lw / 2);
    squareGrid(x + 3 * a / 2, y - a / 2, a / 2, lw / 2);
    squareGrid(x - a / 2, y + 3 * a / 2, a / 2, lw / 2);
    squareGrid(x + 3 * a / 2, y + 3 * a / 2, a / 2, lw / 2);
  }
}

const minSize: number = 100;
squareGrid(canvasWidth, canvasHeight, canvasHeight, 100);