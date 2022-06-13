import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";
import Buttons from "../buttons/Buttons";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Header.module.css";

const Header = () => {
  const auth = useAuth();

  return (
    <div className={styles.header_container}>
      <Wrapper>
        <div className={styles.header_inner}>
          <img
            className={styles.header_logo}
            src={Images.logo.light}
            alt=""
          ></img>

          <div className={styles.header_right_side}>
            {auth.user && auth.user.avatarUrl && (
              <img
                className={styles.header_profile_image}
                src={auth.user.avatarUrl && auth.user.avatarUrl}
                alt=""
              ></img>
            )}
            {auth.user && !auth.user.avatarUrl && (
              <img
                className={styles.header_profile_image}
                src={`https://ui-avatars.com/api/?name=${auth.user.name.replace(
                  "",
                  "+"
                )}`}
                alt=""
              ></img>
            )}
            <span className={styles.header_text}>Snippets Curtidos</span>
            <button className={styles.create_snippet_button}>
              Criar snippet
            </button>
            <Buttons
              extrabehavior={styles.header_test}
              size="medium"
              color="detail"
              text="Criar snippet"
            ></Buttons>
          </div>
        </div>
        <Buttons
          size="large"
          color="light"
          image="google"
          text="Entrar com o Google"
        ></Buttons>
      </Wrapper>
    </div>
  );
};

export default Header;
