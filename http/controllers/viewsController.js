//const Todo = require('../../models/todo');
const Todo = require('../../models/mongoose/todoModel');

exports.getLoginForm = (req, res, next) => {
    res.status(200).render('login', {
        title: 'Log into your account'
    });
};

exports.getSignupForm = (req, res, next) => {
    res.status(200).render('signup', {
        title: 'Log into your account'
    });
};

exports.todoForm = (req, res, next) => {
    res.status(200).render('addTodo', {
        title: 'Add new todo'
    });
};

exports.todoEditForm = async (req, res, next) => {
    const todo = await Todo.findOne({ _id: req.params.id });
    res.status(200).render('editTodo', {
        title: 'Edit todo',
        todo
    });
};

exports.getTodos = async (req, res, next) => {
    //const todos = await Todo.findAll({ where: { userID: req.session.userID } });
    const todos = await Todo.find({ userID: req.session.userID });
    res.status(200).render('todo', {
        title: 'Todos',
        todos
    });
};