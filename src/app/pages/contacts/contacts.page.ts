import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { LoadingController, ActionSheetController, ModalController } from '@ionic/angular';
import { ContactEditorComponent } from 'src/app/modals/contact-editor/contact-editor.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  public contacts: [];

  constructor(
    private contactService: ContactService,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'waiting...'
    });
    loading.present();

    this.contactService
      .list()
      .subscribe(
        (res: any) => {
          this.contacts = res;
          loading.dismiss();
        },
        (err) => { loading.dismiss(); }
      )
  }

  async showActions() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('delete clicked');
          }
        },
        {
          text: 'edit',
          icon: 'create',
          handler: () => { this.presentModalEditor(); }
        }
      ]
    });
    actionSheet.present();
  }

  async presentModalEditor() {
    const modal = await this.modalCtrl.create({
      component: ContactEditorComponent,
    })
    return await modal.present();
  }

}
