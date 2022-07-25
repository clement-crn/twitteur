import styles from "./rightmenunav.module.css";
import dots from "../../img/dots-icon.png";
import Trend from "./trend/trend";

export default function Rightmenunav() {
    return (
        <div className={styles.rightmenunavcontainer}>
            <div className={styles.httitle}>
                <p>Trends for you</p>
            </div>
            <Trend line1="#elonmusk" line2="90K tweets" />
            <Trend line1="#clementciron" line2="10K tweets" />
            <Trend line1="#AndyLeezard" line2="20K tweets" />
            <Trend line1="#Morpheus" line2="110K tweets" />
            <Trend line1="#reactJS" line2="30K tweets" />
            <Trend line1="#starwars" line2="90K tweets" />
        </div>
    );
}
