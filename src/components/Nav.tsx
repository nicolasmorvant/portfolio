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

    //FONCTION POUR LA NAV MOBILE
    const toggleNav = () => 
    {
        const navList = document.querySelector(".nav__list");
        const navToggleIcons = document.querySelector(".nav__toggle__icons");
    
        navList?.classList.toggle("nav__list--visible");
        navToggleIcons?.classList.toggle("open");
    };

    return (
        <nav className="nav">
            <div className="nav__toggle">
                <div className="nav__toggle__icons">
                    <i className="fa-solid fa-bars nav__toggle__icons--close visible" onClick={toggleNav}></i>
                    <i className="fa-solid fa-xmark nav__toggle__icons--open" onClick={toggleNav}></i>
                </div>
                <ul className="nav__list">
                    {['intro', 'formation', 'services', 'technologies', 'realisations', 'contact'].map((page, index) => (
                        <li className="nav__item" key={index}>
                            <a
                                href={`#${page}`}
                                className={`nav__link ${active === page ? 'active' : ''}`}
                                onClick={e => handleClick(e, index, page)}
                            >
                                {page.charAt(0).toUpperCase() + page.slice(1)}
                            </a>
                            <Squares />
                        </li>
                    ))}

                </ul>
            </div>
            <div className="nav__social">
                <a
                    href="https://www.linkedin.com/in/nicolas-morvant/"
                    className="nav__linkedin"
                    target="_blank"
                >
                    <span>Linkedin</span>
                    <i className="fa-brands fa-linkedin" title="Linkedin"></i>
                </a>
                <a
                    href="https://discordapp.com/users/nicolasmorvant"
                    className="nav__discord"
                    target="_blank"
                >
                    <span>Discord</span>
                    <i className="fa-brands fa-discord" title="Discord"></i>
                </a>
                <a
                    href="https://github.com/nicolasmorvant"
                    className="nav__github"
                    target="_blank"
                >
                    <span>Github</span>
                    <i className="fa-brands fa-github" title="Github"></i>
                </a>
            </div>
        </nav>
    );
};

export default Nav;
