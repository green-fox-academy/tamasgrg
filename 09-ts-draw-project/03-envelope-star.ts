'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sizeCanvas: number = 400;
const lineNumber: number = 16;
const lineDistance: number = sizeCanvas / lineNumber / 2;

ctx.strokeStyle = '#00cd00';
ctx.beginPath();
for (let i = 1; i < lineNumber; i++) {  
  ctx.moveTo(i * lineDistance, sizeCanvas / 2);
  ctx.lineTo(sizeCanvas / 2, i * lineDistance + 200);
  
  ctx.moveTo(200 - i * lineDistance, sizeCanvas / 2);
  ctx.lineTo(sizeCanvas / 2, i * lineDistance);
  
  ctx.moveTo(400 - i * lineDistance, sizeCanvas / 2);
  ctx.lineTo(sizeCanvas / 2, 200-i * lineDistance);

  ctx.moveTo(400 - i * lineDistance, sizeCanvas / 2);
  ctx.lineTo(sizeCanvas / 2, i * lineDistance+200);
}
ctx.stroke();