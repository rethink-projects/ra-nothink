import Images from "../../../assets";
import styles from "./Navbar.module.css";

//context
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";

//component
import { GeneralButton } from "../..";

//hooks
import { usePageActive } from "../../../hooks";

import { useNavigate } from "react-router-dom";

import { ICurrentUser } from "../../../types";
import Wrapper from "../wrapper/Wrapper";
import { useState } from "react";

const Navbar = () => {
  const [isFormOpen, toggleForm] = useState(false);
  const auth = useAuth();
  const currentUser: ICurrentUser = auth.user;
  const isPageActive = usePageActive();
  let navigate = useNavigate();
  const { create, isCreating } = useData();

  const onSubmitCategory = () => {
    //criar categoria usando create do useData
    //recuperar valor do input de categorias
    toggleForm(!isFormOpen);
  };

  const handleClick = () => {
    isPageActive ? toggleForm(!isFormOpen) : navigate("add");
  };

  const navbarButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";

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
            onClick={() => navigate("")}
          />
          <div className={styles.navbar_navbuttons}>
            <img src={currentUser.avatarUrl} alt="User" />
            <GeneralButton
              onClick={handleClick}
              text={isPageActive ? navbarButtonText : "Criar Snnipets"}
              height="29px"
            />
            <div
              className={
                isFormOpen
                  ? styles.navbar_form_container
                  : styles.navbar_form_container_off
              }
            >
              <input
                className={styles.navbar_form_input}
                placeholder="Digite o nome para essa categoria"
                name="category"
                type="text"
              />
              <GeneralButton
                onClick={onSubmitCategory}
                text="Salvar Categoria"
                height="29px"
              />
            </div>
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
