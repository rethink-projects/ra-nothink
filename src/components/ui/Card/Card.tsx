import React from "react";

// Styles
import styles from "./Card.module.css";

//Assets
import Images from "../../../assets";
import { TypeCategory } from "../../../types";

type CardProps = {
  category: TypeCategory;
  index: number;
};

const Card = ({
  category: { title, owner_id, totalLikes, totalSnnipets },
  index,
}: CardProps) => {
  const onwerIdName = owner_id.split("@")[0];
  const replacedName = onwerIdName.replace(/[^a-zA-Z]/g, "").replace("", "");

  return (
    <div
      className={styles.card_container}
      style={{ animationDelay: `${index}05ms` }}
    >
      <div className={styles.card_inner}>
        <h3 className={styles.card_title}>{title}</h3>

        <div className={styles.card_content}>
          <div className={styles.card_content_inner_item}>
            <img src={Images.icons.person} alt="Icon Username" />
            <span>
              {replacedName.length > 15
                ? `${replacedName.slice(0, 15)}...`
                : replacedName}
            </span>
          </div>

          <div className={styles.card_content_inner_item}>
            <div className={styles.card_content_item}>
              <img src={Images.icons.code} alt="Icon Code" />
              <span>{totalSnnipets}</span>
            </div>
            <div className={styles.card_content_item}>
              <img src={Images.icons.heartLight} alt="Icon Heart Light" />
              <span>{totalLikes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
