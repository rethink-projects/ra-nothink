import React from "react";
import Images from "../../../assets";
import LoginButton from "../../../components/ui/loginbuttons/LoginButton";
import { TypeProvider } from "../../../types";
import styles from ".././LoginScreen.module.css";

type FormParams = {
  onLogin: (type: TypeProvider) => void;
};
const Form = ({ onLogin }: FormParams) => {
  return (
    <div className={styles.right_side}>
      <div className={styles.inside}>
        <img src={Images.logo.default} className={styles.margin} />

        <p className={styles.margin}>Escolha sua forma de login</p>

        <div className={styles.login_options}>
          <LoginButton
            type="google"
            underDivider
            onClick={() => onLogin("google")}
          />
          <LoginButton type="github" onClick={() => onLogin("github")} />

          <div className={styles.social_media}>
            <img src={Images.icons.linkedin} />
            <img src={Images.icons.instagram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
