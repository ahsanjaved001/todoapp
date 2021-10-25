const todoClass = require('./../../app/domain/todo/todoEntity');
const Todo = require('./../../app/infrastructure/store/todoStore/todoManager');

exports.getAllTodos = async (req, res, next) => {
    const todo = await Todo.getAllTodos(req);
    res.status(200).json({
        status: 'success',
        length: todo.length,
        data: {
            data: todo
        }
    });
};

exports.createTodo = async (req, res, next) => {
    let todo = new todoClass();
    todo = todo.initializingTodo(req.body.name, req.body.description, req.session.userID);
    todo = await Todo.createTodo(todo);
    res.status(200).json({
        status: 'success',
        message: "Todo created",
        data: todo
    });
};

exports.updateTodo = async (req, res, next) => {
    const todo = Todo.updateTodo(req);
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
        message
    });
};

exports.deleteTodo = async (req, res, next) => {
    const todo = Todo.deleteTodo(req);

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
