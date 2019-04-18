import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
  //on search
  search(term: string): Observable<string[]> {
    return this.http
               .get(`api/heroes/?name=${term}`)
               .map(response => response.json());
  }
  //

  //var
  private APPID="1e849002dea71aa3d8da9723ff1fbedd";
  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  private meteoUrl  = "https://api.openweathermap.org/data/2.5/weather?q=";
  private galleryUrl  = "https://pixabay.com/api/?key=10346368-75a6d91a4b5e353a96816b543&image_type=photo&q=";
  // private meteo  = "api.openweathermap.org/data/2.5/weather?q={city name},{country code}";
// get  countries
getCountries(): Observable<string[]> {
  return this.http.get(this.apiUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
}
// get  weather
getMeteo(pays): Observable<string[]> {
  this.meteoUrl=this.meteoUrl+pays+"&APPID="+this.APPID;
  return this.http.get(this.meteoUrl)
                   .map(this.extractData )
                  .catch(this.handleError);
}
// get  galllery
getGallery(m): Observable<string[]> {


  console.log("get Gallery  service !!"+this.galleryUrl+m);

  return this.http.get(this.galleryUrl+m).map(this.extractData ).catch(this.handleError);
}
//get json
private extractData(res: Response) {
 // let body = res;
 let body = res.json();
  console.log(body);
  return body || { };
}
//on error
private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
/*   constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  } */

  //imbrique observable
//Observable 1
  getPays(someParameters): Observable<any> {
    return this.http.get(this.apiUrl+someParameters);
  }
//Observable 2
  getPaysMeteo(otherParameters): Observable<any> {
    return this.http.get(this.meteoUrl+otherParameters);
  }
}
