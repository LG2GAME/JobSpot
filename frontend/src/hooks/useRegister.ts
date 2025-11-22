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

export const useRegister = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerUser = async ({
    email,
    password,
    confirmPassword,
  }: RegisterUser) => {
    setIsLoading(true);
    setError(null);

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
      let errorMessage = "Unknown server error.";

      if (isAxiosError(error) && error.response) {
        console.error("Server Error Response:", error.response);
        errorMessage = error.response.data?.message || error.message;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading, error };
};
