import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';


import { LayoutWrapperComponent } from './components/layout-wrapper/layout-wrapper.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'phonebook', pathMatch: 'full' },


  // {
  //   path: 'phonebook',
  //   component: LayoutWrapperComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () =>
  //         import('@cargo-visibility/features/pages/home').then(
  //           (m) => m.HomeModule
  //         ),
  //       canActivate: [IsLoggedInGuard],
  //     },

  //     {
  //       path: 'trips',
  //       loadChildren: () =>
  //         import('@cargo-visibility/features/pages/trips').then(
  //           (m) => m.TripsModule
  //         ),
  //       data: { breadcrumb: 'Trips' },
  //       canActivate: [IsLoggedInGuard],
  //     },

  //     {
  //       path: 'detention',
  //       loadChildren: () =>
  //         import('@cargo-visibility/features/pages/detention').then(
  //           (m) => m.DetentionModule
  //         ),
  //       data: { breadcrumb: 'Detention' },
  //       canActivate: [IsLoggedInGuard],
  //     },
  //     {
  //       path: 'sms-notifications',
  //       loadChildren: () =>
  //         import('@cargo-visibility/features/pages/sms-notifications').then(
  //           (m) => m.SmsNotificationsModule
  //         ),
  //         data: { breadcrumb: 'SMS Notifications' },
  //         canActivate: [IsLoggedInGuard],
  //     }
  //   ],
  // },

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
