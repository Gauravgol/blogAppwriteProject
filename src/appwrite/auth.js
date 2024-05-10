import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique, email, password, name);
            if (userAccount) {

                // Call another methode


            } else {
                return userAccount
            }
        }
        catch (error) {
            return error;
        }

    }
    async logIn({ email, password }) {
        try {

            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            return error
        }
    }
}

const authService = new AuthService();

export default authService;
