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
                                width="40px"
                            />
                        </a>
                        <p>Home</p>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="home"
                                src={hashtag}
                                alt=""
                                width="25px"
                            />
                        </a>
                        <p>Explore</p>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="notifications"
                                src={bell}
                                alt=""
                                width="34px"
                            />
                        </a>
                        <p>Notifications</p>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="messages"
                                src={messages}
                                alt=""
                                width="30px"
                            />
                        </a>
                        <p>Messages</p>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="bookmarks"
                                src={bookmark}
                                alt=""
                                width="27px"
                            />
                        </a>
                        <p>Bookmarks</p>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="lists"
                                src={lists}
                                alt=""
                                width="27px"
                            />
                        </a>
                        <p>Lists</p>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="profile"
                                src={profile}
                                alt=""
                                width="35px"
                            />
                        </a>
                        <p>Profile</p>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <img
                                className="more"
                                src={more}
                                alt=""
                                width="30px"
                            />
                        </a>
                        <p>More</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
