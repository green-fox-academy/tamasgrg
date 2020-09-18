package com.greenfox.todo.services;

import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.Todo;
import com.greenfox.todo.repositories.TodoRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;

    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public Todo findTodoById(int id) throws NoSuchUserException {
        Optional<Todo> todoOptional = todoRepository.findById(id);
        if (todoOptional.isPresent()) {
            return todoOptional.get();
        } else {
            throw new NoSuchUserException();
        }
    }

    @Override
    public Todo saveTodo(Todo todo) {
        Todo savedTodo = todoRepository.save(todo);
        return savedTodo;
    }

    @Override
    public Todo changeTodo(int id, Todo todo) {
        Optional<Todo> todoOptional = todoRepository.findById(id);
        if (todoOptional.isPresent()) {
            Todo modTodo = todoOptional.get();
            modTodo.setTask(todo.getTask());
            modTodo.setCompleted(todo.getCompleted());
            modTodo.setDeadline(todo.getDeadline());
            modTodo.setPriority(todo.getPriority());
            todoRepository.save(modTodo);
            return modTodo;
        } else {
            throw new NoSuchUserException();
        }
    }

    @Override
    public Todo deleteTodo(int id) throws NoSuchUserException {
        Optional<Todo> todoOptional = todoRepository.findById(id);
        if (todoOptional.isPresent()) {
            todoRepository.deleteById(id);
            return null;
        } else {
            throw new NoSuchUserException();
        }
    }
}
