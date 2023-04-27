import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { Layout } from "../Layout/Layout";
import "./header.css";
// import { Link } from "react-router-dom";

export function Header() {
  const lightTheme = useSelector((state) => state.lightTheme);

  // useEffect(() => {
  //   if (lightTheme) {
  //     document.body.classList.remove("dark");
  //   } else {
  //     document.body.classList.add("dark");
  //   }
  // }, [lightTheme]);

  return (
    <header className="header">
      <Layout>
        <Button className="header__btn" title="Выход" />
        <div className="header__block">
          <h1 className="header__title">Наша команда</h1>
          <p className="header__text">
            Это опытные специалисты, хорошо разбирающиеся во&nbsp;всех задачах,
            которые ложатся на&nbsp;их&nbsp;плечи, и&nbsp;умеющие находить выход
            из&nbsp;любых, даже самых сложных ситуаций.
          </p>
        </div>
      </Layout>
    </header>
  );
}
