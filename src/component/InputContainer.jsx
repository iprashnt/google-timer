import React from "react";
import * as style from "../styles/app.module.css";

const InputContainer = ({ children }) => {
  return <div className={style.inputContainer}>{children}</div>;
};

export default InputContainer;
