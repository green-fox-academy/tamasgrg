'use strict';

const fs = require('fs');

function getTodoList(filePath: string): string[] {
  return fs.readFileSync(filePath, 'utf-8')
    .split('\n');
}

function writeFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content);
}

function appendFile(filePath: string, content: string): void {
  fs.appendFileSync(filePath, content);
}

export function printTodos(todoList: string[]): string {
  let printTodos: string = '\n';
  todoList.forEach((value: string, index: number) => {
    if (value !== '\r' && value !== '\n' && value !== '') {
      printTodos += value.includes('[x]') ?
        `${index + 1} - ${value}\n` :
        `${index + 1} - [ ] ${value}\n`;
    }
  });
  return printTodos === '\n' ? 'No todos for today! :)' : printTodos;
}

export function addTodo(arg: string): string {
  if (arg === undefined) return 'Unable to add: no task provided';
  const newTask: string = '\n' + arg;
  appendFile('../db.txt', newTask);
  return `Task: ${arg} has been added to list`;
}

export function removeTodo(arg: string, todoList: string[]): string {
  if (arg === undefined) return 'Unable to remove: no index provided';
  else if (isNaN(+arg)) return 'Unable to remove: index is not a number';
  else if (+arg > todoList.length) return 'Unable to remove: index is out of bound';
  else if (+arg <= 0) return 'Unable to remove: index is out of bound';
  const deletedTask: string = todoList[+arg - 1];
  let newTodoList: string = '';
  const newTodos: string[] = todoList.filter((value: string, index: number) => index !== (+arg - 1));
  for (let i = 0; i < newTodos.length; i++) {
    newTodoList += i < newTodos.length - 1 ? newTodos[i] + '\n' : newTodos[i];
  }
  writeFile('../db.txt', newTodoList);
  return `Task: ${deletedTask} has been deleted from list`;
}

export function checkTodo(arg: string, todoList: string[]) {
  if (arg === undefined) return 'Unable to check: no index provided';
  else if (isNaN(+arg)) return 'Unable to check: index is not a number';
  else if (+arg > todoList.length) return 'Unable to check: index is out of bound';
  else if (+arg <= 0) return 'Unable to check: index is out of bound';
  else if (todoList[+arg - 1].includes('[x]')) return 'Task is already completed';
  const checkedTask: string = todoList[+arg - 1];
  let newTodoList: string = '';
  todoList[+arg - 1] = '[x] ' + todoList[+arg - 1];
  for (let i = 0; i < todoList.length; i++) {
    newTodoList += i < todoList.length - 1 ? todoList[i] + '\n' : todoList[i];
  }
  writeFile('../db.txt', newTodoList);
  return `Task: ${checkedTask} has been completed`;
}

function todoApp(): string {
  const usageInfo: string = '\nCommand Line Todo application\n=============================\n\nCommand line arguments:\n\t-l   Lists all the tasks\n\t-a   Adds a new task\n\t-r   Removes an task\n\t-c   Completes an task\n';
  if (process.argv[2] === undefined) return usageInfo;
  
  const todoList: string[] = getTodoList('../db.txt');
  if (process.argv[2] === '-l') return printTodos(todoList);
  else if (process.argv[2] === '-a') return addTodo(process.argv[3]);
  else if (process.argv[2] === '-r') return removeTodo(process.argv[3], todoList);
  else if (process.argv[2] === '-c') return checkTodo(process.argv[3], todoList);
  return '\nUnsupported argument\n' + usageInfo;
}

console.log(todoApp());

export{};