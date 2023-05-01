import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveLike } from "../../store/store";
import { LikeIcon } from "../utils/Icons/LikeIcon";
import "./card.css";

export function Card(props) {
  const [pressed, setPressed] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    setPressed(!pressed);
    dispatch(saveLike(props.id, !pressed));
  };

  return (
    <div className="main__card">
      <Link to={`/participant/${props.id}`}>
        <img className="main__photo" src={props.photo} alt="" />
        <p className="main__name">{props.user}</p>
      </Link>
      <div className="main__block_like">
        <button className="main__like" onClick={handleChange}>
          <LikeIcon className={`${props.like ? "active" : ""}`} />
        </button>
      </div>
    </div>
  );
}
