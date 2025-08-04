import { Link } from "react-router-dom";
import "../sass/components/_cards.scss";

const Card = ({ rentalList }) => {
    return (
        <div className="kasa-card-wrapper">
            {rentalList.map(({ id, title, cover }) => (
                <Link key={id} to={`/logement/${id}`}>
                    <div className="kasa-card">
                        <h2>{title}</h2>
                        <div className="kasa-card-image">
                            <img src={cover} alt={title} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Card;
