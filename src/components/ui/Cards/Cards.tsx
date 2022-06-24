import React from "react";
import styles from "./Cards.module.css";
import Images from "../../../assets";

const Cards = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_name}>
        <span>Nenhuma categoria encontrada</span>
      </div>
      <div className={styles.card_details_container}>
        <div className={styles.card_details_subcontainer}>
          <img className={styles.card_icons} src={Images.icons.silhueta} />
          <span>Filiperethink</span>
        </div>
        <div className={styles.card_stats}>
          <div className={styles.card_details_subcontainer}>
            <img className={styles.card_icons} src={Images.icons.tag} />
            <span>03</span>
          </div>
          <div className={styles.card_details_subcontainer}>
            <img className={styles.card_icons} src={Images.icons.like} />
            <span>23</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
