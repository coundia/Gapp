import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {   Http, RequestOptions, Headers } from '@angular/http';
import   'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MyServiceProvider } from '../../providers/my-service/my-service';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  //add var

  motCle:string = "noir" ;
  images : any;
  logger : string="no";
  errorMessage : string="no";

//construct
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http:Http, public myService:MyServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    this.onSearch();
  }
  onSearch(){
      this.myService.getGallery(this.motCle)
    .subscribe(
      images => this.images = images,
      error =>  this.errorMessage = <any>error);
      this.navCtrl.resize();
    console.log("search "+this.motCle);
    console.log("this . images "+this.images);
  }

}
