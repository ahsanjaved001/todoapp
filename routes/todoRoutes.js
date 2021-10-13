const express = require('express');
const todoController = require('./../controllers/todoController');
const authController = require('./../controllers/authController');

const router = express.Router();


router
  .route('/')
  .get(authController.authentication, 
    todoController.getAllTodos
  )
  .post(
    authController.authentication,
    todoController.createTodo
  );

router
  .route('/:id')
  .patch(
    authController.authentication,
    todoController.updateTodo
  )
  .delete(
    authController.authentication,
    todoController.deleteTodo
  );


module.exports = router;