import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onRegister({ email, password });
    setFormValues({ email: "", password: "" });
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form name="register" className="auth__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="reg-email"
          id="reg-email"
          placeholder="Email"
          className="auth__input"
          value={email ?? ""}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />
        <span className="auth__input-error reg-email-error"></span>
        <input
          type="password"
          name="reg-password"
          id="reg-password"
          placeholder="Пароль"
          className="auth__input"
          value={password ?? ""}
          onChange={handleInputChange}
          autoComplete="new-password"
          required
        />
        <span className="auth__input-error reg-password-error"></span>
        <button className="auth__submit-button">{props.btnName}</button>
        <Link to="/sign-in" className="auth__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
};

export default Register;
