'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

// 14 squares to the center + 5
// 200/14 = size

let i: number = 200 / 14;
while (i < 19 * 200 / 14) {
  ctx.fillStyle = '#b04ef0';
  ctx.fillRect(i, i, 200 / 14, 200 / 14);
  i += 200 / 14;
}