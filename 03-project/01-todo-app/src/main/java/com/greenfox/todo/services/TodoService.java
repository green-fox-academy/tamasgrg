package com.greenfox.todo.services;

import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.Todo;

public interface TodoService {

    public Todo saveTodo(Todo todo);
    public Todo findTodoById(int id) throws NoSuchUserException;
    public Iterable<Todo> getAllTodos();
    public Todo changeTodo(int id, Todo todo) throws NoSuchUserException;
    public Todo deleteTodo(int id) throws NoSuchUserException;
}
