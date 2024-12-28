import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';


const HOME_ROUTES: Route[] = [
  { path: '', 
    component: ContactsListComponent, data: { breadCrumb: '' }, 
    children: [
        // {
        //     path: 'details',
        //     loadChildren: () =>
        //       import('libs/features/contact-details/src/lib/contact-details.module').then(
        //         (m) => m.ContactDetailsModule
        //       ),
        // },
    ],
},
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
})
export class ContactsListRouterModule {}
