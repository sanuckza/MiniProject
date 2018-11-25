import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OrderPage } from '../pages/order/order';
import { EditorderPage } from '../pages/editorder/editorder';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';


var config = {
  apiKey: "AIzaSyDQXl_6YD43Z4gAPCRV2VycfvzsrUVU-No",
  authDomain: "psucafe-1573a.firebaseapp.com",
  databaseURL: "https://psucafe-1573a.firebaseio.com",
  projectId: "psucafe-1573a",
  storageBucket: "psucafe-1573a.appspot.com",
  messagingSenderId: "471021992315"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OrderPage,
    EditorderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OrderPage,
    EditorderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}
