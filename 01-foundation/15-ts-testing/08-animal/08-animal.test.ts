'eat strict';
import { Animal } from './08-Animal'
import * as test from 'tape';

// Animal
// Search back in your own project directory the Animal class you made on the OO workshop
// Create tests for multiple test cases.

test ('Animal.eat() hunger: 0', t => {
  const testAnimal: Animal = new Animal(0, 0);

  t.throws(() => {testAnimal.eat();
  });

  t.end();
});

test ('Animal.drink() thirst: 0', t => {
  const testAnimal: Animal = new Animal(0, 0);

  t.throws(() => {testAnimal.drink();
  });

  t.end();
});

test ('Animal.eat() hunger: 100', t => {

  const testAnimal: Animal = new Animal(100);
  const expected: number = 99;
    
  const result: number = testAnimal.eat();

  t.equal(result, expected, 'hunger: 100');
  
  t.end();
});

test ('Animal.eat() hunger: not integer', t => {

  const testAnimal: Animal = new Animal(1.5);
  const expected: number = 0.5;
    
  const result: number = testAnimal.eat();

  t.equal(result, expected, 'hunger: 1.5');
  
  t.end();
});