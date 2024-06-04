import React from 'react';
import '../styles/Card/Card.css';

interface CardProps 
{
    image: string;
    alt: string;
}

const Card: React.FC<CardProps> = ( {image,alt} ) => {
  return (
    <div className='card'>
        <img src={image} alt={alt} className='card__img'/>
    </div>
  )
}

export default Card