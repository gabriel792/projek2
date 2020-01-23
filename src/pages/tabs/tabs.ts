import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CartPage } from '../cart/cart';
import { TransaksiPage } from '../transaksi/transaksi';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  aboutRoot = HomePage
  cartRoot = CartPage
  transaksiRoot = TransaksiPage
  profileRoot = ProfilePage


  constructor(public navCtrl: NavController) {}

}
