'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i = 0; i < 400; i = i + 20) {  
  ctx.beginPath();

  ctx.moveTo(i, 400);
  ctx.lineTo(0, i);

  ctx.stroke();
  ctx.strokeStyle = '#00cd00';
}

for (let j = 0; j < 400; j = j + 20) {  
  ctx.beginPath();

  ctx.moveTo(400, j);
  ctx.lineTo(j, 0);

  ctx.stroke();
  ctx.strokeStyle = '#a900f2';
}