import { Component, inject } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from './header/header.component';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, NgClass, HeaderComponent],
})
export class AppComponent {
  title = 'start';
  loader = false;

  constructor() {
    const router = inject(Router);
    router.events
      .pipe(
        filter((events) => events instanceof NavigationStart),
        takeUntilDestroyed()
      )
      .subscribe(() => (this.loader = true));
    router.events
      .pipe(
        filter((events) => events instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => (this.loader = false));
  }
}
