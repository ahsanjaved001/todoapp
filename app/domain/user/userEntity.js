const uuid = require('uuid');

class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static createFromInput(name, email, password){
        let user = new User(name, email, password);
        user.id = uuid.v4();
        user.createdAt = new Date();
        user.updatedAt = new Date();
        return user;
    }
}

module.exports = User;