import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';

import * as _ from 'lodash';

@Injectable()
export class ShoppingListService {

    private ingredients: Ingredient[] = [];

    addOneIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]): void {
        this.ingredients = _.concat(this.ingredients, ingredients);
    }

    editIngredient(name: string): Ingredient[] {
        
    }

    removeIngredient(name: string): Ingredient[] {

    }

    getAllIngredients(): Ingredient[] {
        return this.ingredients;
    }

    getIngredient(name: string): Ingredient {
        let ingredient: Ingredient = _.filter(this.ingredients, ingredient => ingredient.name === name);
        return ingredient;
    }

}