const mongoose = require('mongoose');
const uuid = require('uuid');

const userSchema = new mongoose.Schema({
    _id: {
      type: String,
      default: uuid.v4()
    },
    name: {
      type: String,
      required: [true, 'Please tell us your name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true
      },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8
      }
});

const User = mongoose.model('User', userSchema);

module.exports = User;