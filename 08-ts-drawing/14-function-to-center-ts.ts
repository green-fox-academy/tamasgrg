'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
function drawLineToCenter(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}

for (let x = 0; x <= 600; x++) {
  for (let y = 0; y <= 400; y++) {
    if (
      ( (x ==   0) && (y % 20 == 0) ) ||
      ( (y ==   0) && (x % 20 == 0) ) ||
      ( (x == 600) && (y % 20 == 0) ) ||
      ( (y == 400) && (x % 20 == 0) )
    ) {
      drawLineToCenter(x, y);
    }
  }
}