import "./App.css";
import Leftmenu from "./components/left-menu/leftmenu";
import Wall from "./components/wall/wall";
import RightMenu from "./components/rightmenu/rightmenu";
function Home() {
    return (
        <div className="Home">
            <Leftmenu />
            <Wall />
            <RightMenu />
        </div>
    );
}

export default Home;
