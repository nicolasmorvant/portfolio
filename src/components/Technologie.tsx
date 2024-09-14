import React from 'react';
import '../styles/Technologie/Technologie.css';
import Slideshow from './Slideshow';

const Technologie: React.FC = () => {
    return (
        <section className="technologie" id="technologies">
            <h3 className="technologie__title">
                Techno
                <span className="technologie__title--lightblue">logies</span>
            </h3>
            <div className="technologie__desc">
                <Slideshow />
            </div>
        </section>
    );
};

export default Technologie;
