const UserEntity = require('../../domain/user/UserEntity');
const User = require('../mysql/models/user');

class UserStore {

    static async fetchAllForUser(){
        const users = await User.findAll();

        return users.map(user => {
            return UserEntity.createFromDb(user.id, user.name, user.email, user.password, user.createdAt, user.updatedAt);
        });
    }

    static async fetchByEmail(email){
        const user = await User.findOne({where:{email}});
        return UserEntity.createFromDB(user.id, user.name, user.email, user.password, user.createdAt, user.updatedAt);
    }

    static async fetchByID(id){
        const user = await User.findOne({where: {id}});
        return UserEntity.createFromDb(user.id, user.name, user.email, user.password, user.createdAt, user.updatedAt);
    }

    static async add(user){
         return await User.create(user.toObj());
    }

    static async update(user){
        const userObj = user.toObj();
        await User.update(userObj, { where: {id: user.id}});
        return true;
    }

    static async remove(user){
        const userObj = user.toObj();
        await User.destroy({ where: {id: user.id}});
        return true;
    }
}

module.exports = UserStore;