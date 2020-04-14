'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sizeCanvas: number = 400;
const marginCanvas: number = 5;
const lineNumber: number = 15;
const lineDistance: number = (sizeCanvas - 2 * marginCanvas) / lineNumber;

ctx.strokeStyle = '#00cd00';
ctx.beginPath();
for (let i = 1; i < lineNumber; i++) {  
  ctx.moveTo(i * lineDistance, sizeCanvas - marginCanvas);
  ctx.lineTo(marginCanvas, i * lineDistance);
}
ctx.stroke();

ctx.strokeStyle = '#a900f2';
ctx.beginPath();
for (let j = 1; j < lineNumber; j ++) {  
  ctx.moveTo(j * lineDistance, marginCanvas);
  ctx.lineTo(sizeCanvas - marginCanvas, j * lineDistance);
}
ctx.stroke();