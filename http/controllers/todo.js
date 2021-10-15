const Todo = require('../../models/todo');

exports.getAllTodos = async (req, res, next) => {

  const todo = await Todo.findAll( {where: { userID: req.session.userID }});

  res.status(200).json({
    status: 'success',
    results: todo.length,
    data: {
      data: todo
    }
  });
};

exports.createTodo = async (req, res, next) => {
    const todo = await Todo.create({
        name: req.body.name,
        description: req.body.description,
        userID: req.session.userID
    });
    res.status(200).json({ todo });
};


exports.updateTodo = async (req, res, next) => {
    const todo = await Todo.update({
        name: req.body.name,
        description: req.body.description
    },{where: { id: req.params.id }});

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
    const todo = await Todo.destroy({where:{id: req.params.id}});

    let message;
    if (!todo) {
        message = "No document is found against that id";
    } else {
        message = "Todo is deleted";
    }

    res.status(200).json({
      message
    });
};
