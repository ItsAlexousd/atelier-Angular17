import { Component, Input } from '@angular/core';
import {  RecipeV2 } from '../../models/recipe';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'app-v2',
    templateUrl: './v2.component.html',
    styleUrl: './v2.component.css',
    standalone: true,
    imports: [MatButton, RouterLink]
})

export class V2Component  {
  @Input({required: true}) recipe!: RecipeV2;
}
