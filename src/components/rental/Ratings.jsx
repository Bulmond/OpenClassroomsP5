import activeStar from "../../assets/star-active.svg";
import inactiveStar from "../../assets/star-inactive.svg";
import "../../sass/components/_rating.scss";

const Ratings = ({ rating }) => {
    const range = [1, 2, 3, 4, 5];
    return (
        <div className="kasa-rating">
            {range.map((rangeElement) =>
                rating >= rangeElement ? (
                    <img
                        key={`active-${rangeElement.toString()}`}
                        src={activeStar}
                        alt="active star"
                    />
                ) : (
                    <img
                        key={`inactive-${rangeElement.toString()}`}
                        src={inactiveStar}
                        alt="inactive star"
                    />
                )
            )}
        </div>
    );
};

export default Ratings;
