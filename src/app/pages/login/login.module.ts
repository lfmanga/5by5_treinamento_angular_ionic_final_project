import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { InputWithMessagesComponent } from 'src/app/components/forms/input-with-messages/input-with-messages.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
		ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginPage,
    InputWithMessagesComponent
  ]
})
export class LoginPageModule { }
