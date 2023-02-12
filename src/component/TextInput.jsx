import React from "react";
import * as style from "../styles/app.module.css";

const TextInput = ({ indicator, ...rest }) => {
  return (
    <>
      <input
        className={`${style.textInput} ${
          rest.value.toString().length == 2
            ? style.doubleDigit
            : style.singleDigit
        }`}
        {...rest}
      />
      <sub className={style.indicator}>{indicator}</sub>
    </>
  );
};

export default TextInput;
