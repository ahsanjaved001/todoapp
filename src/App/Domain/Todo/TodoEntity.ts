import * as uuid from 'uuid';

class TodoEntity {
    public id: string;
    public userID: string;
    public name: string;
    public description: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id: string, userID: string, name: string, description: string){Date
        this.id = id;
        this.userID = userID;
        this.name = name;
        this.description = description;
    }
    
    static createFromInput(userID: string, name: string, description: string){
        const id = uuid.v4();
        let todo = new TodoEntity(id, userID, name, description);
        todo.createdAt = new Date();
        todo.updatedAt = new Date();
        
        return todo;
    }

    static createFromDb(obj){
        let todo = new TodoEntity(obj.id, obj.userID, obj.name, obj.description);
        todo.createdAt = obj.createdAt;
        todo.updatedAt = obj.updatedAt;

        return todo;
    }

    toObj(){
        return JSON.parse(JSON.stringify(this));
    }
}

export default TodoEntity;