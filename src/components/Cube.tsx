import React from 'react';
import Header from './Header';
import Diplome from './Formation';
import Service from './Service';
import Technologie from './Technologie';
import Realisation from './Realisation';
import Contact from './Contact';
import "../styles/Cube/Cube.css";

const Cube: React.FC = () => {
    return (
        <main className="cube__container">
            <div className="cube rotation--front">

                {/*INTRO*/}
                <div className="cube__side cube__side--front">
                    <Header />
                    <div className="dashed">
                        {Array(8).fill(null).map((_, index) => (
                            <span key={index} className="dashed__part"></span>
                        ))}
                    </div>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                    <div className="broken"></div>
                </div>

                {/*FORMATION*/}
                <div className="cube__side cube__side--back opaque">
                    <Diplome />
                    <div className="dashed">
                        {Array(8).fill(null).map((_, index) => (
                            <span key={index} className="dashed__part"></span>
                        ))}
                    </div>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </div>

                {/*SERVICES*/}
                <div className="cube__side cube__side--left opaque">
                    <Service />
                    <div className="dashed">
                        {Array(8).fill(null).map((_, index) => (
                            <span key={index} className="dashed__part"></span>
                        ))}
                    </div>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </div>

                {/*TECHNOLOGIES*/}
                <div className="cube__side cube__side--right opaque">
                    <Technologie />
                    <div className="dashed">
                        {Array(8).fill(null).map((_, index) => (
                            <span key={index} className="dashed__part"></span>
                        ))}
                    </div>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </div>

                {/*RÉALISATIONS*/}
                <div className="cube__side cube__side--top opaque">
                    <Realisation />
                    <div className="dashed">
                        {Array(8).fill(null).map((_, index) => (
                            <span key={index} className="dashed__part"></span>
                        ))}
                    </div>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </div>

                {/*CONTACT*/}
                <div className="cube__side cube__side--bottom opaque">
                    <Contact />
                    <div className="dashed">
                        {Array(8).fill(null).map((_, index) => (
                            <span key={index} className="dashed__part"></span>
                        ))}
                    </div>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cube