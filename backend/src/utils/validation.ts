interface RegistrationInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export function validateRegistration({
  email,
  password,
  confirmPassword,
}: RegistrationInputs):
  | { field: string; message: string; status: number }
  | null
  | undefined {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return {
      field: "email",
      message: "Adres e-mail jest wymagany.",
      status: 400,
    };
  }
  if (!emailRegex.test(email)) {
    return {
      field: "email",
      message: "Podaj poprawny adres e-mail.",
      status: 400,
    };
  }
  if (!password) {
    return {
      field: "password",
      message: "Hasło jest wymagane.",
      status: 400,
    };
  }
  if (password !== confirmPassword) {
    return {
      field: "confirmPassword",
      message: "Hasła nie są takie same.",
      status: 400,
    };
  }

  return null;
}

interface LoginInputs {
  email: string;
  password: string;
}

export function validateLogin({ email, password }: LoginInputs) {
  if (!email) {
    return {
      field: "email",
      message: "Adres e-mail jest wymagany.",
      status: 400,
    };
  }
  if (!password) {
    return {
      field: "password",
      message: "Hasło jest wymagane.",
      status: 400,
    };
  }

  return null;
}
