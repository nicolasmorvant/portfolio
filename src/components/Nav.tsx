import React, {useState, useEffect} from 'react';
import "../styles/Nav/Nav.css";

const Nav: React.FC = () => {

    //STATE POSITION
    const [position, setPosition] = useState(0);

    //STATE PAGE ACTIVE
    const [active, setActive] = useState("intro");

    //EFFET POSITION
    useEffect( () => {

        //LISTE DES POSITIONS
        const positions = ["front","back","left","right","top","bottom"];

        //FONCTION DE ROTATION DU CUBE
        const tournerCube = (pos: number) => {

            //VÉRIFICATION DE LA VALEUR DE POS
            pos >= 0 && pos <= 5 ? pos : 0;

            //RÉCUPÉRATION DE L'ÉLÉMENT DU DOM CUBE ET AJOUT DE LA NOUVELLE POSITION
            const cube = document.querySelector(".cube");

            //RÉCUPÉRATION DES FACES DU CUBE (<div className="cube__side cube__side--back opaque">)
            const sides = document.querySelectorAll(".cube__side");

            if(cube)
            {
                positions.forEach( position => {

                    cube.classList.remove(`rotation--${position}`);

                })
                
                cube.classList.add(`rotation--${positions[position]}`);

                //TOGGLE OPACITÉ
                sides.forEach( (side) => {

                    if(side.classList.contains(`cube__side--${positions[pos]}`))
                    {
                        side.classList.remove("opaque");
                    }
                    else
                    {
                        side.classList.add("opaque");
                    }
                })
            }   
        }


        // A IMPLÉMENTER
        /**
         * POUR TOUS LES .cube__side qui ne sont pas position, il faut l'opacité
         * 
         */


        tournerCube(position);

    }, [position] );

    //FONCTION POUR LE PREVENT DEFAULT
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, pos:number, page: string) => {

        e.preventDefault();

        setPosition(pos);
        
        setActive(page);
    }

    return (

        <nav className="nav">
            <ul className='nav__list'>
                <li className='nav__item'>
                    <a href="" className={`nav__link ${active === "intro" ? "active" : ""}`} onClick={(e) => handleClick(e, 0, "intro")}>Intro</a>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </li>
                <li className='nav__item'>
                    <a href="" className={`nav__link ${active === "formation" ? "active" : ""}`} onClick={(e) => handleClick(e, 1, "formation")}>Formation</a>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </li>
                <li className='nav__item'>
                    <a href="" className={`nav__link ${active === "services" ? "active" : ""}`} onClick={(e) => handleClick(e, 2, "services")}>Services</a>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </li>
                <li className='nav__item'>
                    <a href="" className={`nav__link ${active === "technologies" ? "active" : ""}`} onClick={(e) => handleClick(e, 3, "technologies")}>Technologies</a>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </li>
                <li className='nav__item'>
                    <a href="" className={`nav__link ${active === "realisations" ? "active" : ""}`} onClick={(e) => handleClick(e, 4, "realisations")}>Réalisations</a>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </li>
                <li className='nav__item'>
                    <a href="" className={`nav__link ${active === "contact" ? "active" : ""}`} onClick={(e) => handleClick(e, 5, "contact")}>Contact</a>
                    <div className="squares">
                        {Array(20).fill(null).map((_, index) => (
                            <span key={index} className="squares__item"></span>
                        ))}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
