import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactDetailsRouterModule } from './contact-details-routing.module';
import { PagePhonebookModule } from 'page-phonebook';

@NgModule({
  imports: [
    CommonModule,
    ContactDetailsRouterModule,
    PagePhonebookModule
  ],
  exports: [
    ContactDetailsComponent,
  ],
  declarations: [ContactDetailsComponent],
})
export class ContactDetailsModule {}
