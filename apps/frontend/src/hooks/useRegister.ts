import { api } from "@api/api";
import type {
  ApiErrorResponse,
  AuthResponse,
  RegisterCredentials,
} from "@ltypes";
import { useAuthStore } from "@store/authStore";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const registerUser = async ({
    email,
    password,
    confirmPassword,
  }: RegisterCredentials) => {
    setIsLoading(true);
    setGeneralError(null);
    setFieldErrors({});

    try {
      const response = await api.post<AuthResponse>("/api/register", {
        email,
        password,
        confirmPassword,
      });

      const { user } = response.data;

      useAuthStore.getState().login(user);

      navigate("/account/profile");
    } catch (error) {
      setFieldErrors({});

      if (isAxiosError(error) && error.response) {
        const errorData = error.response.data as ApiErrorResponse;

        if (errorData.field) {
          setFieldErrors({ [errorData.field]: errorData.message });
          setGeneralError(errorData.message);
        } else {
          setGeneralError(errorData.message);
        }
      } else {
        setGeneralError("Wystąpił nieznany błąd.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading, generalError, fieldErrors };
};
