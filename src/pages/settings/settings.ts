import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city:string;
  state:string;
  //platform;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private storage:Storage,
   platform: Platform) {
      this.storage.get('location').then((val) =>{
        if(val!=null){
          let location = JSON.parse(val);
          this.city = location.city;
          this.state = location.state
        }else{
          this.city='Mumbai';
          this.state='MH';
        }
      });     
      /* platform.registerBackButtonAction(()=> {
        if(navCtrl.canGoBack()){
          return false;
         // this.navCtrl.pop().then(() => {}, () => {});
        }
      },500); */
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
 saveForm(){
  let location = {
    city: this.city,
    state: this.state
  };
  //console.log(location);
  this.storage.set('location',JSON.stringify(location));
  this.navCtrl.push(HomePage);
}
    //platform.registerBackButton
    

}
