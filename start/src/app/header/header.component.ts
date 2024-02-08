import { Component, inject } from '@angular/core';
import { ShoppingService } from '../recipe/services/shopping.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatBadge } from '@angular/material/badge';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    MatToolbar,
    MatBadge,
    MatButton,
  ],
})
export class HeaderComponent {
  protected recipeSelectedEvent = inject(ShoppingService).recipeSelectedEvent;
}
