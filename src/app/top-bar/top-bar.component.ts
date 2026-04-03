import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/authentification/auth.service';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'; // ✅ IMPORTANT

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  authService = inject(AuthService);
  router = inject(Router)

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
