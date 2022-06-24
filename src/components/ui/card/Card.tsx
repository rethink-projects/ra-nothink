import React from "react";
import Images from "../../../assets";
import { TypeCategory } from "../../../types";
import styles from "./Card.module.css";

interface CardProps {
  onClick?: () => void;
  category: TypeCategory;
}

const Card: React.FC<CardProps> = ({
  onClick,
  category: { title, owner_id, totalLikes, totalSnnipets },
}) => {
  return (
    <div
    className={styles.card_container}
  >
    <div className={styles.card_inner}>
      <h1 className={styles.card_title}>{title}</h1>
      <div className={styles.card_footer}>
        <div className={styles.card_footer_inner_item}>
          <img src={Images.icons.github} alt="Github Icon" />
          <span>{owner_id}</span>
        </div>
        <div className={styles.card_footer_inner_item}>
          <div className={styles.card_footer_item}>
            <img src={Images.icons.code} alt="Code Icon" />
            <span>{totalSnnipets}</span>
          </div>
          <div className={styles.card_footer_item}>
            <img src={Images.icons.heart} alt="Heart Icon" />
            <span>{totalLikes}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Card;
