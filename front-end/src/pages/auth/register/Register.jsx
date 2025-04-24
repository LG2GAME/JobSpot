import { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "@components/common/headers/HeaderContainer";
import { FormContainer } from "@components/common/auth/form-container/FormContainer";
import { Field } from "@components/common/auth/field/Field";

import { handleChange, handleSubmit } from "@utils/formUtils";

import "../Auth.scss";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repPassword: "",
  });

  return (
    <section className="auth">
      <FormContainer>
        <HeaderContainer>
          <h1 className="page-title page-title--turq">Dołącz do nas</h1>
          <p className="side-text">Twój nowy początek czeka!</p>
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
          <Field
            id="rep-password"
            type="password"
            content="Powtórz hasło"
            value={formData.repPassword}
            onChange={(e) => handleChange(e, setFormData)}
          />
          <div className="form-content-more">
            <p className="button-text button-text--orange">
              Rejestrując się, akceptujesz regulamin i politykę prywatności
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-white-br button-text button-text--orange"
          onClick={(e) => handleSubmit(e, formData)}
        >
          Zarejestruj się
        </button>
        <div className="form-footer button-text button-text--slate">
          <p>Masz już konto? Nie trać czasu!</p>
          <Link to="/login" className="button-text--orange">
            Zaloguj się
          </Link>
        </div>
      </FormContainer>
    </section>
  );
}
