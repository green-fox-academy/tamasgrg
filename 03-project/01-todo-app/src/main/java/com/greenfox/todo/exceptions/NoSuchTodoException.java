package com.greenfox.todo.exceptions;

public class NoSuchTodoException extends RuntimeException{

    public NoSuchTodoException() {
        super("No such TodoId.");
    }


}
