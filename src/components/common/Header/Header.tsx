import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { usePageActive } from "../../../hooks";

// Components
import Button from "../../ui/Button/Button";
import Wrapper from "../Wrapper/Wrapper";

// Styles
import styles from "./Header.module.css";

function Header() {
  const [isFormOpen, toggleForm] = useState(false);
  const auth = useAuth();
  const isPageActive = usePageActive();
  const navigate = useNavigate();
  // const { create, isCreating } = useData();
  
  const currentUser = auth.user;

  const onSubmitCategory = () => {
    // Criar Categoria usando create do usaData.
    // Recuperar valor do input de Categorias.
    toggleForm(!isFormOpen);
  };

  const handleClick = () => {
    isPageActive ? toggleForm(!isFormOpen) : navigate("add");
  }



  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria"

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
          <Link to="">
            <img
              className={styles.header_logo}
              src={Images.logo.white}
              alt="Logo Nothink White"
            />
          </Link>

          <div className={styles.header_actions}>
            <img
              className={styles.header_user_avatar}
              src={currentUser.avatarUrl}
              alt="Current User Avatar"
            />
            <Button onClick={handleClick} text={isPageActive ? headerButtonText : "Criar Snnipets"} />

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
              <Button onClick={onSubmitCategory} text="Salvar" />
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
}

export default Header;
