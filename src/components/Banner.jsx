import "../sass/components/_banner.scss";

function Banner({ image, text }) {
    return !text ? (
        <div className="kasa-banner-wrapper">
            <img src={image} alt="kasa-banner" />
        </div>
    ) : (
        <div className="kasa-banner-wrapper">
            <h1>{text}</h1>
            <div className="kasa-banner">
                <img src={image} alt="kasa-banner" />
            </div>
        </div>
    );
}

export default Banner;
