import React from "react";

import styles from "./Divider.module.css";

function Divider() {
  return (
    <div className={styles.divider_container}>
      <div className={styles.divider} />
      <p className={styles.divider_text}>ou</p>
      <div className={styles.divider} />
    </div>
  );
}

export default Divider;
