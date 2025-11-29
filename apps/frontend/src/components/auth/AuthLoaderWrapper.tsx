import { router } from "@routes/routes";
import { RouterProvider } from "react-router-dom";
import { useAuthStatus } from "@hooks/useAuthStatus";

export const AuthLoaderWrapper = () => {
  const { isAuthenticating } = useAuthStatus();

  if (isAuthenticating) return <>Ładowanie</>;

  return <RouterProvider router={router} />;
};

export default AuthLoaderWrapper;
