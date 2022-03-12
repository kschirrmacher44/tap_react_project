import React, { useContext } from "react";
import { ColorMode } from "../utility/color-mode";
import "./Button.css";

const Button = (props) => {
  const colorMode = useContext(ColorMode);
  return (
    <button
      className={`button button${colorMode.isAltColorMode ? "-alt" : ""}`}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      href={props.href}
    >
      {props.children}
    </button>
  );
};

export default Button;
