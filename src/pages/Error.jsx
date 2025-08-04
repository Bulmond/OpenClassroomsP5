import { Link } from "react-router-dom";
import "../sass/pages/_error.scss";

const Error = () => {
    return (
        <main className="kasa-error-page">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    );
};

export default Error;
