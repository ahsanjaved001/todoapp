import AuthService from "./AuthService";
import UserStore from "../MySQLRepository/UserRepository";
import UserEntity from "../../Domain/User/UserEntity";
import AuthToken from "../../Application/Auth/AuthToken";

const userStore = new UserStore();

class UserAuthService extends AuthService{
    public userEntity: UserEntity;

    constructor(user: UserEntity) {
        super();
        this.userEntity = user;
    }

    async login(req): Promise<AuthToken>{
        const {email, password} = this.userEntity;
        const user = await userStore.fetchByEmail(email);

        const result = await this.verifyCredentials(user, password);
        if (result){
            req.session.userID = this.userEntity.id;
            console.log(this.generateToken(this.userEntity.id));
            return await this.generateToken(this.userEntity.id);
        } else {
            return;
        }
    }

    async verifyCredentials(user: UserEntity, password: string): Promise<boolean> {
        if (user && user.password === password) {
            this.userEntity.id = user.id;
            return true;
        } else {
            return false;
        }
    }
}

export default UserAuthService;