'use strict';
// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

export class Counter {
  integer: number;

  constructor(integer: number = 0) {
    this.integer = integer;
  }

  // add(value?: number): number {
  //   return value == undefined? this.integer++: this.integer += value;
  // }
  //shortcut:
  add(value: number = 1): number {
    return this.integer += value;
  }

  get(): string {    
    return this.integer.toString();
  }

  reset(): number {
    return this.integer = 0;
  }
}


let newStuff = new Counter(100);
newStuff.reset();
newStuff.add();
newStuff.add(10);
newStuff.get();
console.log(newStuff);
console.log(newStuff.get);