package com.greenfox.todo.models;

import javax.persistence.*;

@Entity
@Table(name = "todos")
public class Todo {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String task;
    private boolean isCompleted;
    private String deadline;
    private String priority;
    @ManyToOne
    private TodoUser user;

    public boolean getCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        this.isCompleted = completed;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public TodoUser getUser() {
        return user;
    }

    public void setUser(TodoUser user) {
        this.user = user;
    }
}