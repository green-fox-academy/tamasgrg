'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// Manually made, need to create a loop



let sizeOfCanvas: number = 400;
let numberOfSectors: number = 4;

let divider: number = Math.sqrt(numberOfSectors);

function setUpSectors(numberOfSectors: number): void {
  for (let i = sizeOfCanvas/divider; i < sizeOfCanvas; i += sizeOfCanvas/divider) {
    ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(sizeOfCanvas, i);
      ctx.moveTo(i, 0);
      ctx.lineTo(i, sizeOfCanvas);
    ctx.stroke();
  }
}

function drawLinePlayMultipleSectors(numberOfSectors: number): void {
  setUpSectors(numberOfSectors);
}

drawLinePlayMultipleSectors(numberOfSectors);

// for (let i = 0; i < sizeOfCanvas/divider; i = i + 20) {  
//   ctx.beginPath();
//   for (let j = 0; j < numberOfSectors; j++) {
//     ctx.moveTo(i+j*200, sizeOfCanvas/divider+j*200);
//     ctx.lineTo(0+j*200, i+j*200);
//   }

for (let i = 0; i < 200; i = i + 20) {  
  ctx.beginPath();

  ctx.moveTo(i, 200);
  ctx.lineTo(0, i);
  
  ctx.moveTo(200, i);
  ctx.lineTo(i + 200, 200);

  ctx.moveTo(i + 200, 400);
  ctx.lineTo(200, i + 200);

  ctx.moveTo(0, i + 200);
  ctx.lineTo(i, 400);

  ctx.stroke();
  ctx.strokeStyle = '#00cd00';
}

for (let j = 0; j < 200; j = j + 20) {  
  ctx.beginPath();

  ctx.moveTo(200, j);
  ctx.lineTo(j, 0);

  ctx.moveTo(j, 200);
  ctx.lineTo(200, j + 200);

  ctx.moveTo(400, j + 200);
  ctx.lineTo(j + 200, 200);
 
  ctx.moveTo(j + 200, 0);
  ctx.lineTo(400, j);
  
  ctx.stroke();
  ctx.strokeStyle = '#a900f2';
}