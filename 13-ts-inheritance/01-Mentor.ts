'use strict';
import { Person } from "./01-Person";

// Mentor
// Create a Mentor class that has the same fields and methods as the Person class,
//  and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)
// methods:
// getGoal(): prints out "Educate brilliant junior software developers."
// introduce(): "Hi, I'm name, a age year old gender level mentor."
// The Mentor class has the following constructors:

// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

export class Mentor extends Person {
  private _level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female',
    level: string = 'intermediate') {
      super(name, age, gender);
      this._level = level;
  }
  
  introduce(): void {
    console.log(`Hi, I'm ${this.getName()}, a ${this.getAge()} year old ${this.getGender()} ` +
    `${this._level} mentor.`);
  }

  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

}