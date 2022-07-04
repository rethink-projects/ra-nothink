import React from "react";
import Images from "../../../assets";
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick: VoidFunction;
  hasIcon?: boolean;
  type?: "cancel" | "save";
};
function Button({
  text,
  onClick,
  type = "save",
  hasIcon = false,
}: ButtonProps) {
  let imgSrc = Images.icons[type];
  let buttonClass =
    type === "cancel" ? styles.defaultButton_outiline : styles.defaultButton;
  return (
    <button className={buttonClass} onClick={onClick}>
      {hasIcon && (
        <img src={imgSrc} alt="Icon Button" className={styles.icon} />
      )}
      <span>{text}</span>
    </button>
  );
}

export default Button;
