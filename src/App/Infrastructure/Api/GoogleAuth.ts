import { google } from "googleapis";
import config from './../Config';

const googleClient = config.googleclient;

class GoogleAuth {
    public scopes = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ];

    createConnection(){
        return new google.auth.OAuth2(
            googleClient.ClientID,
            googleClient.ClientSecret,
            googleClient.CallBackUrl
        );
    }

    async getURL(): Promise<string>{
        const oauth2Client = this.createConnection();
        const url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: this.scopes
        });
        
        return url;
    }

    async getGoogleAccountFromCode(code) {
        const oauth2Client = this.createConnection();
        const data = await oauth2Client.getToken(code);
        const tokens = data.tokens;
        oauth2Client.setCredentials(tokens);
        const people = google.people({version: 'v1', auth: oauth2Client});
        const res = await people.people.get({
            resourceName: 'people/me',
            personFields: 'emailAddresses,names',
          });

        const result = {
            name: res.data.names[0].displayName,
            email: res.data.emailAddresses[0].value
        }

        return result;
    }
}

export default GoogleAuth;