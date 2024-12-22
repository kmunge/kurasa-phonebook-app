import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app.routing.module';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { environment } from '../environments/environment';
import { LayoutWrapperComponent } from './components/layout-wrapper/layout-wrapper.component';
import { PagePhonebookModule } from 'page-phonebook';


@NgModule({
  declarations: [
    AppComponent,
    LayoutWrapperComponent,
  ],

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

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
