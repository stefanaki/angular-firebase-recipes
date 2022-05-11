import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Mac and Cheese',
      'Traditional english recipe',
      `https://i.pinimg.com/originals/a8/c5/ab/a8c5abf4b3b1af39cd28ce2de7517953.jpg`,
      [new Ingredient('mac', 10), new Ingredient('cheese', 2)]
    ),
    new Recipe(
      'Spaghetti with Pesto',
      'Italian munch',
      `https://www.acouplecooks.com/wp-content/uploads/2020/08/Spaghetti-Pesto-001.jpg`,
      [new Ingredient('spaghetti', 10), new Ingredient('persil', 2)]
    ),
    new Recipe(
      'Chicken Korma',
      'Fucking epic',
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/03/Chicken-Korma-SQ.jpg',
      [new Ingredient('chicken thighs', 12), new Ingredient('spice', 100)]
    ),
  ];

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
