import { isAxiosError } from "axios";
import { useAuthStore } from "@store/authStore";
import type { AuthResponse } from "@ltypes/auth";
import { useState } from "react";
import { api } from "@api/api";
import { useNavigate } from "react-router-dom";

interface LoginUser {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async ({ email, password }: LoginUser) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post<AuthResponse>("/api/login", {
        email,
        password,
      });

      const { user } = response.data;

      useAuthStore.getState().login(user);

      navigate("/account/profile");
    } catch (error) {
      let errorMessage = "Unknown server error.";

      if (isAxiosError(error) && error.response) {
        errorMessage = error.response.data?.message || error.message;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginUser, isLoading, error };
};
