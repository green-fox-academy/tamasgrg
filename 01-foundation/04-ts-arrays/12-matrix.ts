'use strict';
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//    0 0 0 1 
//    0 0 1 0 
//    0 1 0 0
//    1 0 0 0
// -  Print this two dimensional list to the console
// * size should depend on a variable
// ** Relax, a matrix is just like an array
let matrixSize: number = 4;
let matrix: number [][] = [];
for (let i: number = 0; i < matrixSize; i++) {
  matrix.push([]);
  for (let j: number = 0; j < matrixSize; j++) {
    if (i + j === matrixSize - 1) {
      matrix [i][j] = 1;
    } else {
      matrix [i][j] = 0;
    }
  }
}

// function from minesweeper @Kond
function drawmatrix(map: number[][]): void {
  for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
    let row: string = '';
    for (let columnIndex = 0; columnIndex < map[rowIndex].length; columnIndex++) {
      row += ` ${map[rowIndex][columnIndex]}`;
    }
    console.log(row);
  }
}
drawmatrix(matrix);
export{};