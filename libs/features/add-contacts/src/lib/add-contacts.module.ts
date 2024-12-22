import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactsComponent } from './add-contacts/add-contacts.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AddContactsRouterModule } from './add-contacts/add-contact-routing.module';
import { PagePhonebookModule } from 'page-phonebook';


@NgModule({
  imports: [
    CommonModule,
    AddContactsRouterModule,
    ReactiveFormsModule,
    PagePhonebookModule,
  ],
  exports: [AddContactsComponent],
  declarations: [AddContactsComponent],
})
export class AddContactsModule {}
