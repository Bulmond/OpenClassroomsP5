import "../sass/pages/_home.scss";
import home from "../assets/home-banner.png";
import Card from "../components/Card";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";

function Home() {
    const [rentals, setRentals] = useState(null);
    useEffect(() => {
        fetch("./src/data/Rentals.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRentals(data);
            });
    }, []);

    return (
        <main>
            <Banner image={home} text={"Chez vous, partout et ailleurs"} />
            {rentals && <Card rentals={rentals} />}
        </main>
    );
}

export default Home;
