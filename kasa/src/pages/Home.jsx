import "../sass/pages/_home.scss";
import home from "../assets/home.png";

function Home() {
    return (
        <main>
            <img src={home} alt="homepage image" />
            <div className="kasa-card-wrapper"></div>
        </main>
    );
}

export default Home;
