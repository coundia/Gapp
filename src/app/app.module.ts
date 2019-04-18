 import { HttpModule } from '@angular/http';
// additional imports
//import { HttpClientModule } from '@angular/common/http';//for ng > 5
import { PlacesPage } from './../pages/places/places';
import { MeteoPage } from './../pages/meteo/meteo';
import { GalleryPage } from './../pages/gallery/gallery';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyServiceProvider } from '../providers/my-service/my-service';

@NgModule({
  //for angular
  declarations: [
    MyApp,
    HomePage,
    //add Pages
    GalleryPage,
    MeteoPage,
    PlacesPage
  ],
  //for fabrique Ng
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //for ionic
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage
  ],
  //for services ionic
  providers: [
    StatusBar,

    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyServiceProvider
  ]
})
export class AppModule {}
