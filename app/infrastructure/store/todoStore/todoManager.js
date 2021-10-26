const Todo = require('./../../mysql/models/todo');

exports.getAllTodos = async (req) => {
    return await Todo.findAll({ where: { userID: req.session.userID } });
};

exports.createTodo = async (todo, req) => {
    return newTodo = await await Todo.create({
        userID: req.session.userID,
        name: todo.name,
        description: todo.description
    });
};

exports.updateTodo = async (req) => {
    return await Todo.update({
        name: req.body.name,
        description: req.body.description
    }, { where: { id: req.params.id, userID: req.session.userID } });
};

exports.deleteTodo = async (req) => {
    return await Todo.destroy({ where: { id: req.params.id, userID: req.session.userID } });
}