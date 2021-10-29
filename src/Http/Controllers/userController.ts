import UserService from '../../App/Application/UserService';
//import AppError from '../Errors/AppError';

class UserController {
    
    async updateMe (req, res) {
        const user = await UserService.updateUser(req);
    
        res.status(200).json({
            message: "User updated successfully"
        });
    }
    
    async dashboard (req, res) {
        res.status(200).json({
            message: 'This is dashboard'
        });
    }   
}

export default UserController;