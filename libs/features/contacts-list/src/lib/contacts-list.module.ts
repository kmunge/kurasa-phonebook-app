import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactsListRouterModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { AddContactsModule } from 'add-contacts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactsListRouterModule,

    AddContactsModule,
  ],
  declarations: [ContactsListComponent],
  exports: [ContactsListComponent],
})
export class ContactsListModule {}
