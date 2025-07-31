import { useState } from "react";
import open from "../assets/arrow-opened-24px.svg";
import close from "../assets/arrow-closed-24px.svg";

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <div className="kasa-dropdown-item">
            <div className="kasa-dropdown-header">
                <h2>{title}</h2>
                <span onClick={() => setIsOpen(false)}>
                    <img src={close} alt="closed arrow button" />
                </span>
            </div>
            <p>{content}</p>
        </div>
    ) : (
        <div className="kasa-dropdown-item">
            <div className="kasa-dropdown-header">
                <h2>{title}</h2>
                <span onClick={() => setIsOpen(true)}>
                    <img src={open} alt="opened arrow button" />
                </span>
            </div>
        </div>
    );
};

export default Dropdown;
