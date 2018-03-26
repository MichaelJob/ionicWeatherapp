import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestDataProvider } from '../providers/rest-data/rest-data';
import { HttpClientModule } from '@angular/common/http';
import { RoundPipe, RoundTenthPipe } from '../pipes/round/round';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoundPipe,
    RoundTenthPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestDataProvider
  ]
})
export class AppModule {}
