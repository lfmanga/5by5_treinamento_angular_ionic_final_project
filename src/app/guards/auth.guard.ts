import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthUtil } from '../utils/auth.util';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private navCtrl: NavController
    ) { }

    canActivate() {
        const auth = AuthUtil.get();
        if (!auth) {
            this.navCtrl.navigateRoot('/login');
            return false;
        }
        return true;
    }
}