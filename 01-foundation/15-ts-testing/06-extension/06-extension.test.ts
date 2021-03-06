'use strict';

import * as test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './06-extension';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('add: 0 and 0 is 0', function (t: any): any {
  t.equal(add(0, 0), 0);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('max of three: second', function (t: any): any {
  t.equal(maxOfThree(3, 5, 4), 5);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('median: null', function (t: any): any {
  t.equal(median([0]), 0);
  t.end();
});

test('median: lot - even', function (t: any): any {
  t.equal(median([1, 123, 12321, 22, 1, 1, 1, 11]), 6);
  t.end();
});

test('median: lot - odd', function (t: any): any {
  t.equal(median([1, 123, 12321, 22, 1, 1, 1]), 1);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: abba', function (t: any): any {
  t.throws(() => {isVowel('abba');
  });
  
  t.end();
});

test('is vowel: k', function(t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});