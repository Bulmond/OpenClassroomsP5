import "../sass/pages/_about.scss";
import Banner from "../components/Banner";
import about from "../assets/about-banner.png";
import { dropdownList } from "../data/dropdownList";
import Dropdown from "../components/Dropdown";

const About = () => {
    return (
        <main className="kasa-about-page">
            <Banner image={about} />
            <div className="kasa-dropdown-wrapper">
                {dropdownList.map(({ id, title, content }) => (
                    <Dropdown key={id} title={title}>
                        <p>{content}</p>
                    </Dropdown>
                ))}
            </div>
        </main>
    );
};

export default About;
