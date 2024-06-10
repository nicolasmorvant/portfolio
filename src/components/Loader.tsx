import React from 'react';
import '../styles/Loader/Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="loader__container">
            <div className="loader__cube">
                <div className="loader__side loader__side--front"></div>
                <div className="loader__side loader__side--back"></div>
                <div className="loader__side loader__side--left"></div>
                <div className="loader__side loader__side--right"></div>
                <div className="loader__side loader__side--top"></div>
                <div className="loader__side loader__side--bottom"></div>
            </div>
        </div>
    );
};

export default Loader;
