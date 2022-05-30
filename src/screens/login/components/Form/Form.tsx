import React from "react";
import Images from "../../../../assets";
import Divider from "../Divider/Divider";
import LoginButton from "../LoginButton/LoginButton";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <img src={Images.icons.linkedin} alt="Linkedin" />
        <img src={Images.icons.instagram} alt="Instagram" />
      </div>
      <div className={styles.form}>
        <img src={Images.logo.default} alt="Logo Nothink" />
        <div className={styles.paragraph}>
          <p>Escolha sua forma de login</p>
        </div>
        <LoginButton/>
      </div>
    </div>
  );
};

export default Form;
