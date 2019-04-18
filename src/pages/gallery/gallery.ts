import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {   Http, RequestOptions, Headers } from '@angular/http';
import   'rxjs/add/operator/map';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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


  async onSearch(){
     var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers,withCredentials: true});
    //https://pixabay.com/api/?key=10346368-75a6d91a4b5e353a96816b543&q=Senegal&image_type=photo&per_page=10&page=1
    this.http
    .get("https://pixabay.com/api/?key=10346368-75a6d91a4b5e353a96816b543&q="+this.motCle+"&image_type=photo&per_page=2&page=1",options)
    .map(resp => resp.json())
    .subscribe(data => {
        this.images = data;
              },err =>{
                console.log("NOT FIND   ")
              }) ;
  }
//construct
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:Http
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
