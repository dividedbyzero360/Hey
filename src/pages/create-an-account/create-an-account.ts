import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PreferencesPage } from '../preferences/preferences';
import { UpdateInformationsPage } from '../update-informations/update-informations';
import { HeySellerPage } from '../hey-seller/hey-seller';

@Component({
  selector: 'page-create-an-account',
  templateUrl: 'create-an-account.html'
})
export class CreateAnAccountPage {

  constructor(public navCtrl: NavController) {
  }
  goToPreferences(params){
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
