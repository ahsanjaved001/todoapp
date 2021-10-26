const User = require('./../../mysql/models/user');

exports.fetchUser = async (req) => {
    return await User.findOne({ where: { email: req.body.email }});
};

exports.createUser = async (user) => {
    return await User.create({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      });
};
