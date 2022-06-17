import React from "react";

import { useAuth } from "../../../..//context/AuthContext";
import { useNavigate } from "react-router-dom";

import Images from "../../../../assets/index";
import Button from "../../../ui/button/Button";

import styles from "./Header.module.css";

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.header_container}>
      <img
        onClick={redirect}
        className={styles.header_logo}
        src={Images.logo.white}
        alt="Logo Nothink"
      />

      <div className={styles.header_user}>
        {auth.user && auth.user.avatarUrl && (
          <img
            className={styles.header_user_icon}
            src={auth.user.avatarUrl}
            alt="Icone User"
          />
        )}
        <Button type="lime" text="Criar Snnipet" />
      </div>
    </div>
  );
};

export default Header;
