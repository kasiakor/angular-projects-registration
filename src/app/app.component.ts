import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public auth: AuthService) {}

  // inject router to navigate programmatically if needed
  router = inject(Router);

  get isLoggedIn(): boolean {
    console.log('Checking login status:', this.auth.isLoggedIn());
    return this.auth.isLoggedIn();
  }

  onLogout(): void {
    this.auth.clearUserId();
    alert('You have been logged out.');
    this.router.navigate(['/home']);
  }
}
