const express = require("express");

//controllers destructuring
const {
  addTask,
  updateIsCompleted,
  updateTaskName,
  deleteTask,
} = require("./../controllers/todo");

const todo = express.Router();

todo.post("/add", addTask);
todo.put("/", updateIsCompleted);
todo.put("/", updateTaskName);
todo.delete("/", deleteTask);


module.exports = todo;