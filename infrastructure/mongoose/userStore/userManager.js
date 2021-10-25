const User = require('./../../../models/mongoose/userModel');

exports.loginUser = async (req) => {
    return await User.findOne({ email: req.body.email });
};

exports.signupUser = async (user) => {
    return await User.create({
        name: user.name,
        email: user.email,
        password: user.password
    });
};
