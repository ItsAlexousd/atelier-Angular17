import { Component, Input, inject } from '@angular/core';
import { Recipe } from '../models/recipe';
import { ShoppingService } from '../services/shopping.service';
import { MatButton } from '@angular/material/button';
import { V2Component } from './v2/v2.component';
import { V1Component } from './v1/v1.component';


@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.css',
    standalone: true,
    imports: [
    V1Component,
    V2Component,
    MatButton
],
})
export class RecipeComponent {
  @Input({ required: true })
  recipe?: Recipe;

  private shoppingService = inject(ShoppingService);

  stockerIngredient(recipe: Recipe) {
    this.shoppingService.addSelectedRecipe(recipe);
  }
}
