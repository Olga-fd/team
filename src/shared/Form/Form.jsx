import React from "react";
import "./form.css";
import { useState } from "react";

export function Form() {
  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <input type="text" ib="name" className="form__input"></input>
      </fieldset>
      <fieldset>
        <label htmlFor="email" className="form__label">
          Электронная почта
        </label>
        <input type="email" id="email" className="form__input"></input>
      </fieldset>

      <fieldset>
        <label htmlFor="password" className="form__label">
          Пароль
        </label>
        <input
          type={`${eye1 ? "text" : "password"}`}
          id="password"
          className="form__input"
        ></input>
        <button
          className={`${eye1 ? "eye" : "eyeoff"}`}
          onClick={handleClick}
        ></button>
      </fieldset>

      <fieldset>
        <label htmlFor="confirm" className="form__label">
          Подтвердить пароль
        </label>
        <input
          type={`${eye2 ? "text" : "password"}`}
          id="confirm"
          className="form__input"
        ></input>
        <button
          className={`${eye2 ? "eye" : "eyeoff"}`}
          onClick={handleClickOnEye}
        ></button>
      </fieldset>

      <button type="submit" className="form__btn">
        Зарегистрироваться
      </button>
    </form>
  );
}
