import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { RegisterStateService } from '../register-state.service';
import { RegisterService } from '../../../services/register/register.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatStepperModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  steps = ['step1', 'step2', 'step3', 'summary'] as const;

  constructor(
    public router: Router,
    private state: RegisterStateService,
    private registerService: RegisterService
  ) {
  
  }

  get currentStepIndex(): number {
    const url = this.router.url;
    const index = this.steps.findIndex(step => url.includes(step));
    return index >= 0 ? index : 0;
  }

  previous() {
    const current = this.currentStepIndex;

    if (current === 0) {
      this.router.navigate(['/login']);
      return;
    }

    this.router.navigate(['/register', this.steps[current - 1]]);
  }

  next() {
    const current = this.currentStepIndex;
    const currentStepKey = `step${current + 1}` as 'step1' | 'step2' | 'step3';

    if (current < 3) {
      const form = this.state.getForm(currentStepKey);

      if (form?.invalid) {
        form.markAllAsTouched();
        return;
      }
    }

    if (current < this.steps.length - 1) {
      this.router.navigate(['/register', this.steps[current + 1]]);
      return;
    }

    this.submit();
  }

  submit() {
    const payload = this.state.buildPayload();
    console.log('on passe submit');
    console.log(payload);
    this.registerService.register(payload).subscribe({
      next: (res) => {
        console.log('Inscription réussie', res);
        this.state.clear();
        this.router.navigate(['/portefolio']);
      },
      error: (err) => {
        console.error('Erreur inscription', err);
      }
    });
  }

  isStepCompleted(step: 'step1' | 'step2' | 'step3'): boolean {
    const form = this.state.getForm(step);
    return !!form?.valid;
  }

  onStepChange(event: StepperSelectionEvent) {
    const targetIndex = event.selectedIndex;
    const currentIndex = event.previouslySelectedIndex;

    if (targetIndex === currentIndex) {
      return;
    }

    if (!this.canNavigateToStep(targetIndex)) {
      return;
    }

    this.router.navigate(['/register', this.steps[targetIndex]]);
  }

  private canNavigateToStep(targetIndex: number): boolean {
    if (targetIndex === 0) return true;
    if (targetIndex === 1) return this.isStepCompleted('step1');
    if (targetIndex === 2) return this.isStepCompleted('step1') && this.isStepCompleted('step2');
    if (targetIndex === 3) return this.isStepCompleted('step1') && this.isStepCompleted('step2') && this.isStepCompleted('step3');

    return false;
  }
}