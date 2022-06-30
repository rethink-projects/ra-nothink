import React from "react";

// Styles
import styles from "./Card.module.css";

//Assets
import Images from "../../../assets";
import { TypeCategory } from "../../../types";
import { useNavigate } from "react-router-dom";

type CardProps = {
  data: TypeCategory;
  index: number;
  type?: "category" | "snnipet";
};

const Card = ({
  data: { title, owner_id, totalLikes, totalSnnipets, id },
  type = "category",
  index,
}: CardProps) => {
  const onwerIdName = owner_id.split("@")[0];
  const replacedName = onwerIdName.replace(/[^a-zA-Z]/g, "").replace("", "");
  const navigate = useNavigate();
  const isTypeSnnipet = type === "snnipet";

  const onClickCard = () => {
    return isTypeSnnipet ? null : navigate(`${id}`, { state: title });
  };

  return (
    <div
      onClick={onClickCard}
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
            {!isTypeSnnipet && (
              <div className={styles.card_content_item}>
                <img src={Images.icons.code} alt="Icon Code" />
                <span>{totalSnnipets}</span>
              </div>
            )}
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
