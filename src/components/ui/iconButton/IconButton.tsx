import React from "react";
import Images from "../../../assets";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  type: "google" | "github";
  onClick?: () => void;
};

function IconButton({ type, onClick }: IconButtonProps) {
    //Ternario para informar a classe do botão e definir se é do google ou do github
  const defaultIconClass =
    type === "google"
      ? styles.defaultIconButton
      : `${styles.defaultIconButton} ${styles.darkButtonClass}`;

  return (
    <button onClick={onClick} className={defaultIconClass}>
      <img
        className={styles.default_img}
        src={Images.icons[type]}
        alt={type === "google" ? "Google Icon" : "Github Icon"}
      />
      Entrar com {type === "google" ? "Google" : "Github"}
    </button>
  );
}

export default IconButton;
