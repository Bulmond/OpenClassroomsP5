import "../../sass/components/_carousel.scss";

const Carousel = ({ pictures }) => {
    return (
        <div key={Math.random()} className="kasa-carousel">
            <img src={pictures[0]} alt="" />
        </div>
    );
};

export default Carousel;
