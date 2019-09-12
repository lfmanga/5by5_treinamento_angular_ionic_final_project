import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { AccountModel } from '../models/account.model';
import { AccountLoginModel } from '../models/accounts-login.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  add(account: AccountModel) {
    return this.http.post(`${environment.apiUrl}accounts`, account);
  }

  login(login: AccountLoginModel) {
    return this.http.post(`${environment.apiUrl}accounts/login`, login);
  }
}
