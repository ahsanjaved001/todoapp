const User = require('./../../../models/mysql/user');

exports.loginUser = async (req) => {
    return await User.findOne({ where: { email: req.body.email }});
};

exports.signupUser = async (req) => {
    return await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
};
