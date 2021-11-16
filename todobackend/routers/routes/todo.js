const express = require("express");

//controllers destructuring
const {
  getAllTasks,
  addTask,
  updateIsCompleted,
  updateTaskName,
  deleteTask,
} = require("./../controllers/todo");

const todo = express.Router();

todo.get("/", getAllTasks);
todo.post("/", addTask);
todo.put("/", updateIsCompleted);
todo.put("/", updateTaskName);
todo.delete("/", deleteTask);


module.exports = todo;