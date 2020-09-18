package com.greenfox.todo.controllers;

import com.greenfox.todo.models.Todo;
import com.greenfox.todo.services.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping("api/todos")
    public ResponseEntity<?> addTodo(@RequestBody Todo todo) {
        Todo savedTodo = todoService.saveTodo(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTodo);
    }

}
