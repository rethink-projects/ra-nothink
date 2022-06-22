import { NavLink, useNavigate } from "react-router-dom"


// Images
import Images from "../../../assets/index";

// Styles
import styles from "./Header.module.css";

// Interface
import { ICurrentUser } from '../../../types';

// Context
import { useAuth } from '../../../context/AuthContext';

// Components
import Wrapper from "../Wrapper/Wrapper";
import DefaultButton from '../../ui/DefaultButton/DefaultButton';
import { usePageActive } from "../../../hooks";
import { ChangeEvent, useState } from "react";
import { useData } from "../../../context/DataContext";
import Loading from "../Loading/Loading";


const Header = () => {
    const [isFormOpen, toggleForm] = useState(false);
    const [categoryTitle, setCategoryTitle] = useState("");
    const [error, setError] = useState({ message: "", hasError: false });

    const auth = useAuth();
    const isPageActive = usePageActive();
    const navigate = useNavigate();
    const { create } = useData();

    const currentUser: ICurrentUser = auth.user;

    const handleClick = () => {
        isPageActive ? toggleForm(!isFormOpen) : navigate("add");
    }

    const onSubmitCategory = async () => {
        if (categoryTitle.length >= 4) {
            toggleForm(!isFormOpen);
            await create({ owner_id: currentUser.email, title: categoryTitle });
            setError({ message: "", hasError: false });
        } else {
            setError({ message: "Mínimo 4 caracteres!", hasError: true });
        }

        setCategoryTitle("");
    }

    const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria";

    if (!currentUser) {
        return <Loading text="Não foi possivel carregar os dados do usuário." />
    }

    return (
        <nav className={isPageActive ? styles.header_container_active : styles.header_container_off}>

            <Wrapper>
                <div className={styles.content}>

                    <NavLink to="/dashboard">
                        <img src={Images.logo.navbar} alt="" />
                    </NavLink>

                    <div className={styles.options}>
                        {<img src={currentUser.avatarUrl} alt="foto usuário" />}
                        <DefaultButton onClick={handleClick} text={isPageActive ? headerButtonText : "Criar Snnipets"} />


                        <div className={isFormOpen ? styles.header_modal_container : styles.header_modal_container_off}>
                            <input className={error.hasError ? styles.header_modal_input_error : styles.header_modal_input} placeholder={error.hasError ? error.message : "Digite o nome para essa categoria"} name="category" value={categoryTitle} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                setCategoryTitle(event.target.value)
                            }} />
                            <DefaultButton text="Salvar" onClick={onSubmitCategory} />
                        </div>
                    </div>
                </div>

                <div className={isPageActive ? styles.header_info_active : styles.header_info_off}>
                    <h1 className={styles.header_welcome_title}>
                        Olá, <strong>{currentUser.name}!</strong>
                    </h1>
                    <span className={styles.header_welcome_description}>
                        Essas são as categorias disponíveis para você
                    </span>
                </div>
            </Wrapper>
        </nav>
    )
}

export default Header