import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

import { AccountService } from 'src/app/services/account.service';
import { AuthUtil } from 'src/app/utils/auth.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup;

  public messages: {} = {
    email: [
      {
        name: 'required',
        text: 'email is requried'
      },
      {
        name: 'email',
        text: 'email is invalid'
      },
    ],
    password: [
      {
        name: 'required',
        text: 'password is requried'
      },
      {
        name: 'pattern',
        text: 'password is invalid'
      },
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) {
    this.form = formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]*')
      ])]
    })
  }

  ngOnInit() { }

  async login() {
    const loading = await this.loadingCtrl.create({
      message: 'waiting...'
    });
    loading.present();
    this.accountService
      .login(this.form.value)
      .subscribe(
        (res: any) => {
          AuthUtil.set(res);
          loading.dismiss();
          this.navCtrl.navigateRoot('/');
        },
        (err) => { loading.dismiss(); }
      )
  }
}
