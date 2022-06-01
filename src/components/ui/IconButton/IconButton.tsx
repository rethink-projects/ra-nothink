import React from 'react'
import Images from '../../../assets';
import styles from "./IconButton.module.css"

type IconButtonProps = {
    type: "google" | "github";
    onClick?: () => void;
}

const IconButton = ({ type, onClick }: IconButtonProps) => {
    const defaultIconClass = type === "google" ? styles.defaultIconButton : `${styles.defaultIconButton} ${styles.darkButtonClass}`;
    return (
        <button className={defaultIconClass}>
            <img className={styles.default_img} src={Images.icons[type]} alt={type === "google" ? 'Google Icon Nothink' : 'Github Icon Nothink'} />
            Entrar com o Google {type === "google" ? "Google" : "Github"}
        </button>
    )
}

export default IconButton