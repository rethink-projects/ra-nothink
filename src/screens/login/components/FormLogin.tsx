import { Divider, LoginButton, Socials } from "../../../components";
import Styles from "./FormLogin.module.css";
import Imagens from "../../../assets";
import { TypeProvider } from "../../../types";

type FormParams = {
  onLogin: (type: TypeProvider) => void;
};

const FormLogin = ({ onLogin }: FormParams) => {
  return (
    <div className={Styles.form_container}>
      <Socials />
      <div className={Styles.form_inner}>
        <div className={Styles.form_texts}>
          <img
            className={Styles.form_texts_logo}
            src={Imagens.logo.default}
            alt="Logo Nothink"
          />
          <p className={Styles.form_texts_main}>Escolha sua forma de login</p>
        </div>
        <div className={Styles.form_actions}>
          <LoginButton app="Google" onClick={() => onLogin("google")} />
          <Divider />
          <LoginButton app="GitHub" onClick={() => onLogin("github")} />
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
