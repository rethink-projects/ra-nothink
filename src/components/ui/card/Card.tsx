import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { useData } from "../../../context/DataContext";

// types
import { TypeCategory } from "../../../types";

// Styles
import styles from "./Card.module.css";

interface cardProps {
  index: number;
  type: "category" | "snnipet";
  category: TypeCategory;
}

function Card({ index, type, category }: cardProps) {
  const ownerIdName = category.owner_id.split("@")[0];

  const navigate = useNavigate();

  const replacedName = ownerIdName.replace(/[^a-zA-Z]/g, "").replace("", "");

  const [liked, setLiked] = useState(false);

  const onClickCard = () => { 
    navigate(`${category.id}`);
  }

  return (
    <div className={styles.card_container} style={{animationDelay: `${index}05ms`}}  >
      <div className={styles.card_inner}>
      <div className={styles.card_title} onClick ={onClickCard} >
        <h5>{category.title}</h5>
      </div>
      {type === "category" ? (
        <div className={styles.card_footer}>
          <div className={styles.card_footer_inner}>
            <img src={Images.cardsAssets.person} alt="personIcon" />
            <p>{replacedName}</p>
          </div>
          <div className={styles.card_footer_inner}>
            <img src={Images.cardsAssets.snnipetsCount} alt="snnipetsCount" />
            <p>{category.totalSnnipets}</p>
            <img
              src={liked ? Images.cardsAssets.like : Images.cardsAssets.likeBorder}
              alt="like"
              onClick={() => setLiked(!liked)}
            />
            <p>{category.totalLikes}</p>
          </div>
        </div>
      ) : (
        <div className={styles.card_footer}>
          <div className={styles.card_footer_inner}>
            <img src={Images.cardsAssets.person} alt="personIcon" />
            <span>{replacedName}</span>
          </div>
          <div className={styles.card_footer_inner}>
            <img
              src={liked ? Images.cardsAssets.like : Images.cardsAssets.likeBorder}
              alt="like"
              onClick={() => setLiked(!liked)}
            />
            <span>{category.totalLikes}</span>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Card;
