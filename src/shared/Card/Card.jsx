import React, { useEffect, useState } from "react";
import "./card.css";
import { LikeIcon } from "../utils/Icons/LikeIcon";
import { useDispatch, useSelector } from "react-redux";
import { setPressedLike } from "../../store/store";
import { Link } from "react-router-dom";

export function Card(props) {
  const [pressed, setPressed] = useState(false);
  // const pressed = useSelector((state) => state.pressed);
  const dispatch = useDispatch();
  const handleChange = () => {
    setPressed(!pressed);
    // dispatch(setPressedLike(!pressed));
  };

  return (
    <Link to="/participant">
      <div className="main__card">
        <img className="main__photo" src={props.photo} alt="" />
        <p className="main__name">{props.user}</p>
        <div className="main__block_like">
          <button className="main__like" onClick={handleChange}>
            <LikeIcon className={`${pressed === true ? "active" : ""}`} />
          </button>
        </div>
      </div>
    </Link>
  );
}
