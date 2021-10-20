const dotenv = require('dotenv').config();
let Todo;
if (process.env.DATABASE_DRIVER === 'mongoose')
    Todo = require('./../../infrastructure/mongoose/todoStore/todoManager');
else
    Todo = require('./../../infrastructure/sql/todoStore/todoManager');

exports.getAllTodos = async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        results: todo.length,
        data: {
            data: Todo.getAllTodos(req)
        }
    });
};

exports.createTodo = async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: "Todo created",
        data: Todo.createTodo(req)
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
