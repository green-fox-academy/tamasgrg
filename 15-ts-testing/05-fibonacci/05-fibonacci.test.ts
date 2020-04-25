'use strict';
// Fibonacci
// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.
import * as test from 'tape';
import { fibonacci } from './05-fibonacci';

test('test fibonacci n = 0', t => {
  const n: number = 0;
  const expected: number = 0;
  
  const result: number = fibonacci(n);

  t.equal(result, expected, 'n = 0');

  t.end();
});

test('test fibonacci n = 1', t => {
  const n: number = 1;
  const expected: number = 0;
  
  const result: number = fibonacci(n);

  t.equal(result, expected, 'n = 1');

  t.end();
});

test('test fibonacci n = 2', t => {
  const n: number = 2;
  const expected: number = 1;
  
  const result: number = fibonacci(n);

  t.equal(result, expected, 'n = 2');

  t.end();
});

test('test fibonacci n = 3', t => {
  const n: number = 3;
  const expected: number = 1;
  
  const result: number = fibonacci(n);

  t.equal(result, expected, 'n = 3');

  t.end();
});

test('test fibonacci n = 4', t => {
  const n: number = 4;
  const expected: number = 2;
  
  const result: number = fibonacci(n);

  t.equal(result, expected, 'n = 4');

  t.end();
});

test('test fibonacci n = 5', t => {
  const n: number = 5;
  const expected: number = 3;
  
  const result: number = fibonacci(n);

  t.equal(result, expected, 'n = 5');

  t.end();
});