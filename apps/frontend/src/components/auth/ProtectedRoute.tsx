import { Navigate } from "react-router-dom";
import { useAuthStatus } from "@hooks/useAuthStatus";
import React from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthStatus();

  if (!isLoggedIn) {
    return <Navigate to="/account/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
