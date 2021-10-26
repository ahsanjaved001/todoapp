const Todo = require('./../../app/domain/todo/todoEntity');
const todoManager = require('./../../app/infrastructure/store/todoStore/todoManager');

exports.getAllTodos = async (req, res, next) => {
    const todos = await todoManager.getAllTodos(req);
    let todoArr = [];

    todos.forEach((todo, index) => {
        todoArr[index] = Todo.createFromDb(todo.id, todo.userID, todo.name, todo.description, todo.createdAt, todo.updatedAt);
    });
    
    res.status(200).json({
        status: 'success',
        length: todoArr.length,
        data: {
            todos: todoArr
        }
    });
};

exports.createTodo = async (req, res, next) => {
    let todo = Todo.createFromInput(req.body.name, req.body.description);
    todo = await todoManager.createTodo(todo, req);
    res.status(200).json({
        status: 'success',
        message: "Todo created",
        data: todo
    });
};

exports.updateTodo = async (req, res, next) => {
    const todo = await todoManager.updateTodo(req);
    let message, status;
    if (!todo) {
        message = "No document is found against that id";
        status = "failed";
    } else {
        message = "Todo is updated";
        status = "success";
    }

    res.status(200).json({
        status,
        message,
        todo
    });
};

exports.deleteTodo = async (req, res, next) => {
    const todo = todoManager.deleteTodo(req);

    let message, status;
    if (!todo) {
        message = "No document is found against that id";
        status = 'failed';
    } else {
        message = "Todo is deleted";
        status = 'success';
    }

    res.status(200).json({
        status,
        message
    });
};
