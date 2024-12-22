import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AddContactsRouterModule } from './add-contact-routing.module';
import { PagePhonebookModule } from 'page-phonebook';
import { FilePreviewPipe } from './pipes/file-preview.pipe';



@NgModule({
  imports: [
    CommonModule,
    PagePhonebookModule,
    AddContactsRouterModule,
    ReactiveFormsModule,
  
  ],
  exports: [
    AddContactsComponent,
  ],
  declarations: [
    AddContactsComponent,
    FilePreviewPipe
  ],
})
export class AddContactsModule {}
