import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { usePageActive } from "../../../hooks";

// Components
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

// Styles
import styles from "./Header.module.css";

function Header() {
  const auth = useAuth();
  const currentUser = auth.user;
  const [isFormOpen, toggleForm] = useState(false);

  // const { isCreating } = useData();

  const isPageActive = usePageActive();

  const navigate = useNavigate();

  const onSubmitCategory = () => {
    // Criar Categoria usando create do useData.
    // Recuperar valor do input de Categorias.

    toggleForm(!isFormOpen);
  };

  const handleClick = () => {
    isPageActive ? toggleForm(!isFormOpen) : navigate("add");
  };

  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  console.log(isPageActive);

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
              alt="Logo Nothink LIght"
            />
          </Link>

          <div className={styles.header_actions}>
            <img
              className={styles.header_user_avatar}
              src={currentUser.avatarUrl}
              alt="Current User Avatar"
            />
            {/* <button className={styles.defaultButton}>Criar Snnipet</button> */}
            <Button
              onClick={handleClick}
              text={isPageActive ? headerButtonText : "Criar Snnipets"}
            />
            <div
              className={
                isFormOpen
                  ? styles.header_modal_container
                  : styles.header_modal_container_off
              }
            >
              <input
                type="text"
                className={styles.header_modal_input}
                placeholder="Digite o nome para essa categoria"
                name="category"
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
