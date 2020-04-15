'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sizeCanvas: number = 400;
// 4-5-6-7-6-5-4 rows of hexagons (7)
// height (m) = canvas/10
const m: number = 100;
const a: number = m / Math.sqrt(3);

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

drawHexagon(100, 100, a);
// for (let rows = 0; rows < numberOfTriangles; rows++) {
//   for (let triangles = 0; triangles < numberOfTriangles - rows; triangles++) {
//     drawTriangle(triangles * a + a / 2 * rows, sizeCanvas - rows * m, a);  
//   }
// }