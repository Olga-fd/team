import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../utils/Input/Input";
import { registrate } from "../../../actions/registrate";
import {
  checkEmail,
  checkName,
  checkPassword,
  confirmPassword,
} from "../../../actions/check";
import "../form.css";

export function Registration() {
  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirm, setInputConfirm] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    checkName(inputName, setErrorName);
    checkEmail(inputEmail, setErrorEmail);
    checkPassword(inputPassword, setErrorPassword);
    confirmPassword(inputConfirm, inputPassword, setErrorConfirm);
    if (
      errorConfirm == "" &&
      errorName == "" &&
      errorEmail == "" &&
      errorPassword == ""
    ) {
      registrate(inputEmail, inputPassword);
      setTimeout(() => {
        if (localStorage.token) {
          navigate("/team");
        }
      }, 1000);
    }
  };

  const handleClick = () => {
    setEye1(!eye1);
  };

  const handleClickOnEye = () => {
    setEye2(!eye2);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <legend className="form__legend">Регистрация</legend>
      <fieldset>
        <label htmlFor="name" className="form__label">
          Имя
        </label>
        <Input
          type="text"
          ib="name"
          onInput={(e) => setInputName(e.target.value)}
        />
        <span className={`${errorName ? "error" : "hidden"}`}>{errorName}</span>
      </fieldset>
      <fieldset>
        <label htmlFor="email" className="form__label">
          Электронная почта
        </label>
        <Input
          type="text"
          id="email"
          onInput={(e) => setInputEmail(e.target.value)}
        />
        <span className={`${errorEmail ? "error" : "hidden"}`}>
          {errorEmail}
        </span>
      </fieldset>

      <fieldset>
        <label htmlFor="password" className="form__label">
          Пароль
        </label>
        <Input
          type={`${eye1 ? "text" : "password"}`}
          id="password"
          onInput={(e) => setInputPassword(e.target.value)}
        />
        <span className={`${errorPassword ? "error" : "hidden"}`}>
          {errorPassword}
        </span>
        <button
          type="button"
          className={`${eye1 ? "eye" : "eyeoff"}`}
          onClick={handleClick}
        ></button>
      </fieldset>

      <fieldset>
        <label htmlFor="confirm" className="form__label">
          Подтвердить пароль
        </label>

        <Input
          type={`${eye2 ? "text" : "password"}`}
          id="confirm"
          onInput={(e) => setInputConfirm(e.target.value)}
        />

        <button
          type="button"
          className={`${eye2 ? "eye" : "eyeoff"}`}
          onClick={handleClickOnEye}
        ></button>

        <span className={`${errorConfirm ? "error" : "hidden"}`}>
          {errorConfirm}
        </span>
      </fieldset>

      <button type="submit" className="form__btn">
        Зарегистрироваться
      </button>
    </form>
  );
}
