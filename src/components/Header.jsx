import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import "../sass/layout/_header.scss";

const Header = () => {
    const location = useLocation();
    return (
        <header className="kasa-header">
            <img src={logo} alt="logo-kasa" />
            <nav>
                {location.pathname === "/" ? (
                    <Link style={{ textDecoration: "underline" }} to="/">
                        Accueil
                    </Link>
                ) : (
                    <Link to="/">Accueil</Link>
                )}
                {location.pathname === "/a-propos/" ? (
                    <Link
                        style={{ textDecoration: "underline" }}
                        to="/a-propos/"
                    >
                        A Propos
                    </Link>
                ) : (
                    <Link to="/a-propos/">A Propos</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
