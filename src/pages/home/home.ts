import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  home(){
    this.navCtrl.push(HomePage)
  }
  product(){
    this.navCtrl.push(ProductPage)
  }
  contac(){
    this.navCtrl.push(HomePage)
  }
  tentangkami(){
    this.navCtrl.push(HomePage)
  }

  
contact() {
  this.navCtrl.push(ProductPage)
}  



  productDetail() {
    this.navCtrl.push(ProductDetailPage)}

  }

