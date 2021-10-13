const Todo = require('./../models/todoModel');



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
    let message;
    if (!todo) {
        message = "No document is found against that id";
    } else {
        message = "Todo is updated";
    }

    res.status(200).json({
        message
    });
};

exports.deleteTodo = async (req, res, next) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    let message;
    if (!todo) {
        message = "No document is found against that id";
    } else {
        message = "Todo is deleted";
    }

    res.status(204).json({
      message
    });
};
