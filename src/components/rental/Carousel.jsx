import "../../sass/components/_carousel.scss";
import arrowNext from "../../assets/carousel-next.svg";
import arrowPrev from "../../assets/carousel-prev.svg";
import { useState } from "react";

const Carousel = ({ pictures }) => {
    const [curr, setCurr] = useState(0);
    const prev = () =>
        setCurr((curr) => (curr === 0 ? pictures.length - 1 : curr - 1));
    const next = () => setCurr(curr === pictures.length - 1 ? 0 : curr + 1);
    return (
        <div className="kasa-carousel">
            <div className="kasa-carousel-items" style={{transform: `translateX(-${curr * 100}%)`}}>
                {pictures.map((pic) => (
                    <img
                        key={Math.random()}
                        src={pic}
                        alt=""
                    />
                ))}
            </div>
            <div className="kasa-carousel-nav">
                <button onClick={prev} className="prev">
                    <img src={arrowPrev} alt="" />
                </button>
                <button onClick={next} className="next">
                    <img src={arrowNext} alt="" />
                </button>
            </div>
            <span>
                {curr + 1}/{pictures.length}
            </span>
        </div>
    );
};

export default Carousel;
