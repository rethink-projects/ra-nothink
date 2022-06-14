import { Link, useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";
import { usePageActive } from "../../../hooks";
import Buttons from "../buttons/Buttons";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Header.module.css";

const Header = () => {
  const auth = useAuth();
  const isPageActive = usePageActive();
  const currentUser = auth.user;
  const navigate = useNavigate();
  if (!currentUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div
      className={
        styles.header_container +
        " " +
        (isPageActive
          ? styles.header_container_active
          : styles.header_container_off)
      }
    >
      <Wrapper>
        <div className={styles.header_inner}>
          <Link to="">
            <img
              className={styles.header_logo}
              src={Images.logo.light}
              alt=""
            ></img>
          </Link>

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
            <Buttons
              onClick={() => navigate("add")}
              extrabehavior={styles.header_test}
              size="almostmedium"
              color="detail"
              text="Criar snippet"
            ></Buttons>
          </div>
        </div>
        <div
          className={
            isPageActive ? styles.header_info_active : styles.header_info_off
          }
        >
          <h1 className={styles.header_welcome_title}>
            Olá, <strong>{currentUser.name}!</strong>
          </h1>
          <span className={styles.header_welcome_description}>
            Essas são as categorias disponíveis para você
          </span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
