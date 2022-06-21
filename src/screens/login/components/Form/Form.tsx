import styles from "./Form.module.css";

import Images from "../../../../assets";

import Divider from "../Divider/Divider";

import { LoginButton } from "../../../../components";

import { TypeProvider } from "../../../../types";


type FormParams = {
  onLogin: (type: TypeProvider) => void;
};
const Form = ({ onLogin }: FormParams) => {
  return (
    <div className={styles.container}>
      <div className={styles.form_inner}>
        <div className={styles.social}>
          <img
            src={Images.icons.linkedin}
            alt="Linkedin"
            onClick={() => {
              window.open("https://www.linkedin.com/company/rethinkdigitalco", "_blank");
            }}
          />
          <img src={Images.icons.instagram} alt="Instagram" onClick={() => {
              window.open("https://www.instagram.com/rethink.digital/", "_blank");
            }} />
        </div>
        <div className={styles.form}>
          <img src={Images.logo.default} alt="Logo Nothink" />
          <div className={styles.paragraph}>
            <p>Escolha sua forma de login</p>
          </div>
          <LoginButton type="google" onClick={() => onLogin("google")} />
          <Divider />
          <LoginButton type="github" onClick={() => onLogin("github")} />
        </div>
      </div>
    </div>
  );
};

export default Form;
