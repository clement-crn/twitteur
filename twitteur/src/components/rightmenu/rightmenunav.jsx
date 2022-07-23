import styles from "./rightmenunav.module.css";

export default function Rightmenunav() {
    return (
        <div className={styles.rightmenunavcontainer}>
            <div className={styles.httitle}>
                <p>Trends for you</p>
            </div>
            <ul>
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
                        <a href="#">#React.JS</a>
                        <a className={styles.underht} href="#">
                            90K tweets
                        </a>
                    </li>
                </div>

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
                        <a href="#">#React.JS</a>
                        <a className={styles.underht} href="#">
                            90K tweets
                        </a>
                    </li>
                </div>

                <div className={styles.htcontainer}>
                    <li className={styles.ht}>
                        <a href="#">#React.JS</a>
                        <a className={styles.underht} href="#">
                            90K tweets
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
}
