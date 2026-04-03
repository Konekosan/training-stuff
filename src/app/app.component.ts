import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AuthService } from './services/authentification/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TopBarComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'training-stuff';
  private authService = inject(AuthService);

  ngOnInit(): void {
    if (this.authService.isAuthenticated()){
      this.authService.loadMe().subscribe({
        error: () => this.authService.logout()
      })
    }
  }


}
