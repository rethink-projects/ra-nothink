import React from "react";

// Styles
import styles from "./Card.module.css";

//Assets
import Images from "../../../assets";
import { TypeCategory } from "../../../types";

type CardProps = {
  category: TypeCategory;
};

const Card = ({ category }: CardProps) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_title}>
        <h3>{category.title}</h3>
      </div>

      <div className={styles.card_footer}>
        <div className={styles.card_footer_user}>
          <img
            className={styles.card_footer_icon}
            src={Images.icons.person}
            alt="Icon Username"
          />
          <p>
            {category.owner_id.length > 15
              ? `${category.owner_id.slice(0, 15)}...`
              : category.owner_id}
          </p>
        </div>

        <div className={styles.card_footer_actions}>
          <div className={styles.card_footer_actions_content}>
            <img
              className={styles.card_footer_icon}
              src={Images.icons.code}
              alt="Icon Code"
            />
            <p>{category.totalSnnipets}</p>
          </div>
          <div className={styles.card_footer_actions_content}>
            <img
              className={styles.card_footer_icon}
              src={Images.icons.heartLight}
              alt="Icon Heart Light"
            />
            <p>{category.totalLikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
