import "../../sass/components/_host.scss";

const Host = ({ host }) => {
    return (
        <div className="kasa-rental-host">
            <span>{host.name}</span>
            <img src={host.picture} alt={`Portrait de ${host.name}`} />
        </div>
    );
};

export default Host;
