'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvasHeight: number = 600;
const canvasWidth: number = 800;
const m: number = canvasHeight; // height of hexagon
const a: number = m / Math.sqrt(3); //side of hexagon

function drawHexagon(startX: number, startY: number, a: number): void {
  const m = a * Math.sqrt(3);
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + a / 2, startY - m / 2);
  ctx.lineTo(startX + a / 2 + a, startY - m / 2);
  ctx.lineTo(startX + a * 2, startY);
  ctx.lineTo(startX + a / 2 + a, startY + m / 2);
  ctx.lineTo(startX + a / 2, startY + m / 2);
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

function hexagonFractal(x: number, y: number, a: number): void {
  drawHexagon(x, y, a);
  if (a > minSize) {
    hexagonFractal(x, y, a / 3);
    hexagonFractal(x + a / 3, y - Math.sqrt(3) * a / 3, a / 3);
    hexagonFractal(x + a / 3, y + Math.sqrt(3) * a / 3, a / 3);
    hexagonFractal(x + a, y - Math.sqrt(3) * a / 3, a / 3);
    hexagonFractal(x + a, y + Math.sqrt(3) * a / 3, a / 3);
    hexagonFractal(x + 4 * a / 3, y, a / 3);
  }
}

const minSize: number = 10;
hexagonFractal((canvasWidth - 2 * a) / 2, canvasHeight / 2, a);