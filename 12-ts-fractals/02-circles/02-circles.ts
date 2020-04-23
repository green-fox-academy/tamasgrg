'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sizeCanvasX: number = 600;
const sizeCanvasY: number = 600;
const centerX: number = sizeCanvasX / 2;
const centerY: number = sizeCanvasY / 2;

function drawCircle(x: number, y: number, r: number): void {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
}

function drawFractalCircles(x: number, y: number, r: number): void {
  if (r > minSize) {
    drawCircle(x, y, r);
    let a: number = r / 2 * Math.sqrt(3);
    drawFractalCircles(x, y - r / 2, r / 2);
    drawFractalCircles(x - a / 2, y + r / 4, r / 2);
    drawFractalCircles(x + a / 2, y + r / 4, r / 2);
  }
}

let minSize: number = 15;
drawFractalCircles(centerX, centerY, sizeCanvasX - centerX);