import UserService from '../../App/Application/User/UserService';
import UpdateUserDTO from '../../App/Application/User/UpdateUserDTO';
//import AppError from '../Errors/AppError';

class UserController {
    
    async updateMe (req, res) {
        const input = new UpdateUserDTO(req);
        const user = await UserService.updateUser(input);
    
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