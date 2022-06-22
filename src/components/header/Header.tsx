import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../assets";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { usePageActive } from "../../hooks";

// components
import Button from "../common/button/Button";
import Loading from "../common/Loading/Loading";
import Wrapper from "../common/Wrapper/Wrapper";

// styles
import styles from "./Header.module.css";

function Header() {
  const auth = useAuth();
  const isPageActive = usePageActive();
  const navigate = useNavigate();
  const { create } = useData();

  const [isFormOpen, toogleForm] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [error, setError] = useState({message: "", hasError: false})

  const currentUser = auth.user;

  const onSubmitCategory = async () => {
    if(categoryTitle.length > 4){
      toogleForm(!isFormOpen);
      await create({owner_id: currentUser.email, title: categoryTitle});
      setError({message: "", hasError: false});
    }else{
      setError({message: "Minimo 5 catacteres!", hasError: true});
    }
    setCategoryTitle("");
  };

  const handleClick = () => {
    isPageActive ? toogleForm(!isFormOpen) : navigate("add");
  }

  const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";


  if (!currentUser) {
    return <Loading text="Não foi possível carregar os dados do usuario."/>;
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
        <div className={styles.header_intern_container}>
          <Link to="">
            <img
              className={styles.header_logo}
              src={Images.logo.light}
              alt="Logo Nothink Light"
            />
          </Link>
          <div className={styles.header_assets}>
            <img
              className={styles.header_avatar}
              src={currentUser.avatarUrl}
              alt="Icon Avatar"
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
                className={error.hasError ? styles.header_modal_input_error :styles.header_modal_input}
                value={categoryTitle}
                placeholder={error.hasError ? error.message :"Digite o nome para essa categoria"}
                name="category"
                type="text"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setCategoryTitle(event.target.value)
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
