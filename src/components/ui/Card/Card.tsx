// Types
import { useNavigate } from "react-router-dom";
import Images from "../../../assets";
import { TypeCategory } from "../../../types";

// Styles
import styles from "./Card.module.css";

interface ICardProps {
  index: number;
  category: TypeCategory;
}
function Card({
  index,
  category: { title, owner_id, totalLikes, totalSnnipets, id },
}: ICardProps) {
  const navigate = useNavigate();
  const ownerIdName = owner_id.split("@")[0];
  const replacedName = ownerIdName.replace(/[^a-zA-Z]/g, "").replace("", "");

  const onClickCard = () => {
    navigate(`${id}`);
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
            <div className={styles.card_content_item}>
              <img src={Images.icons.code} alt="Code Icon" />
              <span>{totalSnnipets}</span>
            </div>
            <div className={styles.card_content_item}>
              <img src={Images.icons.like} alt="Code Icon" />
              <span>{totalLikes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
