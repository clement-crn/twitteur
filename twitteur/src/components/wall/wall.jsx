import styles from "./wall.module.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton,
} from "react-twitter-embed";

export default function Wall() {
    return (
        <div className={styles.wallcontainer}>
            {" "}
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{ height: 2000 }}
            />
        </div>
    );
}
