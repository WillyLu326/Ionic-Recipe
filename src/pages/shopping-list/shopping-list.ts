import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../../services/shopping-list.service';

import { Ingredient } from '../../model/ingredient';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  private ingredients: Ingredient[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private shoppingListService: ShoppingListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  onAddItem(form: NgForm) {
    this.shoppingListService.addOneIngredient(form.value);
    form.reset();
    this.ingredients = this.shoppingListService.getAllIngredients();
  }

}
