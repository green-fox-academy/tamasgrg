'use strict';
// Create a Station and a Car classes
// Station
//  gasAmount
//  refill(car) -> decreases the gasAmount by the capacity of the car and
//     increases the cars gasAmount
// Car
//  gasAmount
//  capacity
//  create constructor for Car where:
//   initialize gasAmount -> 0
//   initialize capacity -> 100

export class Station {
  gasAmount: number = 1000;

  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

export class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

const trabant: Car = new Car;
const shell: Station = new Station;

console.log(trabant);
shell.refill(trabant)
console.log(trabant);
console.log(shell.gasAmount);