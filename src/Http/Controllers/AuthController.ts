import UserService from '../../App/Application/User/UserService';
import UserAuthService from '../../App/Infrastructure/Auth/UserAuthService';
import UserEntity from '../../App/Domain/User/UserEntity';


class AuthController{
    async loginUser (req, res) {
        const userEntity = UserEntity.createFromInput(req.body.name, req.body.email, req.body.password);
        const userAuthService = new UserAuthService(userEntity);
        const user = await userAuthService.login(req);
    
        res.status(200).json({
            message: user
        });
    }

    async signUp (req, res) {
        const userEntity = UserEntity.createFromInput(req.body.name, req.body.email, req.body.password);
        const userAuthService = new UserAuthService(userEntity);
        const user = await userAuthService.signup(userEntity);
    
        res.status(200).json({
            status: 'success',
            message: "User signed up",
            user
        });
    }
}

export default AuthController;