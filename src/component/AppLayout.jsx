import React from "react";
import * as style from "../styles/app.module.css";

const AppLayout = ({ children }) => {
  return <div className={style.appLayout}>{children}</div>;
};

export default AppLayout;
