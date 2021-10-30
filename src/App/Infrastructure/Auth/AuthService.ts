import * as jwt from 'jsonwebtoken';
import config from '../../Infrastructure/Config';
import UserEntity from '../../Domain/User/UserEntity';
import UserStore from '../MySQLRepository/UserRepository';
import AuthToken from '../../Application/Auth/AuthToken';
import IAuthService from '../../Application/Auth/IAuthService';

const jwt_scret = config.jwt;
const userStore = new UserStore();

abstract class AuthService implements IAuthService{

    async verifyToken(authToken: AuthToken): Promise<boolean>{
        if (authToken.token){
            const result = jwt.verify(authToken.token, jwt_scret.secret);
            return true;
        } else {
            return false;
        }
    }

    async generateToken(userID: string): Promise<AuthToken> {
        const token = jwt.sign({id: userID}, jwt_scret.secret);
        return new AuthToken(token);
    }

    abstract login(req): Promise<AuthToken>
    abstract verifyCredentials(user: UserEntity, password: string): Promise<boolean> 

    async signup(userEntity: UserEntity): Promise<AuthToken>{
        const {name, email, password} = userEntity;
        const user = UserEntity.createFromInput(name, email, password);
        await userStore.add(user);

        return ;
    }
}

export default AuthService;