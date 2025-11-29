export interface RegistrationInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export type ValidationError =
  | { field: string; message: string; status: number }
  | null
  | undefined;
