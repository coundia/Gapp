import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { NewPlacePage } from './../pages/new-place/new-place';
import { DetailImagePage } from './../pages/detail-image/detail-image';
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
import { DetailPlacePage } from '../pages/detail-place/detail-place';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  //for angular
  declarations: [
    MyApp,
    HomePage,
    //add Pages
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage,
  ],
  //for fabrique Ng
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

    IonicStorageModule.forRoot({
      name: '__PalcesData',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoQhIy3BDAC1KnfHSESWVSn_FCh9ALq_8'
    })
  ],
  bootstrap: [IonicApp],
  //for ionic
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage,
  ],
  //for services ionic
  providers: [
    StatusBar,

    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyServiceProvider,
    Geolocation
  ]
})
export class AppModule {}
