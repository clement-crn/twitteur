import styles from "./rightmenu.module.css";
import Rightmenunav from "./rightmenunav";
import Searchbar from "./searchbar/searchbar";

export default function RightMenu() {
    return (
        <div className={styles.rightmenucontainer}>
            <Searchbar />
            <Rightmenunav />
        </div>
    );
}
