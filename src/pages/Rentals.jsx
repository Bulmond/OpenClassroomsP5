import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/rental/Carousel";
import RentalTitle from "../components/rental/RentalTitle";
import "../sass/pages/_rental.scss";
import Host from "../components/rental/Host";
import Tags from "../components/rental/Tags";
import Ratings from "../components/rental/Ratings";
import Dropdown from "../components/Dropdown";
import { useEffect } from "react";

const Rentals = ({ rentalList }) => {
    const { rentalId } = useParams();
    let navigate = useNavigate();
    const currentRental =
        rentalList && rentalList.filter((rental) => rentalId === rental.id);
    useEffect(() => {
        if (
            rentalList &&
            !rentalList.some((rental) => rental.id === rentalId)
        ) {
            navigate("/*");
        }
    }, [rentalList, rentalId, navigate]);
    return (
        currentRental &&
        currentRental.map(
            ({
                description,
                equipments,
                host,
                location,
                pictures,
                rating,
                tags,
                title,
            }) => (
                <main key={rentalId} className="kasa-rental-page">
                    <Carousel pictures={pictures} />
                    <div className="kasa-rental-content">
                        <RentalTitle title={title} location={location} />
                        <Host host={host} />
                        <Tags tags={tags} />
                        <Ratings rating={rating} />
                    </div>
                    <div className="kasa-rental-dropdown">
                        <Dropdown title={"Description"}>
                            <p>{description}</p>
                        </Dropdown>
                        <Dropdown title={"Équipements"}>
                            <ul>
                                {equipments.map((element) => (
                                    <li key={`equip-${element}`}>{element}</li>
                                ))}
                            </ul>
                        </Dropdown>
                    </div>
                </main>
            )
        )
    );
};

export default Rentals;
