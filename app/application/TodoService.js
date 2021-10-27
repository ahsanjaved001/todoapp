const TodoEntity = require('../domain/todo/TodoEntity');
const TodoStore = require('../infrastructure/store/TodoStore');

class TodoService {
    static async fetchAllTodos(req){
        return await TodoStore.fetchAllForUser(req.session.userID);
    }

    static async addTodo(req){
        const {name, description} = req.body;
        let todo = TodoEntity.createFromInput(req.session.userID, name, description);
        await TodoStore.add(todo);

        return todo;
    }

    static async updateTodo(req){
        const {name, description} = req.body;
        const id = req.params.id;
        const userID = req.session.userID;
        const todo = await TodoStore.fetchByID(id, userID);
        todo.name = name;
        todo.description = description;
        return await TodoStore.update(todo);
    }

    static async removeTodo(req){
        const id = req.params.id;
        const userID = req.session.userID;
        const todo = await TodoStore.fetchByID(id, userID);
        return await TodoStore.remove(todo);
    }
};

module.exports = TodoService;