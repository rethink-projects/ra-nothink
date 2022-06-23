import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { usePageActive } from "../../../hooks";
import Buttons from "../buttons/Buttons";
import Loading from "../loading/Loading";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Header.module.css";

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const isPageActive = usePageActive();

  const { create } = useData();

  const [formOpen, setformOpen] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [error, setError] = useState({ message: "", hasError: false });

  const headerButtonText = formOpen ? "Cancelar" : "Criar Categoria";

  const currentUser = auth.user;

  const onSubmitCategory = async () => {
    if (categoryTitle.length > 4) {
      setError({ message: "", hasError: false });
      await create({ owner_id: currentUser.email, title: categoryTitle });
      setformOpen(!formOpen);
    } else {
      setError({
        message: "Minimo de 5 caracteres",
        hasError: true,
      });
    }
    setCategoryTitle("");
  };

  const handleClick = () => {
    isPageActive ? setformOpen(!formOpen) : navigate("");
    setformOpen(!formOpen);
  };


  if (!currentUser) {
    return <Loading text="Não foi possível encontrar os dados do usuário."/>;
  }

  return (
    <div
      className={
        styles.header_container +
        " " +
        (isPageActive
          ? styles.header_container_active
          : styles.header_container_off)
      }
    >
      <Wrapper>
        <div className={styles.header_inner}>
          <Link to="add">
            <img
              className={styles.header_logo}
              src={Images.logo.light}
              alt=""
              onClick={() => setformOpen(false)}
            ></img>
          </Link>

          <div className={styles.header_right_side}>
            {auth.user && auth.user.avatarUrl && (
              <img
                className={styles.header_profile_image}
                src={
                  (auth.user.avatarUrl && auth.user.avatarUrl) ??
                  `https://ui-avatars.com/api/?name=${auth.user.name.replace(
                    "",
                    "+"
                  )}`
                }
                alt=""
              ></img>
            )}
            <Buttons
              onClick={handleClick}
              extrabehavior={styles.header_buttons}
              size="almostmedium"
              color="detail"
              text={headerButtonText}
            ></Buttons>
            {/* começa aqui o que está sendo alterado */}
            <div
              className={
                formOpen
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
                placeholder={
                  error.hasError
                    ? error.message
                    : "Digite o nome para essa categoria"
                }
                name="category"
                type="text"
                value={categoryTitle}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setCategoryTitle(event.target.value);
                }}
              />
              <Buttons
                onClick={onSubmitCategory}
                text="Salvar"
                size="almostmedium"
                color="detail"
                extrabehavior={styles.header_buttons}
              />
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
