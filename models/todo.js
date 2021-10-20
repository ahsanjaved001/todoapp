const Sequelize = require('sequelize');
const sequelize = require('./../sq_db');

const Todo = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userID: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    } 
});

module.exports = Todo;