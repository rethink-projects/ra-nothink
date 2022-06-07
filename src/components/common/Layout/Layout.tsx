import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'
import RequireAuth from '../../../services/auth/Auth';

import styles from "./Layout.module.css";

import Images from "../../../assets/index"
import { ICurrentUser } from '../../../types';
import DefaultButton from '../../ui/DefaultButton/DefaultButton';

const Layout = () => {
    const auth = useAuth();

    const currentUser: ICurrentUser = auth.user;



    return (
        <RequireAuth>
            <>
                <nav className={styles.navbar}>
                    <div className={styles.content}>

                        <NavLink to="/dashboard">
                            <img src={Images.logo.navbar} alt="" />
                        </NavLink>

                        <div className={styles.options}>
                            {currentUser && <img src={currentUser.avatarUrl} alt="foto usuário" />}
                            <DefaultButton text="Criar Snnipet" />
                        </div>
                    </div>

                </nav>

                <Outlet />
            </>
        </RequireAuth>
    )
}

export default Layout