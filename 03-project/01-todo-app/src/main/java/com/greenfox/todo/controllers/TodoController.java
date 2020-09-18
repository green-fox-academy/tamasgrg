package com.greenfox.todo.controllers;

import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.ErrorMessage;
import com.greenfox.todo.models.Todo;
import com.greenfox.todo.services.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("api/todos/{todoId}")
    public ResponseEntity<?> getTodoById(@PathVariable(name = "todoId") int id) {
        try {
            Todo todo = todoService.findTodoById(id);
            return ResponseEntity.status(HttpStatus.OK).body(todo);
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage(e.getMessage()));
        }
    }

    @PutMapping("api/todos/{todoId}")
    public ResponseEntity<?> changeTodo(@PathVariable(name = "todoId") int id, @RequestBody Todo todo) {
        try {
            Todo savedTodo = todoService.changeTodo(id, todo);
            return ResponseEntity.status(HttpStatus.OK).body(savedTodo);
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage(e.getMessage()));
        }
    }

    @PostMapping("api/todos")
    public ResponseEntity<?> addTodo(@RequestBody Todo todo) {
        Todo savedTodo = todoService.saveTodo(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTodo);
    }

}
