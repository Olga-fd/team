import React from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../actions/getUsersList";
import { Button } from "../utils/Button/Button";
import { DownArrowIcon } from "../utils/Icons/DownArrowIcon";
import { Card } from "../Card/Card";
import "./mainblock.css";

export function MainBlock() {
  const users = useSelector((state) => state.users);
  let cardUsers;

  if (users.length === 0) {
    getUsersList();
  }

  if (users.length !== 0) {
    cardUsers = users.map((user) => (
      <Card
        key={user.id}
        id={user.id}
        photo={user.avatar}
        user={user.first_name + " " + user.last_name}
        like={user.like}
      />
    ));
  }

  return (
    <>
      <div className="mainblock">{cardUsers}</div>
      <Button
        className={`down ${users.length > 5 ? "visible" : ""}`}
        title="Показать еще"
        onClick={() => alert("🤷")}
      >
        <DownArrowIcon />
      </Button>
    </>
  );
}
