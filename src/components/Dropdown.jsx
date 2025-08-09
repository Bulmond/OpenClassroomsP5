import { useState } from "react";
import open from "../assets/arrow-opened-24px.svg";
import close from "../assets/arrow-closed-24px.svg";

const Dropdown = ({ title, content, type }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isList = type ? (
        <div className="kasa-dropdown-item">
            <div className="kasa-dropdown-header">
                <h2>{title}</h2>
                <span onClick={() => setIsOpen(false)}>
                    <img src={close} alt="closed arrow button" />
                </span>
            </div>
            <ul>
                {content.map((element) => (
                    <li key={`equip-${element}`}>{element}</li>
                ))}
            </ul>
        </div>
    ) : (
        <div className="kasa-dropdown-item">
            <div className="kasa-dropdown-header">
                <h2>{title}</h2>
                <span onClick={() => setIsOpen(false)}>
                    <img src={close} alt="closed arrow button" />
                </span>
            </div>
            <p>{content}</p>
        </div>
    );
    return isOpen ? (
        isList
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
