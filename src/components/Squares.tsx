import '../styles/Squares/Squares.css';

const Squares = () => {
    return (
        <div className="squares">
            {Array(20)
                .fill(null)
                .map((_, index) => (
                    <span key={index} className="squares__item"></span>
                ))}
        </div>
    );
};

export default Squares;
