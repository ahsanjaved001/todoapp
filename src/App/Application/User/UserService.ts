import UserEntity from '../../Domain/User/UserEntity';
import UserStore from '../../Infrastructure/MySQLRepository/UserRepository';
import UpdateUserDTO from './UpdateUserDTO';
import FetchAllUserDTO from './FetchAllUserDTO';
import RemoveUserDTO from './RemoveUserDTO';

const userStore = new UserStore();

class UserService {
    static async fetchAllUsers(fetchAllUserDTO: FetchAllUserDTO){
        if(fetchAllUserDTO.role === 'Admin'){
            return await userStore.fetchAll();
        } else {
            return 'This user cannot perform this operation';
        }
    }

    static async updateUser(updateUserDTO: UpdateUserDTO){
        const {id, name, email, password} = updateUserDTO;
        const user = await userStore.fetchByID(id);
        user.name = name;
        user.email = email;
        user.password = password;
        return await userStore.update(user);
    }

    static async removeUser(removeUserDTO: RemoveUserDTO){
        const {id, role} = removeUserDTO;
        if(role === 'Admin'){
            const user = await userStore.fetchByID(id);
            return await userStore.remove(user);
        } else {
            return 'This user cannot perform this operation';
        }
    }
};

export default UserService;