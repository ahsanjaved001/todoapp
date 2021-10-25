const express = require('express');
const todoController = require('./../controllers/todoController');
//const StodoController = require('./../controllers/todo');
const auth = require('./../middleware/auth');

const controller = todoController;

const router = express.Router();


router
  .route('/')
  .get(auth.authentication,
    controller.getAllTodos
  )
  .post(
    auth.authentication,
    controller.createTodo
  );

router
  .route('/:id')
  .patch(
    auth.authentication,
    controller.updateTodo
  )
  .delete(
    auth.authentication,
    controller.deleteTodo
  );


module.exports = router;