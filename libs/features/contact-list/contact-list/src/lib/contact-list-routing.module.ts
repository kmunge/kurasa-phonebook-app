import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';

const HOME_ROUTES: Route[] = [
  { path: '', 
    component: ContactListComponent, data: { breadCrumb: '' }, 
    children: [
        {
            path: 'details',
            loadChildren: () =>
              import('libs/features/contact-details/src/lib/contact-details.module').then(
                (m) => m.ContactDetailsModule
              ),
        },
    ],
},
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
})
export class ContactListRouterModule {}
