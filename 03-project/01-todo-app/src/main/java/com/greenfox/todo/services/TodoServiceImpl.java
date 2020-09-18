package com.greenfox.todo.services;

import com.greenfox.todo.exceptions.NoSuchTodoException;
import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.Todo;
import com.greenfox.todo.models.TodoUser;
import com.greenfox.todo.repositories.TodoRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;
    private TodoUserService todoUserService;

    public TodoServiceImpl(TodoRepository todoRepository, TodoUserService todoUserService) {
        this.todoRepository = todoRepository;
        this.todoUserService = todoUserService;
    }

    @Override
    public Todo findTodoById(int id, int userId) throws NoSuchUserException, NoSuchTodoException {
        Optional<TodoUser> user = todoUserService.findUserById(userId);
        if (user.isPresent()) {
            Optional<Todo> todoOptional = todoRepository.findById(id);
            if (todoOptional.isPresent()) {
                return todoOptional.get();
            } else {
                throw new NoSuchTodoException();
            }
        } else {
            throw new NoSuchUserException();
        }
    }

    @Override
    public Iterable<Todo> getAllTodos(int userId) throws NoSuchUserException {
        Optional<TodoUser> user = todoUserService.findUserById(userId);
        if (user.isPresent()) {
            Iterable<Todo> allTodos = todoRepository.findAll();
            return allTodos;
        } else {
            throw new NoSuchUserException();
        }
    }

    @Override
    public Todo saveTodo(Todo todo, int userId) throws NoSuchUserException {
        Optional<TodoUser> user = todoUserService.findUserById(userId);
        if (user.isPresent()) {
            todo.setUser(user.get());
            Todo savedTodo = todoRepository.save(todo);
            return savedTodo;
        } else {
            throw new NoSuchUserException();
        }
    }

    @Override
    public Todo changeTodo(int id, Todo todo, int userId) throws NoSuchUserException, NoSuchTodoException {
        Optional<TodoUser> user = todoUserService.findUserById(userId);
        if (user.isPresent()) {
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
                throw new NoSuchTodoException();
            }
        } else {
            throw new NoSuchUserException();
        }
    }

    @Override
    public Todo deleteTodo(int id, int userId) throws NoSuchUserException, NoSuchTodoException {
        Optional<TodoUser> user = todoUserService.findUserById(userId);
        if (user.isPresent()) {
            Optional<Todo> todoOptional = todoRepository.findById(id);
            if (todoOptional.isPresent()) {
                todoRepository.deleteById(id);
                return null;
            } else {
                throw new NoSuchTodoException();
            }
        } else {
            throw new NoSuchUserException();
        }
    }
}
