import React from "react";
import Imagens from "../assets";
import Styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={Styles.socials}>
      <a
        href="https://www.instagram.com/rethink.digital/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Imagens.icons.Instagram} alt="Instagram" />
      </a>
      <a
        href="https://www.linkedin.com/company/rethinkdigitalco"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Imagens.icons.Linkedin} alt="Linkedin" />
      </a>
    </div>
  );
};

export default Socials;
