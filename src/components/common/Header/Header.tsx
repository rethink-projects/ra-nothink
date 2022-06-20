import React, { useState } from "react";

// Styles
import styles from "./Header.module.css";
import Images from "../../../assets/index";

import { Link, useNavigate } from "react-router-dom";

// Components
import Button from "../button/Button";
import Wrapper from "../Wrapper/Wrapper";

// Hooks
import { usePageActive } from "../../../hooks";

// Context
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";

const Header = () => {
  const [isFormOpen, toggleForm] = useState(false);
  const isPageActive = usePageActive();
  const auth = useAuth();
  const currentUser = auth.user;
  const navigate = useNavigate();
  const { create, isCreating } = useData();

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  const onSubmitCategory = () => {
    //Criar categoria usando create do useData
    //Recuperar valor do input de Categorias

    toggleForm(!isFormOpen);
  };

  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";

  const handleClick = () => {
    isPageActive ? toggleForm(!isFormOpen) : navigate("add");
  };

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
          <Link to="">
            <img
              className={styles.header_logo}
              src={Images.logo.light}
              alt="Logo Nothink Light"
            />
          </Link>

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
              text={isPageActive ? headerButtonText : "Criar Snnipets"}
              onClick={handleClick}
            />

            <div
              className={
                isFormOpen
                  ? styles.header_modal_container
                  : styles.header_modal_container_off
              }
            >
              <input
                className={styles.header_modal_input}
                placeholder="Digite o nome para essa categoria"
                name="category"
                type="text"
              />
              <Button type="lime" text="Salvar" onClick={onSubmitCategory} />
            </div>
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
