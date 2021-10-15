const express = require('express');
const todoController = require('./../controllers/todoController');
const StodoController = require('./../controllers/todo');
const authController = require('./../controllers/authController');

const controller = StodoController;

const router = express.Router();


router
  .route('/')
  .get(authController.authentication, 
    controller.getAllTodos
  )
  .post(
    authController.authentication,
    controller.createTodo
  );

router
  .route('/:id')
  .patch(
    authController.authentication,
    controller.updateTodo
  )
  .delete(
    authController.authentication,
    controller.deleteTodo
  );


module.exports = router;