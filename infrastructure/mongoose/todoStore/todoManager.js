const Todo = require('./../../../models/mongoose/todoModel');

exports.getAllTodos = async (req) => {
    return await Todo.find({ userID: req.session.userID });
};

exports.createTodo = async (req) => {
    console.log(req.body.name, req.body.description, req.session.userID);
    return newTodo = await Todo.create({
        name: req.body.name,
        description: req.body.description,
        userID: req.session.userID
    });
};

exports.updateTodo = async (req) => {
    return await Todo.findByIdAndUpdate(req.params.id, req.body);
};

exports.deleteTodo = async (req) => {
    return await Todo.findByIdAndDelete(req.params.id);
}