import styles from "./Writetweet.module.css";
import profilpic from "../../../img/profilpic.png";

import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Icon } from "@mui/material";

export default function Writetweet() {
    return (
        <div className={styles.writetweetcontainer}>
            <div className={styles.write_line1}>
                <img src={profilpic} alt="" width="50px" />
                <input
                    type="text"
                    placeholder="Il se passe quoi sur twitteur ?"
                />
            </div>
            <div className={styles.write_line2}>
                <div className={styles.listicons}>
                    <ImageIcon />
                    <GifIcon />
                    <LeaderboardIcon />
                    <InsertEmoticonIcon />
                    <CalendarMonthIcon />
                    <LocationOnIcon />
                </div>

                <button className={styles.tweetbutton}>Tweet</button>
            </div>
        </div>
    );
}
