'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
}

export function median(pool: number[]): number {
  if (pool.length == 0) return 0;
  const half: number = Math.floor(pool.length / 2);
  if (pool.length % 2) return pool.sort()[half];
  return (pool.sort()[half - 1] + pool.sort()[half]) / 2;
}

export function isVowel(character: string): boolean {
  if (character.length !== 1) throw 'error, its not a character';
  return ['a', 'u', 'o', 'e', 'i', 'á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű']
    .some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}

// Check out the folder. There's a work file and a test file.

//  -  Run the tests, all 10 should be green (passing).
//  -  The implementations though are not quite good.
//  -  Create tests that'll fail, and will show how the implementations are wrong
//      (You can assume that the implementation of join and split are good)
//  -  After creating the tests, fix the implementations
//  -  Check again, if you can create failing tests
//  -  Implement if needed