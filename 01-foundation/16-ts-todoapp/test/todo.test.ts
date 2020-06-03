'use strict';
import * as test from 'tape';
import { printTodos, addTodo, removeTodo, checkTodo } from '../src/todo';

test('test function printTodos()', t => {
  const todoList1: string[] = [''];
  const todoList2: string[] = ['todo1', 'todo2'];
  const todoList3: string[] = ['todo1', 'todo2', ''];
  const todoList4: string[] = ['[x] todo1', 'todo2'];
  const expected1: string = 'No todos for today! :)';
  const expected2: string = '\n1 - [ ] todo1\n2 - [ ] todo2\n';
  const expected3: string = '\n1 - [ ] todo1\n2 - [ ] todo2\n';
  const expected4: string = '\n1 - [x] todo1\n2 - [ ] todo2\n';
  
  const result1: string = printTodos(todoList1);
  const result2: string = printTodos(todoList2);
  const result3: string = printTodos(todoList3);
  const result4: string = printTodos(todoList4);

  t.equal(result1, expected1);
  t.equal(result2, expected2);
  t.equal(result3, expected3);
  t.equal(result4, expected4);
  t.end();
});

test('test function addTodo(arg)', t => {
  const arg1: string = undefined;
  const arg2: string = 'task';
  const expected1: string = 'Unable to add: no task provided';
  const expected2: string = 'Task: task has been added to list';
  
  const result1: string = addTodo(arg1);
  const result2: string = addTodo(arg2);

  t.equal(result1, expected1);
  t.equal(result2, expected2);
  t.end();
});

test('test function removeTodo(arg, todoList)', t => {
  const todoList: string[] = ['task1', 'task2', 'task3']
  const arg1: string = undefined;
  const arg2: string = 'string';
  const arg3: string = '0';
  const arg4: string = '4';
  const arg5: string = '1';
  
  const expected1: string = 'Unable to remove: no index provided';
  const expected2: string = 'Unable to remove: index is not a number';
  const expected3: string = 'Unable to remove: index is out of bound';
  const expected4: string = 'Unable to remove: index is out of bound';
  const expected5: string = 'Task: task1 has been deleted from list';
  
  const result1: string = removeTodo(arg1, todoList);
  const result2: string = removeTodo(arg2, todoList);
  const result3: string = removeTodo(arg3, todoList);
  const result4: string = removeTodo(arg4, todoList);
  const result5: string = removeTodo(arg5, todoList);

  t.equal(result1, expected1);
  t.equal(result2, expected2);
  t.equal(result3, expected3);
  t.equal(result4, expected4);
  t.equal(result5, expected5);
  t.end();
});

test('test function checkTodo(arg, todoList)', t => {
  const todoList: string[] = ['task1', '[x] - task2', 'task3']
  const arg1: string = undefined;
  const arg2: string = 'string';
  const arg3: string = '0';
  const arg4: string = '4';
  const arg5: string = '1';
  const arg6: string = '2';
  
  const expected1: string = 'Unable to check: no index provided';
  const expected2: string = 'Unable to check: index is not a number';
  const expected3: string = 'Unable to check: index is out of bound';
  const expected4: string = 'Unable to check: index is out of bound';
  const expected5: string = 'Task: task1 has been completed';
  const expected6: string = 'Task is already completed';
  
  const result1: string = checkTodo(arg1, todoList);
  const result2: string = checkTodo(arg2, todoList);
  const result3: string = checkTodo(arg3, todoList);
  const result4: string = checkTodo(arg4, todoList);
  const result5: string = checkTodo(arg5, todoList);
  const result6: string = checkTodo(arg6, todoList);

  t.equal(result1, expected1);
  t.equal(result2, expected2);
  t.equal(result3, expected3);
  t.equal(result4, expected4);
  t.equal(result5, expected5);
  t.equal(result6, expected6);
  t.end();
});

export{};