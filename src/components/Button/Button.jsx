import React from "react";
import { BTN__DEFAULT, BTN__BIG } from "./types";

import "./Button.scss";

const modificators = {
  [BTN__DEFAULT]: "",
  [BTN__BIG]: "button--big",
};

const Button = ({ type, className, onClick, children }) => {
  return (
    <button
      className={["button", modificators[type || BTN__DEFAULT], className].join(
        " "
      )}
      {...{ onClick }}
    >
      {children}
    </button>
  );
};

export default Button;
