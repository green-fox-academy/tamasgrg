'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

// 6 squares
// size: 0, +10, +20, +30, +40, +50, +60

let i: number = 0;
let j: number = 10;
while (i < 7) {
  ctx.fillStyle = '#b04ef0';
  ctx.fillRect(j, j, i * 10, i * 10);
  j += i * 10;
  i++;
}