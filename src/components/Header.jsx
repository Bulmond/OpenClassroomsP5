import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../sass/layout/_header.scss";

const Header = () => {
    return (
        <header className="kasa-header">
            <img src={logo} alt="logo-kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about/">A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;
