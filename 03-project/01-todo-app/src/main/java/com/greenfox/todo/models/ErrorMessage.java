package com.greenfox.todo.models;

public class ErrorMessage {

    private String status;
    private String message;

    public ErrorMessage(String message) {
        this.status = "error";
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}