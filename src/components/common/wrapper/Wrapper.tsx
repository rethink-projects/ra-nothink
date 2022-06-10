import React from "react";
import styles from "./Wrapper.module.css";

type WrapperProps = { children: React.ReactNode };

const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Wrapper;
