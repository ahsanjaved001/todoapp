const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userID: {
      type: String
    },
    name: {
      type: String,
      required: [true, 'Please provide name']
    },
    description: {
        type: String,
        required: [true, 'Please provide description']
      },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;