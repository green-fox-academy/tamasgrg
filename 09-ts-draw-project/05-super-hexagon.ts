'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sizeCanvas: number = 600;
// 4-5-6-7-6-5-4 rows of hexagons (7)
// height (m) = canvas/10
const m: number = 50;
const a: number = m / Math.sqrt(3);
drawHexagonProject(a);


function calculateStartX(): number {
  return sizeCanvas / 2 - 5.5 * a;
}

function calculateStartY(): number {
  return sizeCanvas / 2 - 1.5 * m;
}

function drawHexagon(startX: number, startY: number, a: number): void {
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

function drawHexagonProject(a: number): void {
  for (let column = 0; column < 7; column++) {
    let adjustY: number;
    let rowNumber: number;
    if (column <= 3) {
      adjustY = - 1 * column * m / 2;
      rowNumber = column + 4;
    } else {
      adjustY = 1 * column * m / 2 - 3 * m;
      rowNumber = 10 - column;
    }
    for (let item = 0; item < rowNumber; item++) {
      drawHexagon(calculateStartX() + column * (a + a / 2), calculateStartY() + item * m + adjustY, a);
    }
  }
}