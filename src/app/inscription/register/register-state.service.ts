import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Step1Data, Step2Data, Step3Data, RegisterData } from '../../models/register/registrationStep.model';

@Injectable({
  providedIn: 'root'
})

export class RegisterStateService {
  private data: Partial<RegisterData> = {};
  private forms: Partial<Record<keyof RegisterData, FormGroup>> = {};

  setData<K extends keyof RegisterData>(step: K, value: RegisterData[K]): void {
    this.data[step] = value;
  }

  getData<K extends keyof RegisterData>(step: K): RegisterData[K] | undefined {
    return this.data[step] as RegisterData[K] | undefined;
  }

  setForm<K extends keyof RegisterData>(step: K, form: FormGroup): void {
    this.forms[step] = form;
  }

  getForm<K extends keyof RegisterData>(step: K): FormGroup | undefined {
    return this.forms[step];
  }

  clear(): void {
    this.data = {};
    this.forms = {};
  }

  buildPayload() {
    const step1 = this.data.step1;
    const step2 = this.data.step2;
    const step3 = this.data.step3;

    return {
      nom: step1?.nom ?? '',
      prenom: step1?.prenom ?? '',
      email: step1?.email ?? '',
      hashed_password: step2?.hashed_password ?? '',
      sexe: step2?.sexe ?? '',
      identifiant: step2?.identifiant ?? '',
      adresse: step3?.adresse ?? '',
      date_naissance: this.formatDate(step1?.dateNaissance ?? null)
    };
  }

  private formatDate(date: Date | null): string {
    if (!date) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}