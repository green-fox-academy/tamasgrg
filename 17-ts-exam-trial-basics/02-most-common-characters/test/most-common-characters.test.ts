'use strict';
import * as test from 'tape';
import { countLetters } from '../most-common-characters';

test('test - function countLetters()', t => {
  const text1: string = '';
  const text2: string = 'abba';
  const text3: string = 'abba, edda!!!';
  const text4: string = '666';
  const text5: string = 'ABBA';
  
  const expected1: object = {};
  const expected2: object = { a: 2, b: 2 };
  const expected3: object = { a: 3, b: 2, d: 2, e: 1 };
  const expected4: object = {};
  const expected5: object = { a: 2, b: 2 };

  const result1: object = countLetters(text1);
  const result2: object = countLetters(text2);
  const result3: object = countLetters(text3);
  const result4: object = countLetters(text4);
  const result5: object = countLetters(text5);
  
  t.deepEqual(result1, expected1);
  t.deepEqual(result2, expected2);
  t.deepEqual(result3, expected3);
  t.deepEqual(result4, expected4);
  t.deepEqual(result5, expected5);
  
  t.end();
});