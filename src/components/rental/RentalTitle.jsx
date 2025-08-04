import "../../sass/components/_title.scss";

const RentalTitle = ({ title, location }) => {
    return (
        <div className="kasa-rental-title">
            <h1>{title}</h1>
            <span>{location}</span>
        </div>
    );
};

export default RentalTitle;
