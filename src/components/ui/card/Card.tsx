import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { useData } from "../../../context/DataContext";

// types
import { TypeCategory, TypeSnnipet } from "../../../types";

// Styles
import styles from "./Card.module.css";

interface cardProps {
  index: number;
  type? : "category" | "snnipet";
  category? : TypeCategory;
  snnipet? : TypeSnnipet;
  data?: TypeCategory | TypeSnnipet;
}

function Card({ index, type = "category", category, snnipet, data}: cardProps) {
  if(type == "category"){
    data = category;
  }else{
    data = snnipet;
  }

  const ownerIdName = data!.owner_id.split("@")[0];

  const navigate = useNavigate();

  const replacedName = ownerIdName.replace(/[^a-zA-Z]/g, "").replace("", "");

  const [liked, setLiked] = useState(false);

  const isTypeSnnipet = type === 'snnipet';

  const onClickCard = () => { 
    return isTypeSnnipet ? null : navigate(`${data!.id}`, {state: data!.title});
  }

  return (
    <div className={styles.card_container} style={{animationDelay: `${index}05ms`}}  >
      <div className={styles.card_inner}>
      <div className={styles.card_title} onClick ={onClickCard} >
        <h5>{data!.title}</h5>
      </div>
      {data == category ? (
        <div className={styles.card_footer}>
          <div className={styles.card_footer_inner}>
            <img src={Images.cardsAssets.person} alt="personIcon" />
            <p>{replacedName}</p>
          </div>
          <div className={styles.card_footer_inner}>
            <img src={Images.cardsAssets.snnipetsCount} alt="snnipetsCount" />
            <p>{data!.totalSnnipets}</p>
            <img
              src={liked ? Images.cardsAssets.like : Images.cardsAssets.likeBorder}
              alt="like"
              onClick={() => setLiked(!liked)}
            />
            <p>{data!.totalLikes}</p>
          </div>
        </div>
      ) : data == snnipet ? (
        <div className={styles.card_footer}>
          <div className={styles.card_footer_inner}>
            <img src={Images.icons.github} alt="personIcon" />
            <span>{replacedName}</span>
          </div>
          <div className={styles.card_footer_inner}>
            <img
              src={liked ? Images.cardsAssets.like : Images.cardsAssets.likeBorder}
              alt="like"
              onClick={() => setLiked(!liked)}
            />
            <span>{data!.likes.length}</span>
          </div>
        </div>
      ) : (null)}
      </div>
    </div>
  );
}

export default Card;
