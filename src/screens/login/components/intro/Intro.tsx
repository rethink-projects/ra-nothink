import React from "react";
import Images from "../../../../assets";
import styles from "./Intro.module.css";

function intro() {
  return (
    <div className={styles.intro_container}>
      <h3 className={styles.intro_title}>
        Anotações rápidas
        <br /> para devs!
      </h3>
      <img
        className={styles.intro_image}
        src={Images.intro}
        alt="Intro Nothink"
      />
    </div>
  );
}

export default intro;
