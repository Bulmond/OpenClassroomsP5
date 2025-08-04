import "../../sass/components/_tags.scss";

const Tags = ({ tags }) => {
    return (
        <div className="kasa-tags">
            {tags.map((tag) => (
                <span key={`tag-${tag}`}>{tag}</span>
            ))}
        </div>
    );
};

export default Tags;
