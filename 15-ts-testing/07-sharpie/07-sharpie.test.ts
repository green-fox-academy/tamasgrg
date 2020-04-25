'use strict';
import { Sharpie } from './07-Sharpie'
import * as test from 'tape';

// Sharpie
// Search back in your own project the Sharpie class you made on the OO workshop
// Create tests that covers all types of input (like in the previous workshop exercise)

test ('Sharpie.use() inkAmount: 0', t => {

  const testSharpie: Sharpie = new Sharpie('black', 10, 0);

  t.throws(() => {testSharpie.use();
  });

  t.end();
});

test ('Sharpie.use() inkAmount: negative', t => {
  
  const testSharpie: Sharpie = new Sharpie('black', 10, -50);

  t.throws(() => {testSharpie.use();
  });

  t.end();
});

test ('Sharpie.use() inkAmount: 100', t => {

  const testSharpie: Sharpie = new Sharpie('black', 10);
  const expected: number = 99;
    
  const result: number = testSharpie.use();

  t.equal(result, expected, 'inkAmount: 100');
  
  t.end();
});

test ('Sharpie.use() inkAmount: not integer', t => {

  const testSharpie: Sharpie = new Sharpie('black', 10, 1.5);
  const expected: number = 0.5;
    
  const result: number = testSharpie.use();

  t.equal(result, expected, 'inkAmount: 1.5');
  
  t.end();
});