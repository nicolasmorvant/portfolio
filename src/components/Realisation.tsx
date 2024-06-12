import React, { useState } from 'react';
import '../styles/Realisation/Realisation.css';
import Tag from './Tag.tsx';
import projets from '../projets.json';

const Realisation: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    // RÉCUPÉRATION LONGUEUR PROJETS
    const indexMax = projets.length;

    const nextProjet = () => {
        // GESTION DE L'INDEX
        setCurrentIndex(prevIndex =>
            prevIndex === indexMax ? 1 : prevIndex + 1
        );
    };

    const prevProjet = () => {
        // GESTION DE L'INDEX
        setCurrentIndex(prevIndex =>
            prevIndex === 1 ? indexMax : prevIndex - 1
        );
    };

    return (
        <section className="realisation" id="realisations">
            <h3 className="realisation__title">
                Réal
                <span className="realisation__title--lightblue">isations</span>
            </h3>
            <div className="realisation__desc">
                {projets.map((projet, index) => (
                    <div
                        className={`projet ${index + 1 === currentIndex ? 'projet--active' : ''}`}
                        key={index + 1}
                    >
                        <div className="projet__navigation">
                            <span
                                className="projet__navigation--left"
                                onClick={prevProjet}
                                aria-label="Réalisation précédente"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </span>
                            <span
                                className="projet__navigation--right"
                                onClick={nextProjet}
                                aria-label="Réalisation suivante"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                        </div>
                        <h4 className="projet__title">{projet.title}</h4>
                        <p className="projet__desc">{projet.desc}</p>
                        <img
                            src={projet.images[0].src}
                            alt={projet.images[0].alt}
                            className="projet__img"
                            loading="lazy"
                        />
                        <a
                            href={projet.link}
                            className="projet__link"
                            target="_blank"
                        >
                            <button className="projet__link__button">
                                <span className="projet__link__button--lg">
                                    <span className="projet__link__button--sl"></span>
                                    <span className="projet__link__button--text">
                                        consulter
                                    </span>
                                </span>
                            </button>
                        </a>
                        <div className="projet__tags">
                            {projet.technos.map((techno, i) => (
                                <Tag tag={techno} key={i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Realisation;
