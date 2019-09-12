import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactsPage } from './contacts.page';
import { ContactEditorComponent } from 'src/app/modals/contact-editor/contact-editor.component';
import { InputWithMessagesComponent } from 'src/app/components/forms/input-with-messages/input-with-messages.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
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
    ContactsPage,
    InputWithMessagesComponent,
    ContactEditorComponent
  ],
  entryComponents: [ContactEditorComponent]
})
export class ContactsPageModule { }
