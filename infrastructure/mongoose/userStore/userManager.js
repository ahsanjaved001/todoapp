const User = require('./../../../models/mongoose/userModel');

exports.loginUser = async (req) => {
    console.log('123')
    return await User.findOne({ email: req.body.email });
};

exports.signupUser = async (req) => {
    return await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
};
