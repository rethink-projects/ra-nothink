import styles from "./Card.module.css";
import InfoCard from "./InfoCard";

type categoryProps = {
    title: string;
    user: string;
    like: number | string;
    snnipets?: number | string;
}

const Card = ({ title, user, like, snnipets }: categoryProps) => {

    return (
        <div className={styles.card}>

            <h3 className={styles.title_card}>{title}</h3>

            <div className={styles.footer_card}>
                <div className={styles.content_footer_card}>

                    <InfoCard imageType="avatarCategory" info={user} />

                    <div className={styles.info_card}>
                        {snnipets! >= 0 && <InfoCard imageType="quantitySnnipets" info={snnipets!} />}
                        <InfoCard imageType="likeCard" info={like} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card


