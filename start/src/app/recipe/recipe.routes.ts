import { Route } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { recipesResolver } from './resolvers/recipes.resolver';
import { recipeResolver } from './resolvers/recipe.resolver';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export default [
  {
    path: '',
    component: RecipeListComponent,
    resolve: {
      recipes: recipesResolver,
    },
  },
  {
    path: ':id/edit',
    component: RecipeFormComponent,
    resolve: {
      recipe: recipeResolver,
    },
  },
  {
    path: 'create',
    component: RecipeFormComponent,
  },
  {
    path: 'shopping',
    component: ShoppingListComponent,
  },
  {
    path: ':id',
    component: RecipeComponent,
    resolve: {
      recipe: recipeResolver,
    },
  },

  {
    path: '**',
    redirectTo: '',
  },
] as Route[];
