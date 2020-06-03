'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


// shades of grey: from #808080 (8421504) to 	#D3D3D3 (13882323)
// or: grey colors have equal RGB componnets!

function drawStars(numberOfStars: number): void {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 600, 400);
  let i: number = 0;
  while (i < numberOfStars) {
    let randomColor: number = Math.floor(Math.random() * 255);
    let randomPositionX: number = Math.floor(Math.random() * 600);
    let randomPositionY: number = Math.floor(Math.random() * 400);
    let randomSize: number = Math.floor(Math.random() * 4);
    ctx.fillStyle = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;
    ctx.fillRect(randomPositionX, randomPositionY, randomSize, randomSize);
    i++;
  }
}

drawStars(2500);