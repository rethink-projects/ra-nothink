import Images from "../../../assets";
import { useAuth } from "../../../context/AuthContext";
import { ICurrentUser } from "../../../types";
import styles from "./Card.module.css";

export default function Card({ category }: any) {
  const auth = useAuth();
  const currentUser: ICurrentUser = auth.user;

  return (
    <div className={styles.card_container}>
      <h1 className={styles.card_title}>{category.title}</h1>

      <div className={styles.card_footer}>
        <div className={styles.card_profile}>
          <img
            src={Images.icons.iconprofile}
            className={styles.card_icon}
            alt="Ícone de perfil"
          />
          <h1 className={styles.card_name}>{currentUser.name}</h1>
        </div>
        <div className={styles.card_info}>
          <img
            className={styles.card_icon_info}
            src={Images.icons.code}
            alt="Ícone de tag"
          />
          <p className={styles.card_number_code}>03</p>
          <img
            className={styles.card_icon_info}
            src={Images.icons.favorite}
            alt="Ícone de coração"
          />
          <p>23</p>
        </div>
      </div>
    </div>
  );
}
