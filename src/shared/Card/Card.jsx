import React, { useEffect, useState } from "react";
import "./card.css";
import { LikeIcon } from "../Icons/LikeIcon";
import { useDispatch, useSelector } from "react-redux";
import { setPressedLike } from "../../store/store";

export function Card({ photo, user }) {
  const [pressed, setPressed] = useState(false);
  // const pressed = useSelector((state) => state.pressed);
  const dispatch = useDispatch();
  const handleChange = () => {
    console.log(pressed);
    setPressed(!pressed);
    // dispatch(setPressedLike(!pressed));
  };

  return (
    <div className="main__card">
      <img className="main__photo" src={photo} alt="" />
      <p className="main__name">{user}</p>
      <div className="main__block_like">
        <button className="main__like" onClick={handleChange}>
          <LikeIcon className={`${pressed === true ? "active" : ""}`} />
        </button>
      </div>
    </div>
  );
}
