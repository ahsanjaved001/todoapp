import UserEntity from '../../Domain/User/UserEntity';
import User from '../Mysql/Models/User';
import UserRepository from '../../Domain/User/IUserRepository';

class UserStore implements UserRepository {

    async fetchAll(){
        const users = await User.findAll();

        return users.map(user => {
            return UserEntity.createFromDB(user);
        });
    }

    async fetchByEmail(email: string){
        const user = await User.findOne({where:{email}});
        return UserEntity.createFromDB(user);
    }

    async fetchByID(id: string){
        const user = await User.findOne({where: {id}});
        return UserEntity.createFromDB(user);
    }

    async add(user: UserEntity){
        await User.create(user.toObj())
        return true;
    }

    async update(user: UserEntity){
        const userObj = user.toObj();
        await User.update(userObj, { where: {id: user.id}});
        return true;
    }

    async remove(user: UserEntity){
        const userObj = user.toObj();
        await User.destroy({ where: {id: user.id}});
        return true;
    }
}

export default UserStore;