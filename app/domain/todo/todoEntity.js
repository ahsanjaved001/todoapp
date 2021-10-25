class Todo {
    constructor(userID, name, description){
        this.userID = userID;
        this.name = name;
        this.description = description;
    }
    
    static createFromInput(userID, name, description){
        return new Todo(userID, name, description);
    }

    static createFromDb(userID, name, description){

    }
}

module.exports = Todo;