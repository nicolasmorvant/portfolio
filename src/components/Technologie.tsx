import React from 'react';
import '../styles/Technologie/Technologie.css';
import technologies from '../technos.json';

const Technologie: React.FC = () => {
    return (
        <section className="technologie" id="technologies">
            <h3 className="technologie__title">
                Techno
                <span className="technologie__title--lightblue">logies</span>
            </h3>
            <div className="technologie__desc">
                {technologies.map((techno, index) => (
                    <img
                        width="50px"
                        height="50px"
                        src={`https://cdn.simpleicons.org/${techno.slug}/${techno.hexa}`}
                        key={index}
                        className="technologie__desc__img"
                        title={`${techno.title}`}
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
};

export default Technologie;
