import React from "react";
import Styles from "./Wrapper.module.css";

type WrapperType = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperType) => {
  return <div className={Styles.container}>{children}</div>;
};

export default Wrapper;
