import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  preserveWhitespaces: false,
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  getCurrentUser(): string {
    return this.authService.getCurrentUser();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }
}
