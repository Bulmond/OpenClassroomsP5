import { useState } from "react";
import arrowIcon from "../assets/arrow-opened-24px.svg";

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`${
                isOpen ? "kasa-dropdown-item" : "kasa-dropdown-item-hidden"
            }`}
        >
            <div className="kasa-dropdown-header">
                <h2>{props.title}</h2>
                <span onClick={() => setIsOpen(!isOpen)}>
                    <img
                        src={arrowIcon}
                        alt={
                            isOpen ? "open arrow button" : "closed arrow button"
                        }
                    />
                </span>
            </div>
            <div className="kasa-dropdown-children">{props.children}</div>
        </div>
    );
};

export default Dropdown;
