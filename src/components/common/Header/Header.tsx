import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";

// Components
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

// Styles
import styles from "./Header.module.css";

function Header() {
  const auth = useAuth();
  const navigate = useNavigate();
  const currentUser = auth.user;

  if (!currentUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className={styles.header_container}>
      <Wrapper>
        <div className={styles.header_inner}>
          <img
            className={styles.header_logo}
            src={Images.logo.light}
            alt="Logo Nothink Light"
          />

          <div className={styles.header_actions}>
            <img
              className={styles.header_user_avatar}
              src={currentUser.avatarUrl}
              alt="Current User Avatar"
            />
            <Button onClick={() => navigate("add")} text="Criar Snnipet" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
