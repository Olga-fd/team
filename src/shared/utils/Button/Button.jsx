import React from "react";

export function Button(props) {
  return (
    <button
      className={props.className}
      onClick={(e) => props.onClick(e)}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
}
