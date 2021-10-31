import UserAuthService from '../../App/Infrastructure/Auth/UserAuthService';
import UserEntity from '../../App/Domain/User/UserEntity';
import GoogleAuthService from '../../App/Infrastructure/Auth/GoogleAuthService';


class AuthController{
    async loginUser (req, res) {
        const userEntity = UserEntity.createFromInput(req.body.name, req.body.email, req.body.password);
        const userAuthService = new UserAuthService(userEntity);
        const user = await userAuthService.login(req);
    
        res.status(200).json({
            message: user
        });
    }

    async loginUserGoogle(req, res) {
        const googleAuthService = new GoogleAuthService();
        console.log(googleAuthService.getURL());
        res.status(200).json({
            url: await googleAuthService.getURL()
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