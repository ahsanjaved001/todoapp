import UserService from '../../App/Application/UserService';

class AuthController{
    async loginUser (req, res) {

        const user = await UserService.loginUser(req);
    
        res.status(200).json({
            message: user
        });
    }

    async signUp (req, res) {
        const user = await UserService.addUser(req);
    
        res.status(200).json({
            status: 'success',
            message: "User signed up",
            user
        });
    }
}

export default AuthController;