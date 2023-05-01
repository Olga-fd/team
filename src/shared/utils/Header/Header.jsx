import React from "react";
import { useNavigate } from "react-router-dom";
import { useResize } from "../../../hooks/useResize";
import { Button } from "../Button/Button";
import { Layout } from "../../Layout/Layout";
import "./header.css";

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
          className={`${width > 756 ? "header__btn" : "exit"}`}
          title={`${width > 756 ? "Выход" : ""}`}
          onClick={handleClick}
        />
        {children}
      </Layout>
    </header>
  );
}
