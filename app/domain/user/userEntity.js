const uuid = require('uuid');

class User {
    constructor(name, email, password){
        this.id = uuid.v4();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static createFromInput(name, email, password){
        return new User(name, email, password);
    }
}

exports.module = User;