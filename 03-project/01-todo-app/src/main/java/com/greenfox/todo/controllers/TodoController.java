package com.greenfox.todo.controllers;

import com.greenfox.todo.exceptions.NoSuchTodoException;
import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.ErrorMessage;
import com.greenfox.todo.models.Todo;
import com.greenfox.todo.models.TodoUser;
import com.greenfox.todo.services.TodoService;
import com.greenfox.todo.services.TodoUserService;
import com.greenfox.todo.services.TodoUserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("api/todos/{todoId}")
    public ResponseEntity<?> getTodoById(@PathVariable(name = "todoId") int id, @RequestHeader(value="User-Agent") int userId) {
        try {
            Todo todo = todoService.findTodoById(id, userId);
            return ResponseEntity.status(HttpStatus.OK).body(todo);
        } catch (NoSuchTodoException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ErrorMessage("It's not your todo."));
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage("Not existing userId. | Not existing todoId."));
        }
    }

    @GetMapping("api/todos")
    public ResponseEntity<?> getAllTodos(@RequestHeader(value="User-Agent") int userId) {
        try {
            Iterable<Todo> allTodos = todoService.getAllTodos(userId);
            Map<String, Iterable> responseBody  = new HashMap<String, Iterable>() {{
                put("todos", allTodos);
            }};
            return ResponseEntity.status(HttpStatus.OK).body(responseBody);
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage(e.getMessage()));
        }
    }

    @PutMapping("api/todos/{todoId}")
    public ResponseEntity<?> changeTodo(@PathVariable(name = "todoId") int id, @RequestBody Todo todo, @RequestHeader(value="User-Agent") int userId) {
        try {
            Todo savedTodo = todoService.changeTodo(id, todo, userId);
            return ResponseEntity.status(HttpStatus.OK).body(savedTodo);
        } catch (NoSuchTodoException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ErrorMessage("It's not your todo."));
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage("Not existing userId. | Not existing todoId."));
        }
    }

    @DeleteMapping("api/todos/{todoId}")
    public ResponseEntity<?> deleteTodo(@PathVariable(name = "todoId") int id, @RequestHeader(value="User-Agent") int userId) {
        try {
            todoService.deleteTodo(id, userId);
            return ResponseEntity.status(HttpStatus.OK).body("Todo successfully deleted.");
        } catch (NoSuchTodoException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ErrorMessage("It's not your todo."));
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage("Not existing userId. | Not existing todoId."));
        }
    }

    @PostMapping("api/todos")
    public ResponseEntity<?> saveTodo(@RequestBody Todo todo, @RequestHeader(value="User-Agent") int userId) {
        try {
            Todo savedTodo = todoService.saveTodo(todo, userId);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedTodo);
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage("Not existing userId. | Not existing todoId."));
        }
    }
}
