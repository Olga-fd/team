import React from "react";
import { useNavigate } from "react-router-dom";
import "./startdisplay.css";

export function StartDisplay() {
  const navigate = useNavigate();

  return (
    <div className="start-block">
      <button
        type="button"
        className="start-block__btn"
        onClick={() => navigate("/regist")}
      >
        Регистрация
      </button>
      <button
        type="button"
        className="start-block__btn"
        onClick={() => navigate("/auth")}
      >
        Авторизация
      </button>
    </div>
  );
}
