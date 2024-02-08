import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { IdeasComponent } from '../ideas/ideas.component';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
    standalone: true,
    imports: [
    RouterLink,
    MatButton,
    MatIcon,
    IdeasComponent
],
})
export class RecipeListComponent {
  @Input({ required: true })
  recipes?: Recipe[];

  displayIdeas = false;
}
