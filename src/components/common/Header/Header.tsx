import { ChangeEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { usePageActive } from "../../../hooks";

// Components
import Button from "../../ui/Button/Button";
import Loading from "../Loading/Loading";
import Wrapper from "../Wrapper/Wrapper";

// Styles
import styles from "./Header.module.css";

function Header() {
  const auth = useAuth();
  const location = useLocation();
  const isPageActive = usePageActive();
  const navigate = useNavigate();
  const { create } = useData();

  const [isFormOpen, toggleForm] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [error, setError] = useState({ message: "", hasError: false });

  const currentUser = auth.user;
  const categoryId = location.pathname;

  const onSubmitCategory = async () => {
    if (categoryTitle.length > 4) {
      toggleForm(!isFormOpen);
      await create({ owner_id: currentUser.email, title: categoryTitle });
      setError({ message: "", hasError: false });
    } else {
      setError({
        message: "Mínimo 5 caracteres!",
        hasError: true,
      });
      setCategoryTitle("");
    }
  };

  const handleClick = () => {
    isPageActive
      ? toggleForm(!isFormOpen)
      : navigate(`${categoryId}/add-snnipet`);
  };

  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";
  const isCreateSnnipetScren = location.pathname.includes("/add-snnipet");

  useEffect(() => {
    toggleForm(false);
  }, [location.pathname]);

  if (!currentUser) {
    return <Loading text="Não foi possível carregar os dados do usuário." />;
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
            {!isCreateSnnipetScren && (
              <Button
              onClick={handleClick}
              text={isPageActive ? headerButtonText : "Criar Snnipets"}
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
