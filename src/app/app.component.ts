import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PreferencesPage } from '../pages/preferences/preferences';
import { UpdateInformationsPage } from '../pages/update-informations/update-informations';
import { ContactsPage } from '../pages/contacts/contacts';
import { CartPage } from '../pages/cart/cart';

import {TabsControllerPage} from '../pages/tabs-controller/tabs-controller';
import { HeySellerPage } from '../pages/hey-seller/hey-seller';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    //rootPage:any = HeySellerPage;
    rootPage:any = TabsControllerPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHeySeller(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HeySellerPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PreferencesPage);
  }goToUpdateInformations(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UpdateInformationsPage);
  }goToContacts(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactsPage);
  }goToCart(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CartPage);
  }
}
