const uuid = require('uuid');

class TodoEntity {
    constructor(id, userID, name, description){
        this.id = id;
        this.userID = userID;
        this.name = name;
        this.description = description;
    }
    
    static createFromInput(userID, name, description){
        const id = uuid.v4();
        let todo = new TodoEntity(id, userID, name, description);
        todo.createdAt = new Date();
        todo.updatedAt = new Date();
        
        return todo;
    }

    static createFromDb(id, userID, name, description, createdAt, updatedAt){
        let todo = new TodoEntity(id, userID, name, description);
        todo.createdAt = createdAt;
        todo.updatedAt = updatedAt;

        return todo;
    }

    toObj(){
        return JSON.parse(JSON.stringify(this));
    }
}

module.exports = TodoEntity;