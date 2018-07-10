import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UpdateInformationsPage } from '../update-informations/update-informations';
import { HeySellerPage } from '../hey-seller/hey-seller';

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html'
})
export class PreferencesPage {

  constructor(public navCtrl: NavController) {
  }
  goToUpdateInformations(params){
    if (!params) params = {};
    this.navCtrl.push(UpdateInformationsPage);
  }goToHeySeller(params){
    if (!params) params = {};
    this.navCtrl.push(HeySellerPage);
  }
}
