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
  constructor(private http: Http) {}
  //var
  private galleryUrlBase  = "https://pixabay.com/api/?key=10346368-75a6d91a4b5e353a96816b543&";
  // private meteo  = "api.openweathermap.org/data/2.5/weather?q={city name},{country code}";

  //chercherParPage
  getGalleryByPage(query :string,size:number,page:number ){
        //per_page=10&page=1&image_type=photo&q=
       return  this.http.get(this.galleryUrlBase+"per_page="+size+"&page="+page+"&image_type=photo&q="+query)
        .map(data=>data.json());
  }
}
