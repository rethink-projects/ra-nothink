import React from 'react'
import Images from '../../assets'
import {useAuth} from '../../context/AuthContext';
import { ICurrentUser } from '../../types';
import Button from '../button/Button';
import styles from "./Header.module.css"

function Header() {
    const auth = useAuth();
    const currentUser: ICurrentUser = auth.user;

  return (
    <div className={styles.header_container}>
        <div className={styles.header_intern_container}>
        <img src={Images.logo.light} alt="Logo Nothink" />
        <div className={styles.header_assets}>
            <img className={styles.header_avatar} src={currentUser.avatarUrl} alt="Icon Avatar" />
            <Button type="default" />
        </div>
        </div>
    </div>
  )
}

export default Header