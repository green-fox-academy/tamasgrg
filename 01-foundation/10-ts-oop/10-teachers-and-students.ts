'use strict';
// Create Student and Teacher classes
// Student
//  learn() -> prints the student is learning something new
//  question(teacher) -> calls the teachers answer method
// Teacher
//  teach(student) -> calls the students learn method
//  answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

export class Student {
  
  learn() {
    console.log('the student is learning something new');
  }

  question(teacher: Teacher) {
    console.log('the student is asking a question');
    teacher.answer();
  }
}

export class Teacher {

  teach(student: Student) {
    console.log('the teacher is teaching something');
    student.learn();
  }

  answer () {
    console.log('the teacher is answering a question');
  }
}

const teacher1: Teacher = new Teacher;
const student1: Student = new Student;

student1.question(teacher1);
teacher1.teach(student1);