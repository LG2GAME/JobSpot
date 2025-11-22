import { AuthWrapper, Input } from "@components/features";
import * as style from "./register.css";
import React, { useCallback, useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@components/common";
import { useRegister } from "@hooks/useRegister";

const Register = () => {
  const { registerUser, isLoading, error } = useRegister();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

      await registerUser({
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
    },
    [formData, registerUser]
  );

  return (
    <AuthWrapper>
      <div className={style.registerHeader}>
        {error && <p>{error}</p>}
        <h3 className={style.registerTitle}>Zarejestruj się</h3>
        <p className={style.registerGreeting}>
          Cieszymy się, że postanowiłeś do nas dołączyć.
        </p>
      </div>
      <form className={style.registerForm} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Hasło"
          name="password"
          id="password"
          label="Hasło"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Hasło"
          name="confirmPassword"
          id="confirm-password"
          label="Hasło"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className={style.registerActions}>
          <p>Rejestrując się, akceptujesz regulamin i politykę prywatności</p>
        </div>
        <Button theme="border" disabled={isLoading}>
          {isLoading ? "Rejestracja..." : "Zarejestruj się"}
        </Button>
      </form>
      <div className={style.registerFooter}>
        <p className={style.registerPrompt}>Masz już konto? Nie trać czasu!</p>
        <Link to="/account/register" className={style.registerLink}>
          Zaloguj się
        </Link>
      </div>
    </AuthWrapper>
  );
};

export default Register;
