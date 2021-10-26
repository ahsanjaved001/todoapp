const uuid = require('uuid');

class Todo {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    
    static createFromInput(name, description){
        let todo = new Todo(name, description);
        todo.id = uuid.v4();
        todo.createdAt = new Date();
        todo.updatedAt = new Date();
        return todo;
    }

    static createFromDb(id, userID, name, description, createdAt, updatedAt){
        let todo = new Todo(name, description);
        todo.id = id;
        todo.userID = userID;
        todo.createdAt = createdAt;
        todo.updatedAt = updatedAt;
        return todo;
    }
}

module.exports = Todo;