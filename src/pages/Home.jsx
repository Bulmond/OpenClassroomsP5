import "../sass/pages/_home.scss";
import home from "../assets/home-banner.png";
import Card from "../components/Card";
import Banner from "../components/Banner";

function Home({ rentalList }) {
    return (
        <main className="kasa-homepage">
            <Banner image={home} text={"Chez vous, partout et ailleurs"} />
            {rentalList && <Card rentalList={rentalList} />}
        </main>
    );
}

export default Home;
