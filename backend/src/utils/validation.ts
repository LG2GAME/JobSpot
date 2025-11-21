interface RegistrationInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export function validateRegistration({
  email,
  password,
  confirmPassword,
}: RegistrationInputs): { message: string; status: number } | null | undefined {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !password || !confirmPassword) {
    return { message: "All fields are required.", status: 400 };
  }
  if (password !== confirmPassword) {
    return { message: "Passwords do not match.", status: 400 };
  }

  if (!emailRegex.test(email)) {
    return { message: "Invalid email format.", status: 400 };
  }

  return null;
}

interface LoginInputs {
  email: string;
  password: string;
}

export function validateLogin({ email, password }: LoginInputs) {
  if (!email || !password) {
    return { message: "All fields are required.", status: 400 };
  }

  return null;
}
