
import { DetailImagePage } from './../detail-image/detail-image';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  size:number = 5 ;
  currentPage:number = 1 ;
  images : any = {hits: []};
  logger : string="no";
  errorMessage : string="no";
  totalPages :number;

//construct
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public myService:MyServiceProvider,public loadCtrl:LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    this.onSearch();
  }
  //chercher un mot cle
  doSearch(){
    let loading=this.loadCtrl.create({
      content: 'Chargement...'
    })
    loading.present();

    this.myService.getGalleryByPage(this.motCle,this.size,this.currentPage)
    .subscribe(
      data => {
        this.totalPages = data.totalHits / this.size;
        if(this.totalPages % this.size != 0 )
        ++this.totalPages;
        data.hits.forEach(h => {
          this.images.hits.push(h);
        });
        loading.dismiss();
      },
      err => {console.log("error"+err);
      loading.dismiss();

    }
      )
      //console.log(this.images);

  }
  //
  onSearch(){
    this.images.hits=[];
    this.doSearch();
  }
  //scroll
  doInfinite(event){
    if(this.currentPage <this.totalPages){
       ++this.currentPage;

       console.log(this.currentPage+"/"+this.totalPages)
       this.doSearch();
       //end infinite
         event.complete();
    }


  }
  //onDetailImage voir detail image
  onDetailImage(im){
    //redirect
    this.navCtrl.push(DetailImagePage,{myImage:im});
  }

}
