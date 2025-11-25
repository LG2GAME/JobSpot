import { isAxiosError } from "axios";
import { useAuthStore } from "@store/authStore";
import type { AuthResponse } from "@ltypes/auth";
import { useState } from "react";
import { api } from "@api/api";
import { useNavigate } from "react-router-dom";

interface LoginUser {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface BackendError {
  field?: string;
  message: string;
}

export const useLogin = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const loginUser = async ({ email, password, rememberMe }: LoginUser) => {
    setIsLoading(true);
    setGeneralError(null);
    setFieldErrors({});

    try {
      const response = await api.post<AuthResponse>("/login.php", {
        email,
        password,
        rememberMe,
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

  return { loginUser, isLoading, generalError, fieldErrors };
};
