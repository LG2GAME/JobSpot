import { ApiErrorResponseError } from "@jobspot/types";
import { LoginInputs, RegistrationInputs } from "@ltypes";

export function validateRegistration({
  email,
  password,
  confirmPassword,
}: RegistrationInputs): ApiErrorResponseError | null {
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
