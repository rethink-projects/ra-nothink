import React from 'react'
import styles from "./Button.module.css";
import Images from "../../../assets";

type buttonProps = {
  icon?: "edit" | "share" | "cancel" | "save" | "return" | "delete",
  size?: string,
  color?: string,
  text?: string,
  onClick?: () => void;
};


function Button({icon, size, text, color, onClick}: buttonProps) {

  return (
    <button onClick={onClick} className={[styles.defaultButton, styles["button_size_"+size],  styles["button_color_"+color]].join(" ")}>
      {icon && <img src={Images.iconsButton[icon]} alt={text} className={styles.icon}/>}
      {text}
    </button>
  )
}

export default Button