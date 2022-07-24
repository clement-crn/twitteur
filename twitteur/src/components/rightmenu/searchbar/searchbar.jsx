import styles from "./searchbar.module.css";
import loupe from "../../../img/loupe-icon.png";

export default function Searchbar() {
    return (
        <div className={styles.searchbarcontainer}>
            <form class="search">
                <input
                    className={styles.searchinput}
                    placeholder="Search Twitter"
                    required="true"
                    type="text"
                />
            </form>
        </div>
    );
}
