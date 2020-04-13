'use strict';
import { Student } from "./01-Student";
import { Mentor } from "./01-Mentor";

// Create a Cohort class that has the following

// fields:
// name: the name of the cohort
// students: a list of Students
// mentors: a list of Mentors
// methods:
// addStudent(Student): adds the given Student to students list
// addMentor(Mentor): adds the given Mentor to mentors list
// info(): prints out 'The name cohort has students.size students and mentors.size mentors.'
// The Cohort class has the following constructors:

// Cohort(name): beside the given parameter, it sets students and mentors as empty lists

export class Cohort {
  private _name: string;
  private _students: Student[];
  private _mentors: Mentor[];

  constructor(name: string) {
    this._name = name;
    this._students = [];
    this._mentors = [];
  }
  
  addStudent(student: Student): void {
    this._students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this._mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this._name}cohort has ${this._students.length} students and ` +
      `${this._mentors.length} mentors.`);
  }
}