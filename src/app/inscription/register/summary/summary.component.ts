import { Component } from '@angular/core';
import { RegisterStateService } from '../register-state.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  constructor(private registerService: RegisterStateService){
  }
}
