import { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "@components/common/headers/HeaderContainer";
import { FormContainer } from "@components/common/auth/form-container/FormContainer";
import { Field, CheckBox } from "@components/common/auth/field/Field";

import { handleChange, handleSubmit } from "@utils/formUtils";

import "../Auth.scss";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  return (
    <section className="auth">
      <FormContainer>
        <HeaderContainer>
          <h1 className="page-title page-title--turq">Witaj z powrotem</h1>
          <p className="side-text">Cieszymy się, że znów jesteś z nami.</p>
        </HeaderContainer>
        <div className="form-content">
          <Field
            id="email"
            type="email"
            content="Email"
            value={formData.email}
            onChange={(e) => handleChange(e, setFormData)}
          />
          <Field
            id="password"
            type="password"
            content="Hasło"
            value={formData.password}
            onChange={(e) => handleChange(e, setFormData)}
          />
          <div className="form-content-more">
            <CheckBox
              id="remember-me"
              content="zapamiętaj mnie"
              checked={formData.rememberMe}
              onChange={(e) => handleChange(e, setFormData)}
            />
            <a href="#">Zapomniałem hasło</a>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-white-br button-text button-text--orange"
          onClick={(e) => handleSubmit(e, formData)}
        >
          Zaloguj się
        </button>
        <div className="form-footer button-text button-text--slate">
          <p>Nie masz jeszcze konta? To nic!</p>
          <Link to="/register" className="button-text--orange">
            Zarejestruj się
          </Link>
        </div>
      </FormContainer>
    </section>
  );
}
