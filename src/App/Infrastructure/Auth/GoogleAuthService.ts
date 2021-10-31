import AuthService from "./AuthService";
import UserStore from "../MySQLRepository/UserRepository";
import UserEntity from "../../Domain/User/UserEntity";
import AuthToken from "../../Application/Auth/AuthToken";



const userStore = new UserStore();

class GoogleAuthService extends AuthService{

    async login(req): Promise<AuthToken>{
        const user = UserEntity.createFromInput(req.obj.name, req.obj.email, 'someRandomPassword');
        console.log(user);
        req.session.userID = user.id;
        const token = await this.generateToken(user.id);
        return token;
}

    async verifyCredentials(user: UserEntity, password: string): Promise<boolean> {
        // if (user && user.password === password) {
        //     this.userEntity.id = user.id;
        //     return true;
        // } else {
        //     return false;
        // }
        return;
    }
}

export default GoogleAuthService;