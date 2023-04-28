import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Layout } from "../../Layout/Layout";
import "./header.css";
import { Link } from "react-router-dom";

export function Header({ children }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth");
    localStorage.removeItem("token");
  };

  return (
    <header className="header">
      <Layout>
        <Link to="/auth">
          <Button className="header__btn" title="Выход" />
        </Link>
        {children}
      </Layout>
    </header>
  );
}
