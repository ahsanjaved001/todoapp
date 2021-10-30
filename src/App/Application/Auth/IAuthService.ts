import AuthToken from './AuthToken';
import UserEntity from '../../Domain/User/UserEntity';

interface AuthService{
    generateToken(userID: string): Promise<AuthToken>
    verifyCredentials(user: UserEntity, password: string): Promise<boolean>
    verifyToken(authtoken: AuthToken): Promise<boolean>
    login(req): Promise<AuthToken>
    signup(userEntity: UserEntity): Promise<AuthToken>
}

export default AuthService;