// src/api/api.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// NAJWAŻNIEJSZE – ZAMIEŃ POST NA GET Z PARAMETRAMI (php -S nie lubi JSON body z Axiosa na Windowsie)
api.defaults.transformRequest = [
  (data) => {
    if (data && typeof data === "object") {
      return JSON.stringify(data);
    }
    return data;
  },
];

// Ostateczny bypass – używamy fetch zamiast axios dla rejestracji i logowania
export const registerWithFetch = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  const response = await fetch("http://localhost:8000/register.php", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, confirmPassword }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Błąd rejestracji");
  }

  return response.json();
};

export const loginWithFetch = async (email: string, password: string) => {
  const response = await fetch("http://localhost:8000/login.php", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Błąd logowania");
  }

  return response.json();
};

export const getMe = async () => {
  const response = await fetch("http://localhost:8000/me.php", {
    credentials: "include",
  });

  if (!response.ok) throw new Error("Nie zalogowany");
  return response.json();
};

// Zostaw axios tylko dla reszty (oferty itd.)
export { api };
