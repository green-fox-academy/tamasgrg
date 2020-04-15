'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// 21 triangles
const sizeCanvas: number = 400;
const numberOfTriangles: number = 21;

const a: number = sizeCanvas / numberOfTriangles;
const m: number = Math.sqrt(3) * a / 2;

function drawTriangle(startX: number, startY: number, a: number): void {
  // const m: number = Math.sqrt(3) * a / 2;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + a, startY);
  ctx.lineTo(startX + a/2, startY - m);
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

for (let rows = 0; rows < numberOfTriangles; rows++) {
  for (let triangles = 0; triangles < numberOfTriangles - rows; triangles++) {
    drawTriangle(triangles * a + a / 2 * rows, sizeCanvas - rows * m, a);  
  }
}