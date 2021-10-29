import * as uuid from 'uuid';

class UserEntity {
    public id: string;
    public name: string;
    public email: string;
    public password: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id: string, name: string, email: string, password: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static createFromInput(name: string, email: string, password: string){
        const id = uuid.v4();
        let user = new UserEntity(id, name, email, password);
        user.createdAt = new Date();
        user.updatedAt = new Date();
        return user;
    }

    static createFromDB(obj){
        let user = new UserEntity(obj.id, obj.name, obj.email, obj.password);
        user.createdAt = obj.createdAt;
        user.updatedAt = obj.updatedAt;
        return user;
    }

    toObj(){
        return JSON.parse(JSON.stringify(this));
    }
}

export default UserEntity;