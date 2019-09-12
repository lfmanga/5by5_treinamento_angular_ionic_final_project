import { AccountLoginModel } from '../models/accounts-login.model';

export class AuthUtil {
    static set(login: AccountLoginModel) {
        localStorage.setItem('final-project.login', JSON.stringify(login));
    }

    static get() {
        let data = localStorage.getItem('final-project.login');
        if (data) return JSON.parse(data);
        return null;
    }
}