import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  count1:number=1;
  count2:number;
  count3:number;
  constructor(public navCtrl: NavController) {
    this.count1=1;
    this.count2=1;
    this.count3=1;
  }

    incrementCount(id:number): void{
    if(id==1){
      this.count1++;
    }
    if(id==2){
      this.count2++;
    }
    if(id==3){
      this.count3++;
    }
  }

  decementCount(id:number): void{
    if(id==1){
      this.count1--;
    }
    if(id==2){
      this.count2--;
    }
    if(id==3){
      this.count3--;
    }
  }
  
}
