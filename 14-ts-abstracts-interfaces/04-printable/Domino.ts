'use strict';
import { Printable } from "./Printable";
// Create a new class called Domino that has two integer fields that represents the two sides of a domino
// The domino should have the following string representation: Domino A side: 3, B side: 2

export class Domino implements Printable {
  sideA: number;
  sideB: number;

  constructor(a: number, b: number) {
    this.sideA = a;
    this.sideB = b;
  }

  printAllFields() {
    console.log(`Domino A side: ${this.sideA}, B side: ${this.sideB}`)
  }
  
}

let dominoes: Domino[] = [];
dominoes.push(new Domino(3, 2));
for (let domino of dominoes) {
  domino.printAllFields();
}