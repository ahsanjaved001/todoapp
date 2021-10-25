class Todo {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }

    initializingTodo(name, description, userID){
        this.name = name;
        this.description = description;
        this.userID = userID;
        return this;
    }
}

module.exports = Todo;