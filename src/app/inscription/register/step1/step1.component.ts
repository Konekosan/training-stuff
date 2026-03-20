import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterStateService } from '../register-state.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    MatStepperModule
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css',
  providers: provideNativeDateAdapter(),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component {

  currentStep = 1;

  form = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', [ Validators.required, Validators.email ]],
    dateNaissance: ['', Validators.required]
  });

  constructor(private router : Router,
              private fb: FormBuilder,
              private state: RegisterStateService
  ){}

  previous() {
    this.router.navigate(['/']);
  }

  next() {
    console.log('clicked');
    console.log(this.form.value);
    console.log(this.form.valid);
    if (this.form.valid) {
      console.log('le form est valide');
      this.state.setData('step1', this.form.value);
      this.router.navigate(['/register/step2']);      
    } else {
      this.form.markAllAsTouched();
    }
  }

}
