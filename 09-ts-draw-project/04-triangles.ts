'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// 21 triangles
const sizeCanvas: number = 400;


drawTriangleProject(21);


function calculateHeight(a: number): number {
  return Math.sqrt(3) * a / 2;
}

function drawTriangle(startX: number, startY: number, a: number): void {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + a, startY);
  ctx.lineTo(startX + a/2, startY - calculateHeight(a));
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

function drawTriangleProject(numberOfTriangles: number): void {
  const a: number = sizeCanvas / numberOfTriangles;
  const m: number = calculateHeight(a);
  for (let rows = 0; rows < numberOfTriangles; rows++) {
    for (let triangles = 0; triangles < numberOfTriangles - rows; triangles++) {
      drawTriangle(triangles * a + a / 2 * rows, sizeCanvas - rows * m, a);  
    }
  }
}