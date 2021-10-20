const Todo = require('../../models/mongoose/todoModel');



exports.getAllTodos = async (req, res, next) => {

    const todo = await Todo.find({ userID: req.session.userID });

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: todo.length,
        data: {
            data: todo
        }
    });
};

exports.createTodo = async (req, res, next) => {
    const newTodo = await Todo.create({
        name: req.body.name,
        description: req.body.description,
        userID: req.session.userID
    });

    res.status(200).json({
        status: 'success',
        message: "Todo created"
    });
};

exports.updateTodo = async (req, res, next) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
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
    const todo = await Todo.findByIdAndDelete(req.params.id);

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
