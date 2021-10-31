import {google} from "googleapis";
import AuthService from "./AuthService";
import UserStore from "../MySQLRepository/UserRepository";
import UserEntity from "../../Domain/User/UserEntity";
import AuthToken from "../../Application/Auth/AuthToken";
import Config from "../Config";

const googleClient = Config.googleclient;

const userStore = new UserStore();

class GoogleAuthService extends AuthService{

    async getURL(){
        const oauth2Client = new google.auth.OAuth2(
            googleClient.ClientID,
            googleClient.ClientSecret,
            googleClient.CallBackUrl
        );
        
        //google.options({auth: oauth2Client});
        
        const scopes = [
            'https://www.googleapis.com/auth/contacts.readonly',
            'https://www.googleapis.com/auth/userinfo.email',
            'profile',
        ];
        
        const url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes
        });
        
        return url;
    }

    async login(req): Promise<AuthToken>{
        // const {email, password} = this.userEntity;
        // const user = await userStore.fetchByEmail(email);

        // const result = await this.verifyCredentials(user, password);
        // if (result){
        //     req.session.userID = this.userEntity.id;
        //     const token = await this.generateToken(this.userEntity.id);
        //     return token;
        // } else {
        //     return;
        // }
        return;
    }

    async verifyCredentials(user: UserEntity, password: string): Promise<boolean> {
        // if (user && user.password === password) {
        //     this.userEntity.id = user.id;
        //     return true;
        // } else {
        //     return false;
        // }
        return;
    }
}

export default GoogleAuthService;