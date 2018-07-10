import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateAnAccountPage } from '../create-an-account/create-an-account';
import { PreferencesPage } from '../preferences/preferences';
import { UpdateInformationsPage } from '../update-informations/update-informations';
import { HeySellerPage } from '../hey-seller/hey-seller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToCreateAnAccount(params){
    if (!params) params = {};
    this.navCtrl.push(CreateAnAccountPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.push(PreferencesPage);
  }goToUpdateInformations(params){
    if (!params) params = {};
    this.navCtrl.push(UpdateInformationsPage);
  }goToHeySeller(params){
    if (!params) params = {};
    this.navCtrl.push(HeySellerPage);
  }
}
