class Todo {
    constructor(userID, name, description){
        this.userID = userID;
        this.name = name;
        this.description = description;
    }

    initializingTodo(name, description, userID){
        this.name = name;
        this.description = description;
        this.userID = userID;
        return this;
    }
    
    static createFromInput(name, description){
        //generate uuid
    }

    static createFromDb(userID, name, description){

    }
}

module.exports = Todo;