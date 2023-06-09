import React from "react";

export function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
      {props.children}
    </button>
  );
}
