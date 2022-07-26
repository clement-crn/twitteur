import styles from "./wall.module.css";
import Writetweet from "./writetweet/Writetweet";

export default function Wall() {
    return (
        <div className={styles.wallcontainer}>
            <Writetweet />
        </div>
    );
}
