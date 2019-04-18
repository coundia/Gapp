import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {   Http } from '@angular/http';
import   'rxjs/add/operator/map';
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
  size:number = 10 ;
  currentPage:number = 1 ;
  images : any = {hits: []};
  logger : string="no";
  errorMessage : string="no";
  totalPages :number;

//construct
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public myService:MyServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    this.onSearch();
  }
  //chercher un mot cle
  onSearch(){
    this.myService.getGalleryByPage(this.motCle,this.size,this.currentPage)
    .subscribe(
      data => {
        this.totalPages = data.totalHits / this.size;
        if(this.totalPages % this.size != 0 )
        ++this.totalPages;
        data.hits.forEach(h => {
          this.images.hits.push(h);
        });
      },
      err => {console.log("error"+err)}
      )
      console.log(this.images);


  }
  doInfinite(event){
    if(this.currentPage <this.totalPages){
       ++this.currentPage;
       this.onSearch();
    }
    //informer infinite
    event.complete();
  }

}
