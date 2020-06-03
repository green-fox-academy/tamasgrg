'use strict';
import { Printable } from "./Printable";
// Create a new class called Todo that has three fields representing the task as a string,
//  the priority as string and whether it is done or not as a boolean
// The todo should have the following string representation: Task: Buy milk | Priority: high | Done: true

export class Todo implements Printable {
  task: string;
  priority: string;
  isDone: boolean;

  constructor(task: string, priority: string, isDone: boolean) {
    this.task = task;
    this.priority = priority;
    this.isDone = isDone;
  }
  
  printAllFields() {
    console.log(`Task: ${this.task} | Priority: ${this.priority} | Done: ${this.isDone}`);
  }
}

let todos: Todo[] = [];
todos.push(new Todo('Buy milk', 'high', true));
for (let todo of todos) {
  todo.printAllFields();
}