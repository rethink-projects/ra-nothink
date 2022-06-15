import React from "react";

// Assets
import Images from "../../../../assets";

// Styles
import styles from "./Form.module.css";

// Components
import {IconButton, Divider} from "../../../../components";
import { TypeProvider } from "../../../../types";
import { NavLink } from "react-router-dom";

type FormParams ={
  onLogin: (type: TypeProvider) => void;
}

function Form({onLogin}: FormParams) {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_inner}>
        <div className={styles.form_social}>
          <a href="https://www.linkedin.com/company/rethinkdigitalco/mycompany/verification/" target="_blank" >
            <img
              className={styles.form_social_icon}
              src={Images.icons.linkedin}
              alt="Linkedin social Rethink"
            />
          </a>
          <a href="https://www.instagram.com/rethink.digital/" target="_blank" >
            <img
              className={styles.form_social_icon}
              src={Images.icons.instagram}
              alt="Instagram social Rethink"
            />
          </a>
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
          <IconButton type="google" onClick={() => onLogin("google")} />          
          <Divider />
          <IconButton type="github" onClick={() => onLogin("github")} />
        </div>
      </div>
    </div>
  );
}

export default Form;
