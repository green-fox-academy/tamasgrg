'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvasWidth: number = 600;
const canvasHeight: number = 600;

function drawSquare(startX: number, startY: number, size: number) {
  ctx.fillRect(startX, startY, size ,size);
  ctx.fillStyle = 'black';
}

function sierpinskiCarpet(x: number, y: number, a: number) {
  drawSquare(x, y, a);
  if (a > minSize) {
    let aa: number = a / 3;
    // for (let dx = 0; dx < 10; dx++) {
    //   for (let dy = 0; dy < 10; dy++) {
    //     sierpinskiCarpet(dx * a + aa, dy * a + aa, aa);
    //   }
    // }
    sierpinskiCarpet(x - 2 * aa, y - 2 * aa, aa);
    sierpinskiCarpet(x - 2 * aa, y + aa, aa);
    sierpinskiCarpet(x - 2 * aa, y + 4 * aa, aa);

    sierpinskiCarpet(x + aa, y - 2 * aa, aa);
    // sierpinskiCarpet(x + aa, y + aa, aa);
    sierpinskiCarpet(x + aa, y + 4 * aa, aa);

    sierpinskiCarpet(x + 4 * aa, y - 2 * aa, aa);
    sierpinskiCarpet(x + 4 * aa, y + aa, aa);
    sierpinskiCarpet(x + 4 * aa, y + 4 * aa, aa);
  }
}
const minSize: number = 1;
sierpinskiCarpet(canvasWidth / 3, canvasHeight / 3, canvasHeight / 3);