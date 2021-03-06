import { NewPlacePage } from './../new-place/new-place';
import { Place } from './../../model/places.model';
import { MyServiceProvider } from './../../providers/my-service/my-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPlacePage } from '../detail-place/detail-place';

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  places:Array<Place>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private myService:MyServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }
  ionViewWillEnter(){
       this.myService.getAllPlace().then(data =>{
            this.places = data;
      });
  }
//onNewPlace
onNewPlace(){
  this.navCtrl.push(NewPlacePage);
}
//onDetailPlace
onDetailPlace(place:Place){
  this.navCtrl.push(DetailPlacePage,{p:place});

}


}
