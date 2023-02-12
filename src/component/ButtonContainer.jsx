import React from "react";
import * as style from "../styles/app.module.css";

const ButtonContainer = ({ children }) => {
  return <div className={style.buttonContainer}>{children}</div>;
};

export default ButtonContainer;
