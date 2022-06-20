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
import { useState } from "react";
import { useData } from "../../../context/DataContext";


const Header = () => {
    const [isFormOpen, toggleForm] = useState(false);
    const auth = useAuth();
    const isPageActive = usePageActive();
    const navigate = useNavigate();
    const { create, isCreating } = useData();

    const currentUser: ICurrentUser = auth.user;

    const handleClick = () => {
        isPageActive ? toggleForm(!isFormOpen) : navigate("add");
    }

    const onSubmitCategory = () => {
        // Criar Categoria usando create do useData
        // Recuperar valor do input de Categorias

        toggleForm(!isFormOpen);
    }

    const headerButtonText = isFormOpen ? "Cancelar" : "Criar Categoria"

    return (
        <nav className={isPageActive ? styles.header_container_active : styles.header_container_off}>

            <Wrapper>
                <div className={styles.content}>

                    <NavLink to="/dashboard">
                        <img src={Images.logo.navbar} alt="" />
                    </NavLink>

                    <div className={styles.options}>
                        {currentUser && <img src={currentUser.avatarUrl} alt="foto usuário" />}
                        <DefaultButton onClick={handleClick} text={isPageActive ? headerButtonText : "Criar Snnipets"} />


                        <div className={isFormOpen ? styles.header_modal_container : styles.header_modal_container_off}>
                            <input className={styles.header_modal_input} placeholder="Digite o nome para essa categoria" name="category" type="text" />
                            <DefaultButton text="Salvar" onClick={onSubmitCategory} />
                        </div>
                    </div>
                </div>

                <div className={isPageActive ? styles.header_info_active : styles.header_info_off}>
                    <h1 className={styles.header_welcome_title}>
                        Olá, <strong>{currentUser && currentUser.name}!</strong>
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