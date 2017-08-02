import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Injectable()
export class ShoppingListService {

    private ingredients: Ingredient[] = [];

    addOneIngredient(ingredient: Ingredient): Ingredient[] {
        this.ingredients.push(ingredient);
        return this.ingredients;
    }

    addIngredients(ingredients: Ingredient[]): Ingredient[] {
        
    }

    editIngredient(name: string): Ingredient {

    }

    removeIngredient(name: string): Ingredient[] {

    }

    getAllIngredients(): Ingredient[] {

    }

    getIngredient(name: string): Ingredient {

    }

}