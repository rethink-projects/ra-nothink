// CSS
import styles from "./Card.module.css";

// Types
import { TypeCategory } from "../../../types";
import Images from "../../../assets";
import { useNavigate } from "react-router-dom";

type cardProp = {
  data: TypeCategory;
  index: number;
  type?: "category" | "snippet";
};

const Card = ({
  data: { title, id, owner_id, totalSnippets, totalLikes, likes },
  index,
  type = "category",
}: cardProp) => {
  const navigate = useNavigate();
  const username = owner_id.split("@", 1)[0];
  const usernameReplaced = username.replace(/[^a-zA-Z]/g, "").replace("", "");
  const isTypeSnippet = type === "snippet";

  const onClickCard = () => {
    return isTypeSnippet ? null : navigate(`${id}`, { state: title });
  };

  return (
    <div
      onClick={onClickCard}
      className={styles.cards_cointainer}
      style={{ animationDelay: `${index}05ms` }}
    >
      <div className={styles.card_category}>
        <h1 className={styles.card_title}>{title}</h1>
        <div className={styles.card_content}>
          <div className={styles.card_informations}>
            <img src={Images.icons.github} alt="Github Icon" />
            <span>{usernameReplaced}</span>
            <div className={styles.card_informations}>
              {!isTypeSnippet && (
                <div className={styles.card_informations_item}>
                  <img src={Images.icons.code} alt="code Icon" />
                  <span>{totalSnippets}</span>
                </div>
              )}
              <div className={styles.card_informations_item}>
                <img src={Images.icons.like} alt="heart Icon" />
                {/* <span>{`${totalLikes}`}</span> */}
                <span>{isTypeSnippet ? likes!.length : totalLikes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
