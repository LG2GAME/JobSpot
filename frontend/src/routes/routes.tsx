import { createBrowserRouter } from "react-router-dom";
import {
  Layout,
  ErrorLayout,
  AuthLayout,
  AccountLayout,
} from "@components/layout";
import {
  Account,
  Home,
  Login,
  NotFound,
  Register,
  UnderConstruction,
} from "@pages/index";

// src/router.tsx

export const plannedRoutes = [
  "/career",
  "/blog",
  "/about-us",
  "/terms",
  "/privacy-policy",
  "/cookies",
  "/account/forgot-password",
];

export const router = createBrowserRouter([
  // GRUPA 0: TRASY BŁĘDÓW I W BUDOWIE (globalne)
  {
    element: <ErrorLayout />,
    children: [
      { path: "*", element: <NotFound /> },
      ...plannedRoutes.map((path) => ({
        path: path,
        element: <UnderConstruction />,
      })),
    ],
  },

  // ------------------------------------------------------------------
  // GRUPA 1: TRASY GŁÓWNE (PUBLICZNY LAYOUT Z HEADER/FOOTER)
  // ------------------------------------------------------------------
  {
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },

  // ------------------------------------------------------------------
  // GRUPA 2: TRASY AUTORYZACJI (LOGOWANIE/REJESTRACJA)
  // ------------------------------------------------------------------
  {
    path: "/account",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // ------------------------------------------------------------------
  // GRUPA 3: TRASY PRYWATNE (PANEL KONTA/SIDEBAR)
  // Wymagają tu dodatkowego Guarda (PrivateRoute) - PAMIĘTAJ O NIM!
  // ------------------------------------------------------------------
  {
    path: "/account",
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <Account />,
      },
      {
        path: "settings",
        element: <Account />,
      },
    ],
  },
]);
