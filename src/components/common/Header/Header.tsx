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


const Header = () => {

    const auth = useAuth();

    const currentUser: ICurrentUser = auth.user;
    return (
        <nav className={styles.navbar}>

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
            </Wrapper>
        </nav>
    )
}

export default Header