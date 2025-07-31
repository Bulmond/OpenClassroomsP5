import "../sass/components/_cards.scss";

const Card = ({ rentals }) => {
    return (
        <div className="kasa-card-wrapper">
            {rentals.map(({ id, title, cover }) => (
                <div key={id} className="kasa-card">
                    <h2>{title}</h2>
                    <div className="kasa-card-image">
                        <img src={cover} alt={title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
