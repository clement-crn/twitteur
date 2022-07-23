import styles from "./rightmenu.module.css";
import Rightmenunav from "./rightmenunav";
export default function RightMenu() {
    return (
        <div className={styles.rightmenucontainer}>
            <Rightmenunav />
        </div>
    );
}
