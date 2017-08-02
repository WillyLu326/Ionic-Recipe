import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';

import * as _ from 'lodash';

@Injectable()
export class ShoppingListService {

    private ingredients: Ingredient[] = [];

    addOneIngredient(ingredient: Ingredient): Ingredient[] {
        this.ingredients.push(ingredient);
        return this.ingredients;
    }

    addIngredients(ingredients: Ingredient[]): Ingredient[] {
        this.ingredients = _.concat(this.ingredients, ingredients);
        return this.ingredients;
    }

    editIngredient(name: string): Ingredient[] {
        
    }

    removeIngredient(name: string): Ingredient[] {

    }

    getAllIngredients(): Ingredient[] {

    }

    getIngredient(name: string): Ingredient {

    }

}