import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';


import { LayoutWrapperComponent } from './components/layout-wrapper/layout-wrapper.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'phonebook', pathMatch: 'full' },


  {
    path: 'phonebook',
    component: LayoutWrapperComponent,
    children: [
      {
        path: 'contact-list',
        loadChildren: () =>
          import('@phonebook/contact-list').then(
            (m) => m.ContactListModule
          ),
    
      },
      {
        path: 'add-contact',
        loadChildren: () =>
          import('@phonebook/add-contacts').then(
            (m) => m.AddContactsModule
          ),
      },
      // {
      //   path: 'contact-details',
      //   loadChildren: () =>
      //     import('@phonebook/contact-details').then(
      //       (m) => m.ContactDetailsModule
      //     ),
      // }
    ],
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      // enableTracing: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
