import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css',
  providers: provideNativeDateAdapter(),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component {

  constructor(private router : Router){

  }

  previous() {
    this.router.navigate(['/register/step-1']);
  }

  next() {
    this.router.navigate(['/register/step-2']);
  }

}
