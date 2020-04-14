'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sizeCanvas: number = 400;
const numberOfSectors: number = 1;
const divider: number = Math.sqrt(numberOfSectors);

// function setUpSectors(numberOfSectors: number): void {
//   ctx.beginPath();
//   for (let i = sizeCanvas/divider; i < sizeCanvas; i += sizeCanvas/divider) {
//     ctx.moveTo(0, i);
//     ctx.lineTo(sizeCanvas, i);
//     ctx.moveTo(i, 0);
//     ctx.lineTo(i, sizeCanvas);
//   }
//   ctx.stroke();
// }

function drawLinePlayMultipleSectors(numberOfSectors: number): void {
  // setUpSectors(numberOfSectors);
  const marginCanvas: number = 0;
  const margin: number = 5;
  const lineNumber: number = 15;
  const lineDistance: number = (sizeCanvas - 2 * marginCanvas) / lineNumber / divider;

  for (let a: number = 0; a < divider; a++) {
    for (let b: number = 0; b < divider; b++) {
      ctx.strokeStyle = '#00cd00';
      ctx.beginPath();
      for (let i: number = 1; i < lineNumber; i++) {
        ctx.moveTo(i * lineDistance + a * (sizeCanvas - margin) / divider, (sizeCanvas - margin) / divider + (b * (sizeCanvas - margin) / divider));
        ctx.lineTo((a * sizeCanvas + margin) / divider, i * lineDistance + (b * (sizeCanvas - margin) / divider));
      }
      ctx.stroke();  
      ctx.strokeStyle = '#a900f2';
      ctx.beginPath();
      for (let j = 1; j < lineNumber; j ++) {  
        ctx.moveTo((sizeCanvas - margin) / divider + (b * (sizeCanvas - margin) / divider), j * lineDistance + a * (sizeCanvas - margin) / divider);
        ctx.lineTo(j * lineDistance + b * (sizeCanvas - margin) / divider, (a * sizeCanvas + margin) / divider);
      }
      ctx.stroke();
    }
  }
}

drawLinePlayMultipleSectors(numberOfSectors);