import React from "react";
import Images from "../../../../assets";

import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_inner}>
        <div className={styles.form_social}>
          <img
            className={styles.form_social_icon}
            src={Images.icons.linkedin}
            alt="Linkedin social Rethink"
          />
          <img
            className={styles.form_social_icon}
            src={Images.icons.instagram}
            alt="Instagram social Rethink"
          />
        </div>
        <div className={styles.form_texts}>
          <img
            className={styles.form_texts_logo}
            src={Images.logo.default}
            alt="Logo Nothink"
          />
          <p className={styles.form_texts_main}>Escolha sua forma de login</p>
        </div>
        <div className={styles.form_actions}>
          <button className={styles.form_actions_google}>
            <img src={Images.icons.google} alt="Google icon" />
            Entrar com Google
          </button>
            <div className={styles.form_actions_divider}>
                <div className={styles.divider}/>
                <p className={styles.divider_text}>ou</p>
                <div className={styles.divider}/>
            </div>
          <button className={styles.form_actions_github}>
            <img src={Images.icons.github} alt="Github icon" />
            Entrar com Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
