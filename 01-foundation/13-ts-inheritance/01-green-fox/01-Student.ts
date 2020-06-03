'use strict';
import { Person } from "./01-Person";

// Student
// Create a Student class that has the same fields and methods as the Person class,
//  and has the following additional

// fields:
// previousOrganization: the name of the student’s previous company / school
// skippedDays: the number of days skipped from the course
// methods:
// getGoal(): prints out "Be a junior software developer."
// introduce(): "Hi, I'm name, a age year old gender from previousOrganization
//  who skipped skippedDays days from the course already."
// skipDays(numberOfDays): increases skippedDays by numberOfDays
// The Student class has the following constructors:

// Student(name, age, gender, previousOrganization): beside the given parameters,
//  it sets skippedDays to 0
// Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization
//  to The School of Life, skippedDays to 0

export class Student extends Person {
  private _previousOrganization: string;
  private _skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
      super(name, age, gender);
      this._previousOrganization = previousOrganization;
      this._skippedDays = skippedDays;
  }
  
  introduce(): void {
    console.log(`Hi, I'm ${this.getName()}, a ${this.getAge()} year old ${this.getGender()} ` +
    `from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);
  }

  getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  skipDays(numberOfDays: number): void {
    this._skippedDays += numberOfDays;
  }

}