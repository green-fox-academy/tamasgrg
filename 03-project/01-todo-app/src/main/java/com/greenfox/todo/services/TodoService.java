package com.greenfox.todo.services;

import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.Todo;

public interface TodoService {

    public Todo saveTodo(Todo todo);
    public Todo findTodoById(int id) throws NoSuchUserException;
}
