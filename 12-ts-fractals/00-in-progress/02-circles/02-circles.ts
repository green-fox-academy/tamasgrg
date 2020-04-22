'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sizeCanvasX: number = 600;
const sizeCanvasY: number = 600;

function drawCircle(x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
}

drawCircle(300, 300, 300)

drawCircle(300, 150, 150)