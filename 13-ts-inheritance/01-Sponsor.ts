'use strict';
import { Person } from "./01-Person";

// Sponsor
// Create a Sponsor class that has the same fields and methods as the Person class,
//  and has the following additional

// fields:
// company: name of the company
// hiredStudents: number of students hired
// method:
// introduce(): "Hi, I'm name, a age year old gender who represents company and hired
//  hiredStudents students so far."
// hire(): increase hiredStudents by 1
// getGoal(): prints out "Hire brilliant junior software developers."
// The Sponsor class has the following constructors:

// Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
// Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and
//  hiredStudents to 0

export class Sponsor extends Person {
  private _company: string;
  private _hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female',
    company: string = 'Google', hiredStudents: number = 0) {
      super(name, age, gender);
      this._company = company;
      this._hiredStudents = hiredStudents;
  }
  
  introduce(): void {
    console.log(`Hi, I'm ${this.getName()}, a ${this.getAge()} year old ${this.getGender()} ` +
    `who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
  }

  getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  hire(): void {
    this._hiredStudents++;
  }

}