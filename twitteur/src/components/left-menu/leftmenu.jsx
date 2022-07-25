import styles from "./leftmenu.module.css";

import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SidebarOption from "./sidebaroption/Sidebaroption";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { MoreHoriz } from "@mui/icons-material";
export default function Leftmenu() {
    return (
        <div className={styles.leftmenucontainer}>
            <SidebarOption Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={TagIcon} text="Explorer" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Marque page" />
            <SidebarOption Icon={FormatListBulletedIcon} text="Listes" />
            <SidebarOption Icon={PersonOutlineIcon} text="Profil" />
            <SidebarOption Icon={MoreHoriz} text="Afficher plus" />
        </div>
    );
}
