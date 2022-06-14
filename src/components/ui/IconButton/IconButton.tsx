import React from "react";
import Images from "../../../assets";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  //   isDark?: boolean;
  type: "google" | "github";
  onClick?: () => void;
};

// function IconButton({ isDark = false, type, onClick }: IconButtonProps) {
function IconButton({ type, onClick }: IconButtonProps) {
  //   const darkButtonClass = isDark
  const darkButtonClass =
    type === "google"
      ? styles.defaultIconButton
      : `${styles.defaultIconButton} ${styles.darkButtonClass}`;
  return (
    <button className={darkButtonClass} onClick={onClick}>
      <img
        className={styles.default_img}
        src={Images.icons[type]}
        alt={type === "google" ? "Google Icon Nothink" : "Github Icon Nothink"}
      />
      Entrar com {type === "google" ? "Google" : "Github"}
    </button>
  );
}

export default IconButton;
