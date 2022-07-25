import styles from "./rightmenunav.module.css";
import dots from "../../img/dots-icon.png";

export default function Rightmenunav() {
    return (
        <div className={styles.rightmenunavcontainer}>
            <div className={styles.httitle}>
                <p>Trends for you</p>
            </div>
            <ul className={styles.htul}>
                <div className={styles.htcontainer}>
                    <li className={styles.ht}>
                        <a href="#">#React.JS</a>
                        <a className={styles.underht} href="#">
                            90K tweets
                        </a>
                    </li>
                </div>

                <div className={styles.htcontainer}>
                    <li className={styles.ht}>
                        <a href="#">#AndyLeezard</a>
                        <a className={styles.underht} href="#">
                            90K tweets
                        </a>
                    </li>
                </div>

                <div className={styles.htcontainer}>
                    <li className={styles.ht}>
                        <a href="#">#clementciron</a>
                        <a className={styles.underht} href="#">
                            20K tweets
                        </a>
                    </li>
                </div>

                <div className={styles.htcontainer}>
                    <li className={styles.ht}>
                        <a href="#">#Morpheus</a>
                        <a className={styles.underht} href="#">
                            110K tweets
                        </a>
                    </li>
                </div>

                <div className={styles.htcontainer}>
                    <li className={styles.ht}>
                        <a href="#">#ElonMusk</a>
                        <a className={styles.underht} href="#">
                            90K tweets
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
}
