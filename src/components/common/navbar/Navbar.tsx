import Images from "../../../assets";
import styles from "./Navbar.module.css";

//context
import { useAuth } from "../../../context/AuthContext";

//component
import { GeneralButton } from "../..";

//hooks
import { usePageActive } from "../../../hooks";

import { useNavigate } from "react-router-dom";

import { ICurrentUser } from "../../../types";
import Wrapper from "../wrapper/Wrapper";

const Navbar = () => {
  const auth = useAuth();
  const currentUser: ICurrentUser = auth.user;
  const isPageActive = usePageActive();
  let navigate = useNavigate();

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div
      className={
        isPageActive
          ? styles.navbar_container_active
          : styles.navbar_container_off
      }
    >
      <Wrapper>
        <div className={styles.navbar_main}>
          <img
            className={styles.navbar_logoImage}
            src={Images.logo.navbarLogo}
            alt="Nothink Header Logo"
            onClick={() => navigate("/dashboard")}
          />
          <div className={styles.navbar_navbuttons}>
            <img src={currentUser.avatarUrl} alt="User" />
            <GeneralButton
              onClick={() => navigate("create")}
              text="Criar Snnipet"
              height="29px"
            />
          </div>
        </div>
        <div
          className={
            isPageActive ? styles.navbar_info_active : styles.navbar_info_off
          }
        >
          <h1 className={styles.navbar_welcome_title}>
            Olá, <strong>{currentUser.name}!</strong>
          </h1>
          <span className={styles.navbar_welcome_description}>
            Essas são as categorias disponíveis para você
          </span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
