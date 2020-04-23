'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvasWidth: number = 600;
const canvasHeight: number = 600;

function drawSquare(startX: number, startY: number, size: number) {
  ctx.strokeRect(startX, startY, size ,size);
}

// function drawSquares(x, y, size): void {
//   ctx.strokeRect(x/3, y/3, size/3, size/3);
//   x = x- x*1/3;
//   y = y/3;
//   size = size /3;
//   return drawSquares(x, y, size);
//   // ctx.strokeRect(startX/3, startY/3, sizeX/3, sizeY/3);
//   // ctx.strokeRect(startX/3, startY/3, sizeX/3, sizeY/3);
//   // ctx.strokeRect(startX/3, startY/3, sizeX/3, sizeY/3);
