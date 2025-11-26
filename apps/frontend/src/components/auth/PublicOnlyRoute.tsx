import { useAuthStatus } from "@hooks/useAuthStatus";
import React from "react";
import { Navigate } from "react-router-dom";

const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthStatus();

  if (isLoggedIn) {
    return <Navigate to="/account/profile" replace />;
  }

  return children;
};

export default PublicOnlyRoute;
