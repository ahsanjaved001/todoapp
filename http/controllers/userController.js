const UserService = require('./../../app/application/UserService');

exports.loginUser = async (req, res, next) => {

    const user = await UserService.loginUser(req);

    res.status(200).json({
        message: user
    });
}

exports.signup = async (req, res, next) => {
    const user = UserService.addUser(req);

    res.status(200).json({
        status: 'success',
        message: "User signed up",
        user
    });
}

exports.updateMe = async (req, res, next) => {
    const user = UserService.updateUser(req);

    res.status(200).json({
        message: "User updated successfully"
    });
}

exports.dashboard = async (req, res, next) => {
    res.status(200).json({
        message: 'This is dashboard'
    });
}