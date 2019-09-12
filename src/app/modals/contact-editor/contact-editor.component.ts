import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss'],
})
export class ContactEditorComponent implements OnInit {

  public form: FormGroup;

  public messages: {} = {
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

}
