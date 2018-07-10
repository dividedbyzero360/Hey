import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HeySellerPage } from '../pages/hey-seller/hey-seller';
import { PreferencesPage } from '../pages/preferences/preferences';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { CreateAnAccountPage } from '../pages/create-an-account/create-an-account';
import { UpdateInformationsPage } from '../pages/update-informations/update-informations';
import { LoginPage } from '../pages/login/login';
import { CartPage } from '../pages/cart/cart';
import { ContactsPage } from '../pages/contacts/contacts';
import { ChatPage } from '../pages/chat/chat';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HeySellerPage,
    PreferencesPage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    CreateAnAccountPage,
    UpdateInformationsPage,
    LoginPage,
    CartPage,
    ContactsPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HeySellerPage,
    PreferencesPage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    CreateAnAccountPage,
    UpdateInformationsPage,
    LoginPage,
    CartPage,
    ContactsPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}