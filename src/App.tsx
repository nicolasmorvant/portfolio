import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.tsx';
import Nav from './components/Nav.tsx';
import Cube from './components/Cube.tsx';
import './styles/App/App.css';

const App: React.FC = () => {
    //SIMULATION CHARGEMENT DE DONNÉES
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            const main = document.querySelector('.main-container');

            main?.classList.add('loaded');
        }
    }, [loading]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="main-container">
                    <Nav />
                    <Cube />
                </div>
            )}
        </>
    );
};

export default App;
