package com.greenfox.todo.services;

import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.TodoUser;
import com.greenfox.todo.repositories.TodoUserRepository;
import org.springframework.stereotype.Service;

@Service
public class TodoUserServiceImpl implements TodoUserService {

    private TodoUserRepository todoUserRepository;

    public TodoUserServiceImpl(TodoUserRepository todoUserRepository) {
        this.todoUserRepository = todoUserRepository;
    }

    @Override
    public Iterable<TodoUser> listAllUsers() {
        return null;
    }

    @Override
    public TodoUser findUserById(int id) throws NoSuchUserException {
        return null;
    }

    @Override
    public TodoUser saveTodoUser(TodoUser user) {
        return todoUserRepository.save(user);
    }
}
