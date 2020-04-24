'use strict';
import * as test from 'tape';
import { Anagram } from './03-Anagram';

test('test anagram', t => {
  const text1: string = 'kolostor';
  const text2: string = 'rostokol';
  
  const text3: string = '';
  const text4: string = '';
  const text5: string = 'kolompol';
  const text6: string = 'ros tokol';
  const text7: string = 'Rostokol';

  const expected1: boolean = true;
  const expected2: boolean = false;
  const expected3: boolean = false;
  const expected4: boolean = false;
  const expected5: boolean = true;

  const result1: boolean = Anagram.anagram(text1, text2);
  const result2: boolean = Anagram.anagram(text3, text4);
  const result3: boolean = Anagram.anagram(text1, text5);
  const result4: boolean = Anagram.anagram(text1, text6);
  const result5: boolean = Anagram.anagram(text1, text7);

  t.equal(result1, expected1, 'anagrams');
  t.equal(result2, expected2, 'empty strings');
  t.equal(result3, expected3, 'not anagrams');
  t.equal(result4, expected4, 'space char inside string');
  t.equal(result5, expected5, 'one string contains upper-case');
  
  t.end();
});

// Anagram
// Write a function, that takes two strings and returns a boolean value based on if
//   the two strings are Anagramms or not.
// Create a test for that.