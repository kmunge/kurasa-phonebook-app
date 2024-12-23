import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app.routing.module';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { environment } from '../environments/environment';

import { PagePhonebookModule } from 'page-phonebook';
import { LayoutWrapperComponent } from './components/layout-wrapper/layout-wrapper.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, LayoutWrapperComponent],

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireFunctionsModule,

    PagePhonebookModule,
  ],

  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Register HTTP client with interceptors
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
