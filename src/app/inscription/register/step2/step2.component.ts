import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterStateService } from '../register-state.service';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component implements OnInit {
  form = this.fb.group({
    identifiant: this.fb.control<string | null>('', Validators.required),
    hashed_password: this.fb.control<string | null>('', [Validators.required, Validators.minLength(6)]),
    confirm_pwd: this.fb.control<string | null>('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private fb: FormBuilder,
    private state: RegisterStateService
  ) {}

  ngOnInit(): void {
    this.state.setForm('step2', this.form);

    const savedData = this.state.getData('step2');
    if (savedData) {
      this.form.patchValue(savedData);
    }

    this.form.valueChanges.subscribe(value => {
      this.state.setData('step2', value);
    });
  }

  
}