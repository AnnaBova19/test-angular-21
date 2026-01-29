import { Component, DOCUMENT, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  auth0 = inject(AuthService);
  isAuthenticated$ = this.auth0.isAuthenticated$;
  user$ = this.auth0.user$;
  document: Document = inject(DOCUMENT);

  logout() {
    this.auth0.logout({ logoutParams: { returnTo: this.document.location.origin } });
  }
}