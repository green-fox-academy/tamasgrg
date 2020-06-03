'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

//solution #1 loop inside fuction
function drawLineToCenter(x: number, y: number): void {
  ctx.beginPath();
  let i: number = 0;
  while (i < 3) {
    let x = i * 100;
    let y = i * 100;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
    i++;
  }
}
drawLineToCenter(0, 0)

//solution #2 - loop outside fuction

function drawLineToCenter2(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y);
  ctx.stroke();
}  

let i: number = 0;
  while (i < 3) {
    drawLineToCenter2(i * 100, i * 100);
    i++;
}