package com.greenfox.todo.services;

import com.greenfox.todo.exceptions.NoSuchTodoException;
import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.Todo;

public interface TodoService {

    public Todo saveTodo(Todo todo, int userId);
    public Todo findTodoById(int id, int userId) throws NoSuchUserException, NoSuchTodoException;
    public Iterable<Todo> getAllTodos(int userId) throws NoSuchUserException;
    public Todo changeTodo(int id, Todo todo, int userId) throws NoSuchUserException, NoSuchTodoException;
    public Todo deleteTodo(int id, int userId) throws NoSuchUserException, NoSuchTodoException;
}
