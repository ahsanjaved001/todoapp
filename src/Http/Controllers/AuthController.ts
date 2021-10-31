import UserAuthService from '../../App/Infrastructure/Auth/UserAuthService';
import UserEntity from '../../App/Domain/User/UserEntity';
import GoogleAuthService from '../../App/Infrastructure/Auth/GoogleAuthService';
import GoogleAuth from '../../App/Infrastructure/Api/GoogleAuth';


class AuthController{
    async loginUser (req, res) {
        const userEntity = UserEntity.createFromInput(req.body.name, req.body.email, req.body.password);
        const userAuthService = new UserAuthService(userEntity);
        const user = await userAuthService.login(req);
    
        res.status(200).json({
            message: user
        });
    }

    async getUrlForGoogleUser(req, res) {
        const googleAuth = new GoogleAuth();
        res.status(200).json({
            url: await googleAuth.getURL()
        });
    }

    async getGoogleUserProfile(req, res) {
        const googleAuth = new GoogleAuth();
        const result = await googleAuth.getGoogleAccountFromCode(req.query.code);
        const googleAuthService = new GoogleAuthService();
        req.obj = result;
        const token = await googleAuthService.login(req);

        res.status(200).json({
            message: "User logged in successfully!",
            token
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