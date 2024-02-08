import { Component, Input, inject } from '@angular/core';
import { Recipe } from '../models/recipe';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {
  @Input() recipe?: Recipe;

  private shoppingService = inject(ShoppingService);

  stockerIngredient(recipe: Recipe) {
    this.shoppingService.addSelectedRecipe(recipe);
  }
}
