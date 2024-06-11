import React, { useState, useEffect } from 'react';
import Squares from './Squares.tsx';
import '../styles/Nav/Nav.css';

const Nav: React.FC = () => {
    // STATE POSITION
    const [position, setPosition] = useState(0);

    // STATE PAGE ACTIVE
    const [active, setActive] = useState('intro');

    //STATE MONTAGE COMPOSANT
    const [mounted, setMounted] = useState(false);

    // EFFET POSITION
    useEffect(() => {
        if (mounted) {
            // LISTE DES POSITIONS
            const positions = [
                'front',
                'back',
                'left',
                'right',
                'top',
                'bottom',
            ];

            // FONCTION DE ROTATION DU CUBE
            const tournerCube = (pos: number) => {
                // VÉRIFICATION DE LA VALEUR DE POS
                pos = pos >= 0 && pos <= 5 ? pos : 0;

                // RÉCUPÉRATION DE L'ÉLÉMENT DU DOM CUBE ET AJOUT DE LA NOUVELLE POSITION
                const cube = document.querySelector('.cube');

                // RÉCUPÉRATION DES FACES DU CUBE (<div className="cube__side cube__side--back opaque">)
                const sides = document.querySelectorAll('.cube__side');

                positions.forEach(position => {
                    cube?.classList.remove(`rotation--${position}`);
                });

                cube?.classList.add(`rotation--${positions[pos]}`);

                // TOGGLE OPACITÉ
                sides.forEach(side => {
                    if (
                        side?.classList.contains(
                            `cube__side--${positions[pos]}`
                        )
                    ) {
                        side?.classList.remove('opaque');
                    } else {
                        side?.classList.add('opaque');
                    }
                });
            };

            tournerCube(position);
        } else {
            setMounted(true);
        }
    }, [position, mounted]);

    const tournerCarte = () => {
        // RÉCUPÉRATION DU MAIN CONTAINER
        const mainContainer = document.querySelector('.main-container');

        // RÉCUPÉRATION DU CUBE CONTAINER
        const cubeContainer = document.querySelector('.cube__container');

        mainContainer?.classList.toggle('tourne');
        cubeContainer?.classList.toggle('miroir');
        document.body.classList.remove('backgroundChange');
        document.body.classList.add('backgroundChange');
    };

    // FONCTION POUR LE PREVENT DEFAULT
    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        pos: number,
        page: string
    ) => {
        e.preventDefault();

        setPosition(pos);

        setActive(page);

        if (window.innerWidth < 768) {
            tournerCarte();
        }
    };

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a
                        href="#intro"
                        className={`nav__link ${active === 'intro' ? 'active' : ''}`}
                        onClick={e => handleClick(e, 0, 'intro')}
                    >
                        Intro
                    </a>
                    <Squares />
                </li>
                <li className="nav__item">
                    <a
                        href="#formation"
                        className={`nav__link ${active === 'formation' ? 'active' : ''}`}
                        onClick={e => handleClick(e, 1, 'formation')}
                    >
                        Formation
                    </a>
                    <Squares />
                </li>
                <li className="nav__item">
                    <a
                        href="#services"
                        className={`nav__link ${active === 'services' ? 'active' : ''}`}
                        onClick={e => handleClick(e, 2, 'services')}
                    >
                        Services
                    </a>
                    <Squares />
                </li>
                <li className="nav__item">
                    <a
                        href="#technologies"
                        className={`nav__link ${active === 'technologies' ? 'active' : ''}`}
                        onClick={e => handleClick(e, 3, 'technologies')}
                    >
                        Technologies
                    </a>
                    <Squares />
                </li>
                <li className="nav__item">
                    <a
                        href="#realisations"
                        className={`nav__link ${active === 'realisations' ? 'active' : ''}`}
                        onClick={e => handleClick(e, 4, 'realisations')}
                    >
                        Réalisations
                    </a>
                    <Squares />
                </li>
                <li className="nav__item">
                    <a
                        href="#contact"
                        className={`nav__link ${active === 'contact' ? 'active' : ''}`}
                        onClick={e => handleClick(e, 5, 'contact')}
                    >
                        Contact
                    </a>
                    <Squares />
                </li>
            </ul>
            <div className="nav__social">
                <a
                    href="https://www.linkedin.com/in/nicolas-morvant/"
                    className="nav__linkedin"
                    target="_blank"
                >
                    <i className="fa-brands fa-linkedin" title="Linkedin"></i>
                </a>
                <a
                    href="https://discordapp.com/users/nicolasmorvant"
                    className="nav__discord"
                    target="_blank"
                >
                    <i className="fa-brands fa-discord" title="Discord"></i>
                </a>
                <a
                    href="https://github.com/nicolasmorvant"
                    className="nav__github"
                    target="_blank"
                >
                    <i className="fa-brands fa-github" title="Github"></i>
                </a>
            </div>
        </nav>
    );
};

export default Nav;
