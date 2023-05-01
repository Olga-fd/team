import React from "react";
import { Header } from "../utils/Header/Header";
import "./headerbase.css";

export function HeaderBasic() {
  return (
    <Header>
      <div className="header__block">
        <h1 className="header__title">Наша команда</h1>
        <p className="header__text">
          Это опытные специалисты, хорошо разбирающиеся во&nbsp;всех задачах,
          которые ложатся на&nbsp;их&nbsp;плечи, и&nbsp;умеющие находить выход
          из&nbsp;любых, даже самых сложных ситуаций.
        </p>
      </div>
    </Header>
  );
}
