import { MyServiceProvider } from './../../providers/my-service/my-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {

  meteo : any ;
  ville : string ;
  region : string[];
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private myService: MyServiceProvider,
    private loadingController:LoadingController,
    public toastCtrl: ToastController
    ) {
     // this.initializeItems();
     this.items=["Dakar","Thiès","Tambacounda"]
  }
  //
  initializeItems() {
    this.items=  [
      "Dakar",
      "Diourbel",
      "Fatick",
      "Kaffrine",
      "Kaolack",
      "Kédougou",
      "Kolda",
      "Louga",
      "Matam",
      "Saint-Louis",
      "Sédhiou",
      "Tambacounda",
      "Thiès",
      "Ziguinchor"
    ]
  }
//
getItems(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
    this.ville ="Dakar";
    this.getMeteo(this.ville);
  }
  //onSubmit
  onSubmit(dataForm){
    console.log(dataForm);
    this.meteo ="";

    this.getMeteo(dataForm.ville);
  }
  //onClickVille
  onClickVille(ville:string){
    this.meteo ="";
    this.getMeteo(ville);
    console.log(ville);
    this.items=[
      ville
    ]
  }
   //getMeteo
   getMeteo(ville:string){
     if(ville){
           let loading =this.loadingController.create({
          content:"Chargement ..."
        });
        loading.present();
        this.myService.getMeteo(ville)
        .subscribe(
          data => {
            this.meteo = data;
            console.log(data);
            loading.dismiss();
          },
          err =>{
            console.log(err);
            loading.dismiss();
          }
        )
        ;
     }else{
      const toast = this.toastCtrl.create({
        message: 'Ville non renseignez !!!',
        duration: 3000
      });
      toast.present();
     }


  }

}
