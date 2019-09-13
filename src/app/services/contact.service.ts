import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get(`${environment.apiUrl}contacts`);
  }

  add(contact: ContactModel) {
    return this.http.post(`${environment.apiUrl}contacts`, contact);
  }

  update(contact: ContactModel) {
    return this.http.put(`${environment.apiUrl}contacts/5d7a942fe18e4946e931e3ca`, contact);
    // o certo é ser a rota de baixo, porém vou deixar fixa por causa do mockoon
    //    return this.http.put(`${environment.apiUrl}contacts/${contact._id}`, contact);
  }
}
