package com.greenfox.todo.services;

import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.TodoUser;
import java.util.Optional;

public interface TodoUserService {

    public Iterable<TodoUser> listAllUsers();
    public Optional<TodoUser> findUserById(int id) throws NoSuchUserException;
    public TodoUser saveTodoUser(TodoUser user);

}
