import AuthToken from "../../App/Application/Auth/AuthToken";
import UserAuthService from "../../App/Infrastructure/Auth/UserAuthService";

class Authentication {
    static async authenticate(req, res, next){
        if(req.headers.authorization){
            const token = req.headers.authorization.split(' ')[1];
            const authToken = new AuthToken(token);
            const userAuthService = new UserAuthService();
            const result = await userAuthService.verifyToken(authToken);
            if(result){
                next();
            } else {
                res.status(401).json({
                    message: "You are not logged in!"
                });
            }
        } else {
            res.status(401).json({
                message: "You are not logged in!"
            });
        }
    }
}

export default Authentication;