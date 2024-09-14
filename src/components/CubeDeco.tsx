import '../styles/CubeDeco/CubeDeco.css';

const CubeDeco = () => {
    return (
        <>
            <div className="dashed">
                {Array(8)
                    .fill(null)
                    .map((_, index) => (
                        <span key={index} className="dashed__part"></span>
                    ))}
            </div>
            <div className="cube__squares">
                {Array(20)
                    .fill(null)
                    .map((_, index) => (
                        <span
                            key={index}
                            className="cube__squares__item"
                        ></span>
                    ))}
            </div>
        </>
    );
};

export default CubeDeco;
