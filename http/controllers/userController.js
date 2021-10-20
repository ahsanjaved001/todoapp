const dotenv = require('dotenv').config();
let User;
if (process.env.DATABASE_DRIVER === 'mongoose')
    Todo = require('./../../infrastructure/mongoose/userStore/userManager');
else
    Todo = require('./../../infrastructure/sql/userStore/userManager');

exports.loginUser = async (req, res, next) => {

    const user = await User.loginUser(req);

    let message;
    if (user && user.password === req.body.password) {
        req.session.userID = user.id;
        message = "success";
    } else {
        message = "Incorrect email or password";
    }

    res.status(200).json({
        message
    });
}

exports.signup = async (req, res, next) => {
    const newUser = User.signupUser(req)

    res.status(200).json({
        status: 'success',
        message: "User signed up"
    });
}

exports.dashboard = async (req, res, next) => {
    res.status(200).json({
        message: 'This is dashboard'
    });
}