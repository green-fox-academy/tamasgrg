'use strict';
import * as test from 'tape';
import { CountLetters } from './04-CountLetters';
// Count Letters
// Write a function, that takes a string as an argument and returns a dictionary with all letters
//   in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

test('test count-letters', t => {
  const text1: string = 'abba';
  const text2: string = '';
  const text3: string = 'abba, edda';
  const text4: string = '666';
  const text5: string = 'Abba';
  
  const expected1: object = { a: 2, b: 2 };
  const expected2: object = {};
  const expected3: object = { a: 3, b: 2, d: 2, e: 1 };
  const expected4: object = {};
  const expected5: object = { a: 2, b: 2 };

  const result1: object = CountLetters.countLetters(text1);
  const result2: object = CountLetters.countLetters(text2);
  const result3: object = CountLetters.countLetters(text3);
  const result4: object = CountLetters.countLetters(text4);
  const result5: object = CountLetters.countLetters(text5);

  t.deepEqual(result1, expected1, 'abba');
  t.deepEqual(result2, expected2, 'empty string');
  t.deepEqual(result3, expected3, 'space & other not-letter characters in string');
  t.deepEqual(result4, expected4, 'numbers in string');
  t.deepEqual(result5, expected5, 'upper-case characters in string');
  
  t.end();
});