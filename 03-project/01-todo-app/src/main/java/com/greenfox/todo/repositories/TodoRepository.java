package com.greenfox.todo.repositories;

import com.greenfox.todo.models.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TodoRepository extends CrudRepository<Todo, Integer> {
}
