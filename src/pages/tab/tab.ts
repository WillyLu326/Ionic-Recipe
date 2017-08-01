import { Component } from '@angular/core';

import { ShoppingListPage } from '../shopping-list/shopping-list';
import { RecipesPage } from '../recipes/recipes';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  shoppingListPage: any = ShoppingListPage;
  recipesPage: any = RecipesPage;

}
