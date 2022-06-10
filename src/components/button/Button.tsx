import React from 'react'
import styles from "./Button.module.css";
import Images from "../../assets";
import {Messages} from "../../assets";

type buttonProps = {
  type: "default" | "edit" | "cancel" | "share" | "save" | "return"
  onClick?: () => void;
};


function Button({type, onClick}: buttonProps) {

  const defaultButtonClass = type === "default" ? styles.defaultButton : type === "edit" ? `${styles.defaultButton} ${styles.defaultMidButton}` : type === "save" ? `${styles.defaultButton} ${styles.defaultMidButton}` : type === "share" ? `${styles.defaultButton} ${styles.lightButton}` : type === "cancel" ? `${styles.defaultButton} ${styles.lightButton}` : `${styles.defaultButton} ${styles.defaultBigButton}`;
  
  const icon = type === "default" ? ""
  : <img src={Images.iconsButton[type]} alt={Messages.buttons[type]} />

  return (
    <button onClick={onClick} className={defaultButtonClass}>
      {icon}
      {Messages.buttons[type]}
    </button>
  )
}

export default Button