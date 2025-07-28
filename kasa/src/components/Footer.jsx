import logo from "../assets/logo-footer.svg";
import "../sass/layout/_footer.scss";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo-kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;
