import React from "react";
import Images from "../../../../assets";
import styles from "./Divider.module.css";

const Divider = () => {
  return (
    <div className={styles.frame}>
      <img src={Images.line.default} alt="line" />
      <p>ou</p>
      <img src={Images.line.default} alt="line" />
    </div>
  );
};

export default Divider;
