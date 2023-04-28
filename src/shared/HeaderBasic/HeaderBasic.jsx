import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../utils/Button/Button";
// import { Layout } from "../Layout/Layout";
import "./headerbase.css";
import { Header } from "../utils/Header/Header";
// import { Link } from "react-router-dom";

export function HeaderBasic() {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/auth");
  //   localStorage.removeItem("token");
  // };

  return (
    // <header className="header">
    //   <Layout>
    //     <Link to="/auth">
    //       <Button className="header__btn" title="Выход" />
    //     </Link>
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
    //   </Layout>
    // </header>
  );
}
