'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvasWidth: number = 600;
const canvasHeight: number = 600;
// startPosition: (200, 344) of (400, 400) => (300, 516) of (600, 600)
// first lineTo: (200, 307) 37px on 400 => 55
let a: number = 55;
let m: number = calculateHeight(a);

function calculateHeight(a: number): number {
  return Math.sqrt(3) * a / 2;
}

// function drawTree(xFrom: number, yFrom: number, xTo: number, yTo: number, a: number): void {
//   ctx.strokeStyle = 'rgb(255, 215, 47)';
//   if (a > 10) {
//   ctx.beginPath();
//   ctx.moveTo(xFrom, yFrom);
//   ctx.lineTo(xTo, yTo);
//   ctx.stroke();

//   drawTree(xFrom, yFrom, xFroa/2);

//   drawTree(x - a / 2, y - a - m, a/2);
//   drawTree(x + a / 2, y - a - m, a/2);

  // // ctx.beginPath();
  // ctx.moveTo(canvasWidth/2, 516 - a);
  // ctx.lineTo(canvasWidth/2, 516 - a - a);

  // ctx.stroke();

  // // ctx.beginPath();
  // ctx.moveTo(canvasWidth/2, 516 - a);
  // ctx.lineTo(canvasWidth/2 - a/2, 516 - a - m);

  // ctx.stroke();

  // // ctx.beginPath();
  // ctx.moveTo(canvasWidth/2, 516 - a);
  // ctx.lineTo(canvasWidth/2 + a/2, 516 - a - m);

  // ctx.stroke();
}
}

drawTree(canvasWidth / 2, 516, canvasWidth / 2, 516 - a, a);