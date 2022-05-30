import React, { InputHTMLAttributes } from "react";
import Images from "../assets";
import styles from "./NavBar.module.css";
interface NavBarProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
const NavBar: React.FC<NavBarProps> = (nome) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.page_name}>{nome.name}</div>
      <div className={styles.container}>
        <img src={Images.icons.arrow} />
      </div>
    </div>
  );
};

export default NavBar;
