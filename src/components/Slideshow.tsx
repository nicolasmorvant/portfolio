import { useState } from "react";
import "../styles/Slideshow/Slideshow.css";
import technologies from '../technos.json';


const Slideshow = () => {

    const [Index, setIndex] = useState(1);

    const maxIndex = technologies.length;

    const prevCat = () => {

        Index - 1  < 1 ? setIndex(maxIndex) : setIndex(Index - 1) ;

    }

    const nextCat = () => {
        
        Index === maxIndex  ? setIndex(1) : setIndex(Index + 1) ;

    }

    return (
        <div className='slideshow'>
            {
                technologies.map( (categorie, index) => (

                    <div className={`slideshow__category ${index + 1 === Index ? 'slideshow__category--active' : ''}`} key={index+1}>        
                        <div className="slideshow__navigation">
                            <span
                                className="slideshow__navigation--left"
                                onClick={prevCat}
                                aria-label="Catégorie précédente"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </span>
                            
                            <span
                                className="slideshow__navigation--right"
                                onClick={nextCat}
                                aria-label="Catégorie suivante"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                        </div>
                        <h4 className="slideshow__title">{categorie.title}</h4>
                        <div className="slideshow__technos">
                            {
                                categorie.technos.map( (tech,i) => (

                                    <img
                                        width="50px"
                                        height="50px"
                                        src={
                                            tech.title === 'Wave'
                                                ? 'https://cdn.worldvectorlogo.com/logos/wave-2.svg'
                                                : tech.title === 'Vite.js'
                                                ? 'https://www.svgrepo.com/show/374167/vite.svg'
                                                : tech.title === 'React'
                                                ? 'https://cdn.simpleicons.org/react'
                                                : tech.title === 'Node.js'
                                                ? 'https://cdn.simpleicons.org/node.js'
                                                : tech.title === 'Express.js'
                                                ? 'https://cdn.simpleicons.org/express'
                                                : tech.title === 'PHP'
                                                ? 'https://cdn.simpleicons.org/php'
                                                : tech.title === 'Symfony'
                                                ? 'https://cdn.simpleicons.org/symfony'
                                                : tech.title === 'MongoDB'
                                                ? 'https://cdn.simpleicons.org/mongodb'
                                                : tech.title === 'MySql'
                                                ? 'https://cdn.simpleicons.org/mysql'
                                                : tech.title === 'Github'
                                                ? 'https://cdn.simpleicons.org/github'
                                                : tech.title === 'Postman'
                                                ? 'https://cdn.simpleicons.org/postman'
                                                : tech.title === 'Swagger'
                                                ? 'https://cdn.simpleicons.org/swagger'
                                                : tech.title === 'Docker'
                                                ? 'https://cdn.simpleicons.org/docker'
                                                : tech.title === 'Lighthouse'
                                                ? 'https://cdn.simpleicons.org/lighthouse'
                                                : tech.title === 'Ubuntu'
                                                ? 'https://cdn.simpleicons.org/ubuntu'
                                                : 'https://cdn.simpleicons.org/xfce'
                                        }
                                        key={i + 1}
                                        className="slideshow__technos__img"
                                        title={`${tech.title}`}
                                        alt={`Logo de ${tech.title}`}
                                        loading="lazy"
                                    />
                                
                                ))
                            }
                        </div>
                    </div>            
                ))
            }
        </div>
    )
}

export default Slideshow