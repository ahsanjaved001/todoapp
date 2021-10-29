import * as express from 'express';
import TodoController from '../Controllers/todoController';
import Authentication from '../Middleware/Auth';

const router = express.Router();
const todoController = new TodoController();

router
  .route('/')
  .get(Authentication.authenticate,
    todoController.getAllTodos
  )
  .post(
    Authentication.authenticate,
    todoController.createTodo
  );

router
  .route('/:id')
  .patch(
    Authentication.authenticate,
    todoController.updateTodo
  )
  .delete(
    Authentication.authenticate,
    todoController.deleteTodo
  );


export default router;