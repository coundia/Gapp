
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Place } from '../../model/places.model';
import { Storage } from '@ionic/storage';
/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyServiceProvider {
  //const
  constructor(private http: Http,
    private storage:Storage
    ) {}
  //proprietes
   private galleryUrlBase  = "https://pixabay.com/api/?key=10346368-75a6d91a4b5e353a96816b543&";
   //private meteoUrlCurrent  = "https://api.openweathermap.org/data/2.5/weather?APPID=1e849002dea71aa3d8da9723ff1fbedd";
   private meteoUrl  = "https://api.openweathermap.org/data/2.5/forecast?APPID=1e849002dea71aa3d8da9723ff1fbedd";
  //chercherParPage
  getGalleryByPage(query :string,size:number,page:number ){

       return  this.http.get(this.galleryUrlBase+"per_page="+size+"&page="+page+"&image_type=photo&q="+query)
        .map(data=>data.json());
  }
  //get meteo
  getMeteo(query){
    return  this.http.get(this.meteoUrl+"&q="+query+",SN")
        .map(data=>data.json());
  }
  //for places
  private places:Array<Place> =[
    {"title":"A"},
    {"title":"B"},
    {"title":"C"},
  ]
  //add places
   addPlace(p:Place){
    this.places.push(p);
    this.storage.set("places",this.places)
  }
  //get all
  getAllPlace(){
    return this.storage.get("places").then(data =>{
        this.places = (data!=null)?data:[];
        return this.places;
    });
  }


}
