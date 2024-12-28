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
          import('contacts-list').then(
            (m) => m.ContactsListModule
          ),
    
      },
      {
        path: 'add-contact',
        loadChildren: () =>
          import('add-contacts').then(
            (m) => m.AddContactsModule
          ),
      },
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
