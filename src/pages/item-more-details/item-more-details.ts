import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-item-more-details',
  templateUrl: 'item-more-details.html'
})

export class ItemMoreDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('selectedItem');
  }
}
