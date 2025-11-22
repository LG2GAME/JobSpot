import { useEffect, useState } from "react";
import { api } from "@api/api";
import { useAuthStore } from "@store/authStore";
import { isAxiosError } from "axios";

export const useAuthStatus = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const user = useAuthStore((state) => state.user);
  const isLoggedIn = !!user;

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await api.get("/api/me");

        useAuthStore.getState().login(response.data);
      } catch (error) {
        if (isAxiosError(error) && error.response?.status !== 401) {
          console.error("Unknown authentication error:", error);
        }
      } finally {
        setIsAuthenticating(false);
      }
    };

    checkStatus();
  }, []);

  return { isLoggedIn, isAuthenticating };
};
