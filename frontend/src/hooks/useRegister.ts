import { api } from "@api/api";
import type { AuthResponse } from "@ltypes/auth";
import { useAuthStore } from "@store/authStore";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterUser {
  email: string;
  password: string;
  confirmPassword: string;
}

interface BackendError {
  field?: string;
  message: string;
}

export const useRegister = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const registerUser = async ({
    email,
    password,
    confirmPassword,
  }: RegisterUser) => {
    setIsLoading(true);
    setGeneralError(null);
    setFieldErrors({});

    try {
      const response = await api.post<AuthResponse>("/register.php", {
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
        const errorData = error.response.data as BackendError;

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
