import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";
import { usePageActive } from "../../../hooks";
import { useData } from "../../../context/DataContext";

// Components
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import Loading from "../Loading/Loading";

// Styles
import styles from "./Header.module.css";

function Header() {
  const [isFormOpen, toggleForm] = useState(false);
  const auth = useAuth();
  const location = useLocation();
  const isPageActive = usePageActive();
  const navigate = useNavigate();
  const currentUser = auth.user;
  const { create } = useData();
  const [categoryTitle, setCategoryTitle] = useState("");
  const categoryId = location.pathname;
  const [error, setError] = useState({ message: "", hasError: false });

  const onSubmitCategory = async () => {
    if (categoryTitle.length > 4) {
      toggleForm(!isFormOpen);
      await create({ owner_id: currentUser.email, title: categoryTitle });
      setError({ message: "", hasError: false });
    } else {
      setError({
        message: "Mínimo de 5 caracteres!",
        hasError: true,
      });
    }
    setCategoryTitle("");
  };

  const handleClick = () => {
    isPageActive
      ? toggleForm(!isFormOpen)
      : navigate(`${categoryId}/add-snippet`);
  };

  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";
  const isCreateSnippetScreen = location.pathname.includes("/add-snippet");

  useEffect(() => {
    toggleForm(false);
  }, [location.pathname]);

  if (!currentUser) {
    return <Loading text="Não foi possivel carregar os dados do usuario." />;
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
            className={styles.header_logo}
            src={Images.logo.light}
            alt="Logo Nothink Light"
            onClick={() => navigate("/categories")}
          />

          <div className={styles.header_actions}>
            <img
              className={styles.header_user_avatar}
              src={currentUser.avatarUrl}
              referrerPolicy="no-referrer"
              alt="Current User Avatar"
            />
            {!isCreateSnippetScreen && (
              <Button
                onClick={handleClick}
                text={isPageActive ? headerButtonText : "Criar Snippet"}
              />
            )}

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
