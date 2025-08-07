import { useParams } from "react-router-dom";
import Carousel from "../components/rental/Carousel";
import RentalTitle from "../components/rental/RentalTitle";
import "../sass/pages/_rental.scss";
import Host from "../components/rental/Host";
import Tags from "../components/rental/Tags";
import Ratings from "../components/rental/Ratings";
import Dropdown from "../components/Dropdown";

const Rentals = ({ rentalList }) => {
    const { rentalId } = useParams();
    const currentRental =
        rentalList && rentalList.filter((rental) => rental.id === rentalId);
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
                        <Dropdown title={"Description"} content={description} />
                        <Dropdown
                            title={"Équipements"}
                            content={equipments}
                            type={"obj"}
                        />
                    </div>
                </main>
            )
        )
    );
};

export default Rentals;
