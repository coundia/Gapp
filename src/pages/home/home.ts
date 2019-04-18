import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contact ={
    name : "Coundia",
    email : "papacoundia@gmail.com",
    photo : "assets/imgs/img1.jpg"
  }

  constructor(public navCtrl: NavController) {

  }

}
