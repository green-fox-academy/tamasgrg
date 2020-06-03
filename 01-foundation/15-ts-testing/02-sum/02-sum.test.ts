'use strict';
import * as test from 'tape';
import { Sum } from './02-Sum';

test('test sum', t => {
  const newSum: Sum = new Sum;
  
  const newList1: number[] = [1, 2, 3, 4, 5];
  const expected1: number = 15;
  const newList2: number[] = [];
  const expected2: number = 0;
  const newList3: number[] = [1];
  const expected3: number = 1;

  const result1: number = newSum.sum(newList1);
  const result2: number = newSum.sum(newList2);
  const result3: number = newSum.sum(newList3);

  t.equal(result1, expected1, 'multiple elements');
  t.equal(result2, expected2, 'empty list');
  t.equal(result3, expected3, 'one element');
  t.end();
});

// Sum
// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed