const User = require('./../../app/domain/user/userEntity');
const userManager = require('./../../app/infrastructure/store/userStore/userManager');

exports.loginUser = async (req, res, next) => {

    const user = await userManager.fetchUser(req);

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
    let user = User.createFromInput(req.body.name, req.body.email, req.body.password);
    user = await userManager.createUser(user);

    res.status(200).json({
        status: 'success',
        message: "User signed up",
        user
    });
}

exports.dashboard = async (req, res, next) => {
    res.status(200).json({
        message: 'This is dashboard'
    });
}