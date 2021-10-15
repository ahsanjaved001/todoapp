const Todo = require('../../models/todo');

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

exports.getTodos = async (req, res, next) => {
    const todos = await Todo.findAll( {where: { userID: req.session.userID }});
    res.status(200).render('todo', {
        title: 'Todos',
        todos
    });
};