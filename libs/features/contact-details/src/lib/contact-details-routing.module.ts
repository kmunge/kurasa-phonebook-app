import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const HOME_ROUTES: Route[] = [
    { path: 'details/:id', component: ContactDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
})
export class ContactDetailsRouterModule {}
