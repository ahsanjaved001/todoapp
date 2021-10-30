import BaseEntity from '../Utils/BaseEntity';

class UserEntity extends BaseEntity {
    public id: string;
    public name: string;
    public email: string;
    public password: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id: string, name: string, email: string, password: string){
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static createFromInput(name: string, email: string, password: string){
        const id = UserEntity.generateID();
        const user = new UserEntity(id, name, email, password);
        user.setDates(new Date(), new Date());
        return user;
    }

    static createFromDB(obj){
        const user = new UserEntity(obj.id, obj.name, obj.email, obj.password);
        user.setDates(obj.createdAt, obj.updatedAt);
        return user;
    }

    toObj(){
        return JSON.parse(JSON.stringify(this));
    }
}

export default UserEntity;