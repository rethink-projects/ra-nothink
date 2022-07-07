import Images from "../../../assets";
import { TypeCategory, TypeSnippet } from "../../../types";
import { useNavigate } from "react-router-dom";

import styles from "./Card.module.css";

interface ICardProps {
  index: number;
  data: TypeCategory | TypeSnippet;
  type?: "category" | "snippet";
}
function Card({
  index,
  type = "category",
  data: { title, owner_id, totalLikes, totalSnippets, id, likes },
}: ICardProps) {
  const navigate = useNavigate();
  const ownerIdName = owner_id.split("@")[0];
  const replacedName = ownerIdName.replace(/[^a-zA-Z]/g, "").replace("", "");
  const isTypeSnippet = type === "snippet";
  const onClickCard = () => {
    navigate(`${id}`);
    return isTypeSnippet ? null : navigate(`${id}`, { state: title });
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
            {!isTypeSnippet && (
              <div className={styles.card_content_item}>
                <img src={Images.icons.code} alt="Code Icon" />
                <span>{totalSnippets}</span>
              </div>
            )}
            <div className={styles.card_content_item}>
              <img src={Images.icons.like} alt="Like Icon" />
              {isTypeSnippet ? <span>{likes}</span> : <span>{totalLikes}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
