import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { trigger, transition, animate, style } from '@angular/animations';

import { ShoppingListService } from '../../services/shopping-list.service';

import { Ingredient } from '../../model/ingredient';
import 'web-animations-js/web-animations.min';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
  animations: [
    trigger('myAnimation', [
      transition(
        ':enter', [
          style({ opacity: 0 }),
          animate('600ms ease-in-out', style({ opacity: 1 }))
        ]
      ),
      transition(
        ':leave', [
          style({ opacity: 1 }),
          animate('600ms ease-in-out', style({ opacity: 0 }))
        ]
      )
    ])
    
  ]
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

  ionViewWillEnter() {
    //this.ingredients = this.shoppingListService.getAllIngredients();
    console.log('ionViewWillEnter ShoppingListPage');
  }

  onAddItem(form: NgForm) {
    this.shoppingListService.addOneIngredient(form.value);
    form.reset();
    this.ingredients = this.shoppingListService.getAllIngredients();
  }

  onDelete(ingredient: Ingredient) {
    this.shoppingListService.removeIngredient(ingredient);
    this.ingredients = this.shoppingListService.getAllIngredients();
  }

}
