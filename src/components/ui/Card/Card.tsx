import styles from "./Card.module.css";
import InfoCard from "./InfoCard";

type categoryProps = {
    index: number
    title: string;
    user: string;
    like: number | string;
    snnipets?: number | string;
}

const Card = ({ index, title, user, like, snnipets }: categoryProps) => {
    const ownerIdName = user.split("@")[0];
    const replacedName = ownerIdName.replace(/[^a-zA-Z]/g, "");

    return (
        <div className={styles.card} style={{ animationDelay: `${index}05ms` }}>
            <div className={styles.content_card}>
                <h3 className={styles.title_card}>{title}</h3>

                <div className={styles.footer_card}>
                    <div className={styles.content_footer_card}>

                        <InfoCard imageType="avatarCategory" info={replacedName} />

                        <div className={styles.info_card}>
                            {snnipets! >= 0 && <InfoCard imageType="quantitySnnipets" info={snnipets!} />}
                            <InfoCard imageType="likeCard" info={like} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card


