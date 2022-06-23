import React, { ChangeEvent, useState } from "react";

// Styles
import styles from "./Header.module.css";
import Images from "../../../assets/index";

import { Link, useLocation, useNavigate } from "react-router-dom";

// Components
import Button from "../button/Button";
import Wrapper from "../Wrapper/Wrapper";
import Loading from "../Loading/Loading";

// Hooks
import { usePageActive } from "../../../hooks";

// Context
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";

// Types
import { ICurrentUser } from "../../../types";

const Header = () => {
  const isPageActive = usePageActive();
  const auth = useAuth();
  const currentUser: ICurrentUser = auth.user;
  const navigate = useNavigate();
  const location = useLocation();
  const { create } = useData();

  const [isFormOpen, toggleForm] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [error, setError] = useState({ message: "", hasError: false });

  const categoryId = location.pathname;

  if (!currentUser) {
    return <Loading text="Não foi possível carregar os dados do usuário." />;
  }

  const onSubmitCategory = async () => {
    //Criar categoria usando create do useData
    //Recuperar valor do input de Categorias
    if (categoryTitle.length > 4) {
      await create({ owner_id: currentUser.email, title: categoryTitle });
      setError({ message: "", hasError: false });
      toggleForm(!isFormOpen);
    } else {
      setError({
        message: "Minimo 5 caracteres!",
        hasError: true,
      });
    }
    setCategoryTitle("");
  };

  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";

  const handleClick = () => {
    isPageActive
      ? toggleForm(!isFormOpen)
      : navigate(`${categoryId}/add-snnipet`);
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
                className={
                  error.hasError
                    ? styles.header_modal_input_error
                    : styles.header_modal_input
                }
                value={categoryTitle}
                placeholder={
                  error.hasError
                    ? error.message
                    : "Digite o nome para essa categoria"
                }
                name="category"
                type="text"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setCategoryTitle(event.target.value);
                }}
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
