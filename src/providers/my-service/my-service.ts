import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyServiceProvider {
  //const
  constructor(private http: Http) {}
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
}
