import * as uuid from 'uuid';
import BaseEntity from '../Utils/BaseEntity';

class TodoEntity extends BaseEntity {
    public id: string;
    public userID: string;
    public name: string;
    public description: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id: string, userID: string, name: string, description: string){
        super();
        this.id = id;
        this.userID = userID;
        this.name = name;
        this.description = description;
    }
    
    static createFromInput(userID: string, name: string, description: string){
        const id = uuid.v4();
        const todo = new TodoEntity(id, userID, name, description);
        todo.createdAt = new Date();
        todo.updatedAt = new Date();
        
        return todo;
    }

    static createFromDb(obj){
        const todo = new TodoEntity(obj.id, obj.userID, obj.name, obj.description);
        todo.setDates(obj.createdAt, obj.updatedAt);

        return todo;
    }

    toObj(){
        return JSON.parse(JSON.stringify(this));
    }
}

export default TodoEntity;