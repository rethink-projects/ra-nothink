import React from "react";
import styles from "./Button.module.css";

import Images from "../../../assets";

type ButtonProps = {
  type: "lime" | "default" | "light";
  text: string;
  icon?: "share" | "trash" | "edit" | "save" | "cancel";
  onClick?: () => void;
};

const Button = ({ type, text, icon, onClick }: ButtonProps) => {
  let defaultButtonClass =
    type === "default"
      ? styles.button
      : `${styles.button} ${styles.limeButton}`;

  if (type === "light") {
    defaultButtonClass = `${styles.button} ${styles.ligthButton}`;
  }

  return (
    <button className={defaultButtonClass}>
      {icon && (
        <img
          className={styles.default_icon}
          src={Images.icons[icon]}
          alt={icon + " icon"}
        />
      )}
      {text}
    </button>
  );
};

export default Button;
