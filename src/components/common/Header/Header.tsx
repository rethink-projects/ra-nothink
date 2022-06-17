import React from "react";

// Styles
import styles from "./Header.module.css";
import Images from "../../../assets/index";

import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Components
import Button from "../button/Button";
import Wrapper from "../Wrapper/Wrapper";

// Hooks
import { usePageActive } from "../../../hooks";

const Header = () => {
  const isPageActive = usePageActive();

  const auth = useAuth();
  const currentUser = auth.user;

  const navigate = useNavigate();

  const redirect = () => {
    navigate("/dashboard");
  };

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div
      className={
        isPageActive
          ? styles.header_container_active
          : styles.header_container_off
      }
    >
      <Wrapper>
        <div className={styles.header_inner}>
          <img
            onClick={redirect}
            className={styles.header_logo}
            src={Images.logo.light}
            alt="Logo Nothink Light"
          />

          <div className={styles.header_user_actions}>
            {currentUser && currentUser.avatarUrl && (
              <img
                className={styles.header_user_avatar}
                src={currentUser.avatarUrl}
                alt="Current User"
              />
            )}
            <Button
              type="lime"
              text="Criar Snnipet"
              onClick={() => navigate("add")}
            />
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
