const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { model } = require("mongoose");

//get all todos
router.get("/",todoController.getAllTodos);
router.post("/",todoController.createTodo);
router.patch("/:id",todoController.updateTodo);
router.delete("/:id",todoController.deleteTodo);

module.exports = router;

///help me