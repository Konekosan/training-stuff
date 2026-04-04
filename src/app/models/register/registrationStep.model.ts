export interface Step1Data {
  nom: string | null;
  prenom: string | null;
  email: string | null;
  dateNaissance: Date | null;
}

export interface Step2Data {
  identifiant: string | null;
  hashed_password: string | null;
  sexe: string | null;
}

export interface Step3Data {
  adresse: string | null;
}

export interface RegisterData {
  step1: Partial<Step1Data>;
  step2: Partial<Step2Data>;
  step3: Partial<Step3Data>;
}