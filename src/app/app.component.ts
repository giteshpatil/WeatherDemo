import { Component } from '@angular/core';
import { App,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
//import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
      alertCtrl: AlertController,
    app: App){//,
  //    public nav: NavController){
        platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
       /* platform.registerBackButtonAction(()=> {
        if(this.nav.canGoBack()){
            this.nav.pop().then(() => {}, () => {});
        }
      },500); */

      platform.registerBackButtonAction(()=>{
        let nav = app.getActiveNavs()[0];
  //      let activeView = nav.getActive();
/* 
        if(activeView.name === ""){

        }else{ */
          if(nav.canGoBack()){
            nav.pop();
          }else{
            const alert = alertCtrl.create({
              title: 'App Termination',
              message: 'Do you want to close the app?',
                            buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Application exit prevented!');
                                }
                            },{
                                text: 'Close App',
                                handler: () => {
                                    platform.exitApp(); // Close this application
                                }
                            }]
            });
            alert.present();
          }
        //}
      });
    });
  }
}
