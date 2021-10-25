const Todo = require('./../../../models/mongoose/todoModel');

exports.getAllTodos = async (req) => {
    return await Todo.find({ userID: req.session.userID });
};

exports.createTodo = async (todo) => {
    return newTodo = await Todo.create({
        name: todo.name,
        description: todo.description,
        userID: todo.userID
    });
};

exports.updateTodo = async (req) => {
    return await Todo.findByIdAndUpdate(req.params.id, req.body);
};

exports.deleteTodo = async (req) => {
    return await Todo.findByIdAndDelete(req.params.id);
}