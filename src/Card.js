import React from 'react';
import './Card.css';

function Card({id, name, quote, superlative, photo}) {
  console.log(photo);
  return (
    <section className='card'>
      <img src={photo} alt={`${name}`} />
      <h3>{name}</h3>
      <p className='quote'>"{quote}"</p>
      <p className='superlative'>{superlative}</p>
    </section>
  )
}

export default Card;
