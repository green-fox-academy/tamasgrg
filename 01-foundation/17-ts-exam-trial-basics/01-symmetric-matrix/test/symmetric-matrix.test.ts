'use strict';
import * as test from 'tape';
import { isSymmetric } from '../symmetric-matrix';

test('test isSymmetric()', t => {
  
  const matrix1: number[][] = [
    [1, 0, 1],
    [0, 2, 2],
    [1, 2, 5]
  ]
  const matrix2: number[][] = [
    [7, 7, 7],
    [6, 5, 7],
    [1, 2, 1]
  ]
  const matrix3: number[][] = [[]]
  const expected1: boolean = true;
  const expected2: boolean = false;
  const expected3: boolean = true;
  
  const result1: boolean = isSymmetric(matrix1);
  const result2: boolean = isSymmetric(matrix2);
  const result3: boolean = isSymmetric(matrix3);
  
  t.deepEqual(result1, expected1);
  t.deepEqual(result2, expected2);
  t.deepEqual(result3, expected3);
  
  t.end();
});