import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Layout } from "../../Layout/Layout";
import "./header.css";
import { useResize } from "../../../hooks/useResize";

export function Header({ className, children }) {
  const navigate = useNavigate();
  const [width] = useResize();

  const handleClick = () => {
    navigate("/");
    localStorage.removeItem("token");
  };

  return (
    <header className={`header ${className}`}>
      <Layout>
        <Button
          className={`${width > 500 ? "header__btn" : "exit"}`}
          title={`${width > 500 ? "Выход" : ""}`}
          onClick={handleClick}
        />
        {children}
      </Layout>
    </header>
  );
}
