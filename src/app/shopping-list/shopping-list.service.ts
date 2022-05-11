import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private shoppingList: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tomato', 5),
  ];

  getIngredients() {
    return this.shoppingList.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.ingredientsChanged.next(this.shoppingList);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingList.push(...ingredients);
    this.ingredientsChanged.next(this.shoppingList.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.shoppingList[index] = newIngredient;
    this.ingredientsChanged.next(this.shoppingList.slice());
  }

  deleteIngredient(index: number) {
    this.shoppingList.splice(index, 1);
    this.ingredientsChanged.next(this.shoppingList.slice());
  }
}
