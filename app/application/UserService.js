const UserEntity = require('./../domain/user/UserEntity');
const UserStore = require('../infrastructure/store/UserStore');

class UserService {
    static async fetchAllUsers(req){
        return await UserStore.fetchAll(req.session.userID);
    }

    static async loginUser(req){
        const {email, password} = req.body;
        const user = await UserStore.fetchByEmail(email);

        let message;
        if (user && user.password === password) {
            req.session.userID = user.id;
            message = "User logged in!";
        } else {
            message = "Incorrect email or password!";
        }

        return message;
    }

    static async addUser(req){
        const {name, email, password} = req.body;
        const user = UserEntity.createFromInput(name, email, password);
        await UserStore.add(user);

        return user;
    }

    static async updateUser(req){
        const {name, email, password} = req.body;
        const id = req.params.id;
        const user = await UserStore.fetchByID(id);
        user.name = name;
        user.email = email;
        user.password = password;
        return await UserStore.update(user);
    }

    static async removeUser(){
        const id = req.params.id;
        const user = await UserStore.fetchByID(id);
        return await UserStore.remove(user);
    }
};

module.exports = UserService;