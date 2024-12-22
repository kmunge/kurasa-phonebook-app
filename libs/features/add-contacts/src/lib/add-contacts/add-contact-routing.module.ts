import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddContactsComponent } from './add-contacts.component';


const HOME_ROUTES: Route[] = [
  { path: '', component: AddContactsComponent, data: { breadCrumb: '' } },
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
})
export class AddContactsRouterModule {}
