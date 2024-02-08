import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'recipes',
    loadChildren: () => import('./recipe/recipe.routes'),
  },
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
];
