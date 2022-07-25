import styles from "./sidebaroption.module.css";

export default function SidebarOption({ text, Icon }) {
    return (
        <div className={styles.sidebaroptioncontainer}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}
