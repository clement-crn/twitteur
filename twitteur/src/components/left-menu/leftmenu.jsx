import styles from "./leftmenu.module.css";
import home from "../../img/home-icon.png";
import bell from "../../img/bell-icon.png";
import logo from "../../img/twitter-icon.png";
import hashtag from "../../img/hashtag-icon.png";
import messages from "../../img/message-icon.png";
import more from "../../img/dots-icon.png";
import profile from "../../img/person-icon.png";
import bookmark from "../../img/bookmark-icon.png";
import lists from "../../img/list-icon.png";

export default function Leftmenu() {
    return (
        <div className={styles.leftmenucontainer}>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="logo"
                                src={logo}
                                alt=""
                                width="40px"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="home"
                                src={home}
                                alt=""
                                width="50px"
                            />
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="explore"
                                src={hashtag}
                                alt=""
                                width="20px"
                            />
                            <p>Explore</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="notifications"
                                src={bell}
                                alt=""
                                width="34px"
                            />
                            <p>Notifications</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="messages"
                                src={messages}
                                alt=""
                                width="30px"
                            />
                            <p>Messages</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="bookmarks"
                                src={bookmark}
                                alt=""
                                width="27px"
                            />
                            <p>Bookmarks</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="lists"
                                src={lists}
                                alt=""
                                width="27px"
                            />
                            <p>Lists</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="profile"
                                src={profile}
                                alt=""
                                width="35px"
                            />
                            <p>Profile</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="more"
                                src={more}
                                alt=""
                                width="30px"
                            />
                            <p>More</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
