import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterStateService } from '../register-state.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css',
  providers: [provideNativeDateAdapter()],
})

export class Step1Component implements OnInit {

  showError: boolean = false;

  form = this.fb.group({
    nom: this.fb.control<string | null>('', Validators.required),
    prenom: this.fb.control<string | null>('', Validators.required),
    email: this.fb.control<string | null>('', [Validators.required, Validators.email]),
    dateNaissance: this.fb.control<Date | null>(null, Validators.required),
    sexe: this.fb.control<string | null>('M', Validators.required)
  });

  constructor(
    private fb: FormBuilder,
    private state: RegisterStateService
  ) {
    
  }

  ngOnInit(): void {
    this.state.setForm('step1', this.form);

    const savedData = this.state.getData('step1');

    if (savedData) {
      this.form.patchValue(savedData);
    }

    this.form.valueChanges.subscribe(value => {
      this.state.setData('step1', value);
    });
  }


}