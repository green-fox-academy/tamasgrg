package com.greenfox.todo.services;

import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.TodoUser;

public interface TodoUserService {

    public Iterable<TodoUser> listAllUsers();
    public TodoUser findUserById(int id) throws NoSuchUserException;
    public TodoUser saveTodoUser(TodoUser user);

}
