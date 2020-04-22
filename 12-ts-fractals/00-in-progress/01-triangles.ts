'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sizeCanvasX: number = 600;
const sizeCanvasY: number = calculateHeight(sizeCanvasX);

function calculateHeight(a: number): number {
  return Math.sqrt(3) * a / 2;
}

function drawTriangle(startX: number, startY: number, a: number): void {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + a, startY);
  ctx.lineTo(startX + a/2, startY + calculateHeight(a));
  ctx.lineTo(startX, startY);
  // ctx.closePath();
  ctx.stroke();
}

function fractalTriangles(x, y, a) {
  drawTriangle(x, y, a);
  if (a > 10) {
  const m: number = calculateHeight(a);
  fractalTriangles(x, y, a/2);
  fractalTriangles(x+a/2, y, a/2);
  fractalTriangles(x+a/4, y+m/2, a/2);
  }
}
  // if (a > 5) {
    // drawFTriangles(x-a/4, y-calculateHeight(a)/2, a / 2);
    // drawFTriangles(x + a - a/4, y- calculateHeight(a)/2, a / 2);
    // drawFTriangles(x + a / 4, y + calculateHeight(a)/2, a / 2);
fractalTriangles(0, 0, 600);

// drawFractalTriangles(x, y, size / 2, i - 1);
// drawFractalTriangles(x + size, y, size / 2, i - 1);
// drawFractalTriangles(x + size / 2, y + height(size), size / 2, i - 1);
// drawTriangle(0, 0, sizeCanvasX / 2 ** i);

// drawTriangle(0, 0, 600)

// drawTriangle(0, 0, 300)
// drawTriangle(300, 0, 300)
// drawTriangle(150, calculateHeight(300), 300)



// function drawTriangleProject(numberOfTriangles: number): void {
//   const a: number = sizeCanvas / numberOfTriangles;
//   const m: number = calculateHeight(a);
//   for (let rows = 0; rows < numberOfTriangles; rows++) {
//     for (let triangles = 0; triangles < numberOfTriangles - rows; triangles++) {
//       drawTriangle(triangles * a + a / 2 * rows, sizeCanvas - rows * m, a);  
//     }
//   }
// }