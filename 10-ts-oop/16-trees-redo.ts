'use strict';
// Create 5 trees
// Store the data of them in variables in your program
// for every tree the program should store its'
  // type
  // leaf color
  // age
  // sex
// you can use just variables, or lists and/or maps

// Lekvár plum green 33 male
// Torta lemon green 4 male
// Pálinka nut green 2 female
// Befőtt peach green 20 female 
// Szirup maple red 13 female

//Redo the 5 trees homework (with classes)

export class Tree {
  type: string;
  leafColor: string;
  age: number;
  sex: string;

  constructor(type: string, leafColor: string, age: number, sex: string) {
    this.type = type;
    this.leafColor = leafColor;
    this.age = age;
    this.sex = sex;
  }

}

new Tree('plum', 'green', 33, 'male');
new Tree('lemon', 'green', 4, 'male');
new Tree('nut', 'green', 2, 'female');
new Tree('peach', 'green', 20, 'female');
new Tree('maple', 'red', 13, 'female');