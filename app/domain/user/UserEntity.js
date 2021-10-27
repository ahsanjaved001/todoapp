const uuid = require('uuid');

class UserEntity {
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static createFromInput(name, email, password){
        const id = uuid.v4();
        let user = new UserEntity(id, name, email, password);
        user.createdAt = new Date();
        user.updatedAt = new Date();
        return user;
    }

    static createFromDB(userID, name, email, password, createdAt, updatedAt){
        let user = new UserEntity(userID, name, email, password);
        user.createdAt = createdAt;
        user.updatedAt = updatedAt;
        return user;
    }

    toObj(){
        return JSON.parse(JSON.stringify(this));
    }
}

module.exports = UserEntity;