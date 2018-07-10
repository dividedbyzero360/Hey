import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeySellerPage } from '../hey-seller/hey-seller';
import { ChatPage } from '../chat/chat';
import { LoginPage } from '../login/login';
import { CreateAnAccountPage } from '../create-an-account/create-an-account';
import { PreferencesPage } from '../preferences/preferences';
import { UpdateInformationsPage } from '../update-informations/update-informations';


@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HeySellerPage;
  tab2Root: any = ChatPage;
  tab3Root: any = LoginPage;
  constructor(public navCtrl: NavController) {
  }
  goToHeySeller(params){
    if (!params) params = {};
    this.navCtrl.push(HeySellerPage);
  }goToChat(params){
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCreateAnAccount(params){
    if (!params) params = {};
    this.navCtrl.push(CreateAnAccountPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.push(PreferencesPage);
  }goToUpdateInformations(params){
    if (!params) params = {};
    this.navCtrl.push(UpdateInformationsPage);
  }
}
