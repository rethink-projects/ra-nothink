import React from "react";
import Images from "../../../../assets";
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro_container}>
      <h1 className={styles.intro_title}>
        Anotações rápidas
        <br />
        para devs!
      </h1>
      <img
        className={styles.intro_image}
        src={Images.intro}
        alt="Intro Nothink"
      />
    </div>
  );
}

export default Intro;
