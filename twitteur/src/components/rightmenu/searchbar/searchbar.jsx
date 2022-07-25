import styles from "./searchbar.module.css";
import loupe from "../../../img/loupe-icon.png";
import TextField from "@mui/material/TextField";

export default function Searchbar() {
    return (
        <div className="main">
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Chercher sur twitteur"
                />
            </div>
        </div>
    );
}
