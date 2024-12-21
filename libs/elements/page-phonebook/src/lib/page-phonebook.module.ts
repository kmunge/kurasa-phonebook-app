import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonebookPageComponent } from './components/phonebook-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PhonebookPageComponent],
  exports: [PhonebookPageComponent],
})
export class PagePhonebookModule {}
