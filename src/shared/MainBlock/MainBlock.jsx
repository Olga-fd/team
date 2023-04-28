import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./mainblock.css";
import { Button } from "../utils/Button/Button";
import { Card } from "../Card/Card";
import { setDataOfUsers } from "../../store/store";

export function MainBlock() {
  let cardUsers;

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2", {
        headers: {
          //'Authorization': `bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((resp) => {
        const data = resp.data.data;
        dispatch(setDataOfUsers(data));
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (users.length !== 0) {
    cardUsers = users.map((user) => (
      <Card
        key={user.id}
        photo={user.avatar}
        user={user.first_name + " " + user.last_name}
      />
    ));
  }

  return (
    <>
      <div className="mainblock">{cardUsers}</div>
      <Button
        className={`further ${users.length > 8 ? "visible" : ""}`}
        title="Показать еще"
      />
    </>
  );
}
