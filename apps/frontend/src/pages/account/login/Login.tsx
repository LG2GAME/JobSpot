import { AuthWrapper, Checkbox, Input } from "@components/features";
import { Link } from "react-router-dom";
import * as style from "./login.css";
import { Button } from "@components/common";
import { useCallback, useState, type ChangeEvent } from "react";
import { useLogin } from "@hooks/useLogin";
import type { LoginCredentials } from "@ltypes";

const Login = () => {
  const { loginUser, isLoading, generalError, fieldErrors } = useLogin();

  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      await loginUser({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });
    },
    [formData, loginUser]
  );

  return (
    <AuthWrapper>
      <div className={style.loginHeader}>
        <h3 className={style.loginTitle}>Zaloguj się</h3>
        <p className={style.loginGreeting}>
          Cieszymy się, że znów jesteś z nami.
        </p>
      </div>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!fieldErrors.email || !!generalError}
        />
        <Input
          type="password"
          placeholder="Hasło"
          name="password"
          id="password"
          label="Hasło"
          value={formData.password}
          onChange={handleChange}
          isInvalid={!!fieldErrors.password || !!generalError}
        />
        <div className={style.loginActions}>
          <Checkbox
            type="checkbox"
            name="rememberMe"
            id="remember-me"
            checked={formData.rememberMe}
            onChange={handleChange}
            label="Zapamiętaj mnie"
          />
          <Link
            to="/account/forgot-password"
            className={style.loginCheckboxLink}
          >
            Zapomniałem hasło
          </Link>
        </div>
        {generalError && <p className={style.loginError}>{generalError}</p>}
        <Button theme="border" disabled={isLoading}>
          {isLoading ? "Logowanie..." : "Zaloguj się"}
        </Button>
      </form>
      <div className={style.loginFooter}>
        <p className={style.loginPrompt}>Nie masz jeszcze konta? to nic!</p>
        <Link to="/account/register" className={style.loginLink}>
          Zarejestruj się
        </Link>
      </div>
    </AuthWrapper>
  );
};

export default Login;
