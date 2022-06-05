import React, { InputHTMLAttributes } from "react";
import Images from "../assets";
import styles from "./NavBar.module.css";
interface NavBarProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
const NavBar: React.FC<NavBarProps> = (nome) => {
  const clicked = () => {
    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/beep-01a.mp3"!
    );
    audio.play();
  };
  return (
    <div className={styles.navbar}>
            {/* <button onClick={clicked}>asdasdasd</button> */}

      <div className={styles.page_name}>{nome.name}</div>
      <div className={styles.container}>
        <img src={Images.icons.arrow} />
      </div>
    </div>
  );
};

export default NavBar;
