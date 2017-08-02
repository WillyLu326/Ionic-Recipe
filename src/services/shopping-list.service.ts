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

    editIngredient(name: string, newIngredient: Ingredient) {
        let ingredient: Ingredient = _.filter(this.ingredients, ingredient => ingredient.name === name);
        let index = _.indexOf(this.ingredients, ingred => ingred === ingredient);
        this.ingredients.splice(index, 1, newIngredient);
    }

    removeIngredient(name: string) {
        let ingredient: Ingredient = _.filter(this.ingredients, ingredient => ingredient.name === name);
        let index = _.indexOf(this.ingredients, ingred => ingred === ingredient);
        this.ingredients.splice(index, 1);
    }

    getAllIngredients(): Ingredient[] {
        return this.ingredients;
    }

    getIngredient(name: string): Ingredient {
        let ingredient: Ingredient = _.filter(this.ingredients, ingredient => ingredient.name === name);
        return ingredient;
    }

}