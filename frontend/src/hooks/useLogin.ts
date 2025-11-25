// src/hooks/useLogin.ts – FINALNA, DZIAŁAJĄCA WERSJA
import { api } from "@api/api";
import { useAuthStore } from "@store/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const loginUser = async (email: string, password: string) => {
    setIsLoading(true);
    setGeneralError(null);

    try {
      const response = await api.post("/login.php", {
        email,
        password,
      });

      const user = response.data.user;

      useAuthStore.getState().login(user);
      navigate("/account/profile");
    } catch (error: any) {
      console.error("Login error:", error);
      const msg =
        error.response?.data?.message ||
        "Nie udało się zalogować. Sprawdź dane.";
      setGeneralError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginUser, isLoading, generalError };
};
