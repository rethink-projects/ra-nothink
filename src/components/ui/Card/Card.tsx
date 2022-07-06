// Types
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { TypeCardItem, TypeCategory, TypeSnnipet } from "../../../types";

// Styles
import styles from "./Card.module.css";

// type cardProps = {
//   dataCard: TypeCategory | TypeSnnipet;
// };

interface ICardProps {
  index: number;
  data: TypeCardItem;
  type?: "category" | "snnipet";
}

function Card({
  index,
  type,
  data: { title, owner_id, id, totalLikes, totalSnnipets, likes },
}: ICardProps) {
  const navigate = useNavigate();

  // split= cortar a string em duas partes e jogar ambas em um array
  const ownerIdName = owner_id.split("@")[0];
  //   Substitui todos os caracteres especiais por "" : /[^a-zA-Z]/g, ""
  const replacedName = ownerIdName.replace(/[^a-zA-Z]/g, "").replace("", "");
  const isTypeSnnipet = type === "snnipet";
  console.log("TypeSnnipet é: " + isTypeSnnipet);
  console.log("Totaal de likes é: " + totalLikes);

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
        <h5 className={styles.card_title}>{title}</h5>
        <div className={styles.card_content}>
          <div className={styles.card_content_inner_item}>
            <img src={Images.icons.github} alt="Github Icon" />
            <span>{replacedName}</span>
          </div>
          <div className={styles.card_content_inner_item}>
            {!isTypeSnnipet && (
              <div className={styles.card_content_item}>
                <img src={Images.icons.code} alt="Code Icon" />

                <span>{totalSnnipets}</span>
                {/* <span>totalSnnipets</span> */}
              </div>
            )}
            <div className={styles.card_content_item}>
              <img src={Images.icons.like} alt="Like Icon" />
              {!isTypeSnnipet ? (
                <span>{totalLikes}</span>
              ) : (
                <span>{likes?.length}</span>
              )}
              {/* <span>{typeof data}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
