const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


router.post('/tasks', todoController.createTodo);
router.get('/tasks', todoController.getAllTodos);
router.get('/tasks/:id', todoController.getTodoById);
router.put('/tasks/:id', todoController.updateTodo);
router.delete('/tasks/:id', todoController.deleteTodo);

module.exports = router;
