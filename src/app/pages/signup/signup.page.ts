import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoadingController, ToastController, NavController } from '@ionic/angular';

import { NameValidator } from 'src/app/validators/name.validator';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public form: FormGroup;

  public messages: {} = {
    name: [
      {
        name: 'required',
        text: 'name is requried'
      },
      {
        name: 'lastName',
        text: 'lastName is requried'
      },
      {
        name: 'pattern',
        text: 'name is invalid'
      },
    ],
    email: [
      {
        name: 'required',
        text: 'name is requried'
      },
      {
        name: 'email',
        text: 'email is invalid'
      },
    ],
    password: [
      {
        name: 'required',
        text: 'name is requried'
      },
      {
        name: 'pattern',
        text: 'name is invalid'
      },
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        NameValidator.lastNameValidator
      ])],
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

  async add() {
    const loading = await this.loadingCtrl.create({
      message: 'waiting...'
    });
    loading.present();
    this.accountService
      .add(this.form.value)
      .subscribe(
        (res: any) => {
          loading.dismiss();
          this.showSuccess();
          this.navCtrl.navigateRoot('/login');
        },
        (err) => { loading.dismiss() }
      );
  }

  async showSuccess() {
    const toast = await this.toastCtrl.create({
      message: 'redirect to login',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'close'
    })
    toast.present();
  }
}
