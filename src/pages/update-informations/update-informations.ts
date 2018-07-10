import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeySellerPage } from '../hey-seller/hey-seller';

@Component({
  selector: 'page-update-informations',
  templateUrl: 'update-informations.html'
})
export class UpdateInformationsPage {

  constructor(public navCtrl: NavController) {
  }
  goToHeySeller(params){
    if (!params) params = {};
    this.navCtrl.push(HeySellerPage);
  }
}
