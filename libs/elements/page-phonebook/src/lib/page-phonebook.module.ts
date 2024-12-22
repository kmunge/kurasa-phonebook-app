import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonebookPageComponent } from './components/phonebook-page/phonebook-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhonebookSidemenuComponent } from './components/phonebook-sidemenu/phonebook-sidemenu.component';
import { PhonebookHeaderComponent } from './components/phonebook-header/phonebook-header.component';
import { SidemenuToggleService } from './providers/sidemenu-toggle.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PhonebookPageComponent,
    PhonebookSidemenuComponent,
    PhonebookHeaderComponent,
  ],
  exports: [
    PhonebookPageComponent,
    PhonebookSidemenuComponent,
    PhonebookHeaderComponent,
  ],
  providers: [SidemenuToggleService],
})
export class PagePhonebookModule {}
