const User = require('../../models/user');

exports.loginUser = async (req, res, next) => {

  const user = await User.findOne({ where: { email: req.body.email }});

  let message;

  if(user && user.password === req.body.password){
      req.session.userID = user.id;
      message = "User logged in";
  } else {
      message = "Incorrect email or password";
  }

  res.status(200).json({
      message
  });
}

exports.signup = async (req, res, next) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

    res.status(200).json({
        status: 'success',
        message: "User signed up"
      });
};

exports.dashboard = async (req, res, next) => {
  res.status(200).json({
      message: 'This is dashboard',
      session: req.session.userID
  });
}