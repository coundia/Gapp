import { PlacesPage } from './../pages/places/places';
import { MeteoPage } from './../pages/meteo/meteo';
import { Component } from '@angular/core';
import { Platform, MenuClose } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  //tab menu
  menu = [
    {title : "My Gallery",Component:GalleryPage},
    {title : "My Meteo",Component:MeteoPage},
    {title : "My Places ",Component:PlacesPage},
    {title : "Home ",Component:HomePage},
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onPage(m){
    //reset url
    this.rootPage = m.Component;
  }
  //close menu

}//end class

