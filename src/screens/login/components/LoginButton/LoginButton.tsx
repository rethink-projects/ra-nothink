import React from "react";
import styles from "./LoginButton.module.css";
import Images from "../../../../assets";
import Divider from "../Divider/Divider";
import {LoginScreen} from "../../LoginScreen"

const LoginButton = () => {
  return (
    <div>
      <button className={styles.google} onClick={() => LoginScreen()}>
        <img src={Images.icons.google} alt="Google" /> Entrar com Google
      </button>
      <Divider />
      <button className={styles.github}>
        <img src={Images.icons.github} alt="Github" /> Entrar com Github
      </button>
    </div>
  );
};

export default LoginButton;
