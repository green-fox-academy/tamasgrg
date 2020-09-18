package com.greenfox.todo.repositories;

import com.greenfox.todo.models.TodoUser;
import org.springframework.data.repository.CrudRepository;

public interface TodoUserRepository extends CrudRepository<TodoUser, Integer> {
}
