import { Link, useNavigate } from "react-router-dom";

// CSS
import styles from "./Header.module.css";

// Assets
import Images from "../../../../src/assets";

// Components
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

// Hooks
import { usePageActive } from "../../../hooks";

import { useAuth } from "../../../context/AuthContext";
import { ICurrentUser } from "../../../types";
import { useState } from "react";

const Header = () => {
  const [isFormOpen, toggleForm] = useState(false);
  const auth = useAuth();
  let navigate = useNavigate();
  const isPageActive = usePageActive();
  const currentUser: ICurrentUser = auth.user;

  const onSubmitCategory = () => {
    toggleForm(!isFormOpen);
  };

  const handleClick = () => {
    isPageActive ? toggleForm(!isFormOpen) : navigate("add");
  };

  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";
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
          <Link to={"/dashboard"}>
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
              className={styles.header_modal_input}
              placeholder="Digite o nome para essa categoria"
              name="category"
              type="text"
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
