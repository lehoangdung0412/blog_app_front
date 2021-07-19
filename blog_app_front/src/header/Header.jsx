import "./header.css";
import background from "../media/images/background.jpg";


export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={background} alt="By S Migaj from Pexels" />
        </div>
    )
}
