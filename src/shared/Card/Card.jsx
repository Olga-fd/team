import React, { useEffect, useState } from "react";
import "./card.css";
import { LikeIcon } from "../utils/Icons/LikeIcon";
import { useDispatch, useSelector } from "react-redux";
import { setPressedLike } from "../../store/store";
import { Link } from "react-router-dom";

export function Card(props) {
  const [pressed, setPressed] = useState(false);
  const dispatch = useDispatch();
  const handleChange = () => {
    setPressed(!pressed);
    dispatch(setPressedLike(true));
  };

  return (
    <div className="main__card">
      <Link to={`/participant/${props.id}`}>
        <img className="main__photo" src={props.photo} alt="" />
        <p className="main__name">{props.user}</p>
      </Link>
      <div className="main__block_like">
        <button className="main__like" onClick={handleChange}>
          <LikeIcon className={`${pressed === true ? "active" : ""}`} />
        </button>
      </div>
    </div>
  );
}
