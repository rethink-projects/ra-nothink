import React from "react";

// Assets
import Images from "../../../../assets";

// Styles
import styles from "./Form.module.css";

// Components
import { IconButton, Divider} from "../../../../components";


function Form() {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_inner}>
        <div className={styles.form_social}>
          <img
            className={styles.form_social_icon}
            src={Images.icons.linkedin}
            alt="Linkedin Social Rethink"
          />
          <img
            className={styles.form_social_icon}
            src={Images.icons.instagram}
            alt="Instagram Social Rethink"
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
          <IconButton type="google" />
          <Divider />
          <IconButton type="github" />
        </div>
      </div>
    </div>
  );
}

export default Form;
