const Todo = require('../mysql/models/todo');
const TodoEntity = require('./../../domain/todo/TodoEntity');


class TodoStore {

    static async fetchAllForUser(userID){
        const todos = await Todo.findAll({ where: { userID } });

        return todos.map(todo => {
            return TodoEntity.createFromDb(todo.id, todo.userID, todo.name, todo.description, todo.createdAt, todo.updatedAt);
        });
    }

    static async fetchByID(todoID, userID){
        const todo = await Todo.findOne({where: {id: todoID, userID}});
        return TodoEntity.createFromDb(todo.id, todo.userID, todo.name, todo.description, todo.createdAt, todo.updatedAt);
    }

    static async add(todo){
         return await Todo.create(todo.toObj());
    }

    static async update(todo){
        const todoObj = todo.toObj();
        await Todo.update(todoObj, { where: { userID: todo.userID, id: todo.id}});
        return true;
    }

    static async remove(todo){
        const todoObj = todo.toObj();
        await Todo.destroy({ where: { userID: todo.userID, id: todo.id}});
        return true;
    }
}

module.exports = TodoStore;
