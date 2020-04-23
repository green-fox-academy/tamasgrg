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

fractalCircles(300, 300, 300);
function fractalCircles(x: number, y: number, r: number) {
  // const a: number = r/2*Math.sqrt(3);
  // const m: number = Math.sqrt(3) * a / 2;
  // const b: number = m - r;
  // if (r>25) {
  drawCircle(x, y, r);
  // fractalCircles(x, y/2, r / 2);
  // fractalCircles(x-a/2, y+b, r / 2);
  // fractalCircles(x+a/2, y+b, r / 2);
  // }
let a = 150*Math.sqrt(3) 
drawCircle(300, 150, 150);
drawCircle(300-a/2, 300+75, 150);
drawCircle(300+a/2, 300+75, 150);
}