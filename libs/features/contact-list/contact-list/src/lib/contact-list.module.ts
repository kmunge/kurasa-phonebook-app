import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactListRouterModule } from './contact-list-routing.module';
import { PagePhonebookModule } from 'page-phonebook';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactListRouterModule,
    PagePhonebookModule,
  ],
  exports: [
    ContactListComponent,
  ],
  declarations: [ContactListComponent],
})
export class ContactListModule {}
