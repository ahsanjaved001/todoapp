class Todo {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    
    static createFromInput(name, description){
        return new Todo(name, description);
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