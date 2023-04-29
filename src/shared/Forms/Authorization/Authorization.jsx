import React, { useEffect, useState } from "react";
import { Input } from "../../utils/Input/Input";
import { useNavigate } from "react-router-dom";
import "../form.css";
import "./auth.css";
import { authorizate } from "../../../actions/authorizate";
import { useToken } from "../../../hooks/useToken";

export function Authorization() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputEmail !== "" && inputPassword !== "") {
      const token = authorizate(inputEmail, inputPassword);
      if (token) {
        navigate("/team");
      }
    }
  };

  return (
    <form
      className="form form-auth"
      onSubmit={(e) => handleSubmit(e)}
      autocomplete="on"
    >
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

      <button type="submit" className="form__btn">
        Войти
      </button>
    </form>
  );
}
