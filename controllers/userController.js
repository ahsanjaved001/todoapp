const User = require('./../models/userModel');



exports.loginUser = async (req, res, next) => {
    console.log("user");
    res.status(200).json({
        data: "User Login Route"
    });
}

exports.signup = async (req, res, next) => {
    
}