import React from "react";
import "./input.css";

export function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      className="form__input"
      onInput={(e) => props.onInput(e)}
      autocomplete
    />
  );
}
