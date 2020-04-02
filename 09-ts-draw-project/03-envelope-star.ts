'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i = 0; i < 200; i = i + 20) {  
  ctx.beginPath();

  ctx.moveTo(200, i);
  ctx.lineTo(200 - i, 200);
  
  ctx.moveTo(200, i);
  ctx.lineTo(i + 200, 200);

  ctx.moveTo(200, i + 200);
  ctx.lineTo(i, 200);

  ctx.moveTo(200, i + 200);
  ctx.lineTo(400 - i, 200);

  ctx.stroke();
  ctx.strokeStyle = '#00cd00';
}