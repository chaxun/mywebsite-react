import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={`${classes.center} ${props.className}`}>
      <button
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        style={props.style}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
