import React from 'react';
import CubeDeco from './CubeDeco.tsx';
import Header from './Header.tsx';
import Diplome from './Formation.tsx';
import Service from './Service.tsx';
import Technologie from './Technologie.tsx';
import Realisation from './Realisation.tsx';
import Contact from './Contact.tsx';
import '../styles/Cube/Cube.css';

const Cube: React.FC = () => {
    return (
        <main className="cube__container">
            <div className="cube rotation--front">
                {/*INTRO*/}
                <div className="cube__side cube__side--front">
                    <Header />
                    <CubeDeco />
                </div>

                {/*FORMATION*/}
                <div className="cube__side cube__side--back opaque">
                    <Diplome />
                    <CubeDeco />
                </div>

                {/*SERVICES*/}
                <div className="cube__side cube__side--left opaque">
                    <Service />
                    <CubeDeco />
                </div>

                {/*TECHNOLOGIES*/}
                <div className="cube__side cube__side--right opaque">
                    <Technologie />
                    <CubeDeco />
                </div>

                {/*RÉALISATIONS*/}
                <div className="cube__side cube__side--top opaque">
                    <Realisation />
                    <CubeDeco />
                </div>

                {/*CONTACT*/}
                <div className="cube__side cube__side--bottom opaque">
                    <Contact />
                    <CubeDeco />
                </div>
            </div>
        </main>
    );
};

export default Cube;
