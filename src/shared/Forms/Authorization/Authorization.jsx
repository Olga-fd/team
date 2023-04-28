import React, { useState } from "react";
import { Input } from "../../utils/Input/Input";
import "../form.css";
import "./auth.css";

export function Authorization() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const handleSubmit = () => {
    console.log(111);
  };
  return (
    <form className="form form-auth" onSubmit={(e) => handleSubmit(e)}>
      <legend className="form__legend">Авторизация</legend>
      <fieldset>
        <label htmlFor="email__auth" className="form__label">
          Электронная почта
        </label>
        <Input
          type="email"
          id="email_auth"
          onInput={(e) => setInputEmail(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="password-auth" className="form__label">
          Пароль
        </label>
        <Input
          type="password"
          id="password-auth"
          onInput={(e) => setInputPassword(e.target.value)}
        />
      </fieldset>
      {/* <Link to="/team"> */}
      <button type="submit" className="form__btn">
        Войти
      </button>
      {/* </Link> */}
    </form>
  );
}
