package com.greenfox.todo.exceptions;

public class NoSuchUserException extends RuntimeException {

    public NoSuchUserException() {
        super("No such userId.");
    }
}