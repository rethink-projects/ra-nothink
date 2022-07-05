import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

// CSS
import styles from "./Header.module.css";

// Assets
import Images from "../../../../src/assets";

// Components
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

// Hooks
import { usePageActive } from "../../../hooks";

import { ICurrentUser } from "../../../types";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";

const Header = () => {
  const auth = useAuth();
  const location = useLocation();
  const isPageActive = usePageActive();
  const navigate = useNavigate();

  const { create } = useData();
  const [isFormOpen, toggleForm] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [error, setError] = useState({ message: "", hasError: false });

  const currentUser: ICurrentUser = auth.user;
  const idCategory = location.pathname;

  const onSubmitCategory = async () => {
    // Criar categoria usando create do useData
    // Recuperar valor do input de Categorias

    if (categoryTitle.length > 4) {
      toggleForm(!isFormOpen);
      await create({ owner_id: currentUser.email, title: categoryTitle });
      setError({ message: "", hasError: false });
    } else {
      setError({
        message: "Mínimo de 5 caracteres",
        hasError: true,
      });
    }
    setCategoryTitle("");
  };

  const handleClick = () => {
    isPageActive
      ? toggleForm(!isFormOpen)
      : navigate(`${idCategory}/add-snippet`);
  };

  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";

  useEffect(() => {
    toggleForm(false);
  }, [location.pathname]);

  if (!currentUser) {
    return <p>Carregando..</p>;
  }

  //   const toDashboardScreen = () => {
  //     navigate("/dashboard");
  //   };

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
          <Link to={"/categories"}>
            <img
              className={styles.header_logo}
              src={Images.nothink}
              alt="Logo Nothink"
            />
          </Link>

          {/* <img
        className={styles.header_logo}
        onClick={() => {
          navigate("/dashboard");
        }}
        src={Images.nothink}
        alt="Logo Nothink"
      /> */}

          <div className={styles.header_response}>
            <img
              className={styles.header_avatar}
              src={currentUser.avatarUrl}
              alt="Imagem do avatar retirada da conta do usuário do Google ou Github"
            />
            <Button
              onClick={handleClick}
              text={isPageActive ? headerButtonText : "Criar Snippets"}
            />
          </div>
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
            <Button onClick={onSubmitCategory} text="Salvar" />
          </div>
        </div>
        <div
          className={
            isPageActive ? styles.header_info_active : styles.header_info_off
          }
        >
          <h1 className={styles.header_welcome_title}>
            Olá <strong>{currentUser.name}!</strong>
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
