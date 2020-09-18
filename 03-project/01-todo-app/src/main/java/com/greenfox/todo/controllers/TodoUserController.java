package com.greenfox.todo.controllers;

import com.greenfox.todo.exceptions.NoSuchUserException;
import com.greenfox.todo.models.ErrorMessage;
import com.greenfox.todo.models.TodoUser;
import com.greenfox.todo.services.TodoUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
public class TodoUserController {

    private TodoUserService todoUserService;

    public TodoUserController(TodoUserService todoUserService) {
        this.todoUserService = todoUserService;
    }

    @GetMapping("/api/users/{userId}")
    public ResponseEntity<?> findUserById(@PathVariable(name = "userId") int id) {
        try {
            TodoUser user = todoUserService.findUserById(id);
            return ResponseEntity.status(HttpStatus.OK).body(user);
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage(e.getMessage()));
        }
    }

    @GetMapping("/api/users")
    public ResponseEntity<?> listAllUsers() {
        try {
            Iterable<TodoUser> allUsers = todoUserService.listAllUsers();
            Map<String, Iterable> responseBody  = new HashMap<String, Iterable>() {{
                put("users", allUsers);
            }};
            return ResponseEntity.status(HttpStatus.OK).body(responseBody);
        } catch (NoSuchUserException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessage(e.getMessage()));
        }
    }

    @PostMapping("/api/users")
    public ResponseEntity<?> addTodoUser(@RequestBody TodoUser user) {
        TodoUser savedTodoUser = todoUserService.saveTodoUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTodoUser);
    }

}
