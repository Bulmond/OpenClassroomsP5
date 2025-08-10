import { useState } from "react";
import open from "../assets/arrow-opened-24px.svg";
import close from "../assets/arrow-closed-24px.svg";

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
                        src={isOpen ? open : close}
                        alt="closed arrow button"
                    />
                </span>
            </div>
            {props.children}
        </div>
    );
};

export default Dropdown;
