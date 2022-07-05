import Images from "../../../assets";
import styles from "./Header.module.css";

//context
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";

//component
import { GeneralButton } from "../..";
import { Loading } from "../..";

//hooks
import { usePageActive } from "../../../hooks";

import { useLocation, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";

import { ICurrentUser } from "../../../types";
import Wrapper from "../wrapper/Wrapper";

const Header = () => {
  const auth = useAuth();
  const { create } = useData();
  const isPageActive = usePageActive();
  const location = useLocation();
  const navigate = useNavigate();
  const [isFormOpen, toggleForm] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [error, setError] = useState({ message: "", hasError: false });

  const currentUser: ICurrentUser = auth.user;
  const categoryId = location.pathname;

  const onSubmitCategory = async () => {
    //criar categoria usando create do useData
    //recuperar valor do input de categorias
    if (categoryTitle.length > 4) {
      toggleForm(!isFormOpen);
      await create({ owner_id: currentUser.email, title: categoryTitle });
      setError({ message: "", hasError: false });
    } else {
      setError({
        message: "Mínimo 5 caracteres!",
        hasError: true,
      });
    }
    setCategoryTitle("");
  };

  const handleClick = () => {
    isPageActive
      ? toggleForm(!isFormOpen)
      : navigate(`${categoryId}/add-snnipet`);
  };

  const navbarButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";
const isCreateSnnipetScreen = location.pathname.includes("/add-snnipet")
 

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
           {!isCreateSnnipetScreen && <GeneralButton
              onClick={handleClick}
              text={isPageActive ? navbarButtonText : "Criar Snnipets"}
              height="29px"
            />}
            <div
              className={
                isFormOpen
                  ? styles.navbar_form_container
                  : styles.navbar_form_container_off
              }
            >
              <input
                className={
                  error.hasError
                    ? styles.navbar_form_input_error
                    : styles.navbar_form_input
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

export default Header;
