import UserEntity from '../Domain/User/UserEntity';
import UserStore from '../Infrastructure/MySQLRepository/UserRepository';

const userStore = new UserStore();

class UserService {
    static async fetchAllUsers(req: any){
        return await userStore.fetchAll();
    }

    static async loginUser(req: any){
        const {email, password} = req.body;
        const user = await userStore.fetchByEmail(email);
        let message: string;
        if (user && user.password === password) {
            req.session.userID = user.id;
            message = "User logged in!";
        } else {
            message = "Incorrect email or password!";
        }

        return message;
    }

    static async addUser(req: any){
        const {name, email, password} = req.body;
        const user = UserEntity.createFromInput(name, email, password);
        await userStore.add(user);

        return user;
    }

    static async updateUser(req: any){
        const {name, email, password} = req.body;
        const id: string = req.params.id;
        const user = await userStore.fetchByID(id);
        user.name = name;
        user.email = email;
        user.password = password;
        return await userStore.update(user);
    }

    static async removeUser(req: any){
        const id: string = req.params.id;
        const user = await userStore.fetchByID(id);
        return await userStore.remove(user);
    }
};

export default UserService;