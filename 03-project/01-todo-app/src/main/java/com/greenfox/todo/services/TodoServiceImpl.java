package com.greenfox.todo.services;

import com.greenfox.todo.models.Todo;
import com.greenfox.todo.repositories.TodoRepository;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;

    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public Todo saveTodo(Todo todo) {
        Todo savedTodo = todoRepository.save(todo);
        return savedTodo;
    }
}
