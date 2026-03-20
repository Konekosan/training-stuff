import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {

  constructor(private router: Router){

  }

  previous() {
    this.router.navigate(['/register/step1']);
  }

  next() {

  }

}
