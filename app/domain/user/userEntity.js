class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    initializingUser(name, email, password){
        this.name = name;
        this.email= email;
        this.password = password;
        return this;
    }
}

const user = new User();


exports.module = User;