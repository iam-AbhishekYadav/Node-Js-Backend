const express = require("express");
const router = express.Router();


// Import Controllers
const { createTodo } = require("../controller/createTodo");
const { getTodo, getTodoById} = require("../controller/getTodo");
const { updateTodo } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");


// Define Apis
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.get("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);


module.exports = router;