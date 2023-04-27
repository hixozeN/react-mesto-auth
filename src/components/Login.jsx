import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
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
    props.onLogin({ email, password });
    setFormValues({ email: "", password: "" });
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form name="register" className="auth__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="auth__input"
          value={email ?? ''}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />
        <span className="auth__input-error email-error"></span>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          className="auth__input"
          value={password ?? ''}
          onChange={handleInputChange}
          autoComplete="current-password"
          required
        />
        <span className="auth__input-error password-error"></span>
        <button type="submit" className="auth__submit-button">
          {props.btnName}
        </button>
        <Link to="/sign-up" className="auth__link">
          Нет аккаунта? Зарегистрируйтесь
        </Link>
      </form>
    </div>
  );
};

export default Login;
