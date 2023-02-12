import React from "react";
import * as style from "../styles/app.module.css";

const TextInput = ({ indicator, ...rest }) => {
  return (
    <>
      <input className={style.textInput} {...rest} />
      <span className={style.indicator}>{indicator}</span>
    </>
  );
};

export default TextInput;
