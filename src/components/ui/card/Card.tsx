import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { TypeCategory } from "../../../types";
import { TypeSnnipet } from "../../../types";
import styles from "./Card.module.css";

interface CardProps {
  index: number;
  data: { category?: TypeCategory; snnipet?: TypeSnnipet };
  type?: "category" | "snnipet";
}

const Card: React.FC<CardProps> = ({ index, type = "category", data }) => {
  const navigate = useNavigate();
  const ownerIdName = data[type]!.owner_id.split("@")[0];
  const replacedName = ownerIdName.replace(/[^a-zA-Z]/g, "").replace("", "");

  const isTypeSnnipet = type === "snnipet";

  const onClickCard = () => {
    return isTypeSnnipet ? null : navigate(`${data[type]!.id}`, { state: data[type]!.title });
  };

  return (
    <div
      onClick={onClickCard}
      className={styles.card_container}
      style={{ animationDelay: `${index}05ms` }}
    >
      <div className={styles.card_inner}>
        <h1 className={styles.card_title}>{data[type]!.title}</h1>
        <div className={styles.card_footer}>
          <div className={styles.card_footer_inner_item}>
            <img src={Images.icons.github} alt="Github Icon" />
            <span>{replacedName}</span>
          </div>
          <div className={styles.card_footer_inner_item}>
            {!isTypeSnnipet && (
              <div className={styles.card_footer_item}>
                <img src={Images.icons.code} alt="Code Icon" />
                <span>{data[type]!.totalSnnipets}</span>
              </div>
            )}
            <div className={styles.card_footer_item}>
              <img src={Images.icons.heart} alt="Heart Icon" />
              <span>{type === "snnipet" ? data[type]!.like?.length! : data[type]!.totalLikes!}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
