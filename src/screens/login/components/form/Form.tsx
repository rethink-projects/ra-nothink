// Assets
import Images from "../../../../assets";

// CSS
import styles from "./Form.module.css";

// Components
import { IconButton, Divider } from "../../../../components";
import { TypeProvider } from "../../../../types";

type FormParams = {
  onLogin: (type: TypeProvider) => void;
};

function Form({ onLogin }: FormParams) {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_inner}>
        <div className={styles.form_social}>
          <img
            className={styles.form_social_icon}
            src={Images.icons.linkedin}
            alt="Linkedin Rethink Icon"
          />
          <img
            className={styles.form_social_icon}
            src={Images.icons.instagram}
            alt="Instagram Rethink Icon"
          />
        </div>
        <div className={styles.form_texts}>
          <img
            className={styles.form_texts_logo}
            src={Images.logo.default}
            alt="Logo Nothink"
          />
          <p className={styles.form_texts_main}>Escolha a forma de Login</p>
        </div>
        <div className={styles.form_actions}>
          <IconButton type="google" onClick={() => onLogin("google")} />

          {/* Objetivo: limpar o código. Separar em classes */}

          {/* <button className={styles.form_actions_google}>
            <img
              className={styles.form_actions_google_img}
              src={Images.icons.google}
              alt="Google Icon"
            />
            Entrar com Google
          </button> */}
          {/* <div className={styles.form_action_divider}>
            <div className={styles.divider} />
            <p className={styles.divider_text}>ou</p>
            <div className={styles.divider} />
          </div> */}
          <Divider />
          {/* <button className={styles.form_actions_github}>
            <img
              className={styles.form_actions_github_img}
              src={Images.icons.github}
              alt="Github Icon"
            />
            Entrar com Github
          </button> */}
          <IconButton type="github" onClick={() => onLogin("github")} />
          {/* <IconButton type="github" isDark/> */}
        </div>
      </div>
    </div>
  );
}

export default Form;
