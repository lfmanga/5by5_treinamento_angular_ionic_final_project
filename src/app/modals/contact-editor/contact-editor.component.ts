import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, NavController, ModalController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';
import { ContactModel } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss'],
})
export class ContactEditorComponent implements OnInit {

  @Input('contact') contact: ContactModel;

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

  // - Id
  // - Nome
  // - Email
  // - CPF
  // - Telefone
  // - Endereço Completo
  // - Imagem

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
  ) {
    this.form = formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      cpf: [''],
      phone: [''],
      address: [''],
      picture: [''],
    })
  }

  ngOnInit() {
    if (this.contact) {
      this.form.controls.id.setValue(this.contact._id);
      this.form.controls.name.setValue(`${this.contact.name.first} ${this.contact.name.last}`);
      this.form.controls.email.setValue(this.contact.email);
      this.form.controls.cpf.setValue(this.contact.cpf);
      this.form.controls.phone.setValue(this.contact.phone);
      this.form.controls.address.setValue(this.contact.address);
      this.form.controls.picture.setValue(this.contact.picture);
    }
  }

  async save() {
    const loading = await this.loadingCtrl.create({
      message: 'waiting...'
    });
    loading.present();

    let contact = this.form.getRawValue();

    if (contact.id) {
      contact._id = contact.id; // gambiarra pra funfa o backend, desculpa por isso
      this.contactService
        .update(contact)
        .subscribe(
          (res) => {
            this.showSuccess(loading, true);
          },
          (err) => {
            loading.dismiss();
            this.modalCtrl.dismiss();
          }
        );
    } else {
      this.contactService
        .add(contact)
        .subscribe(
          (res) => {
            this.showSuccess(loading, false);
          },
          (err) => {
            loading.dismiss();
            this.modalCtrl.dismiss();
          }
        );
    }
  }

  async showSuccess(loading: HTMLIonLoadingElement, isUpdate: boolean) {
    loading.dismiss();
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message: isUpdate ? 'update success' : 'add success',
      duration: 3000
    })
    toast.present();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
