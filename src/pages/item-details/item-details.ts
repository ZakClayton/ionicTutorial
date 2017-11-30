import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ItemMoreDetailsPage} from "../item-more-details/item-more-details";


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemMoreDetailsPage, {
      selectedItem: item
    });
  }
}
