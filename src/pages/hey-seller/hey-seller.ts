import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-hey-seller',
  templateUrl: 'hey-seller.html'
})
export class HeySellerPage {

  constructor(public navCtrl: NavController) {
  }

  goToCart(params){
    this.navCtrl.push(CartPage);
  }
  
}
