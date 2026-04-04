import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterStateService } from '../register-state.service';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component implements OnInit {
  form = this.fb.group({
    adresse: this.fb.control<string | null>('', Validators.required)
  });

  constructor(
    private fb: FormBuilder,
    private state: RegisterStateService
  ) {}

  ngOnInit(): void {
    this.state.setForm('step3', this.form);

    const savedData = this.state.getData('step3');
    if (savedData) {
      this.form.patchValue(savedData);
    }

    this.form.valueChanges.subscribe(value => {
      this.state.setData('step3', value);
    });
  }
}