import { NavLink } from "react-router-dom"


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


const Header = () => {

    const auth = useAuth();
    const isPageActive = usePageActive();

    const currentUser: ICurrentUser = auth.user;


    return (
        <nav className={isPageActive ? styles.header_container_active : styles.header_container_off}>

            <Wrapper>
                <div className={styles.content}>

                    <NavLink to="/dashboard">
                        <img src={Images.logo.navbar} alt="" />
                    </NavLink>

                    <div className={styles.options}>
                        {currentUser && <img src={currentUser.avatarUrl} alt="foto usuário" />}
                        <DefaultButton text="Criar Snnipet" />
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